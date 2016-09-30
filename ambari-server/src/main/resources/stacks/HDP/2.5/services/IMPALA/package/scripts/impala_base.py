import os
from resource_management import *


class ImpalaBase(Script):
    impala_packages = ['impala-server','impala-catalog','impala-state-store','impala-shell']
    #Call setup.sh to install the service
    def installImpala(self, env):

        # Install packages listed in metainfo.xml
        self.install_packages(env)

        if self.impala_packages is not None and len(self.impala_packages):
            for pack in self.impala_packages:
                Package(pack)
        
        import params
        #init lib
        Execute('find '+params.service_packagedir+' -iname "*.sh" | xargs chmod +x')
        service_packagedir = params.service_packagedir
        
        cmd = format("{service_packagedir}/scripts/init_lib.sh")
        Execute('echo "Running ' + cmd + '" as root')
        Execute(cmd, ignore_failures=True)
        
        cmd= format("cp -rf {service_packagedir}/scripts/htrace-core-2.00.jar /usr/lib/impala/lib/")
        Execute('echo "Running ' + cmd + '" as root')
        Execute(cmd, ignore_failures=True)
    
    def configureImpala(self, env):

        File("/etc/default/impala",
             content=Template("impala.j2"),
             mode=0644
            )
        self.configureHDFS(env)    
    def configureHDFS(self,env):
        
        cmd='yes | cp -rf /etc/hadoop/conf/*.xml /etc/impala/conf'
        Execute('echo "Running ' + cmd + '" as root')
        Execute(cmd)
        
        cmd='yes | cp /etc/hive/conf/hive-site.xml /etc/impala/conf'
        Execute('echo "Running ' + cmd + '" as root')
        Execute(cmd)
        
        