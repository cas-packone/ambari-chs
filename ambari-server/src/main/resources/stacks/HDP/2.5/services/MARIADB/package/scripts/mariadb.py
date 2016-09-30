import os
import base64
from time import sleep
from resource_management import *

class MariadbMaster(Script):
    mariadb_packages=['MariaDB-Galera-server','MariaDB-client','galera']
    db_pass_file='/etc/db_info.cnf'
    
    def install(self, env):
        #delete mysql-server
        Execute('rpm -e mysql-server', ignore_failures=True)
        
        import params
        self.install_packages(env)
        print 'install mariadb'
        if self.mariadb_packages is not None and len(self.mariadb_packages):
            for pack in self.mariadb_packages:
                Package(pack)
                
        #configure cluster
        Execute('service mysql start')
        sleep(10)
        db_password = params.db_password
        cmd = format("/usr/bin/mysqladmin -u root password '{db_password}'")
        Execute(cmd,ignore_failures=True)
        
        #init db
        self.initdb(env)
        
        Execute('service mysql stop')
        sleep(5)
               

    def configure(self, env):       
        print 'configure mariadb'       
        import params
        db_dir = params.db_dir
        if os.path.exists(db_dir):
            print "Dir exists"
        else:
            Execute(format('mkdir -p {db_dir}'),logoutput=True)
            Execute(format('chown -R mysql:mysql {db_dir}'),logoutput=True)
            Execute(format('mysql_install_db --user=mysql --ldata={db_dir}'),logoutput=True)
            
        env.set_params(params)
        server_cnf_content = InlineTemplate(params.server_cnf_content)   
        File(format("/etc/my.cnf.d/server.cnf"), content=server_cnf_content, owner='mysql')
        
        db_password = params.db_password
        
        file_object = open(self.db_pass_file)
        try:
            file_content = file_object.read( )
            pre_pass= base64.decodestring(file_content)
            print pre_pass
            if db_password !=pre_pass:
                if params.mariadb_current_host == params.mariadb_hosts[0]:
                   Execute('/etc/init.d/mysql start --wsrep-new-cluster')
                   cmd = format("/usr/bin/mysqladmin -u root -p{pre_pass} password '{db_password}'")
                   Execute(cmd)
                else:
                    sleep(10)
                    Execute('service mysql start')
                self.initdb(env)
                if params.mariadb_current_host == params.mariadb_hosts[0]:
                   self.stop(env)
                
        finally:
            file_object.close( )
                
        

    def start(self, env):
        self.configure(env)
        import params
        if params.mariadb_current_host == params.mariadb_hosts[0]:
            Execute('/etc/init.d/mysql start --wsrep-new-cluster')
        else:
            sleep(10)
            Execute('service mysql start')


    def stop(self, env):
        Execute('service mysql stop')

    def restart(self, env):
        print("restart")
        self.stop(env)
        self.start(env)

    def status(self, env):
        Execute('service mysql status')
    
    def initdb(self,env):
        import params;
        env.set_params(params)  
        service_packagedir = params.service_packagedir
        init_lib_path = service_packagedir + '/scripts/init_lib.sh'
        File(init_lib_path,
             content=Template("init_lib.sh.j2"),
             mode=0777
            )
        cmd = format("{service_packagedir}/scripts/init_lib.sh")
        Execute('echo "Running ' + cmd + '" as root')
        Execute(cmd)
        db_pass_file = self.db_pass_file
        cmd = format("rm -rf {db_pass_file}")
        Execute('echo "Running ' + cmd + '" as root')
        Execute(cmd)
        
        db_password=base64.encodestring(params.db_password)
        File(self.db_pass_file,
             content=db_password,
             mode=0644
            ) 

if __name__ == "__main__":
    MariadbMaster().execute()
