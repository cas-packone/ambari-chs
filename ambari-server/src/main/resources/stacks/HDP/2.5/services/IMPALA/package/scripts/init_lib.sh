version=`hdp-select status hadoop-client | sed 's/hadoop-client - \(.*\)/\1/' | tr -d '\r'`
impala_path='/usr/hdp/'${version}
ln -sf  `echo -e $impala_path'/hadoop/hadoop-common.jar /usr/lib/hadoop/hadoop-common.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop/hadoop-annotations.jar /usr/lib/impala/lib/hadoop-annotations.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop/hadoop-auth.jar /usr/lib/impala/lib/hadoop-auth.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop/hadoop-aws.jar /usr/lib/impala/lib/hadoop-aws.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-hdfs/hadoop-hdfs.jar /usr/lib/impala/lib/hadoop-hdfs.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-mapreduce/hadoop-mapreduce-client-common.jar /usr/lib/impala/lib/hadoop-mapreduce-client-common.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-mapreduce/hadoop-mapreduce-client-core.jar /usr/lib/impala/lib/hadoop-mapreduce-client-core.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-mapreduce/hadoop-mapreduce-client-jobclient.jar /usr/lib/impala/lib/hadoop-mapreduce-client-jobclient.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-mapreduce/hadoop-mapreduce-client-shuffle.jar /usr/lib/impala/lib/hadoop-mapreduce-client-shuffle.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-yarn/hadoop-yarn-api.jar /usr/lib/impala/lib/hadoop-yarn-api.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-yarn/hadoop-yarn-client.jar /usr/lib/impala/lib/hadoop-yarn-client.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-yarn/hadoop-yarn-common.jar /usr/lib/impala/lib/hadoop-yarn-common.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-yarn/hadoop-yarn-server-applicationhistoryservice.jar /usr/lib/impala/lib/hadoop-yarn-server-applicationhistoryservice.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-yarn/hadoop-yarn-server-common.jar /usr/lib/impala/lib/hadoop-yarn-server-common.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-yarn/hadoop-yarn-server-nodemanager.jar /usr/lib/impala/lib/hadoop-yarn-server-nodemanager.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-yarn/hadoop-yarn-server-resourcemanager.jar /usr/lib/impala/lib/hadoop-yarn-server-resourcemanager.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop-yarn/hadoop-yarn-server-web-proxy.jar /usr/lib/impala/lib/hadoop-yarn-server-web-proxy.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop/lib/native/libhadoop.so /usr/lib/impala/lib/libhadoop.so' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hadoop/lib/native/libhadoop.so.1.0.0 /usr/lib/impala/lib/libhadoop.so.1.0.0' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/usr/lib/libhdfs.so /usr/lib/impala/lib/libhdfs.so' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/usr/lib/libhdfs.so.0.0.0 /usr/lib/impala/lib/libhdfs.so.0.0.0' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-ant.jar /usr/lib/impala/lib/hive-ant.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-beeline.jar /usr/lib/impala/lib/hive-beeline.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-common.jar /usr/lib/impala/lib/hive-common.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-exec.jar /usr/lib/impala/lib/hive-exec.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-hbase-handler.jar /usr/lib/impala/lib/hive-hbase-handler.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-metastore.jar /usr/lib/impala/lib/hive-metastore.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-serde.jar /usr/lib/impala/lib/hive-serde.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-service.jar /usr/lib/impala/lib/hive-service.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-shims-common.jar /usr/lib/impala/lib/hive-shims-common.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-shims-scheduler.jar /usr/lib/impala/lib/hive-shims-scheduler.jar' | tr -d '\r' | tr -d '?'`
ln -sf  `echo -e $impala_path'/hive/lib/hive-shims.jar /usr/lib/impala/lib/hive-shims.jar' | tr -d '\r' | tr -d '?'` 
ln -sf  `echo -e $impala_path'/zookeeper/zookeeper.jar /usr/lib/impala/lib/zookeeper.jar' | tr -d '\r' | tr -d '?'`

#add java-home
JAVA_HOME='/usr/jdk64/'`ls /usr/jdk64 | xargs echo`
EXPORT_JAVA_HOME='export JAVA_HOME='$JAVA_HOME
echo -e $EXPORT_JAVA_HOME |  tr -d '\r' >> /etc/default/bigtop-utils
