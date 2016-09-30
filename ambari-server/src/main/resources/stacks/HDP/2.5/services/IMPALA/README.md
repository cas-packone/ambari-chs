#An Ambari Service for Impala

##Support Version
- Impala 2.6 +
- Hadoop 2.6 +

##To download the Impala service folder, run below    


```
VERSION=`hdp-select status hadoop-client | sed 's/hadoop-client - \([0-9]\.[0-9]\).*/\1/'`
sudo git clone https://github.com/cas-bigdatalab/ambari-impala-service.git /var/lib/ambari-server/resources/stacks/HDP/$VERSION/services/IMPALA        
```

##impala repo
```
[cloudera-cdh5]
# Packages for Cloudera's Distribution for Hadoop, Version 5, on RedHat	or CentOS 6 x86_64
name=Cloudera's Distribution for Hadoop, Version 5
baseurl=https://archive.cloudera.com/cdh5/redhat/6/x86_64/cdh/5/
gpgkey =https://archive.cloudera.com/cdh5/redhat/6/x86_64/cdh/RPM-GPG-KEY-cloudera    
gpgcheck = 1
```

##Restart Ambari
\#sandbox  
service ambari restart

\#non sandbox  
sudo service ambari-server restart


##HDFS config
we need add below config to /etc/hadoop/conf/core-site.xml
```
<property>
    <name>dfs.client.read.shortcircuit</name> 
   <value>true</value>
</property>

<property>
    <name>dfs.client.read.shortcircuit.skip.checksum</name>
        <value>false</value>
</property>

<property> 
    <name>dfs.datanode.hdfs-blocks-metadata.enabled</name> 
    <value>true</value>
</property>
```
we need add below config to /etc/hadoop/conf/hdfs-site.xml
```
<property>
    <name>dfs.datanode.hdfs-blocks-metadata.enabled</name> 
    <value>true</value>
</property>
<property> 
    <name>dfs.block.local-path-access.user</name> 
    <value>impala</value>
</property>
<property>
    <name>dfs.client.file-block-storage-locations.timeout.millis</name>
    <value>60000</value>
</property>
```
add config info through webui

![Image](../master/screenshots/core-site.png?raw=true)
![Image](../master/screenshots/hdfs-site.png?raw=true)

restart hadoop and restart impala

#SUMMARY
![Image](../master/screenshots/summary.png?raw=true)

#NOTICE
- make sure your hive server normally
- hdfs and hive conf file is sync to /etc/impala/conf


