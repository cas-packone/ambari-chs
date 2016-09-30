mysql -uroot -pdbpass << EOF
DELETE FROM mysql.user WHERE user='';
GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY 'dbpass';
GRANT USAGE ON *.* to sst_user@'%' IDENTIFIED BY 'dbpass';
GRANT ALL PRIVILEGES on *.* to sst_user@'%';
FLUSH PRIVILEGES;
quit
EOF
