from resource_management import *
from resource_management.libraries.script.script import Script
import sys, os, glob,socket
from resource_management.libraries.functions.default import default

# server configurations
config = Script.get_config()

db_dir=default('configurations/mariadb/db_path', '/var/lib/mysql')
db_password=default('configurations/mariadb/db_password', 'dbpass')
#e.g. /var/lib/ambari-agent/cache/stacks/HDP/2.3/services/SOLR/package
service_packagedir = os.path.realpath(__file__).split('/scripts')[0]
mariadb_hosts = config['clusterHostInfo']['mariadb_node_hosts']
mariadb_hosts_str = ','.join(mariadb_hosts)
mariadb_current_host= socket.getfqdn(socket.gethostname())
server_cnf_content=config['configurations']['mariadb']['content']