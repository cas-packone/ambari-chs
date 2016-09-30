import os
import base64
from time import sleep
from resource_management import *

class HueMaster(Script):

    
    def install(self, env):       
        import params
        self.install_packages(env)
               

    def configure(self, env):                         
        print("config")
        import params
        env.set_params(params)
        server_cnf_content = InlineTemplate(params.server_cnf_content)   
        File(format("/etc/hue/conf/hue.ini"), content=server_cnf_content)

    def start(self, env):
        self.configure(env)
        Execute('service hue start')

    def stop(self, env):
        Execute('service hue stop')

    def restart(self, env):
        print("restart")
        self.stop(env)
        self.start(env)

    def status(self, env):
        Execute('service hue status')


if __name__ == "__main__":
    HueMaster().execute()
