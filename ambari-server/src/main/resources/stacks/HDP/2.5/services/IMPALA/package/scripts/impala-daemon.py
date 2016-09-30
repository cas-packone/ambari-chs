import sys, os, pwd, signal, time
from resource_management import *
from resource_management.core.base import Fail
from resource_management.core.exceptions import ComponentIsNotRunning
from subprocess import call
from impala_base import ImpalaBase

class ImpalaDaemon(ImpalaBase):
    #Call setup.sh to install the service
    def install(self, env):

        # Install packages listed in metainfo.xml
        self.install_packages(env)
        self.installImpala(env)
        self.configure(env)
        import params
        self.configureHDFS(params)
        
    def configure(self, env):
        import params

        env.set_params(params)
        self.configureImpala(params)
        

    #Call start.sh to start the service
    def start(self, env):
        cmd = 'service impala-server start'
        Execute('echo "Running cmd: ' + cmd + '"')
        Execute(cmd)

    #Called to stop the service using the pidfile
    def stop(self, env):
        cmd = 'service impala-server stop'
        Execute('echo "Running cmd: ' + cmd + '"')
        Execute(cmd)

    def restart(self,env):
        cmd = 'service impala-server stop'
        Execute('echo "Running cmd: ' + cmd + '"')
        Execute(cmd, ignore_failures=True)
        self.start(env)
        
    #Called to get status of the service using the pidfile
    def status(self, env):
        cmd = 'service impala-server status'
        Execute('echo "Running cmd: ' + cmd + '"')
        Execute(cmd)

if __name__ == "__main__":
    ImpalaDaemon().execute()