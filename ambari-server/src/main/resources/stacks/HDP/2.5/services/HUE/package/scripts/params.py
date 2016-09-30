from resource_management import *
from resource_management.libraries.script.script import Script
import sys, os, glob,socket

# server configurations
config = Script.get_config()
service_packagedir = os.path.realpath(__file__).split('/scripts')[0]
server_cnf_content=config['configurations']['hue']['content']
hdfs_namenode_server=config['clusterHostInfo']['namenode_host'][0]
yarn_resourcemanager_server=config['clusterHostInfo']['rm_host'][0]
yarn_app_timeline_server=config['clusterHostInfo']['rm_host'][0]
yarn_node_manager_api_server=config['clusterHostInfo']['rm_host'][0]
hive_server=config['clusterHostInfo']['hive_server_host'][0]
impala_hcatalog_server=''