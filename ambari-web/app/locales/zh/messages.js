/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Em.I18n.translations = {

  'app.name':'Packone',
  'app.name.subtitle':'Packone - {0}',
  'app.name.subtitle.experimental':'Packone Experimental',
  'app.reloadPopup.link': '重新加载页面',
  'app.reloadPopup.text': '尝试连接服务器...',
  'app.reloadPopup.noClusterName.text': '获取集群名称失败,重试...',//'Failed to retrieve cluster name, trying to reload...'
  'app.reloadPopup.header': '页面重新加载',//'Reload Page'
  'app.redirectIssuePopup.header': '登录跳转问题',//'Login Redirect Issue',
  'app.redirectIssuePopup.body': '对于单点登录,保证Knox Gateway 和Ambari服务器在同一主机或者子域上'+//'For single sign-on, make sure that Knox Gateway and Ambari Server are located on the same host or subdomain.' +
    '<br/>也可以使用Ambari本地用户登录'+//'<br/>Alternatively login as an Ambari local user using the local login page.<br />' +
    '<a href="{0}" target="_blank">{0}</a>',

  'app.loadingPlaceholder': '加载中...',//'Loading...',
  'app.versionMismatchAlert.title': '服务器端和Web客户端版本不匹配',
  'app.versionMismatchAlert.body': '服务器端和Web客户端版本不匹配:<br> ' +
  '<br>Ambari 服务器: <strong>{0}</strong>' +
  '<br>Ambari Web 客户端: <strong>{1}</strong><br>' +
  '<br>这通常是升级Ambari之后,由于Ambari Web 客户端代码进行浏览器缓存刷新而出现的.' +//This typically happens after upgrading Ambari due to Ambari Web Client code cached in the browser
  '<br>如果要让这条通知消失,通常是\'按Ctrl + Shift+ R\'（在OS X\'为Cmd + Shift+ R\'）.' +//Perform a hard browser cache refresh, typically \'Ctrl+Shift+R\' (\'Cmd+Shift+R\' on OS X), to see if this message disappears
  '<br>彻底清除浏览器缓存后,并再次点击这个URL连接,如果你还能看到这条通知.' +//If you keep seeing this message, clear the browser cache completely and hit this URL again
  '<br>您必须解决此错误才能继续.',//You must resolve this error in order to continue
  'app.signout':'注销',
  'app.settings':'设置',
  'app.manageAmbari': '管理',
  'app.aboutAmbari':'关于',
  'app.settings.selectTimezone': '时区',
  'app.settings.notshowBgOperationsPopup': '在开始操作时不显示背景操作对话框',//Do not show the Background Operations dialog when starting an operation
  'app.settings.notShowBgOperations': '再次启动一个后台操作时不显示此对话框',//Do not show this dialog again when starting a background operation
  'app.settings.categories.general': '常规',
  'app.settings.categories.locale': '区域设置',

  'app.settings.noData': '不能获得设置数据',//'Unable to retrieve settings data',
  'app.settings.no.view.privileges': '无访问权限',//'No view privileges',
  'app.settings.no.cluster.privileges': '无集群权限',//'No cluster privileges',
  'app.settings.admin.all.privileges': '该用户是Ambari管理员,拥有所有权限',//'This user is an Ambari Admin and has all privileges.',
  'app.settings.no.privileges': '该用户没有任何权限',//'This user does not have any privileges.',
  'app.settings.clusterRole': '集群角色',//'Cluster Role',
  'app.settings.viewPermissions': '访问许可',//'View Permissions',

  'app.aboutAmbari.getInvolved': '加入我们!',//Get involved
  'app.aboutAmbari.version': '版本',
  'app.aboutAmbari.licensed': '按照 Apache License，Version 2.0 颁发许可证',//Licensed under the Apache License, Version

  'apply':'应用',
  'and':'和',
  'none':'没有',//none
  'all':'所有',
  'minimum':'最小的',
  'from':'来自',
  'to':'到',
  'ok':'确定',
  'as':'如同',//as
  'on':'上面',
  'in':'里面',
  'any': '任何',
  'more':'更多',
  'yes':'是',
  'no':'否',
  'add': '添加',
  'op': '操作',
  'ops': '操作数',
  'or': '或者',
  'then': '那时',
  'it': '它',


  'common.access':'存储',//Access
  'common.learnMore':'了解更多',//Learn more
  'common.showDetails':'显示详情',
  'common.back':'回退',
  'common.prev':'上一页',
  'common.next':'下一步',
  'common.host':'主机',
  'common.hosts':'主机数',
  'common.services':'服务',
  'common.group':'组',
  'common.groups':'组数',
  'common.progress':'进度',
  'common.status':'状态',
  'common.action':'服务操作',
  'common.remove':'删除',
  'common.retry':'重试',
  'common.skip':'跳过',
  'common.filter': '过滤',
  'common.rollBack':'回滚',
  'common.show':'显示',
  'common.hide':'隐藏',
  'common.cancel':'取消',
  'common.apply':'应用',
  'common.done':'完成',
  'common.failed':'失败',
  'common.service': '服务',
  'common.version':'版本',
  'common.downgrade':'降级',
  'common.description':'描述',
  'common.default':'默认',
  'common.client':'客户端',
  'common.zookeeper':'ZooKeeper',
  'common.hbase':'HBase',
  'common.regionServer':'RegionServer',
  'common.taskTracker':'任务跟踪器',
  'common.dataNode':'数据节点',
  'common.more': '更多...',
  'common.print':'打印',
  'common.deploy':'部署',//Deploy
  'common.message':'消息',
  'common.tasks':'任务',
  'common.open':'打开',
  'common.copy':'拷贝/复制',
  'common.complete':'完成',//complete
  'common.metrics':'图表',
  'common.timeRange':'时间范围',
  'common.name':'主机名称',
  'common.key':'键',
  'common.value':'值',
  'common.ipAddress':'IP地址',
  'common.rack':'机架',
  'common.cpu':'处理器',
  'common.cores': '核数',
  'common.cores.cpu': 'CPU核心数',
  'common.ram':'内存',
  'common.disabled':'禁用',
  'common.enabled':'启用',
  'common.enableAll':'启用所有',
  'common.disableAll':'禁用所有',
  'common.disk':'硬盘',
  'common.diskUsage':'硬盘使用率',
  'common.loadAvg':'平均负载',
  'common.components':'组件',
  'common.component':'组件',//Component
  'common.quickLinks':'快捷方式',
  'common.save':'保存',
  'common.saveAnyway':'另存为',
  'common.servers':'服务器',
  'common.clients':'客户端',
  'common.user': '用户',
  'common.users': '用户数',
  'common.issues': 'Issues',
  'common.os':'操作系统',
  'common.oss':'操作系统数',
  'common.memory':'内存',
  'common.maximum':'最大值',
  'common.started':'正在运行',
  'common.start':'启动',//start
  'common.stop':'停止',
  'common.pause':'暂停',
  'common.end':'结束',
  'common.decommission':'停止使用',
  'common.recommission':'重新校验',
  'common.failure': '失败',
  'common.type': '类型',
  'common.close': '关闭',
  'common.warning': '警告',
  'common.critical': '临界',
  'common.information': '信息',
  'common.all':'所有',
  'common.success': '成功',
  'common.fail':'失败',
  'common.error': '错误',
  'common.loading': '加载',
  'common.search': '搜索',
  'common.confirm': '确认',
  'common.upgrade': '升级',
  'common.reUpgrade': '重新升级',
  'common.reDowngrade': '重新降级',
  'common.security':'安全',
  'common.kerberos':'Kerberos',
  'common.cluster':'集群',
  'common.repositories':'仓库',
  'common.stack.versions':'堆栈版本',
  'common.versions':'版本',
  'common.serviceAccounts': '服务器账户',
  'common.add': '添加',
  'common.edit': '编辑',
  'common.delete': '删除',
  'common.duplicate': '副本/重复',
  'common.empty': '清空',
  'common.override':'重载',
  'common.undo':'取消',
  'common.details':'详情',
  'common.stats':'状态',
  'common.abort': '终止',
  'common.misc': '混合',
  'common.userSettings': '用户设置',
  'common.aboutAmbari': '关于我们',
  'common.notAvailable': '无效的',
  'common.na': '不可用',//n/a
  'common.operations': '操作',
  'common.startTime': '启动时间',
  'common.duration': '持续时间',
  'common.reinstall': '重新安装',
  'common.revert': '恢复',
  'common.errorPopup.header': '遇到一个错误',
  'common.use': '使用',
  'common.stacks': '堆栈数',
  'common.stack': '堆栈',
  'common.reset': '重置',
  'common.reset.default': '重置到默认',
  'common.resume': '摘要',
  'common.path': '路径',
  'common.patch': '补丁',
  'common.package': '软件包',
  'common.proceed': '执行',
  'common.proceedAnyway': '总是执行',
  'common.exitAnyway': '强制退出',//Exit Anyway
  'common.process': '进程',
  'common.property': '属性',
  'common.installed': '已安装',
  'common.persist.error' : 'ambari服务器持续Web客户端状态错误:',//Error in persisting web client state at ambari server
  'common.update.error' : '从Ambari服务器上检索web客户端状态错误',//Error in retrieving web client state from ambari server
  'common.tags': '标签',
  'common.important': '重要',
  'common.important.strong': '<strong>重要:</strong>',
  'common.allServices':'所有的服务',
  'common.move':'移动',
  'common.change': '改变',
  'common.overrides': '重载',
  'common.properties': '属性',
  'common.conf.group': '群组配置',
  'common.ignore': '忽略',
  'common.restart': '重启',
  'common.discard': '放弃',
  'common.actions': '服务操作',
  'common.maintenance': '维护',
  'common.passive_state': '维护模式',
  'common.selected': '选中',
  'common.password': '密码',
  'common.url': '访问地址',//URL
  'common.advanced': '高级设置',
  'common.download': '下载',
  'common.current': '当前的',
  'common.additional': '而外的',
  'common.time.start': '启动时间',
  'common.time.end': '结束时间',
  'common.hostLog.popup.logDir.path':'/var/lib/ambari-agent/data/',   // TODO, this hardcoded path needs to be removed.
  'common.hostLog.popup.outputLog.value': 'output-{0}.txt',
  'common.hostLog.popup.errorLog.value': 'errors-{0}.txt',
  'common.maintenance.task': ' 切换维护模式',
  'common.installRepo.task': ' 安装程序包',
  'common.used': '使用',
  'common.free': '释放',
  'common.type.string': '字符串',
  'common.type.number': '数字',
  'common.author': '作者',
  'common.notes': '注释',
  'common.view': '视图',
  'common.compare': '比较',
  'common.latest': '最新的',
  'common.custom': '自定义',
  'common.continueAnyway': '仍然继续',//Continue Anyway
  'common.property.undefined': "未定义",
  'common.summary': "概要",
  'common.configs': "配置文件",
  'common.configuration': "配置",
  'common.unknown': "未知的",
  'common.install': "安装",
  'common.alertDefinition': "警告定义",
  'common.prerequisites': '先决条件',
  'common.finalize': "完成",
  'common.severity': "严重",
  'common.dismiss': "退出",//Dismiss
  'common.stdout': "标准输出",
  'common.stderr': "标准错误",
  'common.structuredOut': "输出规格",//structured_out
  'common.fileName': '文件名',
  'common.days': "天数",
  'common.hours': "小时数",
  'common.minutes': "分钟数",
  'common.seconds': "秒数",
  'common.milliseconds': "毫秒",
  'common.configGroup': '群组配置',
  'common.expression': '表达式',//Expression
  'common.dataSet': '数据集',
  'common.label': '标记/标签',
  'common.preview': '预览',
  'common.options': '设置',
  'common.scope': '范围',//Scope
  'common.clone': '克隆',
  'common.removed': '移除',
  'common.testing': '检测',
  'common.noData': '无数据',
  'common.export': '导出',
  'common.csv': 'CSV',
  'common.json': 'JSON',
  'common.timestamp': '时间戳',
  'common.timezone': '时区',
  'common.loading.eclipses': '加载...',
  'common.optional': '可选项',
  'common.running': ' 启动',//Start
  'common.stopped': '停止',
  'common.timeout.warning.popup.header': '自动退出',
  'common.timeout.warning.popup.body.before': '你将会自动退出 ',
  'common.timeout.warning.popup.body.after': '闲置时间',//seconds due to inactivity
  'common.timeout.warning.popup.primary': '保持登录',
  'common.timeout.warning.popup.secondary': '立即退出',
  'common.openNewWindow': '在新的窗口中打开',
  'common.fullLogPopup.clickToCopy': '点击复制',
  'common.nothingToDelete': '没有可删除的内容',//'Nothing to delete',
  'common.exclude': '排除',
  'common.include': '包含',
  'common.exclude.short': 'Excl',
  'common.include.short': 'Incl',
  'common.filters': '过滤',
  'common.keywords': '关键字',
  'common.levels': '级别',
  'common.extension': '扩展',
  'common.logs': '日志',
  'common.warn.message': '<div class="alert alert-warn">{0}</div>',
  'common.link': '链接',

  'models.alert_instance.tiggered.verbose': " 发生在{0} <br> 选中 {1}",
  'models.alert_definition.triggered.verbose': "发生在 {0}",
  'models.alert_definition.triggered.checked': "改变状态: {0}\n 最后选择: {1}",
  'models.alert_definition.check.retry': "Alert Check {0} out of {1}",

  'passiveState.turnOn':'打开维护模式',
  'passiveState.turnOff':'关闭维护模式',
  'passiveState.turnOnFor':'打开维护模式 {0}',
  'passiveState.turnOffFor':'打开维护模式 {0}',
  'passiveState.disabled.impliedFromHighLevel':'{0} 已经是维护模式 因为 {1} 是维护模式.',//'{0} is already in Maintenance Mode because {1} is in Maintenance Mode.',
  'passiveState.disabled.impliedFromServiceAndHost':'{0} 已经是维护模式 因为 {1} 是维护模式.',//'{0} is already in Maintenance Mode because {1} and {2} are in Maintenance Mode.',

  'requestInfo.installComponents':'安装组件',
  'requestInfo.installKerbeorosComponents':'安装Kerberos组件',
  'requestInfo.installServices':'安装服务',
  'requestInfo.kerberosService': '安装 Kerberos 服务',
  'requestInfo.startServices':'启动服务',
  'requestInfo.startAddedServices':'开始添加服务',
  'requestInfo.stopAllServices':'停止所有服务',
  'requestInfo.startAllServices':'启动所有服务',
  'requestInfo.startHostComponent':'Start',//Start  如果翻译为中文,在程序中对应的地方会出现乱码
  'requestInfo.startHostComponent.datanode':'启动 DataNode',
  'requestInfo.startHostComponent.nodemanager':'启动 NodeManager',
  'requestInfo.startHostComponent.hbase_regionserver':'启动 RegionServer',
  'requestInfo.startHostComponents':'启动组件',
  'requestInfo.upgradeHostComponent':'升级',
  'requestInfo.stopHostComponent':'Stop',//Stop  如果翻译为中文,在程序中对应的地方会出现乱码
  'requestInfo.installHostComponent':'安装',
  'requestInfo.installNewHostComponent':'安装',
  'requestInfo.refreshComponentConfigs':'刷新{0}配置',
  'requestInfo.stop':'停止{0}',
  'requestInfo.start':'启动{0}',//Start {0}
  'requestInfo.unspecified':'请求的名称没有指定',
  'requestInfo.kerberizeCluster': 'Kerberize 集群',

  'hostPopup.noServicesToShow':'没有服务器展示',
  'hostPopup.noHostsToShow':'没有主机展示',
  'hostPopup.noTasksToShow':'没有任务展示',
  'hostPopup.status.category.all':'所有({0})',
  'hostPopup.status.category.pending':'等待({0})',
  'hostPopup.status.category.inProgress':'正在进行({0})',
  'hostPopup.status.category.failed':'失败({0})',
  'hostPopup.status.category.success':'成功({0})',
  'hostPopup.status.category.aborted':'终止({0})',
  'hostPopup.status.category.timedout':'超时({0})',
  'hostPopup.header.postFix':'在后台运行操作数:{0}',//Background Operation{0} Running
  'hostPopup.serviceInfo.showMore':'显示更多...',
  'hostPopup.bgop.abortRequest.title': '放弃操作',
  'hostPopup.bgop.abortRequest.confirmation.body': '您确定要中止 \'{0}\' 操作?',
  'hostPopup.bgop.abortRequest.reason': '用户终止',
  'hostPopup.bgop.abortRequest.modal.header': '终止请求发送',
  'hostPopup.bgop.abortRequest.modal.body': '对于中止请求的<strong>{0}</strong>已发送到服务器。注：已在运行可能有一些时间任务来完成或适用中止请求之前失败.',//The abort request for <strong>{0}</strong> has been sent to the server. Note: some tasks that are already running may have time to complete or fail before the abort request is applied
  'hostPopup.bgop.sourceRequestSchedule.running': '此批申请,在未来可能会被终止',//Future operations of this batch request can be aborted
  'hostPopup.bgop.sourceRequestSchedule.aborted': '此批申请,在未来已经被终止',//Future operations of this batch request have been aborted
  'hostPopup.bgop.abort.rollingRestart': '中止滚动重启',//Abort Rolling Restart
  'hostPopup.warning.alertsTimeOut': '维护模式已开启{0}。这可能需要几分钟,警告是{1}.',//Maintenance Mode has been turned {0}. It may take a few minutes for the alerts to be {1}
  'hostPopup.reccomendation.beforeDecommission': '{0}维护模式是必需提前停用.',//{0} Maintenance Mode is pre required for decommissioning
  'hostPopup.setRackId.success': '更新机架,ID为\“{0}\”。这可能需要一些时间,它得到更新的版本.',//Updating rack id to \"{0}\". It may take a few moments for it to get refreshed
  'hostPopup.setRackId.error': '更新架id失败.',
  'hostPopup.setRackId.invalid': '应该以斜杠开始它可能包含字母数字字符,点,划斜杠。',//Should start with a forward slash it may include alphanumeric chars, dots, dashes and forward slashes.
  'hostPopup.RackId': '机架',
  'hostPopup.recommendation.beforeDecommission': '{0}维护模式是必需提前停用.',//{0} Maintenance Mode is pre required for decommissioning

  'question.sure':'您确定?',

  'popup.highlight':'点击高亮显示',
  'popup.confirmation.commonHeader':'操作确认',
  'popup.prompt.commonHeader':'提示',
  'popup.confirmationFeedBack.sending':'发送...',
  'popup.confirmationFeedBack.query.fail':'请求失败',

  'popup.clusterCheck.failedOn': '失败: ',//Failed on:
  'popup.clusterCheck.reason': '原因: ',
  'popup.clusterCheck.Upgrade.header': 'Upgrade to {0}',
  'popup.clusterCheck.Upgrade.fail.title': '需求',
  'popup.clusterCheck.Upgrade.fail.alert': '您 <strong>必须</strong> 满足这些需求才能继续往下执行.',
  'popup.clusterCheck.Upgrade.bypassed-failures.title': '错误可以被忽视',
  'popup.clusterCheck.Upgrade.bypassed-failures.alert': '由于配置stack.upgrade.bypass.prechecks设置为true,错误可以被忽视。强烈建议仔细查看错误',//'Errors are allowed to be bypassed since config stack.upgrade.bypass.prechecks is set to true. It is strongly encouraged to look into these failures.',
  'popup.clusterCheck.Upgrade.warning.title': '警告',
  'popup.clusterCheck.Upgrade.warning.alert': '纠正这些警告不是必需的,但 <strong>建议</strong>纠正它.',
  'popup.clusterCheck.Upgrade.configsMerge.title': '改变配置',
  'popup.clusterCheck.Upgrade.configsMerge.alert': '在升级期间,下面的配置更改将被应用.',//During upgrade, the following configuration changes will be applied
  'popup.clusterCheck.Upgrade.configsMerge.configType': '配置类型',
  'popup.clusterCheck.Upgrade.configsMerge.propertyName': '属性名',
  'popup.clusterCheck.Upgrade.configsMerge.currentValue': '当前值',
  'popup.clusterCheck.Upgrade.configsMerge.recommendedValue': '建议值',
  'popup.clusterCheck.Upgrade.configsMerge.resultingValue': '结果值',
  'popup.clusterCheck.Upgrade.configsMerge.deprecated': '属性已被弃用',
  'popup.clusterCheck.Upgrade.configsMerge.willBeRemoved': '即将被移除',
  'popup.clusterCheck.Security.header': '弃用安全',//Enable Security
  'popup.clusterCheck.Security.title': '安全需求不满足',//Security Requirements Not Met
  'popup.clusterCheck.Security.alert': '你必须符合以下要求您可以启用安全性.',//You must meet the following requirements before you can enable security


  'popup.invalid.KDC.header': '管理会话过期错误',//Admin session expiration error
  'popup.invalid.KDC.msg': ' 请输入管理员账户和密码.',//Please enter admin principal and password
  'popup.invalid.KDC.admin.principal': '管理员主体',//
  'popup.invalid.KDC.admin.password': '管理员密码',//

  'popup.dependent.configs.header': '相关配置',//Dependent Configurations
  //Based on your configuration changes, Ambari is recommending the following dependent configuration changes.
  // <br/> Ambari will update all checked configuration changes to the <b>Recommended Value</b>. Uncheck any configuration to retain the <b>Current Value</b>
  'popup.dependent.configs.title': '根据你配置的更改,Ambari推荐更改以下相关的配置.Ambari将会更新所有检查配置更改的推荐值。取消任何配置保留当前值.',
  'popup.dependent.configs.table.saveProperty': '保存属性',
  'popup.dependent.configs.table.initValue': '初始值',
  'popup.dependent.configs.table.currentValue': '当前值',
  'popup.dependent.configs.table.recommendedValue': '推荐值',
  'popup.dependent.configs.table.not.defined': '没有定义',//'Not Defined',


  'popup.dependent.configs.select.config.group.header': '选择配置组',//'Select Config Group
  //Please select to which config group would you like to save dependent properties
  'popup.dependent.configs.select.config.group': '请选择你要哪组配置保存相关的属性',

  'popup.dependent.configs.dependencies.config.singular': ' {0} 配置更改 ',//'There is {0} configuration change
  'popup.dependent.configs.dependencies.config.plural':' 有 {0} 项配置更改 ',//There are {0} configuration changes
  'popup.dependent.configs.dependencies.service.singular': '在 {0} 服务中',//in {0} service
  'popup.dependent.configs.dependencies.service.plural': '有 {0} 服务数',//in {0} service
   //You are changing not default group, please select config group to which you want to save dependent configs from other services
  'popup.dependent.configs.dependencies.for.groups': '你不改变默认组,请你从其他服务选择你想要保存配置组的依赖',
      
  'popup.jdkValidation.header': '不支持的JDK',//Unsupported JDK
  'popup.jdkValidation.body': ' {0} 堆栈需要的JDK是 {1} 但是 Ambari 的JDK配置是 {2}. 这可能导致您的集群运行错误或问题.',//This could result in error or problems with running your cluster
  'popup.logTail.header': '文件名称',
  'popup.logTail.openInLogSearch': '在日志搜索中打开',

  'login.header':'登录',
  'login.username':'用户名',
  'login.loginButton':'登录',
  'login.error.bad.credentials':'无法登录. 无效的用户名/密码组合.',//Unable to sign in. Invalid username/password combination
  'login.error.disabled':'无法登录. 无效的用户名/密码组合.',//Unable to sign in. Invalid username/password combination
  'login.error.bad.connection':'无法连接到 Ambari 服务. 证实Ambari服务器正在运行,你可以从这台机器到达Ambari服务器.',//Unable to connect to Ambari Server. Confirm Ambari Server is running and you can reach Ambari Server from this machine

  'titlebar.alerts.noAlerts': '没有警告',

  'graphs.noData.title': '没有数据',//No Data
  'graphs.noData.message': '没有可用数据',//No Data Available
  'graphs.noData.tooltip.title': '没有可用数据. Ambari标准服务可能没有安装或无法访问',//The Ambari Metrics service may be not installed or inaccessible
  'graphs.noDataAtTime.message': '时间段内没有可用的数据.',//No available data for the time period
  'graphs.error.title': '错误',
  'graphs.error.message': '有问题获取数据的图表 ({0}: {1})',
  'graphs.timeRange.hour': '最近1小时',
  'graphs.timeRange.twoHours': '最近2小时',
  'graphs.timeRange.fourHours': '最近4小时',
  'graphs.timeRange.twelveHours': '最近12小时',
  'graphs.timeRange.day': '最近24小时',
  'graphs.timeRange.week': '最近1周',
  'graphs.timeRange.month': '最近1个月',
  'graphs.timeRange.year': '最近1年',
  'graphs.tooltip.title': '单击缩放',

  'users.userName.validationFail': '只推荐小写字母和数字,必须以字母开始',//Only lowercase letters and numbers are recommended; must start with a letter
  'host.spacesValidation': '不能包含空格',//Cannot contain whitespace

  'services.hdfs.rebalance.title' : 'HDFS 均衡',//HDFS Rebalance
  'services.ganglia.description':'Ganglia指标收集系统',//Ganglia Metrics Collection system
  'services.hdfs.description':'Apache Hadoop分布式文件系统',//Apache Hadoop Distributed File System
  'services.glusterfs.description':'Apache Hadoop文件系统兼容(必须手动安装)',//Apache Hadoop Compatible File System (must be installed manually)
  'services.sqoop.description':'工具在Apache Hadoop传输大量数据和结构化数据存储,如关系数据库',//Tool for transferring bulk data between Apache Hadoop and structured data stores such as relational databases
  'services.pig.description':'分析大型数据集的脚本平台',//Scripting platform for analyzing large datasets
  'services.hive.description':'数据仓库系统特别的查询和分析大型数据集和表和存储管理服务',//Data warehouse system for ad-hoc queries & analysis of large datasets and table & storage management service
  'services.oozie.description':'Apache Hadoop的工作流系统的协调和执行工作',//System for workflow coordination and execution of Apache Hadoop jobs
  'services.zookeeper.description':'集中的服务提供高度可靠的分布式协调',//Centralized service which provides highly reliable distributed coordination
  'services.hbase.description':'非关系分布式数据库和集中式服务配置管理与同步',//Non-relational distributed database and centralized service for configuration management & synchronization
  'services.hive.databaseComponent':'数据库服务器',//Database Server
  'services.mapreduce2.description':'Apache Hadoop 的下一代 MapReduce (客户端库)',
  'services.yarn.description':'Apache Hadoop 的下一代 MapReduce (YARN)',
  'services.tez.description':'TEZ是写在YARN的顶部下一代Hadoop的查询处理框架',//Tez is the next generation Hadoop Query Processing framework written on top of YARN
  'services.falcon.description': 'Falcon 镜像引擎',
  'services.storm.description': 'Apache Hadoop流处理框架',//Apache Hadoop Stream processing framework
  'services.storm.configs.range-plugin-enable.dialog.title': '启动STORM下的Ranger',//Enable Ranger for STORM
  'services.storm.configs.range-plugin-enable.dialog.message': '启动Ranger插件STORM才是安全有效的集群.',//Enabling Ranger plugin for STORM is effective only on a secured cluster


  'services.alerts.head':'你有 {0} 个临界报警通知.',//You have {0} critical alert notification(s)
  'services.alerts.OK.timePrefixShort': '确定',//OK
  'services.alerts.WARN.timePrefixShort': '警告 ',//WARN
  'services.alerts.CRIT.timePrefixShort': '临界的',//暴击 批评 重击 临界质量 临界的
  'services.alerts.MAINT.timePrefixShort': '维护',//MAINT
  'services.alerts.UNKNOWN.timePrefixShort': '未知',
  'services.alerts.OK.timePrefix': '完成 {0}',//OK {0}
  'services.alerts.WARN.timePrefix': '警告 {0}',//WARN for {0}
  'services.alerts.CRIT.timePrefix': '临界 {0}',//CRIT for {0}
  'services.alerts.MAINT.timePrefix': '维护 {0}',//MAINT for {0}
  'services.alerts.UNKNOWN.timePrefix': '未知 {0}',//UNKNOWN for {0}
  'services.alerts.lastCheck': '最终选择 {0}',
  'services.alerts.brLastCheck': '<br>最终选择 {0}',
  'services.alerts.occurredOn': '已发生 {0}, {1}',//Occurred on
  'services.alerts.goToService': '转到服务',//Go to Service
  'services.alerts.goTo': '跳转到{0}',

  'services.summary.selectHostForComponent': '选择{0}个组件添加主机',//Select the host to add {0} component
  'services.summary.allHostsAlreadyRunComponent': '所有主机已经运行的{0}个组件',//All hosts already running {0} component

  'topnav.logo.href':'/#/main/dashboard',
  'topnav.help.href':'https://cwiki.apache.org/confluence/display/AMBARI/Ambari',

  'installer.header':'集群安装向导',//Cluster Install Wizard
  'installer.navigation.warning.header':'导航警告',//Navigation Warning

  'installer.noHostsAssigned':'未分配主机',//No host assigned
  'installer.slaveComponentHosts.selectHosts':'为这组选择主机',//select hosts for this group
  'installer.slaveComponentHostsPopup.header':'选择哪些主机应该属于哪个{0}组',//Select which hosts should belong to which {0} group

  'installer.controls.slaveComponentGroups':'组数',//Groups
  'installer.controls.serviceConfigPopover.title':'{0}<br><small>{1}</small>',
  'installer.controls.checkConnection.popover':'这一行动将检查{0}的主机和端口的可访问性,从Ambari Server主机',//This action will check accessibility of {0} host and port from Ambari Server host
  'installer.controls.serviceConfigMultipleHosts.other':'1 其它',//1 othe
  'installer.controls.serviceConfigMultipleHosts.others':'{0}其它',
  'installer.controls.serviceConfigMasterHosts.header':'{0} 主机数',//Hosts
  'installer.controls.addSlaveComponentGroupButton.title':'添加一个 {0} 组',
  //If you need different settings on certain {0}s, you can add a {1} group.<br>All {2}s within the same group will have the same set of settings.  You can create multiple groups
  'installer.controls.addSlaveComponentGroupButton.content':'如果你需要对某些{ 0 }项有不同的设置,您可以添加{1}组。所有{2}等在同一组内将有一组相同的设置。您可以创建多个组.',
  'installer.controls.slaveComponentChangeGroupName.error':'该组名称已经存在',//group with this name already exist

  'installer.step0.header':'开始',//Get Started
  'installer.step0.body.header':'开始',//Get Started
  'installer.step0.body':'该向导将引导您完成集群安装过程。首先,通过命名新集群启动.',//This wizard will walk you through the cluster installation process.  First, start by naming your new cluster
  'installer.step0.clusterName':'命名您的集群',//Name your cluster
  'installer.step0.clusterName.tooltip.title':'群名称',//Cluster Name
  'installer.step0.clusterName.tooltip.content':'输入唯一的集群名称.',//Enter a unique cluster name
  'installer.step0.clusterName.error.required':'集群名称是必须的',//Cluster Name is required
  'installer.step0.clusterName.error.tooLong':'集群名称太长',//'Cluster Name is too long',
  'installer.step0.clusterName.error.whitespace':'集群名称不能包含空格',//Cluster Name cannot contain whitespace
  'installer.step0.clusterName.error.specialChar':'集群名称不能包含特殊字符',//Cluster Name cannot contain special characters

  'installer.step1.header':'选择版本',//'Select Version',
  'installer.step1.body':'选择你集群的软件版本。使用公共资源库需要互联网。使用本地资源库只需要局域网',//'Select the software version and method of delivery for your cluster. Using a Public Repository requires Internet connectivity. Using a Local Repository requires you have configured the software in a repository available in your network.',
  'installer.step1.addVersion.title':'添加版本',//'Add Version',
  'installer.step1.changeVersion.defaultVersion':'默认版本定义',//'Default Version Definition',
  'installer.step1.selectUseRepoOptions.public':'使用公共资源库',//'Use Public Repository',
  'installer.step1.selectUseRepoOptions.public.networkLost.button':'不可用',//'Not Available',
  'installer.step1.selectUseRepoOptions.public.networkLost':'没有选中？',//'Why is this not selected?',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.title':'公共资源库选项没有选中',// 'Public Repository Option Not Selected',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg': 'Ambari无法访问公共资源库,可能由于没有互联网环境,无法使用公共资源库进行安装,您的选择是：',//'Ambari is unable to confirm access to the Public Repositories, which means you might not have Internet access and will not be able to use the Public Repository option for installing the software. Your choices:',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg1': '确定你的主机可以访问互联网',//'Configure your hosts for access to the Internet.',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg2': '如果你使用网络代理,请参考Ambari文档查看配置Ambari使用代理',//'If you are using an Internet Proxy, refer to the Ambari Documentation on how to configure Ambari to use the Internet Proxy.',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg3': '使用本地资源库选项',//'Use the Local Repositoy option.',
  'installer.step1.selectUseRepoOptions.public.networkLost.popup.msg4': '如果没有网络并且选择此项,资源库基础URL会验证失败',//'If you do not have internet access and select this option, you will fail the Repository Base URL validation.',
  'installer.step1.selectUseRepoOptions.public.select':'选择版本',//'Select Version',
  'installer.step1.selectUseRepoOptions.local':'使用本地资源库',//'Use Local Repository',
  'installer.step1.usePublicRepo.ReposList.empty':'没有其他版本',//'No other versions',
  'installer.step1.usePublicRepo.viewRepos':'查看资源库',//'View Repositories',
  'installer.step1.useLocalRepo.uploadFile': '上传版本定义文件',//'Upload Version Definition File',
  'installer.step1.useLocalRepo.uploadFile.error.title': '上传版本定义文件错误',//'Upload Version Definition File Error',
  'installer.step1.useLocalRepo.getSurpottedOs.error.title':'不支持该操作系统', //'Cannot get supported OS types',
  'installer.step1.useLocalRepo.addRepo.button':'添加资源库',// 'Add Repository',
  'installer.step1.addVersion': '增加版本',//'Add Version',
  'installer.step1.addVersion.stackChanged.popup.body': '软件栈从{0}修改成{1}',//'Stack is changed from {0} to {1}.',
  'installer.step1.useLocalRepo.enterUrl': '版本定义文件URL',//'Version Definition File URL',
  'installer.step1.useLocalRepo.enterUrl.placeholder': '输入版本定义文件URL',//'Enter URL to Version Definition File',
  'installer.step1.useLocalRepo.readButton': '读取版本信息',//'Read Version Info',
  'installer.step1.useLocalRepo.infoForm.details.title':'详细',// 'Details',
  'installer.step1.useLocalRepo.infoForm.details.stackName': '软件栈名称',//'Stack Name',
  'installer.step1.useLocalRepo.infoForm.details.displayName': '展示名称',//'Display Name',
  'installer.step1.useLocalRepo.infoForm.details.version': '版本',//'Version',
  'installer.step1.useLocalRepo.infoForm.details.actualVersion':'实际版本',// 'Actual Version',
  'installer.step1.useLocalRepo.infoForm.details.releaseNotes': '发布说明',//'Release Notes',
  'installer.step1.useLocalRepo.infoForm.content.title': '内容',//'Contents',
  'installer.step1.useLocalRepo.infoForm.content.empty': '没有内容展示',//'No contents to display',
  'installer.step1.useLocalRepo.infoForm.alert.baseUrl': '提供该操作系统的基础URL',//'Provide Base URLs for the Operating Systems you are configuring.',
  'installer.step1.useLocalRepo.infoForm.alert.warning': '部分资源库验证失败。确定url正确或者跳过验证',//'Some of the repositories failed validation. Make changes to the base url or skip validation if you are sure that urls are correct',
  'installer.step1.advancedRepo.title':'高级选项库',//Advanced Repository Options
  'installer.step1.advancedRepo.message':'自定义库基础URL下载堆栈软件包。如果你的主机没有接入互联网,你就必须创建堆栈资源库的本地镜像这是所有主机访问和使用此处的这些基础URL.',
  'installer.step1.advancedRepo.importantMassage':'<b>重要:</b> 当使用本地镜像资源库,你只需要为你安装你的服务栈操作系统提供基础URL。取消所有其他资源库.',//When using local mirror repositories, you only need to provide Base URLs for the Operating System you are installing for your Stack. Uncheck all other repositories
  'installer.step1.advancedRepo.localRepo.error.modifyUrl':'本地资源库中的URL必须修改',//Local repository URL must be modified,
  'installer.step1.advancedRepo.localRepo.error.noUrl':'对于本地资源库所需的基础URL',//Base URL required for a local repository
  'installer.step1.advancedRepo.localRepo.column.baseUrl':'基础URL',//Base URL
  'installer.step1.advancedRepo.localRepo.label.os':'操作系统',//Operating System
  'installer.step1.advancedRepo.localRepo.label.baseUrl':'资源库基础URL',//Repository Base URL
  'installer.step1.advancedRepo.localRepo.label.stack':'软件堆',//Stack
  'installer.step1.advancedRepo.localRepo.placeholder': '输入基础url或者删除该系统',//'Enter Base URL or remove this OS',
  'installer.step1.advancedRepo.skipValidation.tooltip':'<b>警告:</b>这个提供给高级用户,如果你要跳过验证基础url,使用该项',//'<b>Warning:</b> This is for advanced users only. Use this option if you want to skip validation for Repository Base URLs.',
  'installer.step1.advancedRepo.useRedhatSatellite.tooltip':'禁用分布式资源库,使用RedHat Satellite/Spacewalk替换',//'Disable distributed repositories and use RedHat Satellite/Spacewalk channels instead',
  'installer.step1.advancedRepo.useRedhatSatellite.disabled.tooltip':'当使用公共资源库时,RedHat Satellite/Spacewalk不可用',//'Use of RedHat Satellite/Spacewalk is not available when is using Public Repositories',
  'installer.step1.advancedRepo.skipValidation.message':'跳过资源库基础url验证（高级）',//'Skip Repository Base URL validation (Advanced)',
  'installer.step1.advancedRepo.useRedhatSatellite.message': '使用RedHat Satellite/Spacewalk',//'Use RedHat Satellite/Spacewalk',
  'installer.step1.advancedRepo.useRedhatSatellite.warning': '选中<b>“Use RedHat Satellite/Spacewalk”</b>,' + //'By selecting to <b>“Use RedHat Satellite/Spacewalk”</b> for the software repositories, ' +
    //'you are responsible for configuring the repository channel in Satellite/Spacewalk and confirming the repositories for the selected <b>stack version</b> are available on the hosts in the cluster. ' +
    '在Satellite/Spacewalk配置资源库渠道,确认软件栈版本可用' +
    //'Refer to the Ambari documentation for more information.',
    '请参考Ambari文档',
  'installer.step1.addOs.disabled.tooltip':'已添加所有操作系',//'All Operating Systems have been added',
  'installer.step1.attentionNeeded':'<b>注意:</b>在执行下一步,资源库基础URL在至少一个操作系统上是必须的',//'<b>Attention:</b> Repository Base URLs of at least one OS are REQUIRED before you can proceed. Please make sure they are in correct format with its protocol.',
  'installer.step1.invalidURLAttention': '<b>注意:</b>在下一步钱确认所有资源库可用',//'<b>Attention:</b> Please make sure all repository URLs are valid before proceeding.',
  'installer.step1.checkAtLeastOneAttention': '<b>注意:</b>请检查资源库',//'<b>Attention:</b> Please check at least one repository.',
  'installer.step1.retryRepoUrls':'点击<b>重试</b>',// 'Click <b>here</b> to retry.',

  'installer.step2.header':'安装选项',//Install Options
  'installer.step2.body':'输入要包含在集群中的主机列表,并提供你的SSH密钥。',//Enter the list of hosts to be included in the cluster and provide your SSH key.
  'installer.step2.targetHosts':'目标主机',//Target Hosts
  'installer.step2.targetHosts.info':'输入使用完全限定域名（FQDN）,每行一个主机列表',//Enter a list of hosts using the Fully Qualified Domain Name (FQDN), one per line
  'installer.step2.hostPattern.tooltip.title':'模式表达式',//Pattern Expressions
  //You can use pattern expressions to specify a number of target hosts. For example, to specify host01.domain thru host10.domain, enter host[01-10].domain in the target hosts textarea
  'installer.step2.hostPattern.tooltip.content':'您可以使用模式表达式来指定多个目标主机。例如,要指定主机01的域到主机10的域,输入主机[01-10]。域在目标主机的文本框中.',
  'installer.step2.hostName.error.required':'您必须至少指定一个主机名',//You must specify at least one host name
  'installer.step2.hostName.error.already_installed':'所有这些主机都已经集群的一部分',//All these hosts are already part of the cluster
  'installer.step2.hostName.error.notRequired':'主机名如果不使用SSH来自动配置的主机将被忽略',//Host Names will be ignored if not using SSH to automatically configure hosts
  'installer.step2.hostName.error.invalid':'主机名无效',//Invalid Host Name(s)
  'installer.step2.hostName.pattern.header':'主机名称模式表达式',//Host name pattern expressions
  'installer.step2.sshKey':'主机注册信息',//Host Registration Information
  'installer.step2.sshKey.error.required':'SSH私钥是必需的',//SSH Private Key is required
  'installer.step2.passphrase.error.match':'密码不匹配',//Passphrases do not match
  'installer.step2.manualInstall.label':'不要使用SSH来自动配置的主机 ',//Do not use SSH to automatically configure hosts
  // 'installer.step2.manualInstall.info':'By not using SSH to connect to the target hosts, you must manually install and' +
  //   ' start the Ambari Agent on each host in order for the wizard to perform the necessary configurations and' +
  //   ' software installs.',
  'installer.step2.manualInstall.info':'不使用SSH连接到目标主机,你必须手动安装,并在每台主机上启动Ambari代理,以便为向导,以进行必要的配置和软件安装',
  'installer.step2.advancedOptions.header':'高级选项',//Advanced Options
  'installer.step2.localRepo.label_use':'用一个',//Use a
  'installer.step2.localRepo.label_instead':'代替互联网下载的软件包',//instead of downloading software packages from the Internet
  'installer.step2.localRepo.error.required':'需要本地库文件路径',//Local repository file path is required
  'installer.step2.localRepo.tooltip.title':'本地软件库',//Local Software Repository
  // 'installer.step2.localRepo.tooltip.content': 'The cluster install requires access to the Internet to fetch software ' +
  //   'from a remote repository. In some cases, adequate bandwidth is not available and you want to prevent downloading ' +
  //   'packages from the remote repository over and over again. Other times, Internet access is not available from the ' +
  //  'hosts in your cluster. In these situations, you must set up a version of the repository that your machines can ' +
  //  'access locally and this is called a <b>Local Software Repository</b>',
  'installer.step2.localRepo.tooltip.content': '集群安装需要访问互联网从远程仓库抓取软件。在某些情况下,没有充足的带宽,你需要一遍遍从远程库下载包。其他时候,上网不能获取到集群中的主机。在这些情况下,您必须设置一个版本,你的机器可以访问本地资源库,这被称为<b>本地软件库</b>',
  'installer.step2.javaHome.label' : '64位JDK路径',
  'installer.step2.javaHome.tooltip.title' : 'JAVA_HOME',
  'installer.step2.javaHome.tooltip.content' : 'Path to 64-bit JAVA_HOME. /usr/jdk/jdk1.6.0_31 是 Ambari默认的. 您可以覆盖这包含JDK特定路径. <br/> 注意: 该路径必须在<b>所有</b>在集群主机有效.',
  'installer.step2.javaHome.tooltip.placeholder' : '/usr/jdk/jdk1.6.0_31',
  'installer.step2.automaticInstall.tooltip.title':'自动登记',//automatic registration
  'installer.step2.automaticInstall.tooltip.content':'Ambari会自动在每个主机上安装和注册Ambari代理集群.',//Ambari will automatically install and register the Ambari Agent on each host prior to the cluster installation
  'installer.step2.useSsh.provide' : '提供您的',//Provide your
  'installer.step2.useSsh.provide_id_rsa' : '自动注册主机 ',//to automatically register hosts
  'installer.step2.useSsh.tooltip.title':'SSH 私钥',//SSH Private Key
  'installer.step2.useSsh.tooltip.content':'这个<b> SSH私钥文件</b>是用于连接到目标主机集群中安装Ambari代理的SSH私钥.',//The <b>SSH Private Key File</b> is used to connect to the target hosts in your cluster to install the Ambari Agent
  'installer.step2.install.perform':'执行',//Perform
  'installer.step2.install.perform_on_hosts':'在主机上',//on hosts
  'installer.step2.install.without_ssh':'并且不使用SSH ',//and do not use SSH
  'installer.step2.manualInstall.tooltip.title':'手动注册',//manual registration
  'installer.step2.manualInstall.tooltip.content':'手动注册每个主机上的代理Ambari消除了对SSH的需要,并应继续在集群安装前进行.',//Manually registering the Ambari Agent on each host eliminates the need for SSH and should be performed prior to continuing cluster installation
  'installer.step2.manualInstall.tooltip.content_no_ssh':'手动每台主机上注册Ambari代理应继续集群安装之前进行.',//Manually registering the Ambari Agent on each host should be performed prior to continuing cluster installation
  'installer.step2.manualInstall.popup.header':'继续进行之前',//Before You Proceed
  'installer.step2.manualInstall.popup.body':'必须在每台主机上安装代理Ambari你要在继续之前管理.',//You must install Ambari Agents on each host you want to manage before you proceed
  'installer.step2.warning.popup.body':'<p>下面的主机名是无效的FQDN:</p><p> {0} </p><p>这可以在安装过程中会引起问题。 你想继续吗?</p>',//<p>The following hostnames are not valid FQDNs:</p><p> {0} </p><p>This may cause problems during installation. Do you want to continue?</p>
  'installer.step2.orUse':'或者使用',//Or use
  'installer.step2.registerAndConfirm':'注册和确认',//Register and Confirm
  'installer.step2.evaluateStep.installedHosts':'这些主机已安装集群,将被忽略:',//These hosts are already installed on the cluster and will be ignored
  'installer.step2.evaluateStep.continueConfirm':'你想继续吗?',//Do you want to continue
  'installer.step2.evaluateStep.hostRegInProgress':'主机注册目前正在进行中。 请稍后再试.',//Host Registration is currently in progress.  Please try again later
  'installer.step2.sshUser':'SSH用户帐户',//SSH User Account
  //The user account used to install the Ambari Agent on the target host(s) via SSH. This user must be set up with passwordless SSH and sudo access on all the target host(s)
  'installer.step2.sshUser.toolTip':'用于通过SSH目标主机上安装Ambari代理的用户帐户。此用户必须设置与所有目标主机上的密码的SSH和sudo访问',
  'installer.step2.sshUser.placeholder':'输入用户名',//Enter user name
  'installer.step2.sshUser.required':'用户名是必需的',//User name is required
  'installer.step2.sshPort':'SSH端口号',//'SSH Port Number',
  'installer.step2.sshPort.toolTip':'SSH端口号',//'SSH Port Number',
  'installer.step2.sshPort.required':'SSH端口号是必须的',//'SSH Port Number is required.',
  'installer.step2.agentUser':'Ambari代理用户帐户',//Ambari Agent User Account
  //The user account used to run the Ambari Agent daemon on the target host(s). This user must be set up with passwordless sudo access on all the target host(s)
  'installer.step2.agentUser.toolTip':'用于运行在目标主机在Ambari代理后台进程的用户帐户。此用户必须设置所有的目标主机上无密码访问',
  'installer.step2.bootStrap.error':'在主机上设置Ambari代理遇到错误.',//Errors were encountered while setting up Ambari Agents on the hosts
  'installer.step2.bootStrap.inProgress':'请稍候,正在建立Ambari代理在主机上。这可以根据主机数量需要几分钟.',//Please wait while Ambari Agents are being set up on the hosts. This can take several minutes depending on the number of hosts
  'installer.step2.bootStrap.header':'设置Ambari代理',//Setting Up Ambari Agents

  'installer.step3.header':'确认主机',//Confirm Hosts
  'installer.step3.body':'正在注册您的主机,请确认主机列表,你不希望在集群中存在的主机,您可以从主机列表上删除,',//Registering your hosts,Please confirm the host list and remove any hosts that you do not want to include in the cluster
  'installer.step3.hostLog.popup.header':'注册日志 {0}',
  'installer.step3.hosts.remove.popup.header':'删除主机',//Remove Hosts
  'installer.step3.hosts.remove.popup.body':'您确定要删除选定的主机?',//Are you sure you want to remove the selected host(s)
  'installer.step3.hostInformation.popup.header':'检索主机信息错误',//Error in retrieving host Information
  'installer.step3.hostInformation.popup.body' : '所有的自举主机注册,但是无法检索cpu和内存相关的信息',//All bootstrapped hosts registered but unable to retrieve cpu and memory related information
  //Host registered successfully, but the host operating system type NOT match the selected group in "Select Stack" step: Advanced Repository Option. You can go back to "Select Stack" step OR remove this host The host type is {0}, but you selected group {1} in step 1
  'installer.step3.hostOsTypeCheck.popup.body' : '主机注册成功,但主机操作系统的类型不是在“选择协议栈”的步骤相匹配所选组：高级选项库。你可以回去“选择堆栈”的步骤或删除此主机的主机类型是{0},但你所选组中第1步{1}.',
  'installer.step3.hostWarningsPopup.report':'显示报告',//'Show Report',
  'installer.step3.hostWarningsPopup.report.header': '<p style="font-family: monospace">######################################<br># 主机检查报告<br>#<br># 生成: ',
  'installer.step3.hostWarningsPopup.report.hosts': '<br>######################################<br><br>######################################<br># 主机<br>#<br># 主机的空间分隔的列表,其中有问题.<br>#只要使管理员可以很容易的主机名复制到脚本, 电子邮件等.<br>######################################<br>主机<br>',
  'installer.step3.hostWarningsPopup.report.jdk': '<br><br>######################################<br># JDK 检查 <br>#<br># 一个新行分隔的JDK问题清单.<br>######################################<br>JDK 问题<br>',
  'installer.step3.hostWarningsPopup.report.disk': '<br><br>######################################<br># 磁盘 <br>#<br># 磁盘问题的新行分隔的列表.<br>######################################<br>磁盘 问题<br>',
  'installer.step3.hostWarningsPopup.report.repositories': '<br><br>######################################<br># 库 <br>#<br># 库问题的新行分隔的列表.<br>######################################<br>库 问题<br>',
  'installer.step3.hostWarningsPopup.report.hostNameResolution': '<br><br>######################################<br># 主机名解析<br>#<br># 一个新行分隔的主机名解析问题清单.<br>######################################<br>主机名解析问题<br>',
  'installer.step3.hostWarningsPopup.report.thp': '<br><br>######################################<br># 透明的巨大的页面 <br>#<br># 一个空格分隔的列表的主机名透明的巨大的页面启用.<br>######################################<br>主机问题<br>',
  'installer.step3.hostWarningsPopup.report.firewall': '<br><br>######################################<br># 防火墙<br>#<br># 防火墙问题的新行分隔的列表.<br>######################################<br>防火墙<br>',
  'installer.step3.hostWarningsPopup.report.fileFolders': '<br><br>######################################<br># 文件和文件夹<br>#<br># 文件以及哪些是不应该存在的文件夹的空间分隔的列表.<br># 只要使管理员可以轻松地复制到路径脚本,电子邮件等<br># 例: rm -r /etc/hadoop /etc/hbase<br>######################################<br>文件和文件夹<br>',
  'installer.step3.hostWarningsPopup.report.reverseLookup': '<br><br>######################################<br># 反向查找<br># <br># 主机名没有在反向DNS查找找到。这可能会导致不正确的行为. <br># 请检查DNS设置并修复问题.<br>######################################<br>反向查找<br>',
  'installer.step3.hostWarningsPopup.report.process': '<br><br>######################################<br># 进程<br>#<br># 以逗号分隔的进程元组的列表,它不应该运行.<br># 只要使管理员可以轻松地复制到路径脚本,电子邮件等.<br>######################################<br>进程<br>',
  'installer.step3.hostWarningsPopup.report.package': '<br><br>######################################<br># 包<br>#<br># 软件包的一个空间分隔的列表,它应该被卸载.<br># 只要使管理员可以轻松地复制到路径脚本,电子邮件等.<br># 例: yum remove hadoop-hdfs yarn<br>######################################<br>包<br>',
  'installer.step3.hostWarningsPopup.report.service': '<br><br>######################################<br># 服务<br>#<br># 服务的空格分隔列表,它应该是启动并运行.<br>#只要使管理员可以轻松地复制到路径脚本,电子邮件等.<br># 例: services start ntpd httpd<br>######################################<br>服务<br>',
  'installer.step3.hostWarningsPopup.report.user': '<br><br>######################################<br># 用户<br>#<br># 用户的空格分隔列表谁不应该存在.<br># 只要使管理员可以轻松地复制到路径脚本,电子邮件等.<br># 列: userdel hdfs<br>######################################<br>用户<br>',
  'installer.step3.hostWarningsPopup.report.folder': '\\ /folder',
  'installer.step3.hostWarningsPopup.checks': '发现主机检查',//Host Checks found
  'installer.step3.hostWarningsPopup.notice':'手动解决问题后,请点击<b>检查重新运行</b>.'+//After manually resolving the issues, click <b>Rerun Checks</b>
  '<br>手动解决 <b>每一个主机</b>的问题后, 运行主机清理脚本 (必须是Python 2.6 货更高的):'+
  '<br><div class="code-snippet">python /usr/lib/python2.6/site-packages/ambari_agent/HostCleanup.py --silent --skip=users</div>' +
  '<div class="alert alert-warn"><b>注意</b>: Clean up of Firewall and Transparent Huge Page issues are not supported by the HostCleanup script.</div>' +
  '<div class="alert alert-warn"><b>注意</b>: 要清理交互模式, 删除 <b>--寂静</b> 选项. 要清理所有资源, 包含 <i>用户</i>, 删除 <b>--跳过=用户</b> 选项. 使用 <b>--帮助</b> 可用选项列表.</div>',
  'installer.step3.hostWarningsPopup.summary':'{0} on {1}',
  'installer.step3.hostWarningsPopup.jdk':'JDK 问题',
  'installer.step3.hostWarningsPopup.jdk.name':'在 <i>{0}</i>'+'中没有找到JDK',
  'installer.step3.hostWarningsPopup.jdk.context':'{0}',
  'installer.step3.hostWarningsPopup.jdk.message':'下列注册主机已涉及到JDK的问题',//The following registered hosts have issues related to JDK
  'installer.step3.hostWarningsPopup.repositories':'资料库问题',//Repository Issues
  'installer.step3.hostWarningsPopup.repositories.name':'资源库OS不可用',//Repository for OS not available
  'installer.step3.hostWarningsPopup.repositories.context':'主机（{0}）为{1}操作系统类型,但在“选择协议栈”的步骤选择的资源库是{2}。选择资源库不支持此主机的操作系统类型.',//Host ({0}) is {1} OS type, but the repositories chosen in "Select Stack" step was {2}. Selected repositories do not support this host OS type
  'installer.step3.hostWarningsPopup.repositories.message': '下列注册主机有从“选择堆栈”的步骤选择可用的库不同的操作系统类型。你可以回去“选择堆栈”的步骤,选择另一个操作系统库<b>或</b>删除主机.',//The following registered hosts have different Operating System types from the available Repositories chosen in "Select Stack" step. You can go back to "Select Stack" step to select another OS repository <b>or</b> remove the host
  'installer.step3.hostWarningsPopup.disk':'磁盘问题',//Disk Issues
  'installer.step3.hostWarningsPopup.disk.name':'没有足够的磁盘空间 ',//Not enough disk space
  'installer.step3.hostWarningsPopup.disk.context1':'在主机上没有足够的磁盘空间（{0}）.',//Not enough disk space on host ({0})
  'installer.step3.hostWarningsPopup.disk.context2':'{0}至少需要为“{1}”安装.',//A minimum of {0} is required for "{1}" mount
  'installer.step3.hostWarningsPopup.disk.message':'下列注册主机有相关的磁盘空间问题',//The following registered hosts have issues related to disk space
  'installer.step3.hostWarningsPopup.thp':'空白页问题',//Transparent Huge Pages Issues
  'installer.step3.hostWarningsPopup.thp.name':'空白页',//Transparent Huge Pages
  'installer.step3.hostWarningsPopup.thp.context':'{0}',
  'installer.step3.hostWarningsPopup.thp.message':'下面的主机有空白页（THP）启用。 THP应禁用,以避免潜在的Hadoop的性能问题.',//The following hosts have Transparent Huge Pages (THP) enabled. THP should be disabled to avoid potential Hadoop performance issues
  'installer.step3.hostWarningsPopup.firewall':'防火墙问题',
  'installer.step3.hostWarningsPopup.firewall.message':'Firewall is running on the following hosts. Please configure the firewall to allow communications on the ports documented in the <i>Configuring Ports</i> section of  the <a target=\"_blank\" href=\"http://ambari.apache.org/current/installing-hadoop-using-ambari/content/\">Ambari documentation</a>',
  'installer.step3.hostWarningsPopup.process':'进程问题',//Process Issues
  'installer.step3.hostWarningsPopup.processes.message':'以下的处理不应该运行',//The following processes should not be running
  'installer.step3.hostWarningsPopup.fileAndFolder':'文件和文件夹的问题',//File and Folder Issues
  'installer.step3.hostWarningsPopup.fileFolders.message':'下列文件和文件夹不应该存在',//The following files and folders should not exist
  'installer.step3.hostWarningsPopup.package':'包问题',//
  'installer.step3.hostWarningsPopup.packages.message':'下面的包应该卸载',//The following packages should be uninstalled
  'installer.step3.hostWarningsPopup.user':'用户问题',//User Issues
  'installer.step3.hostWarningsPopup.users.message':'以下用户应删除',//The following users should be removed
  'installer.step3.hostWarningsPopup.service':'服务问题',//Service Issues
  'installer.step3.hostWarningsPopup.services.message':'一下服务应该提升顺序',//The following services should be up
  'installer.step3.hostWarningsPopup.misc':'杂项问题',//Misc Issues
  'installer.step3.hostWarningsPopup.misc.message':'下面的任务应该改变',//The following umasks should be changed
  'installer.step3.hostWarningsPopup.misc.umask':'Umask',
  'installer.step3.hostWarningsPopup.alternatives':'可选方案问题',//Alternatives Issues
  'installer.step3.hostWarningsPopup.alternatives.umask' : '方案',
  'installer.step3.hostWarningsPopup.alternatives.message':'以下的备选方案应该删除',//The following alternatives should be removed
  'installer.step3.hostWarningsPopup.alternatives.noIssues':'这里没有可选的问题,下列备选方案应该删除',//There was no alternative issue following alternatives should be removed
  'installer.step3.hostWarningsPopup.alternatives.empty': '备选方案问题',//alternative issues
  'installer.step3.hostWarningsPopup.issue':'问题',//issue
  'installer.step3.hostWarningsPopup.issues':'问题数',//issues
  'installer.step3.hostWarningsPopup.emptyMessage':'目前还没有',//There were no
  'installer.step3.hostWarningsPopup.empty.filesAndFolders':'多余的文件和文件夹',//unwanted files and folders
  'installer.step3.hostWarningsPopup.empty.processes':'多余的进程',//unwanted processes
  'installer.step3.hostWarningsPopup.empty.packages':'多余的包',//unwanted packages
  'installer.step3.hostWarningsPopup.empty.users':'多余的用户',//unwanted users
  'installer.step3.hostWarningsPopup.empty.services':'多余的服务',//unwanted services
  'installer.step3.hostWarningsPopup.empty.misc':'问题数',//issues
  'installer.step3.hostWarningsPopup.empty.firewall':'防火墙运行',//firewalls running
  'installer.step3.hostWarningsPopup.empty.repositories':'注册主机仓库系统类型不匹配',//repositories OS type mis-match with registered hosts
  'installer.step3.hostWarningsPopup.empty.disk':'磁盘空间问题',//disk space issues
  'installer.step3.hostWarningsPopup.empty.jdk':'JDK问题',//JDK issues
  'installer.step3.hostWarningsPopup.empty.thp':'THP问题',//THP issues
  'installer.step3.hostWarningsPopup.reverseLookup.name': '反向查找验证失败的',//Reverse Lookup validation failed on
  'installer.step3.hostWarningsPopup.reverseLookup': '反向查找问题',//Reverse Lookup Issues
  'installer.step3.hostWarningsPopup.reverseLookup.message': '主机名没有在反向DNS查找找到。这可能会导致不正确的行为。请检查DNS设置并修复问题.',//The hostname was not found in the reverse DNS lookup. This may result in incorrect behavior. Please check the DNS setup and fix the issue
  'installer.step3.hostWarningsPopup.reverseLookup.empty': '反向DNS查找问题.',//reverse DNS lookup issues
  'installer.step3.hostWarningsPopup.resolution.validation.name': '主机名解析问题',//Hostname Resolution Issues
  'installer.step3.hostWarningsPopup.resolution.validation.error': '主机名解析',//Hostname resolution
  'installer.step3.hostWarningsPopup.resolution.validation': '主机名解析验证',//Hostname resolution validation
  'installer.step3.hostWarningsPopup.resolution.validation.message': '并非所有的主机可以解决其他主机的主机名。确保主机解析正常运行上的所有主机,然后再继续.',//Not all hosts could resolve hostnames of other hosts. Make sure that host resolution works properly on all hosts before continuing
  'installer.step3.hostWarningsPopup.resolution.validation.empty': '主机名解析问题',//hostname resolution issues
  'installer.step3.hostWarningsPopup.resolution.validation.context': '{0} 无法解析: {1}.',//could not resolve
  'installer.step3.hostWarningsPopup.action.exists':'存在',//Exists on
  'installer.step3.hostWarningsPopup.action.notRunning':'没有运行',//Not running on
  'installer.step3.hostWarningsPopup.action.installed':'安装在',//Installed on
  'installer.step3.hostWarningsPopup.action.running':'运行在',//Running on
  'installer.step3.hostWarningsPopup.action.invalid':'无效',//Invalid on
  'installer.step3.hostWarningsPopup.action.failed':'失败',//Failed on
  'installer.step3.hostWarningsPopup.action.enabled':'启用',//Enabled on
  'installer.step3.hostWarningsPopup.host':'主机',//host
  'installer.step3.hostWarningsPopup.hosts':'主机数',//hosts
  'installer.step3.hostWarningsPopup.moreHosts':'{0} 更多的主机...<br>点击链接查看所有的主机.',//{0} more hosts...<br>Click on link to view all hosts
  'installer.step3.hostWarningsPopup.allHosts':'主机列表',//List of hosts
  'installer.step3.hostWarningsPopup.rerunChecks':'重新运行检查',//Rerun Checks
  'installer.step3.hostWarningsPopup.hostHasWarnings':'警告:在主机检查过程中,你的一些主机检查失败了。为了防止这些潜在的重大问题.我们建议你在继续安装集群之前,首先解决这些问题。你确定你想忽略这些警告并继续?',//Host checks failed on some of your hosts. It is highly recommended that you fix these problems first before proceeding to prevent potentially major problems with cluster installation. Are you sure you want to ignore these warnings and proceed
  'installer.step3.warningsWindow.allHosts':'警告 跳过所有主机',//across all hosts
  'installer.step3.warningsWindow.warningsOn':'警告 ',
  'installer.step3.warningsWindow.directoriesAndFiles':'目录和文件',//DIRECTORIES AND FILES
  'installer.step3.warningsWindow.noWarnings':'没有警告',//No warnings
  'installer.step3.hosts.noHosts':'没有主机显示',//No hosts to display
  'installer.step3.warnings.popup.header':'主机检查',//Host Checks
  'installer.step3.warnings.description':'针对上述主机进行检查,遇到一些警告.',//Some warnings were encountered while performing checks against the above hosts
  'installer.step3.warnings.linkText':'点击此处查看警告.',//Click here to see the warnings
  'installer.step3.noWarnings.linkText':'点击此处查看检查结果.',//Click here to see the check results
  'installer.step3.warnings.noWarnings':'在{0}注册的主机通过了所有主机检查.',//All host checks passed on {0} registered hosts
  'installer.step3.warnings.fails':'注册上面{0}台主机的过程中,检查出了一些警告',//Some warnings were encountered while performing checks against the {0} registered hosts above
  'installer.step3.warnings.someWarnings':'在{0}通过所有主机检查注册主机。注：主机检查被跳过对{1}的主机注册失败.',//All host checks passed on {0} registered hosts. Note: Host checks were skipped on {1} hosts that failed to register
  'installer.step3.warnings.allFailed':'主机检查跳过对{0}的主机注册失败.',//Host checks were skipped on {0} hosts that failed to register
  'installer.step3.warnings.updateChecks.success':'主机检查更新成功',//Host Checks successfully updated
  'installer.step3.warnings.updateChecks.failed':'主机检查更新失败',//Host Checks update failed
  'installer.step3.warnings.missingHosts':'没有注册的主机',//There is no registered host
  'installer.step3.warning.registeredHosts': '{0} 其他注册主机',//Other Registered Hosts
  'installer.step3.warning.loading':'正在检查主机的潜在问题,请稍后...',//Please wait while the hosts are being checked for potential problems
  'installer.step3.registeredHostsPopup': '这些是已经注册到服务器的主机,但不会出现在主机要添加列表.',//These are the hosts that have registered with the server, but do not appear in the list of hosts that you are adding
  'installer.step3.removeSelected':'删除选择',//'Remove Selected
  'installer.step3.retryFailed':'重试失败',//Retry Failed
  'installer.step3.hosts.status.registering':'注册',//Registering
  'installer.step3.hosts.status.installing':'安装',//Installing
  'installer.step3.hosts.bootLog.failed':'\n 服务注册失败.',//Registration with the server failed
  'installer.step3.hosts.bootLog.registering':'\n 服务注册中...',//Registering with the server
  'installer.step3.hostLogPopup.highlight':'点击高亮',//click to highlight
  'installer.step3.hostLogPopup.copy':'按 CTRL+C',//press
  'installer.step3.hostsTable.selectAll':'选择所有主机',//Select All Hosts
  'installer.step3.selectedHosts.popup.header':'选定的主机',//Selected Hosts

  'installer.step4.header':'选择服务',//Choose Services
  'installer.step4.body':'选择您想要安装在集群上的服务.',//Choose which services you want to install on your cluster
  'installer.step4.fsCheck.popup.header':'文件系统所需',//File System Required
  'installer.step4.fsCheck.popup.body':'您没有选择一个文件系统,但需要一个。我们会自动添加{0}。 可以吗?',//You did not select a File System but one is required. We will automatically add {0}. Is this OK
  'installer.step4.multipleDFS.popup.header':'多个文件系统选择',//Multiple File Systems Selected
  'installer.step4.multipleDFS.popup.body':'你选择了多个文件系统。我们会自动选择只有{0}。 可以吗?',//You selected more than one file system. We will automatically select only {0}. Is this OK
  'installer.step4.serviceCheck.popup.header':'{0} 需要',//Needed
  'installer.step4.serviceCheck.popup.body':'您没有选择{0},但它是由您选择其他服务所需。我们会自动添加{0}。 可以吗?',//You did not select {0}, but it is needed by other services you selected. We will automatically add {0}. Is this OK
  'installer.step4.ambariMetricsCheck.popup.header':'功能有警告',//Limited Functionality Warning
  'installer.step4.ambariMetricsCheck.popup.body':'Ambari指标从集群中收集指标,并使其可用于Ambari。如果不安装Ambari Metrics服务,指标将无法从Ambari访问。你确定你想不Ambari指标继续?',//Ambari Metrics collects metrics from the cluster and makes them available to Ambari.  If you do not install Ambari Metrics service, metrics will not be accessible from Ambari.  Are you sure you want to proceed without Ambari Metrics
  'installer.step4.rangerRequirements.popup.header': 'Ranger 需求',//Ranger Requirements
  //'installer.step4.rangerRequirements.popup.body.requirements': '<ol><li>You must have an <strong>MySQL/Oracle/Postgres/MSSQL/SQL Anywhere Server</strong> database instance running to be used by Ranger.</li>' +
  //  '<li>In Assign Masters step of this wizard, you will be prompted to specify which host for the Ranger Admin. On that host, you <strong>must have DB Client installed</strong> for Ranger to access to the database. (Note: This is applicable for only Ranger 0.4.0)</li>' +
  //  '<li>Ensure that the access for the DB Admin user is enabled in DB server from any host.</li>' +
  //  '<li>Execute the following command on the Ambari Server host. Replace <code>database-type</code> with <strong>mysql|oracle|postgres|mssql|sqlanywhere</strong> and <code>/jdbc/driver/path</code> based on the location of corresponding JDBC driver:' +
  // '<pre>ambari-server setup --jdbc-db={database-type} --jdbc-driver={/jdbc/driver/path}</pre></li></ol>',
  'installer.step4.rangerRequirements.popup.body.requirements': '<ol><li>你必须有个一提供给Ranger使用的 Anywhere 数据库服务,如:<strong>MySQL/Oracle/Postgres/MSSQL/SQL  Server</strong> .</li>' +
  '<li>此向导的分配master一步,系统会提示您指定Ranger管理员的主机。在该主机上, 你 <strong>必须安装Ranger数据库客户端</strong> 访问数据库. (注意: 这只适用于 Ranger 0.4.0)</li>' +
  '<li>确保为DB Admin用户访问在DB服务器从任何主机启用.</li>'+
  '<li>在Ambari Server主机上执行以下命令. 代码 <code>数据库类型</code> 如: <strong>mysql|oracle|postgres|mssql|sqlanywhere</strong> 和  <code>/jdbc/driver/path</code> 根据相应的JDBC驱动程序的位置:' +
  '<pre>ambari-server setup --jdbc-db={database-type} --jdbc-driver={/jdbc/driver/path}</pre></li></ol>',
  'installer.step4.rangerRequirements.popup.body.confirmation': '我遇到上述所有要求.',//I have met all the requirements above
  'installer.step4.sparkWarning.popup.body': 'Spark依赖HDP2.2.2或更高版本。在HDP2.2.0集群尝试安装Spark将会失败。您确认使用的是HDP 2.2.2 或更高版本的软件包。你确定要继续吗',//Spark requires HDP 2.2.2 or later. Attempting to install Spark to a HDP 2.2.0 cluster will fail. Confirm you are using HDP 2.2.2 or later packages. Are you sure you want to proceed?

  'installer.step5.header':'分配master',//Assign Masters
  'installer.step5.reassign.header':'选择目标主机',//Select Target Host
  'installer.step5.attention':'主机没有运行主服务',// hosts not running master services
  'installer.step5.body':'组件分配给主机.你是否要运行它们.',//Assign master components to hosts you want to run them on
  'installer.step5.body.coHostedComponents':'<i class="icon-asterisks">&#10037;</i> {0} 将在同一台主机上托管.',//will be hosted on the same host
  'installer.step5.hostInfo':'%@ (%@, %@ cores)',
  'installer.step5.hiveGroup':'HiveServer2, WebHCat Server, MySQL Server',
  'installer.step5.validationIssuesAttention.header': '验证问题',//Validation Issues
  'installer.step5.validationIssuesAttention': '主组件分配有一个需要注意的问题.',//Master component assignments have issues that need attention
  'installer.step5.error.host.invalid': '你选择的主机可能（1）不可用的主机名,（2）跟其他主机冲突,（3）在维护模式',//'The host you choose could (1) have an invalid host name; (2) be conflicting with another selection; or (3) be in maintenance mode',

  'installer.step6.header':'分配slave和客户端',//Assign Slaves and Clients
  'installer.step6.body':'分配slave和客户端组件到你想要运行的主机运行它们.<br/>被分配的主部件的主机,只显示<i class=icon-asterisks>&#10037;</i>',//Assign slave and client components to hosts you want to run them on.<br/>Hosts that are assigned master components are shown with <i class=icon-asterisks>&#10037;</i>
  'installer.step6.body.clientText': ' <br/>&quot;客户端&quot; 即将安装 ',
  'installer.step6.error.mustSelectOne':'每个组件您必须至少指定一台主机.',//You must assign at least one host to each component
  'installer.step6.error.mustSelectOneForHost':'您必须指定至少一个slave/客户端组件.',//You must assign at least one slave/client component to each
  'installer.step6.error.mustSelectComponents': '您必须至少分配一个{0}',//You must assign at least: {0}
  'installer.step6.wizardStep6Host.title':'在{0}上托管组件',//master components hosted on {0}
  'installer.step6.addHostWizard.body':'Assign HBase 组件 和 ZooKeeper 服务.',//Assign HBase master and ZooKeeper server
  'installer.step6.error.mustSelectOneForSlaveHost': '您必须指定至少一个slave/客户端组件在每个没有主组件的主机上',//You must assign at least one slave/client component to each host with no master component
  'installer.step6.validationSlavesAndClients.hasIssues': '你的 SLAVE 和 客户端分配有问题. ',//Your slave and client assignment has issues
  'installer.step6.validationSlavesAndClients.click': '点击',//click
  'installer.step6.validationSlavesAndClients.forDetails': ' 详情.',//details
  'installer.step6.validationSlavesAndClients.popup.header': 'SLAVE 和 客户端分配的问题',//Assign Slaves and Clients Issues
  'installer.step6.validationSlavesAndClients.popup.body': 'SLAVE 和 客户端组件分配有以下问题 ',//Assignment of slave and client components has the following issues
  'installer.step6.validationIssuesAttention.header': '验证问题',//Validation Issues
  'installer.step6.validationIssuesAttention': 'Slave 和 客户端组件分配有需要注意的问题.',//Slave and Client component assignments have issues that need attention

  'installer.step7.header':'定制服务',//
  'installer.step7.body':'我们已经列出您选择的服务的推荐配置。你可以自定义你认为合适的配置.',//We have come up with recommended configurations for the services you selected. Customize them as you see fit
  'installer.step7.attentionNeeded':'<b>注意:</b> 在您继续执行之前,一些配置您需要注意.',//Some configurations need your attention before you can proceed
  'installer.step7.noIssues':'所有的配置都需要解决.',//All configurations have been addressed
  'installer.step7.showPropertiesWithIssues':'展示我的性质问题',//Show me properties with issues
  'installer.step7.showingPropertiesWithIssues':'显示问题属性.',//Showing properties with issues
  'installer.step7.showAllProperties':'展示所有的属性',//Show all properties
  'installer.step7.config.addProperty':'添加属性',//Add Property
  'installer.step7.ConfigErrMsg.header':'自定配置错误: ',//Custom configuration error
  'installer.step7.ConfigErrMsg.message':'自定义配置错误。一些属性在进入这个页面的时候就已经暴露出来了',//Error in custom configuration. Some properties entered in the box are already exposed on this page
  'installer.step7.popup.currentValue':'当前值',//Current Value
  'installer.step7.popup.adjustedValue':'矫正值',//Adjusted Value
  'installer.step7.popup.rddWarning.header':'警告: {0}上的磁盘空间不足 ',//disk space low
  //A minimum of 16GB is recommended for the Ganglia Server logs but the disk mount "{0}" on {1} does not have enough space ({2} free). Go to the Misc tab and change Ganglia rrdcached base directory with more than 16GB of disk space. If you proceed without changing it, {1} will likely run out of disk space and become inoperable
  'installer.step7.popup.rddWarning.body':'Ganglia Server日志安装磁盘“{0}”系统推荐最低16GB空间：{1}没有足够的空间（{2}免费）。转到其他选项卡,改变Ganglia rrdcached 基本目录在磁盘空间16GB以上。如果继续不改变它,{1}可能会用尽磁盘空间,无法操作.',
  'installer.step7.popup.mySQLWarning.header':'错误: 新的 MySQL数据库Hive冲突',//New MySQL Database for Hive Conflict
  //You cannot install a \"New MySQL Database\" for Hive on the same host as the Ambari Server MySQL Server. Please go back to <b>Assign Masters</b> and reassign Hive to another host <b>OR</b> choose \"Existing MySQL Database\" option to specify the Database Credentials and URL for the Ambari Server MySQL Server instance. If you choose \"Existing MySQL Database\" option, you need to perform the Hive prerequisite steps to prepare the MySQL Server instance for Hive
  'installer.step7.popup.mySQLWarning.body':'你不能在同一主机上作为Ambari MySQL服务器的同时安装配置单元\"新的MySQL数据库\"服务。请返回<b>分配master</b>并重新分配蜂巢到另一台主机<b>或</b>选择\"现有的MySQL数据库\"选项来指定Ambari服务器的MySQL Server实例的数据库凭据和URL 。如果你选择\"现有的MySQL数据库\"选项,您需要执行Hive前提步骤准备MySQL服务器实例.',
  'installer.step7.popup.mySQLWarning.button.gotostep5': '转到指定的位置',//Go to Assign Masters
  'installer.step7.popup.mySQLWarning.button.dismiss': '退出',//Dismiss
  'installer.step7.popup.mySQLWarning.confirmation.header': '确认: 转到指定位置',//Confirmation: Go to Assign Masters
  'installer.step7.popup.mySQLWarning.confirmation.body': '你会被带回\"分配master\"这一步,将失去当前所有的自定义。 你确定?',//You will be brought back to the \"Assign Masters\" step and will lose all your current customizations. Are you sure
  'installer.step7.popup.database.connection.header': '数据连接警告',//Database Connectivity Warning
  'installer.step7.popup.database.connection.body': '您还没有运行或通过数据库连接测试：{0}。强烈建议您在继续操作,以防止在部署过程中失败的前通过连接测试.',//You have not run or passed the database connection test for: {0}. It is highly recommended that you pass the connection test before proceeding to prevent failures during deployment
  'installer.step7.popup.validation.failed.header': '一致性检查失败',//Consistency Check Failed
  'installer.step7.popup.validation.failed.body': '有些服务是没有正确配置。你必须根据推荐值更改高亮配置.',//Some services are not properly configured. You have to change the highlighted configs according to the recommended values
  'installer.step7.popup.validation.request.failed.body': '由于未知错误配置更改无法验证一致性。您的更改尚未保存。你想继续,并保存更改?',//The configuration changes could not be validated for consistency due to an unknown error.  Your changes have not been saved yet.  Would you like to proceed and save the changes
  'installer.step7.popup.validation.warning.header': '配置',//Configurations
  'installer.step7.popup.validation.warning.body': '一些服务配置不正确配置。我们建议您查看和更改突出显示的配置值。你确定想要在不纠正这些配置的情况下继续执行?',//Some service configurations are not configured properly. We recommend you review and change the highlighted configuration values. Are you sure you want to proceed without correcting configurations
  'installer.step7.popup.validation.error.body': 'Service configurations resulted in validation errors. Please address them before proceeding.',
  'installer.step7.popup.oozie.derby.warning': '不建议在生产中使用Derby。随着Derby,Oozie的服务器高可用性和并发连接支持将无法使用.',//Derby is not recommended for production use. With Derby, Oozie Server HA and concurrent connection support will not be available
  'installer.step7.oozie.database.new': '新Derby数据库',//New Derby Database
  'installer.step7.hive.database.new.mysql': '新的 MySQL 数据库',//'New MySQL Database
  'installer.step7.hive.database.new.postgres': '新的 PostgreSQL 数据库',//New PostgreSQL Database
  'installer.step7.misc.notification.configure':'配置电子邮件通知',//Configure email notifications
  'installer.step7.misc.notification.configure.later':'后来配置电子邮件通知',//Configure email notifications later
  'installer.step7.misc.notification.use_tls':'使用TLS',//Use TLS
  'installer.step7.misc.notification.use_ssl':'使用 SSL',//Use SSL

  'installer.step7.preInstallChecks':'预安装检查',//Pre Install Checks
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.header':'跳过预安装检查',//Skipping Pre Install Checks
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.body':'不推荐跳过安装前检查.',//Skipping Pre Install Checks is not recommended
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.primary':' 忽略并继续',//Ignore and Proceed
  'installer.step7.preInstallChecks.notRunChecksWarnPopup.secondary':'预安装运行检查',//Run Pre Install Checks
  'installer.step7.preInstallChecks.checksPopup.header':'预安装检查',//Pre Install Checks


  'installer.step7.assign.master.body':'分配 <strong>{0}</strong> 到 {1}, 你想运行在 {2}上.',//'Assign <strong>{0}</strong> to {1} you want to run {2} on.',
  'installer.step7.assign.master.dependent.component.body':'If not present {0} will also be installed on the selected host. ',
  'installer.step7.missing.service.header':'缺失服务',
  'installer.step7.missing.service.body': '{0} 服务应该添加在节点 {1}',//'{0} service should be added to the cluster to {1}.',
  'assign.master.popup.header':'选择 {0} 节点',
  'assign.master.popup.cancel.body':'没有选中{0}节点将禁用交互查询',//'Not selecting {0} host will disable interactive query.',


  'installer.step8.header': '复审',//Review
  'installer.step8.body': '安装前请复审您的配置',//Please review the configuration before installation
  'installer.step8.kerberors.warning': '<strong>因为Kerberos已手动安装在集群上,当此操作完成 你必须创建/分配主体和keytabs.</strong>',//Because Kerberos has been manually installed on the cluster, you will have to create/distribute principals and keytabs when this operation is finished
  'installer.step8.deployPopup.message':'准备部署：{0}{1}的任务完成.',//Preparing to Deploy: {0} of {1} tasks completed
  'installer.step8.hosts':'主机数 ',//hosts
  'installer.step8.host':'主机 ',//host
  'installer.step8.other':'和{0}其他主机',
  'installer.step8.repoInfo.osType.redhat6':'RHEL 6/CentOS 6/Oracle Linux 6',
  'installer.step8.repoInfo.osType.redhat5':'RHEL 5/CentOS 5/Oracle Linux 5',
  'installer.step8.repoInfo.osType.sles11':'SLES 11/SUSE 11',
  'installer.step8.repoInfo.displayName':'库',//Repositories
  'installer.step8.services.restart.required': '{0} {1} 安装过程中将重新启动.',// will be restarted during installation
  
  'installer.step9.header':'安装,启动和测试',//Install, Start and Test
  'installer.step9.body':'请稍等...所选服务正在安装和启动.',//Please wait while the selected services are installed and started
  'installer.step9.status.success':'成功安装并启动的服务.',//Successfully installed and started the services
  'installer.step9.status.skipStartSuccess':'成功安装服务.',//Successfully installed the services
  'installer.step9.status.warning':'安装和启动服务的时候出现一些警告.',//Installed and started the services with some warnings
  'installer.step9.status.failed':'无法安装/启动服务.',//Failed to install/start the services
  'installer.step9.status.start.services.failed':'启动所有服务API调用失败.',//Start all services API call failed
  'installer.step9.status.install.components.failed': '仍然不知道一些服务组件已成功安装。请重试',//Some service components are still not known to have installed successfully. Please Retry
  'installer.step9.status.hosts.heartbeat_lost': 'Ambari代理没有在{0}主机上运行.',//Ambari agent is not running on {0} hosts
  'installer.step9.host.heartbeat_lost': '主机心跳丢失',//Heartbeat lost for the host
  'installer.step9.host.heartbeat_lost_popup': '在主机上Ambari代理未检测到信号',//Ambari agent process is not heartbeating on the host
  'installer.step9.host.heartbeat_lost.header' : '心跳主机丢失',//Hosts with heartbeat lost
  'installer.step9.host.status.success':'成功',//Success
  'installer.step9.host.status.startAborted':'安装完成。启动中止',//Install completed. Start aborted
  'installer.step9.host.status.warning':'遇到的警告',//Warnings encountered
  'installer.step9.host.status.failed':'遇到故障',//Failures encountered
  'installer.step9.host.status.nothingToInstall':'安装完成（等待启动）',//Install complete (Waiting to start)
  'installer.step9.hosts.status.label.inProgress':'进行中',//In Progress
  'installer.step9.hosts.status.label.warning':'警告',//Warning
  'installer.step9.hosts.filteredHostsInfo': '显示的{0} {1}主机',//{0} of {1} hosts showing
  'installer.step9.hostLog.popup.header':'任务正在执行',//Tasks. executed on
  'installer.step9.hostLog.popup.categories.all':'所有',//All
  'installer.step9.hostLog.popup.categories.pending':'排队/等待',//Queued / Pending
  'installer.step9.hostLog.popup.categories.in_progress':'进行中',//In Progress
  'installer.step9.hostLog.popup.categories.failed':'失败',//Failed
  'installer.step9.hostLog.popup.categories.completed':'成功',//Success
  'installer.step9.hostLog.popup.categories.aborted':'终止',//Aborted
  'installer.step9.hostLog.popup.categories.timedout':'超时',//Timed Out
  'installer.step9.hostLog.popup.noTasksToShow':'没有任务显示',//No tasks to show
  'installer.step9.host.status.noTasks': '在主机上的Ambari服务器没有安排任何任务。主机上的服务组件已经在安装状态<b>或</b>安装失败.',
  'installer.step9.overallProgress':'总进度 {0} % ',//overall
  'installer.step9.serviceStatus.install.pending':'准备安装 ',//Preparing to install
  'installer.step9.serviceStatus.install.queued':'等待安装 ',//Waiting to install
  'installer.step9.serviceStatus.install.inProgress':'正在安装',//Installing
  'installer.step9.serviceStatus.install.completed':'安装成功 ',//Successfully installed
  'installer.step9.serviceStatus.install.failed':' 安装失败',//Failed to install
  'installer.step9.serviceStatus.uninstall.pending':'准备卸载 ',//Preparing to uninstall
  'installer.step9.serviceStatus.uninstall.queued':' 等待卸载',//Waiting to uninstall
  'installer.step9.serviceStatus.uninstall.inProgress':' 卸载中',//Uninstalling
  'installer.step9.serviceStatus.uninstall.completed':'卸载成功 ',//Successfully uninstalled
  'installer.step9.serviceStatus.uninstall.failed':'卸载失败 ',//Failed to uninstall
  'installer.step9.serviceStatus.start.pending':'准备启动 ',//Preparing to start
  'installer.step9.serviceStatus.start.queued':'等待启动 ',//Waiting to start
  'installer.step9.serviceStatus.start.inProgress':'启动中 ',//Starting
  'installer.step9.serviceStatus.start.completed':'启动成功',// started successfully
  'installer.step9.serviceStatus.start.failed':' 启动失败',//failed to start
  'installer.step9.serviceStatus.stop.pending':'准备停止 ',//Preparing to stop
  'installer.step9.serviceStatus.stop.queued':'等待停止 ',//Waiting to stop
  'installer.step9.serviceStatus.stop.inProgress':'正在停止',//Stopping
  'installer.step9.serviceStatus.stop.completed':' 停止成功',//stopped successfully
  'installer.step9.serviceStatus.stop.failed':'停止失败',// failed to stop
  'installer.step9.serviceStatus.execute.pending':'准备执行',//Preparing to execute
  'installer.step9.serviceStatus.execute.queued':'等待执行',//Waiting to execute
  'installer.step9.serviceStatus.execute.inProgress':'执行中 ',//Executing
  'installer.step9.serviceStatus.execute.completed':' 执行成功',//executed successfully
  'installer.step9.serviceStatus.execute.failed':'执行失败',// failed to execute
  'installer.step9.serviceStatus.abort.pending':'等待终止 ',//Preparing to abort
  'installer.step9.serviceStatus.abort.queued':'等待终止',//Waiting to abort
  'installer.step9.serviceStatus.abort.inProgress':'终止中 ',//Aborting
  'installer.step9.serviceStatus.abort.completed':' 终止成功',//aborted successfully
  'installer.step9.serviceStatus.abort.failed':' 终止失败',//failed to abort
  'installer.step9.components.install.failed': '安装失败',//Installation Failure
  'installer.step9.service.start.failed': '有启动安装的服务的问题。请转到个人服务网页进行启动.',//There were issues starting installed services. Please go to individual service pages to start them
  'installer.step9.service.start.header': '启动服务',//Start Services

  'installer.step10.header':'概要 ',//Summary
  'installer.step10.body':'这里是安装过程概要.',//Here is the summary of the install process
  'installer.step10.staleServicesRestartRequired':'新的增值服务等业务需要正常运行您可能还需要重新启动' +// You may also need to restart other services for the newly added
  '（例如,HDFS和YARN/ MapReduce的需要增加了Oozie后重新启动） ' +//services to function properly (for example, HDFS and YARN/MapReduce need to be restarted after adding Oozie). After closing this
  '关闭此向导后,请重新启动在服务名称旁边有重启标识的全部服务.',//wizard, please restart all services that have the restart indicator <i class="icon-refresh"></i> next to the service name
  'installer.step10.hostsSummary':'该集群有{0}台主机',//The cluster consists of {0} hosts
  'installer.step10.installedAndStarted':'在 {0} 上安装并运行新的服务 ',//Installed and started services successfully on {0} new
  'installer.step10.installed':'在 {0} 上成功安装新的服务 ',//Installed services successfully on {0} new
  'installer.step10.warnings':'警告 ',//warnings
  'installer.step10.clusterState.installing':'安装中 ',//Installing
  'installer.step10.clusterState.starting':'启动中 ',//Starting
  'installer.step10.taskStatus.failed':'失败  ',//failed on
  'installer.step10.taskStatus.aborted':'终止 ',//aborted on
  'installer.step10.taskStatus.timedOut':'超时 ',//timed out on
  'installer.step10.installStatus.failed':'安装 master 服务失败 ',//Installing master services failed
  'installer.step10.installStatus.installed':'安装 Master 服务',//Master services installed
  'installer.step10.master.installedOn':'{0} 安装在 {1}',//installed on
  'installer.step10.startStatus.failed':'启动服务失败',//Starting services failed
  'installer.step10.startStatus.skipped':'启动服务跳过',//Starting services skipped
  'installer.step10.startStatus.passed':'所有的测试通过',//All tests passed
  'installer.step10.startStatus.started':'所有的服务启动',//All services started
  'installer.step10.installTime.seconds':'安装和启动{0}秒结束',//Install and start completed in {0} seconds
  'installer.step10.installTime.minutes':'安装和启动{0}分钟{1}秒结束',//Install and start completed in {0} minutes and {1} seconds

  'addHost.step4.header':'配置',//Configurations
  'addHost.step4.title':'选择要添加到主机的配置组.',//Select the configuration groups to which the added hosts will belong to

  'form.create':'新建',//Create
  'form.save':'保存',//Save
  'form.cancel':'取消',//Cancel
  'form.passwordRetype':'重新输入密码',//Retype Password
  'form.saveSuccess':'保存成功.',//Successfully saved
  'form.saveError':'对不起,出现错误.',//Sorry, errors occurred
  'form.item.placeholders.typePassword':'密码类型',//Type password

  'form.validator.invalidIp':'请输入有效的IP地址',//Please enter valid ip address
  'form.validator.configKey':'无效的密钥。只有字母数字,连字符,下划线,星号和句号.',//Invalid Key. Only alphanumerics, hyphens, underscores, asterisks and periods are allowed
  'form.validator.configGroupName':'无效的组名。只有字母数字,连字符,空格和下划线允许.',//Invalid Group Name. Only alphanumerics, hyphens, spaces and underscores are allowed
  'form.validator.alertGroupName':'无效警告组名称。只允许有字母数字,连字符,空格和下划线.',//Invalid Alert Group Name. Only alphanumerics, hyphens, spaces and underscores are allowed
  'form.validator.alertNotificationName':'错误警告通知名称。只支持字母数字、连字符、空格、下划线',//'Invalid Alert Notification Name. Only alphanumerics, hyphens, spaces and underscores are allowed.',
  'form.validator.configKey.specific':'"{0}"是无效的键。只允许有字母数字,连字符,下划线,星号和句号 .',//is invalid Key. Only alphanumerics, hyphens, underscores, asterisks and periods are allowed

  'alerts.add.header': '创建警告定义',//Create Alert Definition
  'alerts.add.step1.header': '选择类型',//Choose Type
  'alerts.add.step2.header': '设置',//Configure
  'alerts.add.step3.header': '参阅',//Review
  'alerts.add.step3.selectedType': '选择类型',//Selected Type

  'alerts.fastAccess.popup.header': '{0} 是个严重的警告 ',//Critical or Warning Alerts
  'alerts.fastAccess.popup.body.name': '定义警告名称',//Alert Definition Name
  'alerts.fastAccess.popup.body.showmore': '跳转到警告定义',//Go to Alerts Definitions
  'alerts.fastAccess.popup.body.noalerts': '没有严重的警告显示',//No critical or warning alerts to display

  'alerts.actions.create': '创建警告',//Create Alert
  'alerts.actions.manageGroups': '管理预警组',//Manage Alert Groups
  'alerts.actions.manageNotifications': ' 管理通知',//Manage Notifications
  'alerts.actions.manageNotifications.info': '您可以管理通知方法和收件人.',//You can manage notification methods and recipients
  'alerts.actions.editRepeatTolerance.header': '编辑警告检查数量',//'Edit Alert Check Count',
  'alerts.actions.editRepeatTolerance.title': '警告检查数量',//'Alert Check Counts',
  'alerts.actions.editRepeatTolerance.description': 'Set the number of alert checks to perform before dispatching a notification. ' +
    'If during an alert check a state change occurs, Ambari will attempt to check this number of times before dispatching a notification. ' +
    'Increase this number if your environment experiences transient issues resulting in false alerts.',
  'alerts.actions.editRepeatTolerance.label': '检查数量',//'Check Count:',
  'alerts.actions.editRepeatTolerance.error':'输入必须1到99的整数',//'Input should be an integer between 1 and 99.',
  'alerts.actions.manageSettings': '管理警告设置',//'Manage Alert Settings',
  'alerts.actions.manageSettings.error':'远程命令错误',//'Error during remote command: ',

  'alerts.groups.successPopup.header': '警告组的处理结果',//Alert Groups processing results
  'alerts.groups.successPopup.body.created': '一个新的警告组',//New Alert Groups
  'alerts.groups.successPopup.body.updated': '修改警告组',  //Updated Alert Groups
  'alerts.groups.successPopup.body.deleted': '删除警告组',//Removed Alert Groups

  'alerts.table.noAlerts': '没有报警显示',//No Alerts to display
  'alerts.table.header.lastTriggered': '上次状态改变时间',
  'alerts.table.header.lastChecked': '上一次检查',//Last Checked
  'alerts.table.header.lastTrigger': '上一次改变',//'Last Changed
  'alerts.table.header.check.response': '响应',//Response
  'alerts.table.header.definitionName': '警告定义名称',
  'alerts.table.header.notification': '通知',//Notification
  'alerts.table.header.repeatTolerance': '检查数量',//'Check Count',
  'alerts.table.header.default': '(default)',
  'alerts.table.header.helpUrl': '警告上下文',//'Alert Context',
  'alerts.table.state': '状态',//State
  'alerts.table.state.enabled': '启用',
  'alerts.table.state.disabled': '禁用',
  'alerts.table.state.enabled.tooltip': '点击禁用此警告定义',//Click to disable this alert definition
  'alerts.table.state.disabled.tooltip': '点击启用该警告定义',//Click to enable this alert definition
  'alerts.table.state.enabled.confirm.msg': '您将要禁用此警告定义.',//You are about to Disable this alert definition
  'alerts.table.state.disabled.confirm.msg': '您将要启用此警告定义.',//You are about to Enable this alert definition
  'alerts.table.state.enabled.confirm.btn': '确认禁用',//Confirm Disable
  'alerts.table.state.disabled.confirm.btn': '确认启用',//Confirm Enable
  'alerts.filters.filteredAlertsInfo': '{0} of {1} 定义显示 ',//definitions showing
  'alerts.definition.name': '警告定义名称',
  'alerts.saveChanges': '你有未保存的更改',//You have unsaved changes

  'alert.definition.name.invalid': '错误输入,只支持字母数字,下划线,%,#,空格',//'Invalid input. Only alphanumerics, underscores, hyphens, percentage and spaces are allowed.',
  'alerts.definition.details.enable': '启用',//Enable
  'alerts.definition.details.disable': '禁用',//Disable
  'alerts.definition.details.enableDisable': '启用/禁用',//Enable / Disable
  'alerts.definition.details.groups': '组数',//Groups
  'alerts.definition.details.instances': '实例',//Instances
  'alerts.definition.details.serviceHost': '服务 / 主机',//Service / Host
  'alerts.definition.details.24-hour': '24小时',//24-Hour
  'alerts.definition.details.notification': '通知',//Notification
  'alerts.definition.details.noAlerts': '没有警告实例显示',//No alert instances to show
  'alerts.definition.details.configs.thresholdsErrorMsg': '临界阈值应大于警告阈值',//Critical threshold should be larger than warning threshold

  'alerts.notifications.error.email': '必须是有效的邮箱地址',//Must be a valid email address
  'alerts.notifications.error.integer': '必须是整数类型',//Must be an integer
  'alerts.notifications.error.host': '主机必须是有效的完全限定域名（FQDN）',//Hosts must be a valid Fully Qualified Domain Name (FQDN)

  'alerts.notifications.error.SMTPUsername': '用户名是必需的',//'Username is required',
  'alerts.notifications.error.SMTPPassword': '密码是必须的',//'Password is required',
  'alerts.notifications.error.retypePassword': '两次密码必须一致',//'Password confirmation must match password',

  'alerts.notifications.addCustomPropertyPopup.header': '添加属性',//Add Property
  'alerts.notifications.addCustomPropertyPopup.error.propertyExists': '自定义属性的名称已经存在',//Custom Property with current name already exists
  'alerts.notifications.addCustomPropertyPopup.error.invalidPropertyName': '属性名称只能包含字母,数字和。 -_*字符',//Property name can only contain letters, numbers or . -_* characters


  'wizard.progressPage.notice.completed':'请继续下一步.',//Please proceed to the next step
  'wizard.progressPage.notice.failed':'您可以点击重试按钮,重试失败的任务.',//You can click on the Retry button to retry failed tasks
  'wizard.singleRequest.progressPage.notice.failed': '请点击重试链接,重试失败的请求.',//Please click on the Retry link to retry the failed request


  'admin.advanced.caution':'本节仅适用于高级用户</br>请谨慎操作.',//This section is for advanced user only.<br/>Proceed with caution
  'admin.advanced.button.uninstallIncludingData':'卸载集群包括所有数据.',//Uninstall cluster including all data
  'admin.advanced.button.uninstallKeepData':'卸载集群但保存数据.',//Uninstall cluster but keep data

  'admin.advanced.popup.header':'卸载集群',//Uninstall Cluster

  /*'admin.advanced.popup.text':'Uninstall Cluster',*/

  'admin.audit.grid.date':"日期 / 时间",//Date/Time
  'admin.audit.grid.category':"类别",//Category
  'admin.audit.grid.operationName':"操作",//Operation
  'admin.audit.grid.performedBy':"执行者",//Performed By
  'admin.audit.grid.service':"类别",//Category

  'admin.authentication.form.method.database':'使用Ambari数据库来验证用户身份',//Use Ambari Database to authenticate users
  'admin.authentication.form.method.ldap':'使用LDAP/ Active Directory 验证',//Use LDAP/Active Directory to authenticate
  'admin.authentication.form.primaryServer':'主服务器',//Primary Server
  'admin.authentication.form.secondaryServer':'备用服务器',//Secondary Server
  'admin.authentication.form.useSsl':'使用SSL',//Use SSL
  'admin.authentication.form.bind.anonymously':"匿名绑定",//Bind Anonymously
  'admin.authentication.form.bind.useCrenedtials':"使用凭据绑定",//Use Credentials To Bind
  'admin.authentication.form.bindUserDN':' 绑定用户DN',//Bind User DN
  'admin.authentication.form.searchBaseDN':'搜索基本DN',//Search Base DN
  'admin.authentication.form.usernameAttribute':'用户名属性',//Username Attribute

  'admin.authentication.form.userDN':'用户DN',//User DN
  'admin.authentication.form.configurationTest':'配置测试',//Configuration Test
  'admin.authentication.form.testConfiguration':'测试配置',//Test Configuration

  'admin.authentication.form.test.success':'配置通过测试',//The configuration passes the test
  'admin.authentication.form.test.fail':'配置测试失败',//The configuration fails the test


  'admin.kerberos.credentials.store.hint.supported': '勾选后,Ambari将存储管理员KDC凭据,以后,不管是主机和零部件的变化,它们都可以进入.',
  'admin.kerberos.credentials.store.hint.not.supported': 'Ambari没有配置存储凭据',//Ambari is not configured for storing credentials
  'admin.kerberos.credentials.store.label': '保存管理员凭据',//Save Admin Credentials
  'admin.kerberos.credentials.store.menu.label': '管理KDC证书',//Manage KDC Credentials
  'admin.kerberos.credentials.form.header.stored': '在加密的凭据库更新或删除这张存储KDC的凭证.',//Update or remove the stored KDC Credentials in the encrypted credential store
  'admin.kerberos.credentials.form.header.not.stored': '在加密的凭据库中指定KDC管理员并且记住.',//Specify the KDC Admin Credentials to remember in the encrypted credential store
  'admin.kerberos.credentials.remove.confirmation.header': '删除KDC证书确认',//Remove KDC Credentials Confirmation
  'admin.kerberos.credentials.remove.confirmation.body': '您即将从Ambari删除KDC证书。 你确定?',//You are about to remove the KDC Credentials from Ambari. Are you sure
  'admin.kerberos.wizard.configuration.note': '这是启用Kerberos向导创建的初始配置.',//This is the initial configuration created by Enable Kerberos wizard
  'admin.kerberos.wizard.header':'启用Kerberos向导',//Enable Kerberos Wizard
  'admin.kerberos.button.enable': '启用 Kerberos ',//Enable Kerberos
  'admin.kerberos.button.disable': '禁用 Kerberos',//Disable Kerberos
  'admin.kerberos.button.regenerateKeytabs': '生成Keytabs',// Regenerate Keytabs
  'admin.kerberos.wizard.exit.warning.msg': '配置Kerberos正在进行中。你真的要退出启用Kerberos向导?',//Configuring Kerberos is in progress. Do you really want to exit the Enable Kerberos Wizard
  'admin.kerberos.wizard.exit.critical.msg': '配置Kerberos正在进行中 <strong>取消之前,您应该完成向导</strong> 你真的要退出启用Kerberos向导?',//Configuring Kerberos is in progress. <strong>Before dismissing, you should complete the wizard.</strong> Do you really want to exit the Enable Kerberos Wizard
  'admin.kerberos.wizard.step1.header': '开始',//Get Started
  'admin.kerberos.wizard.step2.header': '配置Kerberos',//Configure Kerberos
  'admin.kerberos.wizard.step3.header': '安装和测试Kerberos 客户端',//Install and Test Kerberos Client
  'admin.kerberos.wizard.step3.checkbox.ignoreAndProceed.label': '忽略错误并继续下一步骤',//Ignore errors and continue to next step
  'admin.kerberos.wizard.step4.header': '配置',//Configure Identities
  'admin.kerberos.wizard.step5.header': '确认配置',//Confirm Configuration
  'admin.kerberos.wizard.step6.header': '停止服务',//Stop Services
  'admin.kerberos.wizard.step7.header': 'Kerberize 集群',//Kerberize Cluster
  'admin.kerberos.wizard.step8.header': '启动和测试服务',//Start and Test Services
  'admin.kerberos.wizard.step1.info.body': '欢迎来到Ambari安全向导。使用该向导在集群中启用Kerberos安全,让我们开始吧.',//Welcome to the Ambari Security Wizard. Use this wizard to enable kerberos security in your cluster. </br>Let\'s get started
  'admin.kerberos.wizard.step1.alert.body': '注：此过程需要重新启动服务和集群停机时间。同时,根据您选择的选项,可能需要你的安全管理员的支持。请做好相应的计划.',//Note: This process requires services to be restarted and cluster downtime. As well, depending on the options you select, might require support from your Security administrators. Please plan accordingly
  'admin.kerberos.wizard.step1.body.text': '您打算使用什么类型的KDC?',//What type of KDC do you plan on using
  'admin.kerberos.wizard.step1.option.kdc': '现有的MIT KDC',//Existing MIT KDC
  'admin.kerberos.wizard.step1.option.kdc.condition.1': 'Ambari服务器和集群主机对KDC和KDC管理主机进行网络接入.',//Ambari Server and cluster hosts have network access to both the KDC and KDC admin hosts
  'admin.kerberos.wizard.step1.option.kdc.condition.2': 'KDC管理手中的凭证.',//KDC administrative credentials are on-hand
  'admin.kerberos.wizard.step1.option.kdc.condition.3': 'Java加密扩展（JCE）在Ambari服务器主机和集群中的所有主机上已建立.',//The Java Cryptography Extensions (JCE) have been setup on the Ambari Server host and all hosts in the cluster
  'admin.kerberos.wizard.step1.option.manual': '手动管理Kerberos主体和keytabs',//Manage Kerberos principals and keytabs manually
  'admin.kerberos.wizard.step1.option.manual.condition.1': '集群主机对KDC网络接入',//Cluster hosts have network access to the KDC
  'admin.kerberos.wizard.step1.option.manual.condition.2': 'Kerberos客户端工具（如使用kinit）已经被安装在每个集群主机上',//Kerberos client utilities (such as kinit) have been installed on every cluster host
  'admin.kerberos.wizard.step1.option.manual.condition.3': 'Java加密扩展（JCE）已经建立在Ambari服务器主机和集群中的所有主机上',//The Java Cryptography Extensions (JCE) have been setup on the Ambari Server host and all hosts in the cluster
  'admin.kerberos.wizard.step1.option.manual.condition.4': '该服务与Ambari主体将在KDC完成此向导之前手动创建',//The Service and Ambari Principals will be manually created in the KDC before completing this wizard
  'admin.kerberos.wizard.step1.option.manual.condition.5': '服务和Ambari主体 ,keytabs将手动创建并分发到集群主机在完成此向导之前,',//The keytabs for the Service and Ambari Principals will be manually created and distributed to cluster hosts before completing this wizard
  'admin.kerberos.wizard.step1.option.ad': '现有的Active Directory',//Existing Active Directory
  'admin.kerberos.wizard.step1.option.ad.condition.1': 'Ambari服务器和集群主机具有对域控制器的网络访问.',//Ambari Server and cluster hosts have network access to the Domain Controllers
  'admin.kerberos.wizard.step1.option.ad.condition.2': '活动目录安全LDAP（LDAPS）连接已配置.',//Active Directory secure LDAP (LDAPS) connectivity has been configured
  'admin.kerberos.wizard.step1.option.ad.condition.3': '活动目录用户容器主体已创建,是手头（例如 OU=Hadoop,OU=People,dc=apache,dc=org）',//Active Directory User container for principals has been created and is on-hand (e.g. OU=Hadoop,OU=People,dc=apache,dc=org)
  'admin.kerberos.wizard.step1.option.ad.condition.4': '在前面提到的用户容器上“创建,删除和管理用户帐户”委派控制Active Directory管理手中的凭据.',//Active Directory administrative credentials with delegated control of “Create, delete, and manage user accounts” on the previously mentioned User container are on-hand
  'admin.kerberos.wizard.step1.option.ad.condition.5': 'Java加密扩展（JCE）已建立在Ambari服务器主机和集群中的所有主机上.',//The Java Cryptography Extensions (JCE) have been setup on the Ambari Server host and all hosts in the cluster
  'admin.kerberos.wizard.step1.option.ipa': '存在的IPA',//'Existing IPA',
  'admin.kerberos.wizard.step1.option.ipa.condition.1': '集群主机已经加入到IPA域和节点中',//'Cluster hosts are joined to the IPA domain and hosts are registered in DNS',
  'admin.kerberos.wizard.step1.option.ipa.condition.2': '密码策略设置创建princials不过期或者krbPasswordExpiry属性可编辑',//'A password policy in place that sets no expiry for created principals or krbPasswordExpiry attribute is writable',
  'admin.kerberos.wizard.step1.option.ipa.condition.3': 'ipa管理krb5.conf设置 default_ccache_name = /tmp/krb5cc_%{uid}',//'The ipa managed krb5.conf sets default_ccache_name = /tmp/krb5cc_%{uid}',
  'admin.kerberos.wizard.step1.option.ipa.condition.4': 'Java Cryptography Extensions (JCE)已经安装在Ambari服务器主机和集群中的所有主机上',//'The Java Cryptography Extensions (JCE) have been setup on the Ambari Server host and all hosts in the cluster.',
  'admin.kerberos.wizard.step1.prerequisites.label': '以下先决条件需要 在此向导之前进行检查.',//Following prerequisites needs to be checked to progress ahead in the wizard
  'admin.kerberos.wizard.step2.info.body': '请配置kerberos相关属性.',//Please configure kerberos related properties
  'admin.kerberos.wizard.step3.task0.title': '安装Kerberos客户端',//Install Kerberos Client
  'admin.kerberos.wizard.step3.task1.title': '测试Kerberos客户端',//Test Kerberos Client
  'admin.kerberos.wizard.step3.notice.inProgress': '请等待....正在安装和测试Kerberos客户端',//Please wait while the Kerberos clients are being installed and tested
  'admin.kerberos.wizard.step3.notice.completed': 'Kerberos 服务已经安装完成.',//Kerberos service has been installed and tested successfully
  'admin.kerberos.wizard.progressPage.notice.inProgress': '请稍候集群正在采用Kerberos',//Please wait while cluster is being kerberized
  'admin.kerberos.wizard.step4.info.body': '正在为服务用户和Hadoop服务组件配置主体名称和密钥表位置.',//Configure principal name and keytab location for service users and hadoop service components
  'admin.kerberos.wizard.step5.info.body': '请在继续安装过程之前查看配置',//Please review the configuration before continuing the setup process
  'admin.kerberos.wizard.step5.moreInfoNonManual.body': '使用 <b>下载 CSV 按钮</b>, 你可以下载,其中包含将自动Ambari创建的主体和keytabs列表的csv文件.',//Using the <b>Download CSV button</b>, you can download a csv file which contains a list of the principals and keytabs that will automatically be created by Ambari
  'admin.kerberos.wizard.step5.moreInfoManual.body': '重要提示：使用<b>下载CSV</b>按钮来获得<b>必要</b>的由Ambari启用Kerberos集群中的主体和keytabs的列表。 <b>不要继续</b>,直到手动创建和分发的主体和keytabs到集群主机.',//Important: Use the <b>Download CSV</b> button to obtain a list of the <b>required</b> principals and keytabs that are needed by Ambari to enable Kerberos in the cluster. <b>Do not proceed</b> until you have manually created and distributed the principals and keytabs to the cluster hosts
  'admin.kerberos.wizard.step5.kdc_type.label': 'KDC类型',//KDC Type
  'admin.kerberos.wizard.step5.kdc_host.label': 'KDC主机',//KDC Host
  'admin.kerberos.wizard.step5.realm.label': '区域名称',//Realm Name
  'admin.kerberos.wizard.step5.ldap_url.label': 'LDAP URL',
  'admin.kerberos.wizard.step5.container_dn.label': 'DN容器',//Container DN
  'admin.kerberos.wizard.step5.executable_search_paths.label': '可执行文件路径',//Executable path
  'admin.kerberos.wizard.step5.exitWizard': '退出向导',//Exit Wizard
  'admin.kerberos.wizard.step5.downloadCSV': '下载CSV',//Download CSV
  'admin.kerberos.wizard.step5.group.label': 'Group user principals should be member of',
  'admin.kerberos.wizard.step6.task0.title' : '停止服务',//Stop Services
  'admin.kerberos.wizard.step6.task1.title' : '删除ATS',//Delete ATS
  'admin.kerberos.wizard.step6.notice.inProgress': '请稍候,正在停止服务.',//Please wait while services are being stopped
  'admin.kerberos.wizard.step6.notice.completed': '服务已停止成功.',//Services have been successfully stopped
  'admin.kerberos.wizard.step7.notice.inProgress': '请稍候集群正在采用Kerberos.',//Please wait while cluster is being kerberized
  'admin.kerberos.wizard.step7.notice.completed': 'Kerberos的已成功在集群上启用.',//Kerberos has successfully been enabled on the cluster
  'admin.kerberos.wizard.step8.notice.inProgress': '请稍候,正在启动和测试服务.',//Please wait while services are being started and tested
  'admin.kerberos.wizard.step8.notice.completed': '服务已在Kerberos环境中测试成功.',//Services have been successfully tested with kerberos environment
  'admin.kerberos.wizard.step8.notice.failed': '有些服务无法启动,并成功地执行测试。点击重试重新尝试,或单击完成以关闭向导并手动修复.',//Some services failed to start and execute tests successfully. Click Retry to attempt again or click Complete to dismiss the wizard and fix manually
  'admin.kerberos.wizard.step8.task0.title' : '启动和测试服务',//Start and Test Services

  'admin.kerberos.regenerate_keytabs.popup.body': '重新生成keytabs对于集群中的所有主机是一个破坏性操作,并且需要重新启动所有组件。或者,keytabs只能丢失主机和组件再生,此操作需要重新选择那些受影响的主机和服务.',//Regenerating keytabs for <strong>all</strong> hosts in the cluster is a disruptive operation, and requires all components to be restarted. Optionally, keytabs can be regenerated <strong>only</strong> for missing hosts and components, and this operation requires selectively restarting those affected hosts and services
  'admin.kerberos.regenerate_keytabs.checkbox.label': ' 只有产生缺失主机和零部件keytabs',//Only regenerate keytabs for missing hosts and components
  'admin.kerberos.regenerate_keytabs.popup.restart.body': '密钥表生成完成后,依靠他们提供服务的<strong>必须</strong>重新启动。这可以自动完成或人工完成.',//After keytab regerate is complete, services relying on them <strong>must</strong> be restarted. This can be done automatically, or manually
  'admin.kerberos.regenerate_keytabs.checkbox.restart.label': '自动重新启动密钥表再生后的组件',//Automatically restart components after keytab regeneration
  'admin.kerberos.service.alert.yarn': 'YARN日志和本地目录将被删除,ResourceManager的状态将被格式化为启用/禁用,这是Kerberos的一部分.',//YARN log and local dir will be deleted and ResourceManager state will be formatted as part of Enabling/Disabling Kerberos

  'admin.kerberos.disable.step1.task0.title': '停止服务',//Stop Services
  'admin.kerberos.disable.step1.task1.title': 'Unkerberize集群',//Unkerberize Cluster
  'admin.kerberos.disable.step1.task2.title': '删除Kerberos',// Remove Kerberos
  'admin.kerberos.disable.step1.task3.title': '启动服务',//Start Services
  'admin.kerberos.disable.unkerberize.header': 'Unkerberize集群',//Unkerberize cluster
  'admin.kerberos.disable.unkerberize.message': '你不能退出向导,集群是未采用Kerberos',//You cannot quit wizard while cluster is being unkerberized
  'admin.kerberos.disable.inProgress': '请稍候集群正在不采用Kerberos',//Please wait while cluster is being unkerberized
  'admin.kerberos.disable.notice.completed': '服务在没有Kerberos环境中测试成功.',//Services have been successfully tested without kerberos environment
  'admin.kerberos.wizard.step1.notice.inProgress': '请稍候集群正在不采用Kerberos',//Please wait while cluster is being unkerberized

  'admin.highAvailability':'高可用性 ',//High Availability
  'admin.highAvailability.button.enable':'启用 NameNode HA',//Enable NameNode HA
  'admin.highAvailability.button.disable':'禁用 NameNode HA',//Disable NameNode HA
  'admin.rm_highAvailability.button.enable':'启用 ResourceManager HA',//Enable ResourceManager HA
  'admin.rm_highAvailability.button.disable':'禁用 ResourceManager HA',//Disable ResourceManager HA
  'admin.ra_highAvailability.button.enable':'启用 Ranger 管理 HA ',//Enable Ranger Admin HA
  'admin.highAvailability.disabled':'NameNode HA 已经被禁用',//NameNode HA is disabled
  'admin.highAvailability.enabled':'NameNode HA 已经启用',//NameNode HA is enabled
  'admin.rm_highAvailability.disabled':'ResourceManager HA 已经禁用',//ResourceManager HA is disabled
  'admin.rm_highAvailability.enabled':'ResourceManager HA 已经启用',//ResourceManager HA is enabled
  'admin.highAvailability.confirmRollbackHeader':'确认回滚',//Confirm Rollback
  'admin.highAvailability.confirmRollbackBody':'即将回滚在向导中完成所有操作',//This will rollback all operations that were done in HA wizard
  'admin.highAvailability.confirmManualRollbackBody':'你正在使NameNode的HA的过程。如果现在退出,则必须按照说明书的指示作为Ambari用户指南的<i>回滚的NameNode HA</i>部分文件恢复到非HA设置。您确定要退出向导?',//You are in the process of enabling NameNode HA. If you exit now, you must follow manual instructions to revert back to the non-HA setup as documented in the Ambari User Guide\'s <i>Rolling Back NameNode HA</i> section.  Are you sure you want to exit the wizard
  'admin.highAvailability.error.hostsNum':'你必须至少有3台主机在集群中启用的NameNode HA.',//You must have at least 3 hosts in your cluster to enable NameNode HA
  'admin.highAvailability.error.namenodeStarted':'NameNode的必须运行在启用NameNode的HA前.',//NameNode must be running before you enable NameNode HA
  'admin.highAvailability.error.maintenanceMode':'激活NameNode HA,所有主节点的服务必须退出维护模式',//'In order to enable NameNode HA, all services, and hosts with master components need to be out of Maintenance Mode.',
  'admin.highAvailability.error.zooKeeperNum':'在你的集群中,你最少有3台ZooKeeper 服务器中需要启动HA的NameNode.',//You must have at least 3 ZooKeeper Servers in your cluster to enable NameNode HA
  'admin.rm_highAvailability.error.hostsNum':'你必须至少有3台主机在集群中启用HA的ResourceManager.',//You must have at least 3 hosts in your cluster to enable ResourceManager HA
  'admin.rm_highAvailability.error.zooKeeperNum':'你必须有至少3 台ZooKeeper的服务器在集群中启用HA的ResourceManager.',//You must have at least 3 ZooKeeper Servers in your cluster to enable ResourceManager HA
  'admin.rm_highAvailability.closePopup':'启用ResourceManager的HA向导正在进行中。您必须允许向导来完成Ambari是在可用状态。如果选择退出,则必须按照说明书的指示完成或恢复使ResourceManager的HA作为Ambari用户手册中记录。您确定要退出向导?',//Enable ResourceManager HA Wizard is in progress. You must allow the wizard to complete for Ambari to be in usable state. If you choose to quit, you must follow manual instructions to complete or revert enabling ResourceManager HA as documented in the Ambari User Guide. Are you sure you want to exit the wizard

  'admin.highAvailability.wizard.header':'启用的NameNode HA向导',//Enable NameNode HA Wizard
  'admin.highAvailability.wizard.progressPage.notice.inProgress':'请稍候,正在部署NameNode的HA.',//Please wait while NameNode HA is being deployed
  'admin.highAvailability.wizard.progressPage.header':'部署',//Deploy
  'admin.highAvailability.wizard.step1.header':'开始',//Get Started
  'admin.highAvailability.wizard.step1.nameserviceid.tooltip.title':'Nameservice ID',
  'admin.highAvailability.wizard.step1.nameserviceid.tooltip.content':'这将是NameNode的HA集群的ID,例如.如果您设置名称服务ID为</b>mycluster</b>,对于HDFS逻辑URI将是<b> HDFS：// myCluster中</b>.',//This will be the ID for the NameNode HA cluster. For example, if you set Nameservice ID to <b>mycluster</b>, the logical URI for HDFS will be <b>hdfs://mycluster</b>
  'admin.highAvailability.wizard.step1.nameserviceid':'Nameservice ID',
  'admin.highAvailability.wizard.step1.nameserviceid.error':'必须包含字母,数字和连字符。不能已连字符开始或结束.',//Must consist of letters, numbers, and hyphens. Cannot begin or end with a hyphen
  'admin.highAvailability.wizard.step2.header':'选择主机',//Select Hosts
  'admin.highAvailability.wizard.step3.header':'审阅',//Review
  'admin.highAvailability.wizard.step4.header':'创建检查点',//Create Checkpoint
  'admin.highAvailability.wizard.step4.error.nameNode':'NameNode的是在被停止的处理。请确保NameNode会运行成功创建检查点.',//NameNode is in the process of being stopped. Please make sure that namenode is running to create checkpoint successfully
  'admin.highAvailability.wizard.step5.header':'配置组件',//Configure Components
  'admin.highAvailability.wizard.step6.header':'初始化JournalNodes',//Initialize JournalNodes
  'admin.highAvailability.wizard.step7.header':'启动组件',//Start Components
  'admin.highAvailability.wizard.step8.header':'初始化元数据',//Initialize Metadata
  'admin.highAvailability.wizard.step9.header':'完成HA设置',//Finalize HA Setup
  'admin.highAvailability.wizard.step4.bodyHeader':'手动步骤要求：在NameNode的检查点创建',//Manual Steps Required: Create Checkpoint on NameNode
  'admin.highAvailability.wizard.step6.bodyHeader':'手册所需的步骤：初始化JournalNodes',//Manual Steps Required: Initialize JournalNodes
  'admin.highAvailability.wizard.step8.bodyHeader':'手册所需的步骤：初始化NameNode的HA元',//Manual Steps Required: Initialize NameNode HA Metadata

  'admin.rollbackHighAvailability.wizard.step1.header':'选择主机页',//Select Hosts page
  'admin.rollbackHighAvailability.wizard.step2.header':'创建检查点页',//Create Checkpoint page
  'admin.rollbackHighAvailability.wizard.step3.header':'进度页',//Progress page

  'admin.highAvailability.wizard.step5.notice.inProgress':'请等待向导配置组件.',//Please wait while the wizard configures the components
  'admin.highAvailability.wizard.step7.notice.inProgress':'请稍候向导启动组件.',//Please wait while the wizard starts the components
  'admin.highAvailability.wizard.step9.notice.inProgress':'请等待向导定型HA设.',//Please wait while the wizard finalizes the HA setup
  'admin.highAvailability.wizard.rollback.notice.inProgres':'还原为非HA设置',//Reverting Back to Non-HA Setup

  'admin.highAvailability.wizard.step5.header.title':'配置组件',//Configure Components
  'admin.highAvailability.wizard.step7.header.title':'启动组件',//Start Components
  'admin.highAvailability.wizard.step9.header.title':'完成HA设置',//Finalize HA Setup
  'admin.highAvailability.wizard.rollback.header.title':'还原为非HA设置.',//Reverting Back to Non-HA Setup

  'admin.highAvailability.wizard.step5.task0.title':'停止所有的服务',//Stop All Services
  'admin.highAvailability.wizard.step5.task1.title':'安装 其它的 NameNode',//Install Additional NameNode
  'admin.highAvailability.wizard.step5.task2.title':'安装 JournalNodes',//Install JournalNodes
  'admin.highAvailability.wizard.step5.task3.title':'配置HDFS',//Reconfigure HDFS
  'admin.highAvailability.wizard.step5.task4.title':'启动JournalNodes',//Start JournalNodes
  'admin.highAvailability.wizard.step5.task5.title':'禁用辅助的NameNode',//Disable Secondary NameNode

  'admin.highAvailability.wizard.step7.task0.title':'启动 ZooKeeper 服务',//Start ZooKeeper Servers
  'admin.highAvailability.wizard.step7.task1.title':'启动 NameNode',//Start NameNode

  'admin.highAvailability.wizard.step9.task0.title':'启动其它NameNode',//Start Additional NameNode
  'admin.highAvailability.wizard.step9.task1.title':'安装故障转移控制器',//Install Failover Controllers
  'admin.highAvailability.wizard.step9.task2.title':'启动故障切换控制器',//Start Failover Controllers
  'admin.highAvailability.wizard.step9.task3.title':'安装 PXF',//Install PXF
  'admin.highAvailability.wizard.step9.task4.title':'配置 HBase',//Reconfigure HBase
  'admin.highAvailability.wizard.step9.task5.title':'配置 Accumulo',//Reconfigure Accumulo
  'admin.highAvailability.wizard.step9.task6.title':'配置 HAWQ',//econfigure HAWQ
  'admin.highAvailability.wizard.step9.task7.title':'删除次要的NameNode',//Delete Secondary NameNode
  'admin.highAvailability.wizard.step9.task8.title':'启动所有的服务',//Start All Services
  'admin.highAvailability.wizard.step9.notice.completed':'NameNode的HA已成功启用.',//NameNode HA has been enabled successfully

  'admin.highAvailability.wizard.step3.curNameNode': '<b>集群 NameNode:</b> ',//<b>Current NameNode:</b>
  'admin.highAvailability.wizard.step3.addNameNode': '<b>其它的 NameNode:</b> ',//<b>Additional NameNode:</b>
  'admin.highAvailability.wizard.step3.secNameNode': '<b>次要的 NameNode:</b> ',//<b>Secondary NameNode:</b>
  'admin.highAvailability.wizard.step3.journalNode': '<b>JournalNode:</b> ',//<b>JournalNode:</b>
  'admin.highAvailability.wizard.step3.toBeInstalled': '安装必须',//TO BE INSTALLED
  'admin.highAvailability.wizard.step3.toBeDeleted': '删除必须',//TO BE DELETED
  'admin.highAvailability.wizard.step4.ckNotCreated':'检查点尚未创建',//Checkpoint not created yet
  'admin.highAvailability.wizard.step4.ckCreated':'创建检查点',//Checkpoint created
  'admin.highAvailability.step4.save.configuration.note':'这一配置使用 {0} HA向导创建',//This configuration is created by Enable {0} HA wizard
  'admin.highAvailability.wizard.step6.jsNoInit':'JournalNodes尚未初始化',//JournalNodes not initialized yet
  'admin.highAvailability.wizard.step6.jsInit':'JournalNodes初始化',//JournalNodes initialized
  'admin.highAvailability.wizard.step6.jnStopped':'所有JournalNodes应该在初始化之前启动',//All JournalNodes should be started before initializing
  'admin.highAvailability.wizard.step8.metaNoInit':'元数据尚未初始化',//Metadata not initialized yet
  'admin.highAvailability.wizard.step8.confirmPopup.body':'请确认您已继续运行之前的手动步骤.',//Please confirm that you have run the manual steps before continuing
  'admin.highAvailability.wizard.step9.hawq.confirmPopup.header':'Additional Steps Required for HAWQ',
  'admin.highAvailability.wizard.step9.hawq.confirmPopup.body':'You must refer to the HAWQ documentation under section ' +
     '"HAWQ Filespaces and High Availability Enabled HDFS" and perform the required manual steps to update the HAWQ filespace ' +
     'location. HAWQ will not use HDFS nameservice unless the steps have been completed successfully.',

  'admin.highAvailability.rollback.header':'禁用的NameNode HA向导',//Disable NameNode HA Wizard
  'admin.highAvailability.rollback.task0.title':'停止所有服务',//Stop All Services
  'admin.highAvailability.rollback.task1.title':'恢复HBase的配置',//Restore HBase Configurations
  'admin.highAvailability.rollback.task2.title':'恢复Accumulo配置',//Restore Accumulo Configurations
  'admin.highAvailability.rollback.task3.title':'恢复HAWQ配置',//Restore HAWQ Configurations
  'admin.highAvailability.rollback.task4.title':'停止故障切换控制器',//Stop Failover Controllers
  'admin.highAvailability.rollback.task5.title':'删除故障转移控制器',//Delete Failover Controllers
  'admin.highAvailability.rollback.task6.title':'删除 PXF',//Delete PXF
  'admin.highAvailability.rollback.task7.title':'停止其它的NameNode',//Stop Additional NameNode
  'admin.highAvailability.rollback.task8.title':'停止 NameNode',//Stop NameNode
  'admin.highAvailability.rollback.task9.title':'恢复 HDFS 配置',//Restore HDFS Configurations
  'admin.highAvailability.rollback.task10.title':'使用辅助NameNode',//Enable Secondary NameNode
  'admin.highAvailability.rollback.task11.title':'停止JournalNodes',//Stop JournalNodes
  'admin.highAvailability.rollback.task12.title':'删除 JournalNodes',//Delete JournalNodes
  'admin.highAvailability.rollback.task13.title':'删除 其它 NameNode',//Delete Additional NameNode
  'admin.highAvailability.rollback.task14.title':'启动所有的服务',//Start All Services
  'admin.highAvailability.rollback.notice.inProgress':'请等待向导恢复到非HA设置.',//Please wait while the wizard reverts back to the non-HA setup

  'admin.highAvailability.rollback.step2.body':
  '<ol>' +
  '<li>登录到主机的NameNode <b>{1}</b>.</li>' +
  '<li>设置NameNode的安全模式（只读模式）:' +
  '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
  '<li>Once in Safe Mode, create a Checkpoint:' +
  '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
  '</ol>',

  'admin.highAvailability.wizard.step8.body':
  '<div class="alert alert-info">' +
  '<ol>' +
  '<li>登录到主机的NameNode <b>{1}</b>.</li>' +
  '<li>通过运行初始化NameNode的自动故障转移的元数据:' +
  '<div class="code-snippet">sudo su {0} -l -c \'hdfs zkfc -formatZK\'</div></li>' +
  '</div>' +
  '<div class="alert alert-info">' +
  '<ol start="3">' +
  '<li>登录到其他主机的NameNode <b>{2}</b>.<br>' +
  '<div class="alert alert-warn"><strong>重要提示!</strong> 一定要登录到其他主机的NameNode.<br>他是从步骤1和2上方的不同的主机.</div>' +
  '</li>' +
  '<li>通过运行初始化为附加的NameNode元数据:' +
  '<div class="code-snippet">sudo su {0} -l -c \'hdfs namenode -bootstrapStandby\'</div></li>' +
  '</ol>' +
  '</div>' +
  '请继续一旦您完成上述步骤.',
  'admin.highAvailability.wizard.step6.body':
  '<ol>' +
  '<li>登录到主机的NameNode <b>{1}</b>.</li>' +
  '<li>初始化通过运行JournalNodes:' +
  '<div class="code-snippet">sudo su {0} -l -c \'hdfs namenode -initializeSharedEdits\'</div></li>' +
  '<li>您将进行一次Ambari检测到JournalNodes已成功初始化.</li>' +
  '</ol>',
  'admin.highAvailability.wizard.step4.body':
  '<ol>' +
  '<li>登录到主机的NameNode  <b>{1}</b>.</li>' +
  '<li>设置NameNode的安全模式（只读模式:' +
  '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
  '<li>ONCE在安全模式下,创建一个检查点:' +
  '<div class="code-snippet">sudo su {0} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
  '<li>您将进行一次Ambari检测到的NameNode处于安全模式和检查点已成功创建.</li>'+
  '<div class="alert alert-warn">如果您运行之前,下一步按钮启用了“第4步：创建检查点”命令,这意味着有一个最近的检查点和你可能不进行“第4步：创建检查点”命令运行了</div>' +
  '</ol>',
  'admin.highAvailability.wizard.step3.confirm.host.body':'<b>确认您的主机的选择.</b>',//Confirm your host selections
  'admin.highAvailability.wizard.step3.confirm.config.body':'<div class="alert alert-info">' +
  '<b>回顾配置更改.</b></br>' +//Review Configuration Changes
  '下面列出了将被向导对启用NameNode的HA配置更改。这些信息对于<b>查看仅</b>,而不是除了<b>编辑dfs.journalnode.edits.dir</b>的属性' +
  '</div>',
  'admin.highAvailability.wizard.step2.body':'选择将运行额外的NameNode的主机.<br/> 此外,' +
  ' 选择要运行JournalNodes的主机,编辑它存储的NameNod日志在容错方式.',//select the hosts to run JournalNodes, which store NameNode edit logs in a fault tolerant manner
  'admin.highAvailability.wizard.step1.body':'该向导将引导您完成您的集群上实现的NameNode HA.<br/>' +//This wizard will walk you through enabling NameNode HA on your cluster
  '一旦启用,你会除了你主动的NameNode运行备用的NameNode.<br/>' +//Once enabled, you will be running a Standby NameNode in addition to your Active NameNode
  '这样就可以自动执行故障切换的主备NameNode的配置.<br/><br/>' +//This allows for an Active-Standby NameNode configuration that automatically performs failover
  '以启用HA的过程涉及的组合的<b>自动化步骤</b>（将由向导处理）和 ' +//The process to enable HA involves a combination of <b>automated steps</b> (that will be handled by the wizard) and
  '<b>手动步骤</b>（你必须按顺序由向导的指示执行）.<br/><br/>' +//manual steps</b> (that you must perform in sequence as instructed by the wizard)
  '<b>当向导使用NameNode HA时,你应该计划集群维护窗口和集群停机时间.</b>',//You should plan a cluster maintenance window and prepare for cluster downtime when enabling NameNode HA
  'admin.highAvailability.wizard.step1.alert':'如果你有运行的HBase,请退出本向导和停止第一步的HBase.',//If you have HBase running, please exit this wizard and stop HBase first
  'admin.highAvailability.wizard.step1.hawq.alert':'<br/><br/>You will need to perform additional manual ' +
    'steps to update the HAWQ filespace location, once this wizard completes. Refer to the HAWQ documentation under section ' +
    '"HAWQ Filespaces and High Availability Enabled HDFS" for more information.',

  'admin.rm_highAvailability.wizard.header': '启用ResourceManager的HA向导',//Enable ResourceManager HA Wizard
  'admin.rm_highAvailability.wizard.step1.header': '开始',//Get Started
  'admin.rm_highAvailability.wizard.step1.body':'该向导将引导您完成您的集群上实现的ResourceManager HA.<br/>' +//This wizard will walk you through enabling ResourceManager HA on your cluster
  '一旦启用,你会除了你主动ResourceManager中运行一个备用的ResourceManager.<br/>' +//Once enabled, you will be running a Standby ResourceManager in addition to your Active ResourceManager
  '这样就可以自动执行故障切换的主备配置的ResourceManager.<br/><br/>' +//This allows for an Active-Standby ResourceManager configuration that automatically performs failover
  '<b>当向导使用NameNode HA时,你应该计划集群维护窗口和集群停机时间.</b>',//You should plan a cluster maintenance window and prepare for cluster downtime when enabling ResourceManager HA
  'admin.rm_highAvailability.wizard.step2.header': '选择主机',//Select Host
  'admin.rm_highAvailability.wizard.step2.body': '选择运行额外的ResourceManager主机',//Select a host that will be running the additional ResourceManager
  'admin.rm_highAvailability.wizard.step3.header': '审阅',
  'admin.rm_highAvailability.wizard.step3.confirm.host.body':'<b>确认您的主机的选择.</b>',//Confirm your host selections
  'admin.rm_highAvailability.wizard.step3.confirm.config.body':'<div class="alert alert-info">' +
  '<b>回顾配置更改.</b></br>' +//Review Configuration Changes
  '下面列出了将被向导对启用ResourceManager的HA配置更改。这些信息对于<b>查看只有</b>的和不可编辑.' +//The following lists the configuration changes that will be made by the Wizard to enable ResourceManager HA. This information is for <b> review only </b> and is not editable
  '</div>',
  'admin.rm_highAvailability.wizard.step3.currentRM': '当前的ResourceManager',//Current ResourceManager
  'admin.rm_highAvailability.wizard.step3.additionalRM': '额外的资源管理器',//Additional ResourceManager
  'admin.rm_highAvailability.wizard.step4.header': '配置组件',//Configure Components
  'admin.rm_highAvailability.wizard.step4.task0.title': '停止所需的服务',//Stop Required Services
  'admin.rm_highAvailability.wizard.step4.task1.title': '安装其他的ResourceManager',//Install Additional ResourceManager
  'admin.rm_highAvailability.wizard.step4.task2.title': '配置YARN',//Reconfigure YARN
  'admin.rm_highAvailability.wizard.step4.task3.title': '配置HDFS',//Reconfigure HDFS
  'admin.rm_highAvailability.wizard.step4.task4.title': '配置HAWQ',//Reconfigure HAWQ
  'admin.rm_highAvailability.wizard.step4.task5.title': '启动所有的服务',//Start All Services
  'admin.rm_highAvailability.wizard.step4.notice.inProgress':'请稍候,正在部署的ResourceManager HA.',//Please wait while ResourceManager HA is being deployed
  'admin.rm_highAvailability.wizard.step4.notice.completed':'ResourceManager HA成功启用.',//ResourceManager HA has been enabled successfully

  'admin.rm_highAvailability.wizard.header': '启用ResourceManager的HA向导',//Enable ResourceManager HA Wizard
  'admin.rm_highAvailability.wizard.step1.header': '开始',//Get Started
  'admin.rm_highAvailability.wizard.step1.body':'该向导将引导您完成您的集群上实现的ResourceManager HA.<br/>' +//This wizard will walk you through enabling ResourceManager HA on your cluster
  '一旦启用,你会除了你主动ResourceManager中运行一个备用的ResourceManager.<br/>' +//Once enabled, you will be running a Standby ResourceManager in addition to your Active ResourceManager
  '这样就可以自动执行故障切换的主备配置的ResourceManager.<br/><br/>' +//This allows for an Active-Standby ResourceManager configuration that automatically performs failover
  '<b>当向导使用NameNode HA时,你应该计划集群维护窗口和集群停机时间.</b>',//You should plan a cluster maintenance window and prepare for cluster downtime when enabling ResourceManager HA
  'admin.rm_highAvailability.wizard.step2.header': '选择主机',//Select Host
  'admin.rm_highAvailability.wizard.step2.body': '选择运行额外的ResourceManager主机',//Select a host that will be running the additional ResourceManager
  'admin.rm_highAvailability.wizard.step3.header': '审阅',
  'admin.rm_highAvailability.wizard.step3.confirm.host.body':'<b>确认您的主机的选择.</b>',//Confirm your host selections
  'admin.rm_highAvailability.wizard.step3.confirm.config.body':'<div class="alert alert-info">' +
  '<b>回顾配置更改.</b></br>' +//Review Configuration Changes
  '下面列出了将被向导对启用ResourceManager的HA配置更改。这些信息对于<b>查看只有</b>的和不可编辑.' +//The following lists the configuration changes that will be made by the Wizard to enable ResourceManager HA. This information is for <b> review only </b> and is not editable
  '</div>',
  'admin.rm_highAvailability.wizard.step3.currentRM': '当前的ResourceManager',//Current ResourceManager
  'admin.rm_highAvailability.wizard.step3.additionalRM': '额外的资源管理器',//Additional ResourceManager
  'admin.rm_highAvailability.wizard.step4.header': '配置组件',//Configure Components
  'admin.rm_highAvailability.wizard.step4.task0.title': '停止所需的服务',//Stop Required Services
  'admin.rm_highAvailability.wizard.step4.task1.title': '安装其他的ResourceManager',//Install Additional ResourceManager
  'admin.rm_highAvailability.wizard.step4.task2.title': '配置YARN',//Reconfigure YARN
  'admin.rm_highAvailability.wizard.step4.task3.title': '配置HDFS',//Reconfigure HDFS
  'admin.rm_highAvailability.wizard.step4.task4.title': '配置HAWQ',//Reconfigure HAWQ
  'admin.rm_highAvailability.wizard.step4.task5.title': '启动所有的服务',//Start All Services
  'admin.rm_highAvailability.wizard.step4.notice.inProgress':'请稍候,正在部署的ResourceManager HA.',//Please wait while ResourceManager HA is being deployed
  'admin.rm_highAvailability.wizard.step4.notice.completed':'ResourceManager HA成功启用.',//ResourceManager HA has been enabled successfully

  'admin.security.title':'Kerberos安全性尚未启用',//Kerberos security has not been enabled
  'admin.security.enabled': 'Kerberos安全启用',//Kerberos security is enabled
  'admin.security.disabled': 'Kerberos安全性被禁用',//Kerberos security is disabled
  'admin.security.button.enable':'启用安全',//Enable Security
  'admin.security.button.disable':'禁用安全',//Disable Security
  'admin.security.enable.popup.body': '我们将带领您添加安全向导',//We will walk you through add security wizard
  'admin.security.enable.popup.header': '添加安全',//Add security
  'admin.security.disable.popup.header': '删除安全',//Remove security
  'admin.security.disable.popup.body': '您将在集群上禁用的Kerberos。这将停止所有的服务集群中的并删除Kerberos的配置。 <strong>你确定你想用禁用的Kerberos继续？</strong>',//You are about to disable Kerberos on the cluster. This will stop all the services in your cluster and remove the Kerberos configurations. <strong>Are you sure you wish to proceed with disabling Kerberos?</strong>
  'admin.addSecurity.header': '启用安全向导',//Enable Security Wizard
  'admin.security.step1.header': '开始',//Get Started
  'admin.security.step2.header': '配置服务',//Configure Services
  'admin.security.step3.header': '创建主体的KeyTabs',//Create Principals and Keytabs
  'admin.security.step4.header': '保存并应用此配置',//Save and Apply Configuration
  'admin.security.step1.body.header': '重要提示:在配置Ambari来管理您的支持Kerberos的集群之前  ' +//Before configuring Ambari to manage your Kerberos-enabled cluster,
  '您必须在集群上执行以下手动步骤。一定要记录每个主机的密钥表文件和校长为每个Hadoop的服务的位置 ' +//you must perform the following manual steps on your cluster. Be sure to record the location of the keytab files for each host and the principals for each Hadoop service.
  '这个信息是必需的,以便使用该向导。',// This information is required in order to use the wizard.
  'admin.security.step1.body.instruction1': '安装,配置和启动您的Kerberos KDC',//Install, configure and start your Kerberos KDC
  'admin.security.step1.body.instruction2': '安装并在集群中的每个主机上配置Kerberos客户端',//Install and configure the Kerberos client on every host in the cluster
  'admin.security.step1.body.instruction3': '创建Hadoop的服务和主机Kerberos主体',//Create Kerberos principals for Hadoop services and hosts
  'admin.security.step1.body.instruction4': '在相应的主机上对每一个主体和place生成KeyTabs',//Generate keytabs for each principal and place on the appropriate hosts
  'admin.security.step1.body.instruction5': 'YARN服务的<b>应用时间轴</b>Server组件将被 <span class="text-error"><b>删除</b></span>是这个HDP堆栈版本启用安全的一部分',//<b>Application Timeline Server</b> component of YARN service will be <span class="text-error"><b>deleted</b></span> as part of enabling security in this HDP stack version
  'admin.security.step2.body.header': '配置Kerberos安全性',//Configure Kerberos security properties
  'admin.security.step3.notice': '您需要继续之前创建Kerberos主体和keytabs<br />'+//You need to create Kerberos principals and keytabs before proceeding.
  ' 下载CSV文件,并用它来创建一个脚本来生成对指定的主机的校长和keytabs一旦主体和keytabs被创建' +//Download the CSV file and use it to create a script to generate the principals and keytabs on specified hosts Once the principals and keytabs have been created,
  '请点击<i>应用</i>继续,如果您需要更改配置,单击<i>返回</i>.',// click on <i>Apply</i> to continue. If you need to make configuration changes, click <i>Back</i>
  'admin.security.step3.table.principal': '主体',//Principal
  'admin.security.step3.table.keytab': 'Keytab',
  'admin.security.step3.downloadCSV': '下载 CSV',//Download CSV
  'admin.security.step4.body.header': '应用Kerberos安全集群',//Applying kerberos security to the cluster
  'admin.security.step4.body.success.header' : '基于Kerberos的安全性在集群上启用。请稍候,服务是在安全模式下启动的.',//Kerberos-based security has been enabled on your cluster. Please wait while services are started in secure mode
  'admin.security.step4.body.failure.header' : '无法在集群上启用基于Kerberos的安全。你的集群将保持在非安全模式下运行.',//Failed to enable Kerberos-based security on your cluster. Your cluster will keep running in non-secure mode
  'admin.security.step4.save.configuration.note':'此配置是通过启用/禁用安全向导创建',//This configuration is created by Enable/Disable security wizard
  'admin.security.apply.configuration.error' : '未能安全配置应用到集群。请浏览到“配置服务”的步骤,并确保所有服务都用适当的值配置.',//Failed to apply secure configurations to the cluster. Please navigate to "Configure Services" step and make sure all services are configured with appropriate values
  'admin.security.disable.body.header' : '在集群上禁用Kerberos安全',//Disabling kerberos security on the cluster
  'admin.security.disable.body.success.header': '基于Kerberos的安全性已在集群上被禁用。请稍候,服务在非安全模式下启动.',//Kerberos-based security has been disabled on your cluster. Please wait while services are started in non-secure mode
  'admin.security.disable.body.failure.header': '无法禁用集群上基于Kerberos的安全性。你的集群将保持在安全模式下运行.',//Failed to disable Kerberos-based security on your cluster. Your cluster will keep running in secure mode
  'admin.security.disable.onClose': '你在你的集群上禁用安全性的过程中,您确定要退出?',//You are in the process of disabling security on your cluster, Are you sure you want to quit
  'admin.removeSecurity.header': '禁用安全',//Disable Security
  'admin.security.applying.config.header': '应用配置',//Applying Configurations
  'admin.security.applying.config.body':'当正在应用配置的时候,您不能退出向导',//You cannot quit wizard while configurations are being applied
  'admin.security.status.error' : '从Ambari服务器检索集群安全状态错误',//Error in retrieving cluster security status from Ambari server
  'admin.users.ldapAuthUsed':'LDAP验证被用来验证用户',//'LDAP Authentication is being used to authenticate users
  'admin.users.delete.yourself.message':'您不能删除你自己',//You cannot delete yourself
  'admin.users.delete.yourself.header':'删除警告',//Deleting warning

  'admin.users.delete.header':'删除{0}',

  'admin.users.addButton':'添加本地用户',//Add Local User
  'admin.users.editButton': '编辑本地用户',//Edit Local User
  'admin.users.delete':'删除',
  'admin.users.edit':'编辑',
  'admin.users.privileges':'管理员',//Admin
  'admin.users.type':'类型',//Type
  'admin.users.action':'活动',//Action
  'admin.users.passwordRetype':'重新输入密码',//Retype Password
  'admin.users.username':'用户名',//Username
  'admin.users.createSuccess': '用户创建成功.',//User successfully created
  'admin.users.createError': '创建用户时发生错误.',//Error occurred while user creating
  'admin.users.createError.passwordValidation': '密码不匹配',//Passwords are different
  'admin.users.createError.userNameExists': '用户名称已经存在',//User with the same name is already exists
  'admin.users.editError.requiredField': '这是必要的',//This is required

  'admin.access.showJobs':'启用非管理员用户作业选项卡',//Enable Jobs tab for non-admin users

  'admin.confirmUninstall':'确认卸载',//Confirm Uninstall
  'admin.cluster.stackVersion':'集群堆栈版本',//Cluster Stack Version
  'admin.cluster.upgradeAvailable':'可升级',//Upgrade available
  'admin.cluster.upgradeUnavailable':'不可升级',//Upgrade unavailable
  'admin.cluster.repositories.repositories':'资源库',//Repositories
  'admin.cluster.repositories.os':'系统',//OS
  'admin.cluster.repositories.baseUrl':'基础URL',//Base URL
  'admin.cluster.repositories.popup.header.success':'Repo 基础URL已经保存',//Repo Base URLs Saved
  'admin.cluster.repositories.popup.header.fail':'基础URL验证失败',//Base URL Validation Failed
  'admin.cluster.repositories.popup.body.success':'Repo基础URL已成功保存.',//The Repo Base URL has been saved successfully
  'admin.cluster.repositories.popup.body.fail':'基础URL验证失败并没有被保存.',//The Base URL failed validation and has not been saved
  'admin.cluster.repositories.invalidURLAttention': '<b>注意:</b> 请确保所有库URL都保存之前有效.',//Please make sure all repository URLs are valid before saving
  'admin.cluster.repositories.emptyURLattention':'<b>注意:</b>URL资源是必需的,然后才能保存.',// Repository URLs are REQUIRED before you can save
  'admin.cluster.repositories.skipValidation.tooltip':'<b>警告:</b> 只有高级用户才能使用这个选项。如果你想使用这个选择跳过基础URL验证是不行的',//This is for advanced users only. Use this option if you want to skip validation for Repository Base URLs

  'admin.misc.header': '服务用户和组',//Service Users and Groups
  'admin.misc.nothingToShow': '没有用户帐户显示',//No user accounts to display

  'admin.serviceAutoStart.title': '服务自动启动',//"Service Auto Start",
  'admin.serviceAutoStart.header': '服务自动启动配置',//"Service Auto Start Configuration",
  'admin.serviceAutoStart.header.text': 'Ambari服务已经设置开机自动启动。每个服务可以配置启动所有组件、主节点和工作节点或者可选。',//"Ambari services can be configured to start automatically on system boot. Each service can be configured to start all components, masters and workers, or selectively.",
  'admin.serviceAutoStart.body.text': '自动启动服务',//"Auto-Start Services",
  'admin.serviceAutoStart.tooltip.text': '{0} 组件启动',//"{0} components enabled",

  'admin.stackVersions.filter.notInstalled': "没有安装项 ({0})",
  'admin.stackVersions.filter.all': "所有的 ({0})",
  'admin.stackVersions.filter.upgradeReady': " 准备升级({0})",//Upgrade Ready
  'admin.stackVersions.filter.installed': "安装 ({0})",
  'admin.stackVersions.filter.current': "当前 ({0})",
  'admin.stackVersions.filter.upgrading': "正在升级/降级 ({0})",//Upgrade/Downgrade In Process
  'admin.stackVersions.filter.upgraded': " 即将完成 ({0})",//Ready to Finalize
  'admin.stackVersions.upgrade.start.fail.title':'无法启动升级',//Upgrade could not be started
  'admin.stackVersions.upgrade.installPackage.fail.title':'包无法安装',//Packages could not be installed
  'admin.stackVersions.upgrade.installPackage.fail.timeout':'请求超时.',//Request timed out

  'admin.stackVersions.editRepositories.info': '正在为你提供你配置的操作系统的基础URLL。取消所有其他操作系统.',//Provide Base URLs for the Operating Systems you are configuring. Uncheck all other Operating Systems
  'admin.stackVersions.editRepositories.validation.warning': '一些库的验证失败。如果您确定网址是否正确,更改基础URL或跳过验证.',//Some of the repositories failed validation. Make changes to the base url or skip validation if you are sure that urls are correct
  'admin.stackVersions.version.install.confirm': '在所有的主机上你将要安装包的版本{0}.',//You are about to install packages for version <strong>{0}</strong> on all hosts
  'admin.stackVersions.version.linkTooltip': '点击编辑库',//Click to Edit Repositories
  'admin.stackVersions.version.hostsTooltip': '点击查看主机',//Click to List Hosts
  'admin.stackVersions.version.emptyHostsTooltip': '没有主机到列表',//No Hosts to List
  'admin.stackVersions.version.notInstalled': "未安装",//Not Installed
  'admin.stackVersions.version.hostsInfoTooltip': "有{0}主机不需要安装的软件包：<LI>{1}维护模式</li> <li> {2}不要求</li>",//There are {0} hosts that do not need packages installed:<li>{1} Maintenance Mode</li><li>{2} Not Required</li>
  'admin.stackVersions.manageVersions': "管理版本",//Manage Versions
  'admin.stackVersions.manageVersions.popup.body': '你即将离开<b>集群管理</b>的接口,并转到<b> Ambari管理</b>的接口。您可以通过跳转到信息中心链接, 在Ambari管理>集群 部分返回集群管理.',//You are about to leave the <b>Cluster Management</b> interface  and go to the <b>Ambari Administration</b> interface. You can return to cluster management by using the “Go to Dashboard” link in the Ambari Administration > Clusters section
  'admin.stackVersions.version.installNow': "安装软件包",//Install Packages
  'admin.stackVersions.version.reinstall': "重新安装软件包",//Reinstall Packages
  'admin.stackVersions.version.performUpgrade': "执行升级",//Perform Upgrade
  'admin.stackVersions.version.upgrade.pause': "升级：需要采取的行动",//Upgrade: Action Required
  'admin.stackVersions.version.upgrade.notFinalized.warning': "此次升级还没有最后确定。这个集群被证实是实用后,别忘了尽快完成升级（强烈建议在几天内完成）,在未格式化状态运行集群会导致HDFS上额外的资源需求.",//The upgrade has not been finalized yet. After the cluster is verified to be functional, do not forget to finalize the upgrade as soon as possible (within a couple of days is highly recommended) as running the cluster in unfinalized state causes extra resource requirements on HDFS
  'admin.stackVersions.version.upgrade.running': "升级：正在进行",//Upgrade: In Process
  'admin.stackVersions.version.upgrade.aborted': "升级：中止",//Upgrade: Aborted
  'admin.stackVersions.version.upgrade.suspended': "升级：暂停",//Upgrade: Paused
  'admin.stackVersions.version.downgrade.pause': "降级：需要采取的行动",//Downgrade: Action Required
  'admin.stackVersions.version.downgrade.running': "降级:正在进行",//Downgrade: In Process
  'admin.stackVersions.version.downgrade.aborted': "降级:终止",//Downgrade: Aborted
  'admin.stackVersions.version.downgrade.suspended': "降级:暂停",//Downgrade: Paused
  'admin.stackUpgrade.state.paused.fail.header': "暂停,升级失败",//Pause Upgrade failed
  'admin.stackUpgrade.state.paused.fail.body': "升级不能暂停。 稍后再试.",//Upgrade could not be paused. Try again later
  'admin.stackDowngrade.state.paused.fail.header': '终止下载更新失败',//"Pause Downgrade failed",
  'admin.stackDowngrade.state.paused.fail.body': '下载更新不能被终止,请稍后再试',//"Downgrade could not be paused. Try again later.",

  'admin.stackVersions.version.upgrade.upgradeOptions.header': "升级选项",//Upgrade Options
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.version': '您将要升级成<b>{0}</b>.',//You are about to perform an upgrade to <b>{0}</b>
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.method': "选择升级方法",//Choose the upgrade method
  'admin.stackVersions.version.upgrade.upgradeOptions.bodyMsg.tolerance': "选择可选升级容错性:",//Select optional upgrade failure tolerance
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.option1': "从组件故障中跳过所有",//Skip all Slave Component failures
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.option2': "跳过所有业务检查故障",//Skip all Service Check failures
  'admin.stackVersions.version.upgrade.upgradeOptions.tolerance.tooltip': "在一个大型集群上进行升级时,这些升级容错性选项是有用的,要最大限度地减少用户干预.",//These upgrade failure tolerance options are useful when performing an upgrade on a large cluster and you want to minimize user intervention
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.title': "在线升级",//Rolling Upgrade
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.description': "升级服务仍然正常运行。影响减至最低,但升级慢.",//Services remain running while the upgrade is performed. Minimized disruption but slower upgrade
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.title': "快速升级",//Express Upgrade
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.description': "服务执行升级时停止。会导致停机,但是更快的升级.",//Services are stopped while the upgrade is performed. Incurs downtime, but faster upgrade
  'admin.stackVersions.version.upgrade.upgradeOptions.errors_bypassed': "Bypassed errors,<br/>proceed at your own risk.",
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.rerun':'重新运行检查',//Rerun Checks
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.title':'检查:',///Checks
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.checking': '检查中...',//Checking
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.failed.title': '检查失败',//Check failed
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.msg.failed.link': '重新运行',//Rerun
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.allPassed':'通过',//Passed
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.allPassed.msg':'通过了所有检查',//All checks passed
  'admin.stackVersions.version.upgrade.upgradeOptions.preCheck.failed.tooltip':'没有选项',//Option not available
  'admin.stackVersions.version.upgrade.upgradeOptions.notAllowed':'不允许是当前版本',//Not allowed by the current version
  'admin.stackVersions.version.upgrade.upgradeOptions.EU.confirm.msg': '您即将快速的从 <b>{0}</b>升级到 <b>{1}</b>,这将导致集群有停机时间。你确定要继续?',//You are about to perform an <b>Express Upgrade</b> from <b>{0}</b> to <b>{1}</b>. This will incur cluster downtime. Are you sure you want to proceed
  'admin.stackVersions.version.upgrade.upgradeOptions.RU.confirm.msg': '您即将在线从<b>{0}</b>升级到 <b>{1}</b>,你确定要继续?',//You are about to perform a <b>Rolling Upgrade</b> from <b>{0}</b> to <b>{1}</b>. Are you sure you want to proceed
 'admin.stackVersions.version.upgrade.alertsWarning': 'Cluster alerts will still be visible and recorded in Ambari but notifications (such as Email and SNMP) will be suppressed during the upgrade.',

  'admin.stackVersions.version.column.showDetails': '展示详细',//"Show Details",
  'admin.stackVersions.version.column.showDetails.title': '版本详细',//"Version Details",

  'admin.stackVersions.hosts.popup.header.current': "当前",//Current
  'admin.stackVersions.hosts.popup.header.installed': "安装",//Installed
  'admin.stackVersions.hosts.popup.header.not_installed': "未安装",//Not installed
  'admin.stackVersions.hosts.popup.header': "版本状态: {0}",//Version Status
  'admin.stackVersions.hosts.popup.title': "{0} 在{2}这台主机上的版本是{1} :",//{0} Version is {1} on {2} hosts
  'admin.stackVersions.hosts.popup.primary': "转到主机",//Go to Hosts

  'admin.stackVersions.details.install.hosts.popup.title': "安装{0}的版本",//Install {0} version

  'admin.stackUpgrade.preCheck.warning.message': "{0} Warning {1}",
  'admin.stackUpgrade.preCheck.bypass.message': "{0} Error {1}",
  'admin.stackUpgrade.preCheck.fail.message': "{0} Required {1}",

  'admin.stackUpgrade.finalize.later': "完成后",//Finalize Later
  'admin.stackUpgrade.finalize.message.upgrade': "您的集群版本已经升级点击<b>完成</b>如果您准备完成升级并提交到新版本,我们强烈建议你运行你的集群上测试,以确保它是敲定之前全面投入运作,一旦升级确定你不能回到原来的版本." ,//Your cluster version has been upgraded Click on <b>Finalize</b> when you are ready to finalize the upgrade and commit to the new version  You are strongly encouraged to run tests on your cluster to ensure it is fully operational before finalizing. <b>You cannot go back to the original version once the upgrade is finalized.</b>",
  'admin.stackUpgrade.finalize.message.downgrade': "您的集群版本已经降级,请点击<b>完成</b>当你准备敲定降级并提交到新版本,我们强烈建议您到集群,以确保它在运行测试是敲定之前全面运作,<b>您不能再回到原来的版本,一旦降级确定。</b>",//Your cluster version has been downgraded, Click on <b>Finalize</b> when you are ready to finalize the downgrade and commit to the new version, You are strongly encouraged to run tests on your cluster to ensure it is fully operational before finalizing,<b>You cannot go back to the original version once the downgrade is finalized.</b>
  'admin.stackUpgrade.finalize.message.skippedServiceChecks': "在升级过程中,以下服务检查失败,被跳过:",//During the upgrade, checks for the following services failed and were skipped
  'admin.stackUpgrade.finalize.message.testServices': "强烈建议您升级确定之前测试这些服务.",//You are strongly recommended to test these services before finalizing upgrade
  'admin.stackUpgrade.failedHosts.message': "升级没有成功",//Upgrade did not succeed on
  'admin.stackUpgrade.failedHosts.showHosts': "{0} 主机",//{0} hosts
  'admin.stackUpgrade.failedHosts.options': "您的选择:",//Your options
  'admin.stackUpgrade.failedHosts.options.first': "<b>暂停升级</b>中,删除不健康的主机,并返回升级向导继续.",//<b>Pause Upgrade</b>, delete the unhealthy hosts and return to the Upgrade Wizard to Proceed
  'admin.stackUpgrade.failedHosts.options.second': "执行<b>降级</b>中,这将恢复所有主机到以前的堆栈版本.",//Perform a <b>Downgrade</b>, which will revert all hosts to the previous stack version
  'admin.stackUpgrade.failedHosts.options.third': "忽略这些失败和现在<b>继续</B>（后来调和失败）.",//Ignore these failures and <b>Proceed</b> for now (reconcile the failures later)
  'admin.stackUpgrade.failedHosts.header': "主机失败",//Failed Hosts
  'admin.stackUpgrade.failedHosts.subHeader': "{0}主机 升级失败",//pgrade failed on {0} hosts
  'admin.stackUpgrade.failedHosts.details': "打开详情",//Open Details
  'admin.stackUpgrade.doThisLater': "以后再说",//Do This Later
  'admin.stackUpgrade.pauseUpgrade': "暂停升级",//Pause Upgrade
  'admin.stackUpgrade.pauseDowngrade': "暂停降级",  //Pause Downgrade
  'admin.stackUpgrade.pauseUpgrade.warning': "你将要停止{0}。你可以继续{0}，过一段时间终止，但是当升级停止，<strong style='color:red;'>不要</strong>有任何操作。比如："+//"You are about to Pause the {0}. You can return to continue the {0} and finalize at a later time but while the upgrade is paused, you <strong style='color:red;'>SHOULD NOT</strong> perform any cluster changes. For example:" +
  '<ul><li>不要添加删除节点</li>' +//"<ul><li>DO NOT add / remove hosts on the cluster</li>" +
  '<li>不要添加删除服务</li>' +//"<li>DO NOT add / remove services on the cluster</li>" +
  '<li>不要开启停止Kerberos</li>' +//"<li>DO NOT enable / disable Kerberos</li>" +
  '<li>不要开启停止 HA</li>' +//"<li>DO NOT enable / disable HA</li>" +
  '<li>不要做服务配置任何大规模修改</li></ul>' +//"<li>DO NOT make any drastic changes to service configurations</li></ul>" +
  '<strong>必须</strong> 执行{0}，在执行任何重要修改前终止',//"You <strong>MUST</strong> continue the {0} and finalize <strong>BEFORE</strong> performing <strong>ANY</strong> significant changes to the cluster.",
  'admin.stackUpgrade.downgrade.proceed': "降级继续",//Proceed with Downgrade
  'admin.stackUpgrade.downgrade.body': "你确定要中止升级过程,并降级到的<b>{0}</b>?",//Are you sure you wish to abort the upgrade process and downgrade to <b>{0}</b>
  'admin.stackUpgrade.downgrade.retry.body': "你确定你想要重试降级到的<b>{0}</b>?",//Are you sure you wish to retry downgrade to <b>{0}</b>
  'admin.stackUpgrade.upgrade.confirm.body': "您将要执行升级到{0}.",//You are about to perform an upgrade to {0}
  'admin.stackUpgrade.upgrade.retry.confirm.body': "您将要重新尝试升级到{0}.",//You are about to retry an upgrade to {0}
  'admin.stackUpgrade.title': "堆栈和版本",//Stack and Versions
  'admin.stackUpgrade.state.inProgress': "升级进展",//Upgrade in Progress
  'admin.stackUpgrade.state.paused': "升级暂停",//Upgrade Paused
  'admin.stackUpgrade.state.aborted': "中止升级",//Upgrade Aborted
  'admin.stackUpgrade.state.completed': "升级完成",//Upgrade Finished
  'admin.stackUpgrade.state.inProgress.downgrade': "降级进展",//Downgrade in Progress
  'admin.stackUpgrade.state.paused.downgrade': "降级暂停",//Downgrade Paused
  'admin.stackUpgrade.state.aborted.downgrade': "降级终止",//Downgrade Aborted
  'admin.stackUpgrade.state.completed.downgrade': "降级完成",//Downgrade Finished
  'admin.stackUpgrade.dialog.header': "{0} 到 {1}",
  'admin.stackUpgrade.dialog.downgrade.header': "降级到 {0}",//Downgrade to {0}
  'admin.stackUpgrade.dialog.operationFailed': "这个操作失败.",//This operation failed
  'admin.stackUpgrade.dialog.stop': "停止升级",//Stop Upgrade
  'admin.stackUpgrade.dialog.continue': "忽略并继续",//Ignore and Proceed
  'admin.stackUpgrade.dialog.cancel': "取消升级",//Cancel Upgrade
  'admin.stackUpgrade.dialog.inProgress': "现在运行:",//Now Running
  'admin.stackUpgrade.dialog.keepRunning': "请后台运行升级",//Keep running Upgrade in background
  'admin.stackUpgrade.dialog.failed': "失败:",//Failed on
  'admin.stackUpgrade.dialog.manual.slaveComponentFailures.title': "属于组件故障",//Slave Component Failures
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.title': "服务检查失败",//Service Check Failures
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.msg1': "以下服务检查失败,但被跳过:",//The following service checks failed but were skipped
  'admin.stackUpgrade.dialog.manual.serviceCheckFailures.msg2': "在继续操作之前.你必须暂停升级和解决上述选项的问题.",//You have the option to Pause Upgrade and fix the above issue(s) before proceeding
  'admin.stackUpgrade.dialog.manual': "需要手动步骤",//Manual steps required
  'admin.stackUpgrade.dialog.manualDone': "我已经完成上面的手动步骤.",//I have performed the manual steps above
  'admin.stackUpgrade.dialog.closeProgress': "升级正在进行中。 \n如果关闭此窗口,将升级保持后台运行.",//Upgrade is in progress. \n If you dismiss this window, Upgrade will keep running in background
  'admin.stackUpgrade.dialog.closePause': "升级已暂停。 \n如果你关闭此窗口,即可恢复以后升级.",//Upgrade is paused. \n If you dismiss this window, you can resume Upgrade later
  'admin.stackUpgrade.dialog.aborted': "升级被中止。 \n您也可以降级或重试升级.",//Upgrade is aborted. \n You can either downgrade or retry upgrade
  'admin.stackUpgrade.dialog.downgrade.aborted': "降级被中止。 \n您可以重试降级.",//Downgrade is aborted. \n You can retry downgrade
  'admin.stackUpgrade.dialog.suspended': "升级已暂停",//Upgrade is Paused
  'admin.stackUpgrade.dialog.suspended.downgrade': "降级暂停",//Downgrade is Paused
  'admin.stackUpgrade.dialog.resume': "继续升级",//Resume Upgrade
  'admin.stackUpgrade.dialog.resume.downgrade': "恢复降级",//Resume Downgrade
  'admin.stackUpgrade.dialog.details.open': "展示详情",//show details
  'admin.stackUpgrade.dialog.details.hide': "隐藏细节",//hide details
  'admin.stackUpgrade.dialog.notActive': "等待执行下一个任务...",//Waiting to execute the next task
  'admin.stackUpgrade.dialog.prepareUpgrade.header': "准备升级...",//Preparing the Upgrade
  'services.service.start':'Start',//启动
  'services.service.stop':'停止',
  'services.service.metrics':'图表',
  'services.nothingToAdd':'没有什么要添加',//Nothing to add
  'services.service.summary.version':'版本',
  'services.service.summary.viewHost':'视图主机',//View Host
  'services.service.summary.viewHosts':'视图主机数',
  'services.service.summary.clientOnlyService.ToolTip':'只有客户端服务',//Client-only service
  'services.service.summary.JournalNodesLive':'JournalNodes现场',//JournalNodes Live
  'services.service.summary.mapreduce2.client':'MapReduce2 客户端',
  'services.service.summary.mapreduce2.clients':'MapReduce2 客户端数',
  'services.service.summary.nodeManagersLive':'NodeManagers 现场',
  'services.service.summary.TrackersLive':'Trackers 现场',
  'services.service.summary.RegionServersLIVE':'RegionServers 现场',
  'services.service.summary.PhoenixServersLIVE':'Phoenix 查询服务现场',
  'services.service.summary.GangliaMonitorsLIVE':'Ganglia现场监控',
  'services.service.summary.SupervisorsLIVE':'Supervisors 现场',
  'services.service.summary.nameNode':'NameNode Web UI',
  'services.service.summary.nameNodeUptime':'NameNode 运行时间',//NameNode Uptime
  'services.service.summary.nameNodeHeap':'NameNode Heap',
  'services.service.summary.nameNode.active':'主动节点',//Active NameNode,
  'services.service.summary.nameNode.standby':'备用的 NameNode',//Standby NameNode
  'services.service.summary.pendingUpgradeStatus':'更新状态',
  'services.service.summary.pendingUpgradeStatus.notFinalized':'更新未完成',
  'services.service.summary.pendingUpgradeStatus.notPending':'没有更新',
  'services.service.summary.safeModeStatus':'安全模式状态',
  'services.service.summary.safeModeStatus.inSafeMode':'安全模式',
  'services.service.summary.safeModeStatus.notInSafeMode':'不在安全模式',
  'services.service.summary.dataNodes':'DataNodes',
  'services.service.summary.diskCapacity':'HDFS 磁盘容量',
  'services.service.summary.blocksTotal':'块总数',
  'services.service.summary.blockErrors':'块错误数',
  'services.service.summary.totalFiles':'文件和文件夹总数',
  'services.service.summary.jobTracker':'JobTracker',
  'services.service.summary.jobTrackerWebUI':'JobTracker Web UI',
  'services.service.summary.jobTrackerUptime':'JobTracker 运行时间',
  'services.service.summary.trackersLiveTotal':'Trackers',
  'services.service.summary.trackersBlacklistGraylist':'Trackers',
  'services.service.summary.jobTrackerHeap':'JobTracker Heap',
  'services.service.summary.totalSlotsCapacity':'总容量插槽',//Total Slots Capacity
  'services.service.summary.totalJobs':'Total Jobs',
  'services.service.summary.currentSlotUtiliMaps':'Map Slots',
  'services.service.summary.currentSlotUtiliReduces':'Reduce Slots',
  'services.service.summary.tasksMaps':'Tasks: Maps',
  'services.service.summary.tasksReduces':'Tasks: Reduces',
  'services.service.summary.hbaseMaster':'HBase Master Web UI',
  'services.service.summary.regionServerCount':'RegionServer 计数',//RegionServer Count
  'services.service.summary.regionInTransition':'地区过渡',//Region In Transition
  'services.service.summary.masterStarted':'Master 启动',//Master Started
  'services.service.summary.masterActivated':'Master 激活',//Master Activated
  'services.service.summary.averageLoad':'平均负荷',//Average Load
  'services.service.summary.masterHeap':'Master Heap',
  'services.service.summary.moreStats':'更多的统计数据在这里',//more stats here
  'services.service.summary.clientCount': '{0} 客户端主机数',//{0} Client Hosts
  'services.service.summary.historyServer': '历史服务 Web UI',
  'services.service.summary.hiveserver2.jdbc.url.text': ' JDBC URL',
  'services.service.summary.hiveserver2.endpoint.tooltip.text':'JDBC connection string for {0}',
  'services.service.summary.hiveserver2.endpoint.value':'jdbc:hive2://{0}/;serviceDiscoveryMode=zooKeeper;zooKeeperNamespace={1}',
  'services.service.actions.downloadClientConfigs':'下载客户端配置文件',//Download Client Configs
  'services.service.actions.downloadClientConfigs.fail.noConfigFile':'组件定义没有配置文件',//No configuration files defined for the component
  'services.service.actions.downloadClientConfigs.fail.popup.header':'{0} 的配置文件',//{0} Configs
  'services.service.actions.downloadClientConfigs.fail.popup.body.noErrorMessage':'{0}配置文件的生成失败. ',//Generation of {0} configurations file has failed
  'services.service.actions.downloadClientConfigs.fail.popup.body.errorMessage':'{0}配置文件的生成失败.{1}错误: <br /><pre><span class="text-error">{2}</span></pre>',//Generation of {0} configurations file has failed with {1} error: <br /><pre><span class="text-error">{2}</span></pre>
  'services.service.actions.downloadClientConfigs.fail.popup.body.question':'你想再试一次?',//Do you want to try again
  'services.service.actions.deleteService':'删除服务',//'Delete Service',
  'services.service.actions.run.rebalancer':'运行平衡程序',//Run Rebalancer
  'services.service.actions.run.rebalanceHdfsNodes':'再平衡HDFS',//Rebalance HDFS
  'services.service.actions.run.rebalanceHdfsNodes.title':'HDFS 再平衡器',//HDFS Rebalance
  'services.service.actions.run.rebalanceHdfsNodes.prompt':'平衡阈值（磁盘容量的百分比）:',//Balancer threshold (percentage of disk capacity)
  'services.service.actions.run.rebalanceHdfsNodes.promptTooltip':'磁盘容量百分比。这将覆盖默认的阈值',//Percentage of disk capacity. This overwrites the default threshold
  'services.service.actions.run.rebalanceHdfsNodes.promptError':'值应在1到100之间的数字',//Value should be number between 1 and 100
  'services.service.actions.run.rebalanceHdfsNodes.context':'再平衡HDFS',//Rebalance HDFS
  'services.service.actions.run.rebalanceHdfsNodes.error':'Error during remote command: ',//Error during remote command
  'services.service.actions.run.yarnRefreshQueues.title':'ResourceManager刷新队列',//Refresh Queues ResourceManager
  'services.service.actions.run.yarnRefreshQueues.menu':'刷新YARN容量调度',//Refresh YARN Capacity Scheduler
  'services.service.actions.run.yarnRefreshQueues.context':'刷新YARN容量调度',//Refresh YARN Capacity Scheduler
  'services.service.actions.run.yarnRefreshQueues.error':'远程命令时出错: ',//Error during remote command
  'services.service.actions.run.executeCustomCommand.menu':'{0}',
  'services.service.actions.run.executeCustomCommand.context':'执行 {0}',
  'services.service.actions.run.executeCustomCommand.error':'运程命令错误: ',//Error during remote command
  'services.service.actions.run.compaction':'运行压缩',//Run Compaction
  'services.service.actions.run.smoke':'运行服务检查',//Run Service Check
  'services.service.actions.reassign.master':'移除 {0}',
  'services.service.actions.reassign.master.hive':'移除 HiveServer2, WebHCat Server, MySQL Server',
  'services.service.actions.manage_configuration_groups':'管理配置组...',//Manage Configuration Groups
  'services.service.actions.run.startLdapKnox.title':'开始演示LDAP Knox Gateway',//Start Demo LDAP Knox Gateway
  'services.service.actions.run.startLdapKnox.context':'开始演示LDAP',//Start Demo LDAP
  'services.service.actions.run.stopLdapKnox.title':'停止演示LDAP Knox Gateway',//Stop Demo LDAP Knox Gateway
  'services.service.actions.run.stopLdapKnox.context':'停止演示LDAP',//Stop Demo LDAP
  'services.service.actions.run.startStopLdapKnox.error': '远程命令时出错: ',//Error during remote command

  // Hive Server Interactive custom command to restart LLAP
  'services.service.actions.run.restartLLAP':'重启LLAP',//'Restart LLAP',
  // Node Manager custom command to refresh YARN Apps on Slider
  'services.service.actions.run.createYARNDirectories':'创建YARN目录',//'Create YARN Directories',
  'services.service.actions.run.createYARNDirectories.confirmation':'请确认，这个操作将在NodeManager创建必要的文件夹，在slider运行YARN应用必须，例如LLAP。该操作不需要重启',//'Please confirm. This will create necessary folders on the NodeManagers required for running YARN Apps on Slider, such as LLAP. This does not need to restart NodeManagers.',
  'services.service.actions.run.immediateStopHawqService.context':'停止HAWQ服务（快速模式）',//'Stop HAWQ Service (Immediate Mode)',
  'services.service.actions.run.immediateStopHawqService.label':'停止HAWQ服务（快速模式）',//'Stop HAWQ Service (Immediate Mode)',
  'services.service.actions.run.immediateStopHawqSegment.label':'停止（快速模式）',//'Stop (Immediate Mode)',
  'services.service.actions.run.immediateStopHawqSegment.context':'停止HAQS段（快速模式）',//'Stop HAWQ Segment (Immediate Mode)',
  'services.service.actions.run.resyncHawqStandby.context':'重新同步HAWQ备用master',//'Re-Sync HAWQ Standby Master',
  'services.service.actions.run.resyncHawqStandby.label':'重新同步HAWQ备用master',//'Re-Synchronize HAWQ Standby Master',
  'services.service.actions.run.clearHawqCache.label':'清空HAWQ上HDFS元数据缓存',//'Clear HAWQ\'s HDFS Metadata Cache',
  'services.service.actions.run.runHawqCheck.label':'运行HAWQ配置检测',//'Run HAWQ Config Check',
  'services.service.actions.manage_configuration_groups.short':'管理配置组',//'Manage Config Groups',
  'services.service.actions.serviceActions':'服务操作',//'Service Actions',

  'services.service.delete.popup.header': '删除服务',//'Delete Service',
  'services.service.delete.popup.kerberos': 'Kerberos服务<i>不能删除</i>，因为Kerberos' + //'The Kerberos Service <i>cannot be deleted</i> because Kerberos is ' +
  '当前正启动。Kerberos服务只能在禁用Kerberos时删除' + //'currently enabled, and in use by the cluster. The Kerberos Service can only be removed by disabling Kerberos,' +
  '可以通过界面<b>系统管理 > Kerberos</b> ，选择<b>禁用Kerberos</b>', //' which can be found by browsing to <b>Admin > Kerberos</b> and selecting <b>Disable Kerberos</b>.',
  'services.service.delete.configVersionNote': '在{0}删除后更新配置文件',//'Update configs after {0} has been removed',
  'services.service.delete.configVersionNote.plural': '在{0}删除后更新配置文件',//'Update configs after {0} have been removed',
  'services.service.delete.lastService.popup.body': '<b>{0}</b>服务不能被删除，至少一个服务已经安装',//'The <b>{0}</b> service can\'t be deleted, at least one service must be installed.',
  'services.service.delete.popup.dependentServices': '优先删除<b>{0}</b>,你必须删除以下依赖服务：',//'Prior to deleting <b>{0}</b>, you must delete the following dependent services:',
  'services.service.delete.popup.mustBeStopped': '优先删除<b>{0}</b>,你必须停止服务和组件',//'Prior to deleting <b>{0}</b>, you must stop the service and each slave and master component.',
  'services.service.delete.popup.mustBeStopped.dependent': '跟依赖服务<b>{0}</b>一起',//' Along with dependent service <b>{0}</b>.',
  'services.service.delete.popup.warning': '<b>{0}</b>服务将被Ambari删除,'+//'The <b>{0} service will be removed from Ambari and all configurations' +
  '所有配置和配置历史将丢失',//' and configuration history will be lost.</b>',
  'services.service.delete.popup.warning.dependent': '<b>注意：依赖服务{0}也将被删除</b>',//'<b> Note: The dependent {0} service will be removed too.</b>',
  'services.service.confirmDelete.popup.header': '确认删除',//'Confirm Delete',
  'services.service.confirmDelete.popup.body': '必须确认删除<b>{0}</b>通过在确认框拼写"{1}"' + //'You must confirm delete of <b>{0}</b> by typing "{1}"' +
  '<b>该操作不可恢复，所有配置历史将丢失</b>',//' in the confirmation box. <b>This operation is not reversible and all configuration history will be lost.</b>',
  'services.service.confirmDelete.popup.body.type': '拼写"{0}"确认',//'Type "{0}" to confirm',
  'services.service.confirmDelete.popup.body.dependent': '必须确认删除<b>{0}</b>和<b>{1}</b>通过在确认框拼写"{2}"' + //'You must confirm delete of <b>{0}</b> and <b>{1}</b> by typing "{2}"' +
  '<b>该操作不可恢复，所有配置历史将丢失</b>',//' in the confirmation box. <b>This operation is not reversible and all configuration history will be lost.</b>',
  'services.service.delete.progressPopup.message': '删除{0}...',//'Deleting {0}...',
  'services.service.delete.service.success.confirmation': '服务{0}已成功删除',//'Service {0} was successfully deleted',
  'services.service.delete.service.success.confirmation.plural': '服务{0}已成功删除',//'Services {0} were successfully deleted',

  'services.service.summary.unknown':'未知',//
  'services.service.summary.notRunning':'未运行',
  'services.service.summary.notAvailable':'不可用',//n/a
  'services.service.summary.diskInfoBar.used':'用过的',
  'services.service.summary.storm.freeslots': '免费插槽',//Free slots
  'services.service.summary.storm.executors': '执行',
  'services.service.summary.storm.tasks': '任务',
  'services.service.summary.storm.nimbus.uptime': 'Nimbus正常运行时间',
  'services.service.summary.storm.topologies': '拓扑',
  'services.service.summary.flume.startAgent': '启动代理',//Start Agent
  'services.service.summary.flume.stopAgent': '停止代理',//Stop Agent
  'services.service.summary.flume.stop.context': '停止 Flume {0}',
  'services.service.summary.flume.start.context': '启动 Flume {0}',
  'services.service.summary.flume.noAgents': '没有Flume 显示',//No Flume to display

  'services.service.summary.ranger.plugin.title': 'Ranger{0}插件',//Ranger {0} plugin
  'services.service.summary.ranger.plugin.loadingStatus': '加载状态...',//Loading status

  'services.service.summary.alerts.noAlerts': '没有警告',
  'services.service.summary.alerts.alertsExist': '{0} 条警告',
  'services.service.summary.alerts.popup.header': '{0}的警告',

  'services.service.info.metrics.ambariMetrics.master.averageLoad': '平均负载',
  'services.service.info.metrics.ambariMetrics.master.displayNames.averageLoad': '平均负载',//Average load
  'services.service.info.metrics.ambariMetrics.regionServer.storeFiles':'存储文件数',//Number of StoreFiles
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.storeFilesCount': '存储文件数',//Number of StoreFiles
  'services.service.info.metrics.ambariMetrics.regionServer.regions': '区域的数量',//Number of Regions
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.regionsCount': '区域的数量',//Number of Regions
  'services.service.info.metrics.ambariMetrics.regionServer.requests': '请求总数',//Total Request Count
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.requestCount': '请求总数',//Total Request Count
  'services.service.info.metrics.ambariMetrics.regionServer.blockCacheHitPercent': '块缓存命中百分比',//Block Cache Hit Percent
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.blockCacheHitPercent': '块缓存命中百分比',//Block Cache Hit Percent
  'services.service.info.metrics.ambariMetrics.regionServer.compactionQueueSize': '压实队列大小',//Compaction Queue Size
  'services.service.info.metrics.ambariMetrics.regionServer.displayNames.compactionQueueSize': '压实队列大小',//Compaction Queue Size

  'services.service.info.metrics.flume.channelFillPercent':'通道填充百分比',//Channel Fill Percentage
  'services.service.info.metrics.flume.channelSize':'通道大小',//Channel Size
  'services.service.info.metrics.flume.sinkDrainSuccess':'沉没事件消耗数',//Sink Event Drain Count
  'services.service.info.metrics.flume.sourceAccepted':'源事件接受计数',//Source Event Accepted Count
  'services.service.info.metrics.flume.sinkConnectionFailed':'宿连接失败次数',//Sink Connection Failed Count
  'services.service.info.metrics.flume.channelSizeMMA':'通道尺寸事件',//Channel Size Events
  'services.service.info.metrics.flume.channelSizeSum':'通道尺寸事件总和',//Channel Size Event Sum
  'services.service.info.metrics.flume.incoming.mma':'接入事件比例',//Incoming Event Rate
  'services.service.info.metrics.flume.incoming.sum':'接入事件和',//Incoming Event Sum
  'services.service.info.metrics.flume.outgoing.mma':'断开事件比例',//Outgoing Event Rate
  'services.service.info.metrics.flume.outgoing.sum':'断开事件和',//Outgoing Event Sum
  'services.service.info.metrics.flume.gc':'垃圾收集时间',//Garbage Collection Time
  'services.service.info.metrics.flume.cpu.user':'CPU(用户)',//CPU (User)
  'services.service.info.metrics.flume.jvmThreadsRunnable':'JVM运行的线程',//JVM Runnable Threads
  'services.service.info.metrics.flume.jvmHeapUsed':'JVM堆内存使用',//JVM Heap Memory Used
  'services.service.info.metrics.flume.channelType':' 通道大小{0}',//Channel size
  'services.service.info.metrics.flume.incoming_mma':'接入 {0}',
  'services.service.info.metrics.flume.outgoing_mma':'断开 {0}',
  'services.service.info.metrics.flume.sourceName':'来源 {0}',
  'services.service.info.metrics.flume.hostName':'主机: {0}',
  'services.service.info.metrics.flume.channelName':'通道 {0}',
  'services.service.info.metrics.flume.sinkName':'沉没 {0}',

  'services.service.info.metrics.hbase.clusterRequests':'集群请求',//Cluster Requests
  'services.service.info.metrics.hbase.clusterRequests.displayNames.requestCount':'请求总数',//Request Count
  'services.service.info.metrics.hbase.hlogSplitSize':'Hlog分割尺寸',//HLog Split Size
  'services.service.info.metrics.hbase.hlogSplitSize.displayNames.splitSize':'分割尺寸',//Split Size
  'services.service.info.metrics.hbase.hlogSplitTime':'HLog分割时间',//HLog Split Time
  'services.service.info.metrics.hbase.hlogSplitTime.displayNames.splitTime':'分割时间e',
  'services.service.info.metrics.hbase.regionServerQueueSize':'RegionServer的队列大小',//RegionServer Queue Size
  'services.service.info.metrics.hbase.regionServerQueueSize.displayNames.compactionQueueSize':'compaction队列大小',
  'services.service.info.metrics.hbase.regionServerQueueSize.displayNames.flushQueueSize':'Flush 队列大小',
  'services.service.info.metrics.hbase.regionServerRegions':'RegionServer范围',
  'services.service.info.metrics.hbase.regionServerRegions.displayNames.regions':'范围',
  'services.service.info.metrics.hbase.regionServerRequests':'累计请求',//Cumulative Requests
  'services.service.info.metrics.hbase.regionServerRequests.2':'RegionServer范围',//RegionServer Requests
  'services.service.info.metrics.hbase.regionServerRequests.displayNames.writeRequests':'写请求',
  'services.service.info.metrics.hbase.regionServerRequests.displayNames.readRequests':'读请求',

  'services.service.info.metrics.hdfs.blockStatus':'块状态',
  'services.service.info.metrics.hdfs.blockStatus.displayNames.pendingReplicationBlocks':'挂起复制块',//Pending Replication Blocks
  'services.service.info.metrics.hdfs.blockStatus.displayNames.underReplicatedBlocks':'在复制块',//Under Replicated Blocks
  'services.service.info.metrics.hdfs.fileOperations':'文件操作',//File Operations
  'services.service.info.metrics.hdfs.fileOperations.displayNames.fileInformationOperations':'文件信息操作',//File Information Operations
  'services.service.info.metrics.hdfs.fileOperations.displayNames.deleteFileOperations':'删除文件操作',//Delete File Operations
  'services.service.info.metrics.hdfs.fileOperations.displayNames.createFileOperations':'创建文件操作',//Create File Operations
  'services.service.info.metrics.hdfs.gc':'垃圾回收',//Garbage Collection
  'services.service.info.metrics.hdfs.gc.displayNames.gcTimeMillis':'时间',//Time
  'services.service.info.metrics.hdfs.io':'HDFS I/O',
  'services.service.info.metrics.hdfs.io.displayNames.bytesWritten':'写入字节',//Bytes Written
  'services.service.info.metrics.hdfs.io.displayNames.bytesRead':'读取字节',//Bytes Read
  'services.service.info.metrics.hdfs.jvmHeap':'JVM 内存状态',//JVM Memory Status
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memHeapCommittedM':'堆内存承诺',//Heap Memory Committed
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memNonHeapUsedM':'非堆内存的使用',//Non Heap Memory Used
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memHeapUsedM':'堆内存使用',//Heap Memory Used
  'services.service.info.metrics.hdfs.jvmHeap.displayNames.memNonHeapCommittedM':'非堆内存承诺',//Non Heap Memory Committed
  'services.service.info.metrics.hdfs.jvmThreads':'JVM线程状态',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsBlocked':'线程阻塞',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsWaiting':'线程等待',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsTimedWaiting':'线程定时等待',
  'services.service.info.metrics.hdfs.jvmThreads.displayNames.threadsRunnable':'线程可运行',
  'services.service.info.metrics.hdfs.rpc':'RPC',
  'services.service.info.metrics.hdfs.rpc.displayNames.rpcQueueTimeAvgTime':'队列平均等待时间',
  'services.service.info.metrics.hdfs.spaceUtilization':'总空间利用率',//Total Space Utilization
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityRemainingGB':'剩余容量',//Capacity Remaining
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityUsedGB':'使用容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityTotalGB':'总容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityRemaining':'剩余容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityUsed':'使用容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityTotal':'总容量',
  'services.service.info.metrics.hdfs.spaceUtilization.displayNames.capacityNonDFSUsed':'非DFS容量使用',

  'services.service.info.metrics.yarn.jvmHeap':'JVM 内存状态',//JVM Memory Status
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memHeapCommittedM':'堆内存承诺',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memNonHeapUsedM':'非堆内存的使用',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memHeapUsedM':'堆内存使用',
  'services.service.info.metrics.yarn.jvmHeap.displayNames.memNonHeapCommittedM':'非堆内存承诺',
  'services.service.info.metrics.yarn.jvmThreads':'JVM 线程状态',//JVM Thread Status
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsBlocked':'线程阻塞',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsWaiting':'线程等待',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsTimedWaiting':'线程定时等待',
  'services.service.info.metrics.yarn.jvmThreads.displayNames.threadsRunnable':'可运行线程',
  'services.service.info.metrics.yarn.rpc':'RPC',
  'services.service.info.metrics.yarn.rpc.displayNames.RpcQueueTimeAvgTime':'队列平均等待时间',
  'services.service.info.metrics.yarn.gc': '垃圾回收',
  'services.service.info.metrics.yarn.gc.displayNames.gcTimeMillis':'时间',
  'services.service.info.metrics.yarn.allocated.memory': '机器内存',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.allocated': '分配',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.available': '可用的',
  'services.service.info.metrics.yarn.allocated.memory.displayNames.pending': '挂起',
  'services.service.info.metrics.yarn.allocated.container': '容器',
  'services.service.info.metrics.yarn.allocated.container.displayNames.allocated': '分配',
  'services.service.info.metrics.yarn.allocated.container.displayNames.reserved': '可用的',
  'services.service.info.metrics.yarn.allocated.container.displayNames.pending': '挂起',
  'services.service.info.metrics.yarn.nodemanager.statuses':'NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.active':'有效的NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.decommissioned':'停止使用的 NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.lost':'丢失的 NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.rebooted':'重新启动 NodeManagers',
  'services.service.info.metrics.yarn.nodemanager.statuses.displayNames.unhealthy':'不正常的 NodeManagers',
  'services.service.info.metrics.yarn.queueMemoryResource':'使用队列内存',//Queue Memory Used
  'services.service.info.metrics.yarn.queueMemoryResource.displayNames.allocated':'分配 ({0})',
  'services.service.info.metrics.yarn.queueMemoryResource.displayNames.available':'可用 ({0})',
  'services.service.info.metrics.yarn.queueMemoryResource.displayName':'队列: {0}',
  'services.service.info.metrics.yarn.apps.states.current.title': '使用现状',//Current Applications
  'services.service.info.metrics.yarn.apps.states.finished.title': '完成应用程序',//Finished Applications
  'services.service.info.metrics.yarn.apps.states.completed': '完整的',//Completed
  'services.service.info.metrics.yarn.apps.states.failed': '失败',
  'services.service.info.metrics.yarn.apps.states.killed': '结束',
  'services.service.info.metrics.yarn.apps.states.pending': '挂起',
  'services.service.info.metrics.yarn.apps.states.running': '运行',
  'services.service.info.metrics.yarn.apps.states.submitted': '提交',

  'services.service.info.menu.summary':'总览',
  'services.service.info.menu.configs':'配置文件',
  'services.service.info.menu.heatmaps':'热力图',
  'services.service.info.summary.hostsRunningMonitor':'{0}/{1}',
  'services.service.info.summary.serversHostCount':'{0} 更多',

  'services.service.config.nothing.to.display': '无属性显示.',//No properties to display
  'services.service.config.final':'最后',//Final
  'services.service.config.password.additionalDescription': '为了安全起见,密码更改将不会显示在配置版本比较',//For security purposes, password changes will not be shown in configuration version comparisons
  'services.service.config.secure.additionalDescription': 'This config can be changed from Kerberos page under Admin tab by privileged users.',
  'services.service.config.saved':'保存配置更改',//Save Configuration Changes
  'services.service.config.notSaved':'无法保存配置更改',//Unable to Save Configuration Changes
  'services.service.config.restartService.TooltipMessage':'<b>重新启动服务</b>结果通过{1}主机{0}组件使用陈旧的配置：{2}',//<b>Restart Service</b><br>Stale configuration used by {0} components on {1} hosts:{2}'
  'services.service.config.restartService.needToRestart':'<strong>需要重新启动:</strong> ',//Restart Required
  'services.service.config.restartService.needToRestartEnd':'应重新启动',//should be restarted
  'service.service.config.restartService.shouldBeRestarted':'{0} 需要重新启动',//Requiring Restart
  'services.service.config.saved.message':'服务配置更改保存成功.',//Service configuration changes saved successfully
  'services.service.config.saving.message':'配置更改保存...',//Configuration changes are being saved
  'services.service.config.msgServiceStop':'无法保存配置更改。请先停止服务。更改它的所有部件都停止后您将能够保存配置.',//Could not save configuration changes.  Please stop the service first. You will be able to save configuration changes after all of its components are stopped
  'services.service.config.failCreateConfig' : '未能创建服务配置',//Failure in creating service configuration
  'services.service.config.failSaveConfig':'重载保存服务配置故障',//Failure in saving service configuration
  'services.service.config.failSaveConfigHostOverrides':'重载保存服务配置故障',//Failure in saving service configuration overrides
  'services.service.config.addPropertyWindow.error.required':'这是必须的',//This is required',
  'services.service.config.addPropertyWindow.error.derivedKey':'这个属性已经被定义',//'This property is already defined',
  'services.service.config.addPropertyWindow.error.derivedKey.location':'This property is already defined in other configuration file(s) {0}',
  'services.service.config.addPropertyWindow.error.derivedKey.infile':'This property is already defined in this configuration file',
  'services.service.config.addPropertyWindow.error.derivedKey.specific':'Property "{0}" is already defined in this configuration file',
  'services.service.config.addPropertyWindow.error.format':'键和值应该用“=”号隔开',//Key and value should be separated by "=" sign
  'services.service.config.addPropertyWindow.error.lineNumber':'第 {0}行: ',
  'services.service.config.addPropertyWindow.filterKeyLink' : '查找属性',//Find property
  'services.service.config.addPropertyWindow.properties' : '属性',
  'services.service.config.addPropertyWindow.propertiesHelper' : '键=值（每行一个）',//key=value (one per line)
  'services.service.config.addPropertyWindow.propertiesPlaceholder' : '回车键=值（每行一个）',//Enter key=value (one per line)
  'services.service.config.addPropertyWindow.bulkMode' : '批量添加属性模式',//Bulk property add mode
  'services.service.config.addPropertyWindow.singleMode' : '单个属性添加模式',//Single property add mode
  'services.service.config.stopService.runningHostComponents':'{0}组件在{1}主机上运行',//{0} components on {1} hosts are running
  'services.service.config.stopService.unknownHostComponents':'{0}组件在{1}主机上处于未知状态。这些组件实际上可能会运行,以后需要重新启动,以使更改生效.',//{0} components on {1} hosts are in unknown state.  These components might actually be running and need restarting later to make the changes effective
  'services.service.config.confirmDirectoryChange':'您要进行的是更改核心服务目录{0}。在开始之前,如有任何更改,对您的操作是有绝对的影响的,有必要采取手动步骤。你确定要继续?',//You are about to make changes to service directories that are core to {0}. Before you proceed, be absolutely certain of the implications and that you have taken necessary manual steps, if any, for the changes. Are you sure you want to proceed
  'services.service.config.configOverride.head':'配置重载',//Config Override
  'services.service.config.configOverride.body':'不能重载尚未保存一个配置.',//Cannot override a config that has not been saved yet
  'services.service.config.exitPopup.body':'您有未保存的更改。保存更改或放弃?',//You have unsaved changes. Save changes or discard
  'services.service.config.exitChangesPopup.body':'你会被带回\"分配Slave和客户端\"这一步,将失去当前所有的自定义设置。 你确定?',//You will be brought back to the \"Assign Slaves and Clients\" step and will lose all your current customizations. Are you sure
  'services.service.config.propertyFilterPopover.title':'属性过滤器',//Properties filter
  'services.service.config.propertyFilterPopover.content':'输入关键字进行过滤属性名称属性值,或说明.',//Enter keywords to filter properties by property name, value, or description
  'services.service.config.hive.oozie.postgresql': '现有PostgreSQL数据库',//Existing PostgreSQL Database
  'services.service.config.database.connection.success': '连接 OK',//Connection
  'services.service.config.database.connection.inProgress': '检查连接',//Checking connectivity
  'services.service.config.database.connection.failed': '连接失败',//Connection Failed
  'services.service.config.connection.logsPopup.header': '{0} 连接: {1}',
  'services.service.config.connection.exitPopup.msg': '测试连接正在进行。建议等待,它将会完成。你确定要退出启用Kerberos向导?',//Test connection is in progress. It\'s recommended to wait until it wil be complete. Are you sure you want to exit Enable Kerberos Wizard
  'services.service.config.database.btn.idle': '测试连接',//Test Connection
  'services.service.config.kdc.btn.idle': '测试 KDC 连接',//Test KDC Connection
  'services.service.config.database.btn.connecting': '连接中...',
  'services.service.config.database.msg.jdbcSetup': '要确保已运行:<br/>' +//Be sure you have run
  '<b>ambari-server setup --jdbc-db={0} --jdbc-driver=/path/to/{0}/{1}</b> ' +
  '在Ambari Server主机上,使现有的JDBC驱动程序,并启用测试数据库连接.',//on the Ambari Server host to make the JDBC driver available and to enable testing the database connection
  'services.service.config.configHistory.configGroup': '配置组',//Config Group
  'services.service.config.configHistory.rightArrow.tooltip': '显示早期版本',//Show earlier versions
  'services.service.config.configHistory.leftArrow.tooltip': '显示更高版本',//Show later versions
  'services.service.config.configHistory.dismissIcon.tooltip': '退出',//Dismiss
  'services.service.config.configHistory.makeCurrent.message': '从 {0}服务配置版本创建',//Created from service config version
  'services.service.config.configHistory.comparing': '对比',//Comparing
  'services.service.config.setRecommendedValue': '推荐设置',//Set Recommended

  'services.service.widgets.list-widget.nothingSelected': '没有选择',//Nothing selected

  'services.add.header':'添加服务向导',//Add Service Wizard
  'services.reassign.header':'移除Master向导',//Move Master Wizard
  'services.service.add':'添加服务',//Add Service
  'services.service.startAll':'启动所有',//Start All
  'services.service.stopAll':'停止所有',//Stop All
  'services.service.restartAllRequired':'重启所有必须的组件',//'Restart All Required',
  'services.service.startAll.confirmMsg' : '您将要启动所有服务',//You are about to start all services
  'services.service.stopAll.confirmMsg' : '您将要停止所有服务',//You are about to stop all services
  'services.service.refreshAll.confirmMsg': '<p>You are about to restart {0}</p>' +
    '<div class="alert alert-warning">This will trigger alerts as the service is restarted. To suppress alerts, turn on Maintenance Mode for services listed above prior to running Restart All Required</div>',
  'services.service.start.confirmMsg' : 'You are about to start {0}',
  'services.service.stop.confirmMsg' : 'You are about to stop {0}',
  'services.service.stop.confirmButton': 'Confirm Stop',
  'services.service.start.confirmButton' : 'Confirm Start',
  'services.service.stop.warningMsg.turnOnMM': 'This will generate alerts as the service is stopped. To suppress alerts, turn on Maintenance Mode for {0} prior to stopping.',
  'services.service.stop.warningMsg.dependent.services': 'Stopping {0} may impair the functioning of its dependent service(s): {1}.',
  'services.service.restartAll.confirmButton': 'Confirm Restart All',
  'services.service.restartAll.confirmMsg': 'You are about to restart {0}',
  'services.service.restartAll.warningMsg.turnOnMM': 'This will trigger alerts as the service is restarted. To suppress alerts, turn on Maintenance Mode for {0} prior to running restart all',
  'services.service.stop.HDFS.warningMsg.checkPointNA': 'Could not determine the age of the last HDFS checkpoint. Please ensure that you have a recent checkpoint. Otherwise, the NameNode(s) can take a very long time to start up.',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld.instructions':
    '<br><ol>' +
    '<li>Login to the NameNode host <b>{0}</b>.</li>' +
    '<li>Put the NameNode in Safe Mode (read-only mode):' +
    '<div class="code-snippet">sudo su {1} -l -c \'hdfs dfsadmin -safemode enter\'</div></li>' +
    '<li>Once in Safe Mode, create a Checkpoint:' +
    '<div class="code-snippet">sudo su {1} -l -c \'hdfs dfsadmin -saveNamespace\'</div></li>' +
    '</ol>',
  'services.service.stop.HDFS.warningMsg.checkPointTooOld': 'The last HDFS checkpoint is older than {0} hours. Make sure that you have taken a checkpoint before proceeding. Otherwise, the NameNode(s) can take a very long time to start up.',
  'services.service.config_groups_popup.header':'管理{0}配置组',//Manage {0} Configuration Groups
  'services.service.config_groups_popup.notice':'您可以通过管理{{serviceName}}配置组及其成员的主机应用不同的集合{{serviceName}}配置,主机组。属于{{serviceName}}配置组主机具有相同的一组配置的{{serviceName}}。每个主机属于一个{{serviceName}}配置组.',//You can apply different sets of {{serviceName}} configurations to groups of hosts by managing {{serviceName}} Configuration Groups and their host membership.  Hosts belonging to a {{serviceName}} Configuration Group have the same set of configurations for {{serviceName}}. Each host belongs to one {{serviceName}} Configuration Group
  'services.service.config_groups_popup.rename':'重命名',//Rename
  'services.service.config_groups_popup.duplicate':'重复',//Duplicate
  'services.service.config_groups_popup.group_name_lable':'名称',//Name
  'services.service.config_groups_popup.group_desc_lable':'描述',//Description
  'services.service.config_groups_popup.properties':'属性',//Properties
  'services.service.config_groups_popup.addButton':'创建新配置组',//Create new Configuration Group
  'services.service.config_groups_popup.removeButton':'删除配置组',//Delete Configuration Group
  'services.service.config_groups_popup.renameButton':'重命名配置组',//Rename Configuration Group
  'services.service.config_groups_popup.addHost':'主机添加到选定的配置组',//Add hosts to selected Configuration Group
  'services.service.config_groups_popup.addHostDisabled':'没有可用的主机添加.',//There are no available hosts to add
  'services.service.config_groups_popup.removeHost':'从选择的配置组中删除主机',//Remove hosts from selected Configuration Group
  'services.service.config_groups_popup.duplicateButton':'重复的配置组',//Duplicate Configuration Group
  'services.service.config_groups.add_config_group_popup.header':'新建新的配置组',//Create New Configuration Group
  'services.service.config_groups.duplicate_config_group_popup.header':'重复配置组',//
  'services.service.config_groups.rename_config_group_popup.header':'重命名配置组',//Rename Configuration Group
  'services.service.config_groups.switchGroupTextFull':'切换到\'{0}\'主机配置组',//Switch to \'{0}\' host config group
  'services.service.config_groups.switchGroupTextShort':'切换到 \'{0}\'',
  'services.reassign.closePopup':'移动{0}向导正在进行中。您必须允许向导来完成Ambari是在可用状态。如果选择退出,则必须按照说明书的指示完成或恢复移动{0}向导为Ambari用户手册中记录。您确定要退出向导?',//Move {0} wizard is in progress. You must allow the wizard to complete for Ambari to be in usable state. If you choose to quit, you must follow manual instructions to complete or revert move {0} wizard as documented in the Ambari User Guide. Are you sure you want to exit the wizard
  'services.reassign.error.fewHosts':'您必须至少有2台主机在集群中运行移动向导.',//You must have at least 2 hosts in your cluster to run Move Wizard

  'services.reassign.step1.header':'开始使用',//Get Started
  'services.reassign.step1.message1': '该向导将引导您完成移动{0}.<br/>',//This wizard will walk you through moving {0}
  'services.reassign.step1.message2': '该过程重新分配{0}涉及的组合的<b>自动化步骤</b>（将由向导处理）和<b>人工步骤</b>的（即,必须按顺序执行由指令向导）。<bbrr/></>',//The process to reassign {0} involves a combination of <b>automated steps</b> (that will be handled by the wizard) and <b>manual steps</b> (that you must perform in sequence as instructed by the wizard).<br/><br/>
  'services.reassign.step1.message3': '<br/><b>当你准备移动{0}时.所有需要的服务将会是重新启动向导的一部分。你应该计划集群维护窗口和集群停机时间.</b>',//All required services will be restarted as part of the wizard. You should plan a cluster maintenance window and prepare for cluster downtime when moving {0}

  'services.reassign.step2.header':'分配Master',//Assign Master
  'services.reassign.step2.currentHost':'当前的:',//Current
  'services.reassign.step2.body':'分配{0} 到新的主机上.',//Assign {0} to new host
  'services.reassign.step2.body.namenodeHA':'移动{0}到新的主机。您只能一次移动一个主组件.',//Move {0} to new host. You can move only one master component at a time
  'services.reassign.step3.header':'审阅',//Review
  'services.reassign.step3.body':'请检查您所做的更改',//Please review the changes you made
  'services.reassign.step3.targetHost':'目标主机:',//Target Host
  'services.reassign.step3.sourceHost':'源主机:',//Source Host
  'services.reassign.step3.component':'组件名称:',//Component name
  'services.reassign.step4.header':'配置组件',//Configure Component

  'services.reassign.step4.tasks.stopRequiredServices.title':'停止所需的服务',//Stop Required Services
  'services.reassign.step4.tasks.createHostComponents.title':' 创建{0}',//Create
  'services.reassign.step4.tasks.putHostComponentsInMaintenanceMode.title':'禁用 {0}',//Disable
  'services.reassign.step4.tasks.reconfigure.title':' 重新配置{0}',//Reconfigure
  'services.reassign.step4.tasks.save.configuration.note':'此配置是通过移动{0}向导创建',//This configuration is created by Move {0} wizard
  'services.reassign.step4.tasks.installHostComponents.title':'安装 {0}',//Install
  'services.reassign.step4.tasks.startZooKeeperServers.title':'启动ZooKeeper服务',//Start ZooKeeper Servers
  'services.reassign.step4.tasks.startNameNode.title':'启动 NameNode',//Start NameNode
  'services.reassign.step4.tasks.stopHostComponentsInMaintenanceMode.title':'Stop {0}',
  'services.reassign.step4.tasks.deleteHostComponents.title':'删除禁用 {0}',//Delete disabled
  'services.reassign.step4.tasks.startRequiredServices.title':'启动所需的服务',//Start Required Services
  'services.reassign.step4.tasks.cleanMySqlServer.title':'清除MySQL服务器',//Clean MYSQL Server
  'services.reassign.step4.tasks.testHiveMysqlConnection.title':'测试MySql连接',//Test MYSQL Connection
  'services.reassign.step4.tasks.configureMySqlServer.title':'配置MySql服务器',//Configure MYSQL Server
  'services.reassign.step4.tasks.startMySqlServer.title':'启动MySql服务器',//Start MYSQL Server
  'services.reassign.step4.tasks.restartMySqlServer.title':'重启MySql服务器',//Restart MYSQL Server
  'services.reassign.step4.tasks.startServices.title':'启动服务',//Start Services
  'services.reassign.step4.tasks.testDBConnection.title':'测试DB连接',//Test DB Connection
  'services.reassign.step4.tasks.testDBConnection.tooltip':'数据库主机: {0}\n' +//Database Host
  '数据库类型: {1}\n' +//Database Type
  '数据库名称: {2}\n' +//Database Name
  '用户名: {3}\n' +//Username
  '密码: {4}\n' +//Password
  'JDBC 驱动: {5}\n' +//JDBC Driver Clas
  '数据库连接 URL: {6}',//
  'services.reassign.rollback.confirm':'您确定?',//Are you sure


  'services.reassign.step4.task0.title':'停止所需的服务',//Stop Required Services
  'services.reassign.step4.task1.title':' 创建{0}',//Create
  'services.reassign.step4.task2.title':'禁用 {0}',//Disable
  'services.reassign.step4.task3.title':'重新配置 {0}',//Reconfigure
  'services.reassign.step4.save.configuration.note':'此配置是通过移动{0}向导创建',//This configuration is created by Move {0} wizard
  'services.reassign.step4.task4.title':'安装 {0}',//Install
  'services.reassign.step4.task5.title':'启动 ZooKeeper 服务',//Start ZooKeeper Servers
  'services.reassign.step4.task6.title':'启动 NameNode',//Start NameNode
  'services.reassign.step4.task7.title':'删除禁用 {0}',//Delete disabled
  'services.reassign.step4.task8.title':'启动所需的服务',//Start Required Services
  'services.reassign.step4.tasks.startNewMySqlServer.title':'启动新的MySql服务器',//Start New MYSQL Server
  'services.reassign.step4.status.success': '<b>{0}</b>移动成功  从 <b>{1}</b> 主机 到 <b>{2}</b> 主机',//Successfully moved <b>{0}</b> from <b>{1}</b> host to <b>{2}</b> host
  'services.reassign.step4.status.success.withManualSteps': '继续进行下一步骤',//Proceed to the next step
  'services.reassign.step4.status.failed': '<b>{0}</b> 移动失败:  从 <b>{1}</b> 主机到 <b>{2}</b> 主机',//Failed to move <b>{0}</b> from <b>{1}</b> host to <b>{2}</b> host
  'services.reassign.step4.status.info': '{0} 重新配置 . \n 请等待完成所有任务.',//0} Reassigning . \nPlease wait for all tasks to be completed
  'services.reassign.step4.retry': '您可以点击重试或中止按钮重试失败的任务或中止的变化',//You can click on the Retry or Abort button to retry failed task or abort changes
  'services.reassign.step4.abortError': '中止变化错误.',//Error in aborting changes
  'services.reassign.step5.header': '手动命令',//Manual commands
  'services.reassign.step5.body.namenode':
      '<div class="alert alert-info">' +
	  '<ol>' +
	  '<li>复制{1}源主机上的{0}的内容到{2}的目标主机上的{0}的位置.</li>' +//Copy the contents of <b>{0}</b> on the source host <b>{1}</b> to <b>{0}</b> on the target host <b>{2}</b>
	  '<li>登录到目标主机 <b>{2}</b> 并修改NameNode的权限为dirs运行:' +//and change permissions for the NameNode dirs by running
	  '<div class="code-snippet">chown -R {3}:{5} {6}</div></li>' +
	  '<li>通过运行创建标记目录:' +//Create marker directory by running
	  '<div class="code-snippet">mkdir -p /var/lib/hdfs/namenode/formatted</div></li>' +
	  '</ol>' +
	  '</div>',
  'services.reassign.step5.body.namenode_ha':
	  '<div class="alert alert-info">' +
	  '<ol>' +
	  '<li> 登录到NameNode主机<b>{4}</b>.</li>' +//Login to the NameNode host
	  '<li>:运行ZooKeeper的复位自动故障转移信息' +//Reset automatic failover information in ZooKeeper by running
	  '<div class="code-snippet">sudo su {3} -l -c \'hdfs zkfc -formatZK\'</div></li>' +
	  '</ol>' +
	  '</div>' +
	  '<div class="alert alert-info">' +
	  '<ol start="3">' +
	  '<li> 登录到新安装的NameNode主机<b>{2}</b>.<br>' +//Login to the newly installed NameNode host
	  '<div class="alert alert-warn"><strong>重要提示!</strong> 一定要登录到新安装的NameNode的主机。<br>这是从上面步骤1和2不同的主机.</div>' +//Be sure to login to the newly installed NameNode host.<br>This is a different host from the Steps 1 and 2 above
	  '</li>' +
	  '<li>通过运行初始化元数据:' +//Initialize the metadata by running
	  "<div class='code-snippet'>sudo su {3} -l -c 'hdfs namenode -bootstrapStandby'</div></li>" +
	  '</ol>' +
	  '</div>',
   'services.reassign.step5.body.secondary_namenode':
	  '<div class="alert alert-info">' +
	  '<ol>' +
	  '<li>复制{1}源主机上的{0}的内容到{2}的目标主机上的{0}的位置.</li>' +//Copy the contents of <b>{0}</b> on the source host <b>{1}</b> to <b>{0}</b> on the target host <b>{2}</b>
	  '<li>登录到目标主机 <b>{2}</b> 并修改NameNode的权限为dirs运行:' +//and change permissions for the SNameNode dirs by running
	  '<div class="code-snippet">chown -R {3}:{5} {6}</div></li>' +
	  '</ol>' +
	  '</div>',
	  'services.reassign.step5.body.oozie_server':
	  '<div class="alert alert-info">' +
	  '<ol>' +
	  '<li>从 <b>{1}</b> 拷贝内容到' +//On <b>{1}</b> copy the contents of
	  '<div class="code-snippet"><b>/hadoop/oozie/data/oozie-db</b></div></li>' +
	  '<li>目标主机 <b>{2}</b></li>' +
	  '<li>如果该目录不存在,你可以通过运行一下代码创建' +//If the directory doesn\'t exists you can create by running
	  '<div class="code-snippet">mkdir -p /hadoop/oozie/data/oozie-db</div></li>' +
	  '<li>通过运行一下代码更新目录权限' +//Update directory permissions by running
	  '<div class="code-snippet">chown -R oozie:{5} /hadoop/oozie/data</div></li>' +
	  '</ol>' +
	  '</div>',
	  'services.reassign.step5.body.mysql_server':
	  '<div class="alert alert-info">' +
	  '<ol>' +
	  '<li>在<B>{1} </ b>的使用终端,你可以导出Metastore DB（MySQL的),使用命令:' +//On <b>{1}</b> using a terminal you can export your Metastore DB (MYSQL) using
	  '<div class="code-snippet">mysqldump db_name > backup-file.sql</div></li>' +
	  '<li>将文件复制到目标主机的<b>{2} </b>的托管MySQL数据库</li>' +//Copy the file to the target host <b>{2}</b> hosting the MySQL DB
	  '<li>执行这里面SQL<b> MySQL的<b>' +//Execute this SQL inside <b>mysql<b>
	  '<div class="code-snippet">CREATE DATABASE db_name;</div></li>' +
	  '<li>使用下面的命令导入数据库:' +//Import the database using
	  '<div class="code-snippet">mysql db_name < backup-file.sql</div></li>' +
	  '</ol>' +
	  '</div>',
  'services.reassign.step5.body.app_timeline_server': '<div class="alert alert-info">' +
	  '<ol>' +
	  '<li>从源主机上拷贝 {7}leveldb-timeline-store.ldb 到目标主机{2}中的{7}/leveldb-timeline-store.ldb .</li>' +//Copy <b>{7}/leveldb-timeline-store.ldb</b> from the source host <b>{1}</b> to <b>{7}/leveldb-timeline-store.ldb</b> on the target host <b>{2}</b>
	  '<li>登录目标主机 <b>{2}</b> 并且改变其运行权限:' +//and change permissions by running
	  '<div class="code-snippet">chown -R {3}:{5} {7}/leveldb-timeline-store.ldb</div></li>' +
	  '<div class="code-snippet">chmod -R 700 {7}/leveldb-timeline-store.ldb</div></li>' +
	  '</ol>' +
	  '</div>',
  'services.reassign.step5.body.securityNotice': '<div class="alert alert-info"> <div class="alert alert-warn"> <strong>Note: </strong> Secure cluster' +
    ' requires generating necessary principals for reassigned component and creating keytab files with the principal on ' +
    'the target host. The keytab file should be accessible to the service user.</div> {0} </div>',
  'services.reassign.step5.body.securityConfigsList': '在{2}主机上创建秘钥表文件 {0} 和 主要的{1}.',//Create keytab file <b>{0}</b> with principal <b>{1}</b> on <b>{2}</b> host
  'services.reassign.step5.body.proceedMsg': '请继续一旦您完成上述步骤',//Please proceed once you have completed the steps above
  'services.reassign.step5.confirmPopup.body': '在你运行之前请取人手动步骤.',//Please confirm that you have run the manual steps before continuing
  'services.reassign.step6.header': '启动和测试服务',//Start and Test services
  'services.reassign.step6.tasks.putHostComponentsInMaintenanceMode.title':' 禁用{0}',//Disable
  'services.reassign.step6.tasks.deleteHostComponents.title': ' 删除禁用{0}',//Delete disabled
  'services.reassign.step6.tasks.startAllServices.title': '启动所有服务',//Start All Services
  'services.reassign.step6.tasks.installPxf.title': 'Install PXF on NameNode',
  'services.reassign.step6.tasks.stopMysqlService.title': '停止Mysql服务',
  'services.reassign.step6.tasks.stopHostComponentsInMaintenanceMode.title': '停止 {0}',
  'services.reassign.step6.status.success': '从{1}主机中移动{0}到{2}主机中成功.',//Successfully moved <b>{0}</b> from <b>{1}</b> host to <b>{2}</b> host
  'services.reassign.step6.status.failed': '从{1}主机中移动{0}到{2}主机中失败',//Failed to move <b>{0}</b> from <b>{1}</b> host to <b>{2}</b> host.
  'services.reassign.step6.status.info': '分配{0}。 \n请等待完成所有任务.',//Reassigning {0}. \nPlease wait for all tasks to be completed
  'services.reassign.step7.header': '回滚',//Rollback
  'services.reassign.step7.info': '回滚进行中',//Rollback in progress
  'services.reassign.step7.failed': '回滚失败',//Rollback failed
  'services.reassign.step7.success': '回滚成功完成',//Rollback successfully completed

  /** services page constants **/

  'service.hbase.activeMaster': '活动的Master',

  'services.hive.client': 'Hive 客户端',
  'services.hive.clients': 'Hive 客户端数',

  'services.falcon.client': 'Falcon 客户端',
  'services.falcon.clients': 'Falcon 客户端数',

  'services.oozie.client': 'Oozie 客户端',
  'services.oozie.clients': 'Oozie 客户端数',
  'services.oozie.webUi': 'Oozie Web UI',

  'services.ganglia.webUi': 'Ganglia Web UI',
  'services.ganglia.monitors': 'Ganglia 监视器',

  'services.mapreduce2.webUi': '历史服务器 UI',

  'services.zookeeper.prefix': '{0} of',
  'services.zookeeper.title': '{0} ZooKeepers',
  'services.zookeeper.postfix': '启动',
  'services.zookeeper.clients': 'ZooKeeper 客户端数',
  'services.zookeeper.client': 'ZooKeeper 客户端',

  'services.mapreduce2.history.running': '历史服务器正在运行',//History server is running
  'services.mapreduce2.history.stopped': '历史服务器停止',//History server is stopped
  'services.mapreduce2.history.unknown': '历史记录服务器状态未知',//History server status is unknown
  'services.mapreduce2.smokeTest.requirement': 'MapReduce2 的冒烟测试需要YARN服务启动',//MapReduce2 smoke test requires YARN service be started

  'services.tez.client': 'Tez 客户端',
  'services.tez.clients': 'Tez 客户端数',
  'services.pig.client': 'Pig 客户端',
  'services.pig.clients': 'Pig 客户端数',
  'services.glusterfs.client': 'GLUSTERFS 客户端',
  'services.glusterfs.clients': 'GLUSTERFS 客户端数',
  'services.sqoop.client': 'Sqoop 客户端',
  'services.sqoop.clients': 'Sqoop 客户端数',

  'services.hbase.master.error':'HBase masters都不是有效的',//None of the HBase masters is active

  'alerts.actions.manage_alert_groups_popup.header':'管理警告分组',
  'alerts.actions.manage_alert_groups_popup.notice':'您可以管理组的警告在此对话框中的每个服务。查看警告组的列表和它们配置的警告定义还可以添加/删除警告定义,并挑选通知该警告组.',//You can manage alert groups for each service in this dialog. View the list of alert groups and the alert definitions configured in them You can also add/remove alert definitions, and pick notification for that alert group
  'alerts.actions.manage_alert_groups_popup.rename':'重命名',//Rename
  'alerts.actions.manage_alert_groups_popup.duplicate':'重复',
  'alerts.actions.manage_alert_groups_popup.group_name_lable':'名称',
  'alerts.actions.manage_alert_groups_popup.group_desc_lable':'简介',//Description
  'alerts.actions.manage_alert_groups_popup.notifications':'通知',//Notifications
  'alerts.actions.manage_alert_groups_popup.addButton':'创建警告组',//Create Alert Group
  'alerts.actions.manage_alert_groups_popup.addGroup.exist': '警告组与给定的名称已经存在',//Alert Group with given name already exists
  'alerts.actions.manage_alert_groups_popup.removeButton':'删除警告组',//Delete Alert Group
  'alerts.actions.manage_alert_groups_popup.removeButtonDisabled':'不能删除默认的警告组',//Cannot delete default alert group
  'alerts.actions.manage_alert_groups_popup.renameButton':'重命名警告组',//Rename Alert Group
  'alerts.actions.manage_alert_groups_popup.duplicateButton':'复制警告组',//Duplicate Alert Group
  'alerts.actions.manage_alert_groups_popup.addDefinition.noDefinitions':'没有警告定义显示',//No alert definitions to display
  'alerts.actions.manage_alert_groups_popup.addDefinition':'添加警告定义到选定的警告组',//Add alert definitions to selected Alert Group
  'alerts.actions.manage_alert_groups_popup.addDefinitionDisabled':'没有可用的警告定义添加',//There are no available alert definitions to add
  'alerts.actions.manage_alert_groups_popup.addDefinitionToDefault': '不能修改默认警告组',//Cannot modify default alert group
  'alerts.actions.manage_alert_groups_popup.removeDefinition':'从选定的警告组中删除警告定义',//Remove alert definitions from selected Alert Group
  'alerts.actions.manage_alert_groups_popup.removeDefinitionDisabled':'不能修改默认警告组',//Cannot modify default alert group
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.title': '选择警告组定义',//Select Alert Group Definitions
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.message': '选择警告定义被添加到这个"{0}"警告组.',//Select alert definitions to be added to this "{0}" Alert Group
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.filter.placeHolder': '所有',//all
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.selectedDefsLink': '{0}从{1}警告定义选择',//{0} out of {1} alert definitions selected
  'alerts.actions.manage_alert_groups_popup.selectDefsDialog.message.warning': '至少需要选择一个警告定义.',//At least one alert definition needs to be selected

  'alerts.actions.manage_alert_notifications_popup.header':'管理警告通知',//Manage Alert Notifications
  'alerts.actions.manage_alert_notifications_popup.noAlertNotification':'没有警告通知定义',//No alert notifications defined
  'alerts.actions.manage_alert_notifications_popup.addButton':'创建新警告通知',//Create new Alert Notification
  'alerts.actions.manage_alert_notifications_popup.addHeader':'创建警告通知',//Create Alert Notification
  'alerts.actions.manage_alert_notifications_popup.removeButton':'删除警告通知',//Delete Alert Notification
  'alerts.actions.manage_alert_notifications_popup.editButton':'编辑警告通知',//Edit Alert Notification
  'alerts.actions.manage_alert_notifications_popup.editHeader':'编辑通知',//Edit Notification
  'alerts.actions.manage_alert_notifications_popup.duplicateButton':'重复的警告通知',//Duplicate Alert Notification
  'alerts.actions.manage_alert_notifications_popup.method':'方法',
  'alerts.actions.manage_alert_notifications_popup.email':'电子邮件To',//Email To
  'alerts.actions.manage_alert_notifications_popup.SMTPServer':'SMTP 服务器',
  'alerts.actions.manage_alert_notifications_popup.SMTPPort':'SMTP 端口',
  'alerts.actions.manage_alert_notifications_popup.SMTPUseAuthentication':'使用验证',//Use authentication
  'alerts.actions.manage_alert_notifications_popup.SMTPUsername':'用户名',
  'alerts.actions.manage_alert_notifications_popup.SMTPPassword':'密码',
  'alerts.actions.manage_alert_notifications_popup.retypeSMTPPassword':'确认密码',
  'alerts.actions.manage_alert_notifications_popup.SMTPSTARTTLS':'启动 TLS',
  'alerts.actions.manage_alert_notifications_popup.emailFrom':'电子邮件发件人',
  'alerts.actions.manage_alert_notifications_popup.version':'版本',
  'alerts.actions.manage_alert_notifications_popup.OIDs':'OID',
  'alerts.actions.manage_alert_notifications_popup.community':'社区',
  'alerts.actions.manage_alert_notifications_popup.host':'主机数',
  'alerts.actions.manage_alert_notifications_popup.port':'版本',
  'alerts.actions.manage_alert_notifications_popup.global':'全局',
  'alerts.actions.manage_alert_notifications_popup.noDescription':'<i>没有说明</i>',//No description
  'alerts.actions.manage_alert_notifications_popup.noGroup':'<i>未选择</i>',//None selected
  'alerts.actions.manage_alert_notifications_popup.severityFilter':'严重',//Severity
  'alerts.actions.manage_alert_notifications_popup.clearAll':'全部清除',//Clear All
  'alerts.actions.manage_alert_notifications_popup.selectAll':'选择所有',//Select All
  'alerts.actions.manage_alert_notifications_popup.confirmDeleteHeader':'确认删除',//Confirm Delete
  'alerts.actions.manage_alert_notifications_popup.confirmDeleteBody':'你确定要删除{0}的通知?',//Are you sure you want to delete {0} notification
  'alerts.actions.manage_alert_notifications_popup.error.name.empty': '通知名称是必需的',//Notification name is required
  'alerts.actions.manage_alert_notifications_popup.error.name.existed': '通知名称已经存在',//Notification name already exists

  'hosts.host.add':'添加新的主机',//Add New Hosts
  'hosts.table.noHosts':'没有主机显示',//No hosts to display

  'hosts.filters.filteredHostsInfo': '{0} {1}主机的显示',//{0} of {1} hosts showing

  'hosts.filters.selectedHostInfo': '选择主机',//host selected
  'hosts.filters.selectedHostsInfo': '选定主机',//hosts selected

  'hosts.filters.clearSelection': '清空选择',//clear selection

  'hosts.filters.filterComponents': '过滤 <strong>组件</strong>',

  'hosts.table.restartComponents.withNames':'重启 {0}',//Restart
  'hosts.table.restartComponents.withoutNames':'{0}组件应重新启动',//{0} components should be restarted

  'hosts.table.componentsInPassiveState.withNames':'{0}处于维护模式',//{0} in Maintenance Mode
  'hosts.table.componentsInPassiveState.withoutNames':'{0}组件处于维护模式',//{0} components in Maintenance Mode

  'hosts.table.menu.l1.selectedHosts':'选定的主机',//Selected Hosts
  'hosts.table.menu.l1.filteredHosts':'过滤主机',//Filtered Hosts
  'hosts.table.menu.l1.allHosts':'所有主机',
  'hosts.table.menu.l2.allComponents':'所有组件',
  'hosts.table.menu.l2.restartAllComponents':'重启所有组件',
  'hosts.table.menu.l2.reinstallFailedComponents':'重新安装失败的组件',//'Reinstall Failed Components',

  'hosts.bulkOperation.confirmation.header':'确认批量操作',//Confirm Bulk Operation
  'hosts.bulkOperation.confirmation.hosts':'你确定你想要<strong>{0}</strong>下列{1}主机?',//Are you sure you want to <strong>{0}</strong> on the following {1} hosts
  'hosts.bulkOperation.confirmation.hostComponents':'你确定你想要<strong>{0}{1}</strong> 下列{2}主机?',//Are you sure you want to <strong>{0} {1}</strong> on the following {2} hosts
  'hosts.bulkOperation.passiveState.nothingToDo.body':'您选择的所有主机都已经处于维护模式.',//All hosts that you selected are already in Maintenance Mode
  'hosts.bulkOperation.warningInfo.body':'在这些主机组件停止,验证将被跳过.',//Components on these hosts are stopped so decommission will be skipped
  'hosts.bulkOperation.host_components.passiveState.nothingToDo.body':'您选择的所有主机部件都已经处于维护模式',//All host components that you selected are already in Maintenance Mode
  'hosts.bulkOperation.confirmation.add.component':'You are going to <strong>{0} {1}</strong> on the following {2} hosts.',
  'hosts.bulkOperation.confirmation.add.component.skip':'The following hosts are skipped as they already have {0} installed.',
  'hosts.bulkOperation.confirmation.add.component.nothingToDo.body': 'All the selected hosts have {0} installed already.',

  'hosts.selectHostsDialog.title': '选择配置主机组',//Select Configuration Group Hosts
  'hosts.selectHostsDialog.message': '选择应该属于这个{0}配置组的主机。属于该组的所有主机都具有相同的配置集.',//Select hosts that should belong to this {0} Configuration Group. All hosts belonging to this group will have the same set of configurations
  'hosts.selectHostsDialog.filter.placeHolder': '过滤...',//Filter
  'hosts.selectHostsDialog.selectedHostsLink': '{0}从{1}主机选择',//{0} out of {1} hosts selected
  'hosts.selectHostsDialog.message.warning': '至少需要选择一个主机.',//At least one host needs to be selected

  'hosts.host.serviceNotAvailable': '服务此主机上不可用',//Service not available on this host

  'hosts.host.menu.logs': '日志',//'Logs',

  'hosts.host.menu.stackVersions': '版本',
  'hosts.host.stackVersions.table.allVersions': '所有的版本',
  'hosts.host.stackVersions.table.allNames': '所有的名称',
  'hosts.host.stackVersions.table.noVersions': '没有版本数',
  'hosts.host.stackVersions.table.filteredInfo': '{0}{1}的版本显示',//{0} of {1} versions showing
  'hosts.host.stackVersions.status.init': '卸载',//Uninstalled
  'hosts.host.stackVersions.status.installed': '安装',
  'hosts.host.stackVersions.status.install_failed': '安装失败',
  'hosts.host.stackVersions.status.installing': '安装中',
  'hosts.host.stackVersions.status.current': '当前的',
  'hosts.host.stackVersions.status.out_of_sync': '不同步',//Out of Sync
  'hosts.host.stackVersions.status.upgrading': '升级',//Upgrading
  'hosts.host.stackVersions.status.upgrade_failed': '升级失败',
  //This version is Out of Sync on this host. Out of Sync can occur the components on a host change after installing a version not in use Click Install to have Ambari install the packages for this version to get this host in sync
  'hosts.host.stackVersions.outOfSync.tooltip': '这个版本在该主机上是不同步的。不同步会发生一系列变化的,在 Ambari安装的软件包使用单击Install使 组件在安装版得到这个主机同步.',
  'hosts.host.stackVersions.install.confirmation': '您将要在此主机上安装<b>{0}</b>版本.',//You are about to install version <b>{0}</b> on this host

  'hosts.host.metrics.dataUnavailable':'数据不可用',//Data Unavailable
  'hosts.host.metrics.cpu':'CPU使用率',//CPU Usage
  'hosts.host.metrics.cpu.displayNames.cpu_wio':'CPU I/O 空闲',
  'hosts.host.metrics.cpu.displayNames.cpu_idle':'CPU 空闲',
  'hosts.host.metrics.cpu.displayNames.cpu_nice':'CPU Nice值',
  'hosts.host.metrics.cpu.displayNames.cpu_aidle':'CPU Boot 空闲',
  'hosts.host.metrics.cpu.displayNames.cpu_system':'CPU 系统',
  'hosts.host.metrics.cpu.displayNames.cpu_user':'CPU 用户',
  'hosts.host.metrics.disk':'磁盘使用情况',//Disk Usage
  'hosts.host.metrics.disk.displayNames.disk_total':'总量',
  'hosts.host.metrics.disk.displayNames.disk_free':'可用的',//Available
  'hosts.host.metrics.load':'加载',//Load
  'hosts.host.metrics.load.displayNames.load_fifteen':'加载15分钟',//加载15 Minute Load
  'hosts.host.metrics.load.displayNames.load_one':'加载1分钟',
  'hosts.host.metrics.load.displayNames.load_five':'加载5分钟',
  'hosts.host.metrics.memory':'内存使用率',//Memory Usage
  'hosts.host.metrics.memory.displayNames.mem_shared':'共享',//Shared
  'hosts.host.metrics.memory.displayNames.swap_free':'交换',//Swap
  'hosts.host.metrics.memory.displayNames.mem_buffers':'缓冲器',//Buffers
  'hosts.host.metrics.memory.displayNames.mem_free':'空闲',//Free
  'hosts.host.metrics.memory.displayNames.mem_cached':'高速缓存',//Cached
  'hosts.host.metrics.network':'网关使用率',//Network Usage
  'hosts.host.metrics.network.displayNames.pkts_out':'输出包',//Packets Out
  'hosts.host.metrics.network.displayNames.bytes_in':'输入字节',
  'hosts.host.metrics.network.displayNames.bytes_out':'输出字节',
  'hosts.host.metrics.network.displayNames.pkts_in':'数据包',
  'hosts.host.metrics.processes':'进程',//Processes
  'hosts.host.metrics.processes.displayNames.proc_total':'进程总数',//Total Processes
  'hosts.host.metrics.processes.displayNames.proc_run':'进程运行',//Processes Run

  'hosts.host.summary.header':'概要',//Summary
  'hosts.host.summary.hostname':'主机名称',
  'hosts.host.summary.agentHeartbeat':'心跳',//Heartbeat
  'hosts.host.summary.hostMetrics':'主机指标',//Host Metrics
  'hosts.host.summary.hostLogMetrics':'主机日志指标',
  'hosts.host.summary.addComponent':'添加组件',//Add Component
  'hosts.host.summary.currentVersion':'当前版本',//Current Version

  'hosts.host.details.hostActions':'主机操作',//Host Actions
  'hosts.host.details.needToRestart':'主机{0} {1}需要重新启动',//Host needs {0} {1} restarted
  'hosts.host.details.needToRestart.button':'重启',//Restart
  'hosts.host.details.deleteHost':'删除主机',
  'hosts.host.details.startAllComponents':'启动所有组件',
  'hosts.host.details.stopAllComponents':'停止所有组件',
  'hosts.host.details.restartAllComponents':'重启所有组件',
  'hosts.host.details.refreshConfigs':'刷新配置',//Refresh configs
  'hosts.host.details.for.postfix':'{0}主机',//{0} for host
  'hosts.host.details.setRackId':'设置机架',//Set Rack
  'host.host.details.installClients': '安装客户端',//Install clients

  'host.host.componentFilter.master':'主成分',//Master Components
  'host.host.componentFilter.slave':'从部件',//Slave Components
  'host.host.componentFilter.client':'组件客户端',//Client Components
  'hosts.host.deleteComponent.popup.msg1':'你确定你想要删除{0}?',//Are you sure you want to delete {0}
  'hosts.host.deleteComponent.popup.deleteZooKeeperServer':'删除 <i>ZooKeeper 服务器</i> 你可以重新配置这样的属性:<ul><li>ha.zookeeper.quorum</li><li>hbase.zookeeper.quorum</li><li>templeton.zookeeper.hosts</li><li>yarn.resourcemanager.zk-address</li><li>hive.zookeeper.quorum</li><li>hive.cluster.delegation.token.store.zookeeper.connectString</li></ul>',//Deleting <i>ZooKeeper Server</i> may reconfigure such properties:<ul><li>ha.zookeeper.quorum</li><li>hbase.zookeeper.quorum</li><li>templeton.zookeeper.hosts</li><li>yarn.resourcemanager.zk-address</li><li>hive.zookeeper.quorum</li><li>hive.cluster.delegation.token.store.zookeeper.connectString</li></ul>
  'hosts.host.deleteComponent.popup.deleteRangerKMSServer': '删除 <i>Ranger KMS 服务器</i> 你可以重新配置这样的属性:<ul><li>hadoop.security.key.provider.path</li><li>dfs.encryption.key.provider.uri</li>',//Deleting <i>Ranger KMS Server</i> may reconfigure such properties:<ul><li>hadoop.security.key.provider.path</li><li>dfs.encryption.key.provider.uri</li>
  'hosts.host.deleteComponent.popup.warning':'<b>警告!</b> 删除集群中的最后的<i>{0}</i>的组件？</br>在集群中删除最后一个组件可能会导致业务数据永久丢失.',//Delete the last <i>{0}</i> component in the cluster?</br>Deleting the last component in the cluster could result in permanent loss of service data
  'hosts.host.deleteComponent.popup.confirm':'确认删除',//Confirm Delete
  'hosts.host.installComponent.popup.confirm':'确认安装',//Confirm Install
  'hosts.host.installComponent.msg':'你确定你要安装 {0}?',//Are you sure you want to install {0}
  'hosts.host.addComponent.msg':'你确定你要添加{0}?',//Are you sure you want to add {0}
  'hosts.host.addComponent.ZOOKEEPER_SERVER':'添加 ZooKeeper 服务 可能要 重新配置这样的属性:<ul><li>ha.zookeeper.quorum</li><li>hbase.zookeeper.quorum</li><li>templeton.zookeeper.hosts</li><li>yarn.resourcemanager.zk-address</li><li>hive.zookeeper.quorum</li><li>hive.cluster.delegation.token.store.zookeeper.connectString</li></ul>',
  'hosts.host.addComponent.NIMBUS': '添加 Nimbus 将要配置 <b>nimbus.seeds</b>, <b>topology.min.replication.count</b>, <b>topology.max.replication.wait.time.sec</b> properties if they are defined.',
  'hosts.host.addComponent.RANGER_KMS_SERVER': '添加 Ranger KMS 服务 可能要 重新配置这样的属性:<ul><li>hadoop.security.key.provider.path</li><li>dfs.encryption.key.provider.uri</li>',
  'hosts.host.addComponent.deleteHostWithZooKeeper':'删除本地的 ZooKeeper 服务器 可能要 重新配置这样的属性:<ul><li>ha.zookeeper.quorum</li><li>hbase.zookeeper.quorum</li><li>templeton.zookeeper.hosts</li><li>yarn.resourcemanager.zk-address</li><li>hive.zookeeper.quorum</li><li>hive.cluster.delegation.token.store.zookeeper.connectString</li></ul>',
  'host.host.addComponent.popup.dependedComponents.body': '{0}需要{1}与它在同一台主机上安装一起。请首先添加它们,然后尝试添加{0}',//{0} requires {1} to be installed along with it on the same host. Please add them first and then try adding {0}
  'host.host.addComponent.popup.dependedComponents.header': '组件的依赖',//Component dependencies
  'host.host.addComponent.popup.clients.dependedComponents.body': '{0}需要{1}能够与他们一起安装在同一台主机上。请先将它们添加',//{0} require {1} to be installed along with them on the same host. Please add them first
  'hosts.host.zooKeeper.configs.save.note': '此配置是zookeeper管理员的通过ambari在安装/删除组件在主机上创建',//This configuration is created by ambari while installing/deleting zookeeper component on a host
  'hosts.host.addComponent.securityNote':'您正在安全模式下运行集群。你必须为{0}在{1}之前启动的密钥表。否则,该组件将无法正常启动.',//You are running your cluster in secure mode. You must set up the keytab for {0} on {1} before you proceed. Otherwise, the component will not be able to start properly
  'hosts.host.addComponent.popup.confirm':'确认添加',//Confirm Add
  'hosts.host.manualKerberosWarning': '<br/><strong>因为Kerberos已手动安装在集群上,你必须创建/分配的principals和keytabs当此操作完成.</strong>',//Because Kerberos has been manually installed on the cluster, you will have to create/distribute principals and keytabs when this operation is finished
  'hosts.host.deleteComponent.popup.deleteNimbus':'删除 <i>Storm Nimbus</i> 将要配置 <b>nimbus.seeds</b>, <b>topology.min.replication.count</b>, <b>topology.max.replication.wait.time.sec</b> properties if they are defined.',
  'hosts.host.storm.configs.save.note': '此配置是通过ambari在安装/删除组件的时候在storm的主机上创建',//This configuration is created by ambari while installing/deleting storm component on a host
  'hosts.host.datanode.decommission':'停止使用DataNode',
  'hosts.host.datanode.recommission':'重新校验DataNode',
  'hosts.host.nodemanager.decommission':'停止使用NodeManager',
  'hosts.host.nodemanager.recommission':'重新校验NodeManager',
  'hosts.host.tasktracker.decommission':'停止使用TaskTracker',
  'hosts.host.tasktracker.recommission':'重新校验TaskTracker',
  'hosts.host.tasktracker.restart':'重启TaskTracker',
  'hosts.host.regionserver.decommission.batch1':'停止使用RegionServer - 在打开漏模式',//Decommission RegionServer - Turn drain mode on
  'hosts.host.regionserver.decommission.batch2':'停止使用RegionServer - 停止RegionServer的',//Decommission RegionServer - Stop RegionServer
  'hosts.host.regionserver.decommission.batch3':'停止使用RegionServer - 开漏模式关闭',//Decommission RegionServer - Turn drain mode off
  'hosts.host.hbase_regionserver.recommission':'重新校验RegionServer',//Recommission RegionServer
  'hosts.host.hbase_regionserver.decommission':'停止使用RegionServer',
  'hosts.host.hbase_regionserver.decommission.warning':'最后RegionServer的不能被停用',//Last RegionServer can\'t be decommissioned
  'hosts.host.decommissioned':'停用',//Decommissioned
  'hosts.host.decommissioning':'正在停用',//Decommissioning
  'hosts.host.addComponent.HIVE_METASTORE':'添加 <i>Hive Metastore</i> 可能要 重新配置这样的属性:<ul><li>hive.metastore.uris</li><li>templeton.hive.properties</li></ul>',
  'hosts.host.addComponent.WEBHCAT_SERVER':'添加 <i>WebHCat Server</i> 可能要 重新配置这样的属性:<ul><li>hive.metastore.uris</li><li>templeton.hive.properties</li></ul>',
  'hosts.host.deleteComponent.popup.deleteHiveMetastore':'删除 <i>Hive Metastore</i> 可能要 重新配置这样的属性:<ul><li>hive.metastore.uris</li><li>templeton.hive.properties</li></ul>',
  'hosts.host.deleteComponent.popup.deleteWebHCatServer':'删除 <i>WebHCat Server</i> 可能要 重新配置这样的属性:<ul><li>hive.metastore.uris</li><li>templeton.hive.properties</li></ul>',
  'hosts.host.configs.save.note': '此配置是通过ambari在安装/删除{0}组件的主机上创建',//This configuration is created by ambari while installing/deleting {0} component on a host

  'hosts.component.passive.implied.host.mode.tooltip':'不能关闭维护模式,因为主机处于维护模式',//Cannot Turn Off Maintenance Mode because Host is in Maintenance Mode
  'hosts.component.passive.implied.service.mode.tooltip':'不能关闭维护模式,因为{0}处于维护模式',//Cannot Turn Off Maintenance Mode because {0} is in Maintenance Mode
  'hosts.component.passive.mode':'组件处于维护模式',//Component is in Maintenance Mode
  'hosts.component.passive.short.mode':'维护模式',//Maintenance Mode
  'hosts.host.passive.mode':'主机处于维护模式',//Host is in Maintenance Mode
  'hosts.host.alert.noAlerts':'没有警告',//No alerts
  'hosts.host.alert.noAlerts.message':'此主机没有警告.',//There are no alerts for this host
  'hosts.host.healthStatus.heartBeatNotReceived':'该服务器没有收到这个主机心跳超过3分钟.',//The server has not received a heartbeat from this host for more than 3 minutes
  'hosts.host.healthStatus.mastersDown':"以下master组件宕机:\n",//The following master components are down
  'hosts.host.healthStatus.slavesDown':"下面slave组件宕机:\n",//The following slave components are down
  'hosts.host.healthStatus.allUp':'所有组件为',//All components are up
  'hosts.host.healthStatusCategory.green': "正常",//Healthy
  'hosts.host.healthStatusCategory.red': "master宕机",//Master Down
  'hosts.host.healthStatusCategory.orange': "slave宕机",//Slave Down
  'hosts.host.healthStatusCategory.yellow': "丢失心跳",//Lost Heartbeat
  'hosts.host.alerts.label': '警告',//Alerts
  'hosts.host.maintainance.allComponents.context': '所有主机部件',//All Host Components
  'hosts.host.maintainance.stopAllComponents.context': '全部停止主机组件',//Stop All Host Components
  'hosts.host.maintainance.startAllComponents.context': '启动所有主机部件',//Start All Host Components
  'hosts.host.maintainance.reinstallFailedComponents.context': '重新安装失败的组件',//'Reinstall Failed Components',
  'hosts.host.alerts.st':'&nbsp;!&nbsp;',
  'hosts.decommission.popup.body':'您确定?',
  'hosts.decommission.popup.header':'确认',
  'hosts.decommission.tooltip.warning':'不能{0}从{1}因为它未运行',//Cannot {0} since {1} is not running
  'hosts.delete.popup.body':'你确定要删除的主机的<i>{0}</i>?',//Are you sure you want to delete host <i>{0}</i>
  //By removing this host, Ambari will ignore future communications from this host. Software packages will not be removed from the host. The components on the host should not be restarted. If you wish to readd this host to the cluster, be sure to clean the host
  'hosts.delete.popup.body.msg1':'通过消除该主机,Ambari会忽略从该主机未来的通信。软件包将不会从主机移除。在主机上的组件不应该被重新启动。如果你希望这台主机重新进行添加到集群,请务必主机卸载相应应用.',
  'hosts.delete.popup.body.msg3':'如果该主机是托管服务器Zookeeper管理员,Zookeeper管理员应该重新启动服务。进入<i>服务</i>页.',//If this host was hosting a Zookeeper Server, the Zookeeper Service should be restarted. Go to the <i>Services</i> page
  'hosts.delete.popup.body.msg4':'<b>警告!</b>删除最后的<i>{0}</i>的成分集群中？<br>删除集群中的最后一个组件可能会导致业务数据永久丢失.',// Delete the last <i>{0}</i> component[s] in the cluster?</br>Deleting the last components in the cluster could result in permanent loss of service data
  'hosts.delete.popup.body.msg5':'<b>警告!</b> 代理仍是心脏的跳动使主机仍然会存在于数据库中.',//The agent is still heartbeating so the Host will still exist in the database
  'hosts.delete.popup.body.msg6':'要完全删除主机,使用ambari代理一步就可以了.',//To completely delete the Host, first stop ambari-agent on it
  'hosts.delete.popup.body.msg7':'<b>WARNING!</b> {0} should be decommissioned first to prevent data loss.',
  'hosts.delete.popup.body.msg.unknownComponents':'该主机不会出现在线和Ambari通信,因为代理已丢失.',//This host does not appear to be online and Ambari communication with the Agent has been lost
  'hosts.delete.popup.header':'确认',//Confirmation
  'hosts.delete.popup.title':'删除主机',//Delete Host
  'hosts.delete.popup.unknownComponents':'以下组件具有未知状态:',//The following components have unknown status
  'hosts.cant.do.popup.title':'无法删除主机',//Unable to Delete Host
  'hosts.cant.do.popup.masterList.body':'该主机不能删除,因为它具有以下组件:',//This host cannot be deleted since it has the following master components
  'hosts.cant.do.popup.masterList.body.end':'要删除此主机.你必须首先将上面列出的所有主组件移动到另一个主机',//To delete this host, you must first move all the master components listed above to another host
  'hosts.cant.do.popup.nonDeletableList.body':'不支持下列{0}成分的缺失. ',//Deletion of the following {0} components is not supported
  'hosts.cant.do.popup.runningList.body':'下列组件正在运行该主机不能删除:',//This host cannot be deleted since the following components are running
  'hosts.cant.do.popup.runningList.body.end':'删除这个主机,您必须首先停止所有上面列出的组件运行,如果这个主机有一个DataNode,它应该首先停止使用,以防止数据丢失.',//To delete this host, you must first stop all the running components listed above If this host has a DataNode, it should be decommissioned first to prevent data loss
  'hosts.add.header':'添加主机向导',//Add Host Wizard
  'hosts.add.exit.header':'退出',//Exit
  'hosts.add.exit.body':'你真的要退出添加主机向导?',//Do you really want to exit Add Host Wizard
  'hosts.assignRack':'分配机架',//Assign Rack
  'hosts.passiveMode.popup':'你确定要<b>打开{0}的维护模式</b>{1}?',//Are you sure you want to <b>Turn {0} Maintenance Mode</b> for {1}
  'hosts.passiveMode.popup.version.mismatch': '{ 0 }组件不是一个当前堆栈。把该主机退出维护模式之前,建议您升级组件{ 1 }',//{0} has components from a stack which is not current. Before bringing this host out of maintenance mode, it is recommended that you upgrade its components to {1}
  'hosts.passiveMode.popup.version.mismatch.multiple': '有些主机不是一个当前堆栈。把这些主机退出维护模式之前,建议您升级它们的组件{0}',//Some hosts have components from a stack which is not current. Before bringing these hosts out of maintenance mode, it is recommended that you upgrade their components to {0}
  'hosts.combo.search.placebolder': '按照主机和组件进行过滤...',//'Filter by host and component attributes or search by keyword ...',
  'hosts.combo.search.invalidCategory': '不是有效的分类',//'is not a valid category.',
  'charts.horizon.chart.showText':'展示',//show
  'charts.horizon.chart.hideText':'隐藏',//hide
  'charts.horizon.chart.attributes.cpu':'CPU',
  'charts.horizon.chart.attributes.memory':'内存',//Memory
  'charts.horizon.chart.attributes.network':'网络',//Network
  'charts.horizon.chart.attributes.io':'I/O',

  'charts.heatmap.selectMetric':'选择指标...',//Select Metric

  'charts.heatmap.category.host':'主机',//Host
  'charts.heatmap.item.host.memory':'使用的内存',//Memory Used
  'charts.heatmap.item.host.disk':'使用的磁盘空间',//Disk Space Used
  'charts.heatmap.item.host.process':'正在运行的进程数',//Total Running Processes
  'charts.heatmap.category.hdfs':'HDFS',
  'charts.heatmap.category.yarn': 'YARN',
  'charts.heatmap.category.hbase': 'HBase',
  'charts.heatmap.unknown': '未知的',
  'charts.heatmap.label.notApplicable' :'不适用',//Not Applicable
  'charts.heatmap.label.invalidData' :'无效数据',//Invalid data
  'metric.notFound':'没有找到项目',//no items found
  'metric.default':'结合',//combined
  'metric.cpu':'cpu',
  'metric.memory':'磁盘使用',
  'metric.network':'网络',
  'metric.io':'io',
  'metric.more':'更多',
  'metric.more.cpu':'CPU',
  'metric.more.disk':'磁盘',
  'metric.more.load':'加载',
  'metric.more.memory':'内存',
  'metric.more.network':'网络',
  'metric.more.process':'进程',

  'dashboard.clusterMetrics':'集群指标',

  'dashboard.clusterMetrics.cpu':'CPU使用率',
  'dashboard.clusterMetrics.cpu.displayNames.idle':'Idle',
  'dashboard.clusterMetrics.load':'集群负载',//Cluster Load
  'dashboard.clusterMetrics.memory':'内存使用',
  'dashboard.clusterMetrics.network':'带宽占用',

  'dashboard.widgets.title': '指标',
  'dashboard.heatmaps.title': '热力图',
  'dashboard.button.switch': '切换到经典的仪表盘',//Switch to classic dashboard
  'dashboard.button.switchShort': '交换',//Switch
  'dashboard.button.reset': '重置所有部件为默认',//Reset all widgets to default
  'dashboard.widgets.actions.title': '图表操作',
  'dashboard.widgets.create': '创建窗口小部件',//Create Widget
  'dashboard.widgets.actions.browse': '浏览器小工具',//Browse Widgets
  'dashboard.widgets.layout.import': '导入布局',//Import a layout
  'dashboard.widgets.layout.save': '保存布局',//Save a layout
  'dashboard.widgets.addButton.tooltip': '新增小工具',//Add Widget
  'dashboard.widgets.browser.header': '浏览器控件',//Widget Browser
  'dashboard.widgets.browser.menu.shared': '共享',//Shared
  'dashboard.widgets.browser.menu.mine': '我的',
  'dashboard.widgets.browser.noWidgets': '没有小工具来显示',//No widgets to diaplay
  'dashboard.widgets.browser.footer.checkbox': '只显示我的小部件',//Show only my widgets
  'dashboard.widgets.browser.action.add': '添加',
  'dashboard.widgets.browser.action.added': '附加的',
  'dashboard.widgets.browser.action.delete': '删除',
  'dashboard.widgets.browser.action.unshare': '取消共享',
  'dashboard.widgets.browser.action.share': '共享',
  'dashboard.widgets.browser.action.share.confirmation': '您将要制作一个共享的部件。所有的集群运营商将能够修改或删除这个小工具。你确定你想分享这个小工具?',//You are about to make this a shared widget. All cluster operators will be able to modify or delete this widget. Are you sure you want to share this widget
  'dashboard.widgets.browser.shareIcon.tooltip': '共享',
  'dashboard.widgets.browser.action.delete.shared.bodyMsg': '您将要永久删除<b>{0}</b>的小部件这个小工具是一个共享的小部件,这个操作会从共享的部件库中删除窗口小部件并删除所有用户的窗口小部件。<br/> <br/><b>您确定要永久删除此共享窗口小部件？</b>',//You are about to permanently delete the <b>{0}</b> widget This widget is a shared widget and this operation will delete the widget from the shared widget library and remove the widget from all users.<br /> <br /> <b>Are you sure you wish to permanently delete this shared widget?</b>
  'dashboard.widgets.browser.action.delete.mine.bodyMsg': '您将要永久删除<b>{0}</b>的窗口小部件,此操作会从你的widget库中删除该Widget。<br/><br/><b>您确定要永久删除此窗口小部件？</b>',//You are about to permanently delete the <b>{0}</b> widget This operation will delete the widget from your widget library.<br /><br /><b>Are you sure you wish to permanently delete this widget?</b>
  'dashboard.widgets.browser.action.delete.btnMsg': '确认删除',//Confirm Delete

  'dashboard.widgets.NameNodeHeap': 'NameNode堆占用',
  'dashboard.widgets.NameNodeCpu': 'NameNode CPU WIO',
  'dashboard.widgets.HDFSDiskUsage': 'HDFS硬盘使用率',
  'dashboard.widgets.HDFSDiskUsage.DFSused': '使用DFS',
  'dashboard.widgets.HDFSDiskUsage.nonDFSused': '使用非DFS',
  'dashboard.widgets.HDFSDiskUsage.remaining': '其余',
  'dashboard.widgets.HDFSDiskUsage.info': '{0} ({1}%)',
  'dashboard.widgets.DataNodeUp': 'DataNodes存活情况',
  'dashboard.widgets.SuperVisorUp': 'Supervisors存活情况',
  'dashboard.widgets.FlumeAgentUp': 'Flume存活情况',
  'dashboard.widgets.NameNodeRpc': 'NameNode RPC',
  'dashboard.widgets.nothing': '没有小部件添加',//No Widget to Add
  'dashboard.widgets.NameNodeUptime': 'NameNode运行时间',
  'dashboard.widgets.HDFSLinks': 'HDFS快捷方式',
  'dashboard.widgets.HDFSLinks.activeNameNode': '有效的主节点',
  'dashboard.widgets.HDFSLinks.standbyNameNode': '备用的 NameNode',
  'dashboard.widgets.HDFSLinks.standbyNameNodes': '2 备用的 NameNodes',
  'dashboard.widgets.HBaseLinks': 'HBase快捷方式',
  'dashboard.widgets.HBaseAverageLoad': 'HBase平均加载',
  'dashboard.widgets.HBaseMasterHeap': 'HBase Master堆占用',
  'dashboard.widgets.HBaseRegionsInTransition': '地区过渡',//Region In Transition
  'dashboard.widgets.HBaseMasterUptime': 'HBase Master运行时间',
  'dashboard.widgets.ResourceManagerHeap': 'ResourceManager堆占用',
  'dashboard.widgets.ResourceManagerUptime': 'ResourceManager运行时间',
  'dashboard.widgets.NodeManagersLive': 'NodeManagers存活情况',
  'dashboard.widgets.YARNMemory': 'YARN内存占用',
  'dashboard.widgets.YARNLinks': 'YARN快捷方式',
  'dashboard.widgets.error.invalid': '无效！ 0之间输入一个数字 - {0}',//Invalid! Enter a number between 0 - {0}
  'dashboard.widgets.error.smaller': '阈值1应该比阈2小!',//Threshold 1 should be smaller than threshold 2
  'dashboard.widgets.HawqSegmentUp': 'HAWQ Segments Live',
  'dashboard.widgets.PxfUp': 'PXF Agents Live',
  'dashboard.widgets.PXFAgents': 'PXF Agents',

  'dashboard': {
    'widgets': {
      'popupHeader': '自定义窗口小部件',//Customize Widget
      'hintInfo': {
        'common': '编辑百分比阈值来改变目前的饼图的颜色。<br/>0-{0}之间输入两个数字',//Edit the percentage thresholds to change the color of current pie chart. <br />Enter two numbers between 0 to {0
        'hint1': '编辑阈值的百分比来改变当前插件的颜色。 <br/>假设所有的组件升级为100,所有DOWN为0。<br/>所以0-{0}之间输入两个数字',//Edit the percentage of thresholds to change the color of current widget. <br />Assume all components UP is 100, and all DOWN is 0. <br /> So enter two numbers between 0 to {0}
        'hint2': '编辑阈值来改变当前插件的颜色。<br/><br/>所以输入两个大于0数字.',//Edit the thresholds to change the color of current widget.<br /><br />So enter two numbers larger than 0
        'hint3': '编辑阈值来改变当前插件的颜色。<br/>单位是毫秒。 <br/>所以输入两个大于0数字. ',//Edit the thresholds to change the color of current widget.<br />The unit is milli-second. <br />So enter two numbers larger than 0
        'hint4': 'Edit the threshold value representing the number of {0} that are down to change the color of the widget. <br />If the number of {0} that are down is greater than the threshold, the widget will show warning in Red. <br />Choose a number between 0 and {1}. '
      }
    }
  },

  'dashboard.services':'服务',
  'dashboard.services.hosts':'主机',
  'dashboard.services.uptime':'{0}',
  'dashboard.services.summary.slaves.live': 'Live',
  'dashboard.services.hdfs.summary':'{0}{1}节点Live,使用{2}％的产能',//{0} of {1} nodes live, {2}% capacity used
  'dashboard.services.hdfs.nanmenode':'NameNode',
  'dashboard.services.hdfs.snanmenode':'备用 NameNode',
  'dashboard.services.hdfs.journalnodes':'JournalNodes',
  'dashboard.services.hdfs.capacity':'HDFS硬盘使用情况',
  'dashboard.services.hdfs.capacity.dfsUsed':'硬盘使用情况(DFS使用)',
  'dashboard.services.hdfs.capacity.nonDfsUsed':'硬盘使用情况(非DFS使用)',
  'dashboard.services.hdfs.capacity.remaining':'空闲硬盘',
  'dashboard.services.hdfs.capacityUsed':'{0} / {1} ({2}%)',
  'dashboard.services.hdfs.totalFilesAndDirs':'总文件夹和文件数',
  'dashboard.services.hdfs.datanodes':'DataNodes',
  'dashboard.services.hdfs.datanodecounts':'DataNodes状态',
  'dashboard.services.hdfs.nfsgateways':'NFSGateways',
  'dashboard.services.hdfs.version':'版本',
  'dashboard.services.hdfs.nameNodeWebUI':'NameNode Web UI',
  'dashboard.services.hdfs.nodes.live':'存活',
  'dashboard.services.hdfs.nodes.dead':'死亡',
  'dashboard.services.hdfs.nodes.decom':'停止',
  'dashboard.services.hdfs.nodes.uptime':'NameNode运行时间',
  'dashboard.services.hdfs.nodes.heap':'NameNode堆',
  'dashboard.services.hdfs.nodes.heapUsed':'{0} / {1} ({2}% 使用)',
  'dashboard.services.hdfs.chart.label':'容量（已用/总）',//Capacity (Used/Total)
  'dashboard.services.hdfs.blockErrors':'{0} 损坏 / {1} 丢失 / {2} 低于副本数',
  //This is the number of DataNodes that are live as reported from the NameNode. Even if a DataNode process is up, NameNode might see the status as dead if the DataNode is not communicating with the NameNode as expected. This can be due situations such as a network issue or a hanging DataNode process due to excessive garbage collection
  'dashboard.services.hdfs.datanode.status.tooltip.live': '存活的datanode的数量。即使一个DataNode是启动的,NameNode可能接收不到状态，如果DataNode与NameNode没有按预期进行通信。这可能是由于情况如网络问题或挂起DataNode由于过度垃圾收集的过程.',

  //This is the number of DataNodes that are dead as reported from the NameNode. Even if a DataNode process is up, NameNode might see the status as dead if the DataNode is not communicating with the NameNode as expected. This can be due situations such as a network issue or a hanging DataNode process due to excessive garbage collection
  'dashboard.services.hdfs.datanode.status.tooltip.dead': '挂掉的datanode的数量。即使一个DataNode是启动的,NameNode可能接收不到状态，如果DataNode与NameNode没有按预期进行通信。这可能是由于情况如网络问题或挂起DataNode由于过度垃圾收集的过程.',
  //This is the number of DataNodes that are currently Decommissioning as reported from the NameNode. If there are not enough other DataNodes in the cluster to create the configured number of block replicas based on the dfs.replication property (typically 3), a DataNode can get stuck in decommissioning state until more DataNodes become available to the NameNode
  'dashboard.services.hdfs.datanode.status.tooltip.decommission': '目前停用DataNodes的数目。如果在集群中没有足够的其他的DataNodes来创建基于dfs.replication属性（通常为3）配置的块副本,一个的DataNode可以停留在停用状态,直到更多的DataNodes会提供给NameNode的.',


  'dashboard.services.yarn.summary':'{0} of {1} nodes live',
  'dashboard.services.yarn.resourceManager':'ResourceManager',//ResourceManager
  'dashboard.services.yarn.nodeManagers':'节点管理器',//NodeManagers
  'dashboard.services.yarn.nodeManager':'节点管理器',
  'dashboard.services.yarn.clients':'YARN 客户端',
  'dashboard.services.yarn.client':'YARN 客户端',
  'dashboard.services.yarn.resourceManager.uptime':'ResourceManager 运行时间',//ResourceManager Uptime
  'dashboard.services.yarn.resourceManager.active':'有效的ResourceManager',
  'dashboard.services.yarn.resourceManager.standby':'待机中的 ResourceManager',
  'dashboard.services.resourceManager.nodes.heap':'ResourceManager 堆',
  'dashboard.services.yarn.nodeManagers.status': 'NodeManagers 状态',
  'dashboard.services.yarn.nodeManagers.status.msg': '{0}主动/{1}丢失/{2}不健康/{3}重启/{4}停用',//{0} active / {1} lost / {2} unhealthy / {3} rebooted / {4} decommissioned
  'dashboard.services.yarn.containers': '容器',//Containers
  'dashboard.services.yarn.containers.msg': '{0}分配/{1}待定/{2}保留',//{0} allocated / {1} pending / {2} reserved
  'dashboard.services.yarn.apps': '应用',//Applications
  'dashboard.services.yarn.apps.msg': '{0}提交/{1}运行/{2}待定/{3}已完成/{4}杀死/{5}失败',//{0} submitted / {1} running / {2} pending / {3} completed / {4} killed / {5} failed
  'dashboard.services.yarn.memory': '集群存储',//Cluster Memory
  'dashboard.services.yarn.memory.msg': '{0}使用/{1}保留/{2}可用',//{0} used / {1} reserved / {2} available
  'dashboard.services.yarn.queues': '队列',//Queues
  'dashboard.services.yarn.queues.msg': '{0} 队列',
  'dashboard.services.hawq.hawqSegments':'HAWQ Segments',
  'dashboard.services.pxf.pxfHosts':'PXF',

  'dashboard.services.flume.summary.title':'在安{1}主机上装{0}的Flume（{2}代理{3}）',//Flume installed on {0} host{1} ({2} agent{3})
  'dashboard.services.flume.summary.configure':'配置代理',//Configure Agents
  'dashboard.services.flume.agentsLabel': 'Flume',
  'dashboard.services.flume.agentLabel': 'Flume 组件',//Flume Component
  'dashboard.services.flume.channels': '通道',
  'dashboard.services.flume.sources': '来源',
  'dashboard.services.flume.sinks': '沉没',
  'dashboard.services.flume.agent': '代理',

  'dashboard.services.hbase.summary':'{0}的地区服务与{1}的负载均衡',//{0} region servers with {1} average load
  'dashboard.services.hbase.masterServer':'HBase Master',
  'dashboard.services.hbase.masterServer.active':'有效的HBase Master',
  'dashboard.services.hbase.masterServer.standby':'备用的主 HBase Master',
  'dashboard.services.hbase.noMasterServer':'没有有效的Master',//No Active Master
  'dashboard.services.hbase.masterServerHeap':'Master 堆',
  'dashboard.services.hbase.masterServerHeap.summary':'{0} / {1} ({2}% 使用)',
  'dashboard.services.hbase.masterServerUptime':'主服务器正常运行时间',//Master Server Uptime
  'dashboard.services.hbase.averageLoad':'负载均衡',//Average Load
  'dashboard.services.hbase.averageLoadPerServer':'{0} 区域的每一个RegionServer',//{0} regions per RegionServer
  'dashboard.services.hbase.regionServers':'RegionServers',
  'dashboard.services.hbase.regionServersSummary':'{0} 日活量 / {1} 总数',
  'dashboard.services.hbase.phoenixServers':'Phoenix Query Servers',
  'dashboard.services.hbase.phoenixServersSummary':'{0} 日活量 / {1} 总数',
  'dashboard.services.hbase.chart.label':'请求数',//Request Count
  'dashboard.services.hbase.masterWebUI':'Master Web UI',
  'dashboard.services.hbase.regions.transition':'区域过渡',//Regions In Transition
  'dashboard.services.hbase.masterStarted':'Master 开始',
  'dashboard.services.hbase.masterActivated':'Master 活性',

  'dashboard.services.ranger.rangerTagsyncs':'Ranger Tagsyncs',

  'dashboard.services.components.started':'已启动',//'started',
  'dashboard.services.components.stopped':'已停止',//'stopped',
  'dashboard.services.components.total':'汇总',//'in total',

  'dashboard.services.hive.clients':'Hive 客户端',
  'dashboard.services.hive.client':'Hive客户端',
  'dashboard.services.hive.metastore':'Hive Metastore',
  'dashboard.services.hive.server2':'HiveServer2',

  'dashboard.services.oozie.clients':'Oozie 客户端数',
  'dashboard.services.oozie.client':'Oozie 客户端',
  'dashboard.services.storm.supervisor': '管理者',//Supervisor
  'dashboard.services.storm.supervisors': '管理者',//Supervisors

  'dashboard.services.configs.popup.stopService.header':'停止服务',//Stop service
  'dashboard.services.configs.popup.stopService.body' : '服务需要停止进行重新配置',//Service needs to be stopped for reconfiguration
  'dashboard.services.configs.popup.restartService.header' : '重启服务',//Restart service
  'dashboard.services.configs.popup.restartService.body' : '服务需要重新启动进行重新配置',//Service needs to be restarted for reconfiguration

  'dashboard.services.zookeeper.server' : 'ZooKeeper 服务器',

  'dashboard.configHistory.title': '配置历史',
  'dashboard.configHistory.table.version.title' : '服务',
  'dashboard.configHistory.table.configGroup.title' : '配置组',//Config Group
  'dashboard.configHistory.table.created.title' : '创建',//Created
  'dashboard.configHistory.table.configGroup.default' : '默认',//default
  'dashboard.configHistory.table.empty' : '没有历史记录显示',//No history to display
  'dashboard.configHistory.table.notes.default': '初始配置{0}',//Initial configurations for {0}
  'dashboard.configHistory.table.notes.addService': '同时增加服务配置更新',//Configuration updated while adding service
  'dashboard.configHistory.table.notes.no': '',
  'dashboard.configHistory.table.version.versionText' : 'V{0}',
  'dashboard.configHistory.table.version.prefix' : 'V',
  'dashboard.configHistory.table.current.tooltip' : '当前配置 {0}:{1}',
  'dashboard.configHistory.table.restart.tooltip' : '需要重新启动',//Restart required
  'dashboard.configHistory.table.filteredHostsInfo': '{0}到{1}的版本显示',//{0} of {1} versions showing
  'dashboard.configHistory.info-bar.authoredOn': '关于',//authored on
  'dashboard.configHistory.info-bar.changesToHandle': '更改处理',//Changes to handle
  'dashboard.configHistory.info-bar.showMore': '现实更多',
  'dashboard.configHistory.info-bar.save.popup.title': '保存配置',//Save Configuration
  'dashboard.configHistory.info-bar.makeCurrent.popup.title': '使当前确认',//Make Current Confirmation
  'dashboard.configHistory.info-bar.save.popup.placeholder': '你要怎么改?',//What did you change
  'dashboard.configHistory.info-bar.save.popup.warningForPasswordChange': '此配置更改包括密码更改。密码更改将被保存,但为安全起见,密码更改将不会在配置版本的比较显示..',//This configuration change includes a password change. The password change will be saved but for security purposes, password changes will not be shown in configuration version comparisons
  'dashboard.configHistory.info-bar.save.popup.notesForPasswordChange': ' 更改密码',//Password change
  'dashboard.configHistory.info-bar.revert.button': '设置最新版本',//Make Current
  'dashboard.configHistory.info-bar.revert.versionButton': '设置{0}为最新版本',//Make {0} Current
  'dashboard.configHistory.info-bar.view.button.disabled': '您正在查看此版本.',//You are currently viewing this version
  'dashboard.configHistory.info-bar.compare.button.disabled': '你不能比较的同一版本.',//You cannot compare against the same version
  'dashboard.configHistory.info-bar.revert.button.disabled': '这是当前版本.',//This is the current version

  'timeRange.presets.1hour':'1小时',
  'timeRange.presets.12hour':'12小时',
  'timeRange.presets.1day':'1天',
  'timeRange.presets.1week':'1周',
  'timeRange.presets.1month':'1月',
  'timeRange.presets.1year':'1年',

  'tableView.filters.all': '全部',
  'tableView.filters.filtered': '筛选',
  'tableView.filters.clearFilters': '清除筛选',
  'tableView.filters.paginationInfo': '{0} - {1} of {2}',
  'tableView.filters.clearAllFilters': '清除筛选',
  'tableView.filters.showAll': '显示所有',
  'tableView.filters.filteredConfigVersionInfo': '{0} of {1} 版本显示',
  'tableView.filters.filteredAlertInstancesInfo': '{0} of {1} 实例显示',
  'tableView.filters.filteredLogsInfo': '{0} of {1} 日志显示',

  'rollingrestart.dialog.title': '重启 {0}s',
  'rollingrestart.dialog.primary': '触发滚动重启',//Trigger Rolling Restart
  'rollingrestart.notsupported.hostComponent': '不支持{0}组件滚动重启',//Rolling restart not supported for {0} components
  'rollingrestart.dialog.msg.restart': '这将在同一时间启动{0的指定号码.',//This will restart a specified number of {0}s at a time
  'rollingrestart.dialog.msg.noRestartHosts': '有没有{0} 做滚动重启',//There are no {0}s to do rolling restarts
  'rollingrestart.dialog.msg.maintainance': '注意:{0}{1}在维护模式下不会重新启动',//{0} {1} in Maintenance Mode will not be restarted
  'rollingrestart.dialog.msg.maintainance.plural': '注意: {0} {1}等在维护模式下不会重新启动',//{0} {1}s in Maintenance Mode will not be restarted
  'rollingrestart.dialog.msg.componentsAtATime': '{0}在同一时间',//{0}s at a time
  'rollingrestart.dialog.msg.timegap.prefix': '等待 ',
  'rollingrestart.dialog.msg.timegap.suffix': '批次之间秒 ',//seconds between batches
  'rollingrestart.dialog.msg.toleration.prefix': '默认',//Tolerate up to
  'rollingrestart.dialog.msg.toleration.suffix': '重启故障',//restart failures
  'rollingrestart.dialog.err.invalid.batchsize': '重启无效批量大小：{0}',//Invalid restart batch size: {0}
  'rollingrestart.dialog.err.invalid.waitTime': '批次之间的无效等待时间：{0}',//Invalid wait time between batches: {0}
  'rollingrestart.dialog.err.invalid.toleratesize': '无效的失败宽容计数：{0}',//Invalid failure toleration count: {0}
  'rollingrestart.dialog.warn.datanode.batch.size': '重新启动一次超过一个DataNode不推荐。这样做会导致数据不可用的数据和/或可能损失积极写入HFDS.',//Restarting more than one DataNode at a time is not recommended. Doing so can lead to data unavailability and/or possible loss of data being actively written to HFDS
  'rollingrestart.dialog.msg.serviceNotInMM':'注意: 这将触发警告。要抑制警告,{0}之前触发滚动重启开启维护模式',//This will trigger alerts. To suppress alerts, turn on Maintenance Mode for {0} prior to triggering a rolling restart
  'rollingrestart.dialog.msg.staleConfigsOnly': '只有重新启动{0}的陈旧CONFIGS',//Only restart {0}s with stale configs
  'rollingrestart.rest.context': '{0}等滚动重启 - 批{1}{2}',//Rolling Restart of {0}s - batch {1} of {2}
  'rollingrestart.context.allOnSelectedHosts':'重新启动在选定的主机所有部件',//Restart all components on the selected hosts
  'rollingrestart.context.allForSelectedService':'重新启动所有组件{0}',//Restart all components for {0}
  'rollingrestart.context.allWithStaleConfigsForSelectedService':'重新启动陈旧的Configs所有组件{0}',//Restart all components with Stale Configs for {0}
  'rollingrestart.context.allClientsOnSelectedHost':'重新启动{0}上所有客户',//'Restart all clients on {0}
  'rollingrestart.context.allWithStaleConfigsOnSelectedHost':'重新启动{0}上的组件与陈旧的配置文件',//Restart components with Stale Configs on {0}
  'rollingrestart.context.allOnSelectedHost':'重新启动{0}的所有组件',//Restart all components on {0}
  'rollingrestart.context.selectedComponentOnSelectedHost':'{0}重新启动',
  'rollingrestart.context.default':'重新启动组件',//Restart components

  'rolling.command.context': '回滚集合{0}到状态"{1}" - 一批{2}的{3}',//Rolling set {0} to state "{1}" - batch {2} of {3}
  'rolling.nothingToDo.header': '无操作',//Nothing to do
  'rolling.nothingToDo.body': '{0}所选主机已处于选择状态或处于维护模式.',//{0} on selected hosts are already in selected state or in Maintenance Mode

  'widget.type.gauge.description': '一个视图来显示的指标,可以用百分比来表示.',//A view to display metrics that can be expressed in percentage
  'widget.type.number.description': '一个视图来显示指标,可表示为可选的单位字段单号.',//A view to display metrics that can be expressed as a single number with optional unit field
  'widget.type.graph.description': '一个视图来显示度量,可在折线图或区域图在一个时间范围来表示.',//A view to display metrics that can be expressed in line graph or area graph over a time range
  'widget.type.template.description': '视图与模板的文字同时显示度量值.',//A view to display metric value along with a templated text
  'widget.create.wizard.header': '创建窗口小部件',//Create Widget
  'widget.create.wizard.step1.header': '选择类型',//Select Type
  'widget.create.wizard.step1.body.text': '你想要创建什么类型的窗口小部件?',//What type of widget do you want to create
  'widget.create.wizard.step1.body.choose.tooltip': '点击选择',//Click to select
  'widget.create.wizard.step2.header': '指标和表达',//Metrics and Expression
  'widget.create.wizard.step2.template.header': '模板',//Template
  'widget.create.wizard.step2.body.text':'定义表达式与任何指标和有效的操作符。< / br >在必要时使用括号.',//Define the expression with any metrics and valid operators. </br>Use parentheses when necessary
  'widget.create.wizard.step2.body.template':'为使用任意数量的表达式和任何字符串的模板。表达式可以在模板中通过双大括号其名称引用.',//Define the template with any number of expressions and any string. An expression can be referenced from a template by enclosing its name with double curly braces
  'widget.create.wizard.step2.body.warning':'注：有效的运算符+, - ,*,/',//Note: Valid operators are +, -, *, /
  'widget.create.wizard.step2.body.template.invalid.msg':'存在无效的表达式的名字。应该使用名称与双花括号表达式#。',//Invalid expression name existed. Should use name "Expression#" with double curly braces.
  'widget.create.wizard.step2.addExpression': '添加表达式',//Add Expression
  'widget.create.wizard.step2.addDataset': '添加数据集',//Add data set
  'widget.create.wizard.step2.body.gauge.overflow.warning':'溢出！计只能介于0和1之间的数字显示。',//Overflowed! Gauge can only display number between 0 and 1.
  'widget.create.wizard.step2.allComponents': '所有的 {0}',//All {0}s
  'widget.create.wizard.step2.activeComponents': '有效的 {0}',//Active {0}
  'widget.create.wizard.step2.noMetricFound': '没有找到度量值',//No metric found
  'widget.create.wizard.step3.widgetName': '名称',
  'widget.create.wizard.step3.sharing': '共享',
  'widget.create.wizard.step3.sharing.msg': '分享此窗口小部件到部件库',//Share this widget in the widget library
  'widget.create.wizard.step3.header': '名称和说明',//Name and Description
  'widget.create.wizard.step3.name.invalid.msg': '窗口小部件名称太长。请输入窗口小部件名称少于129个字符.',//Widget name is too long. Please enter a widget name less than 129 characters
  'widget.create.wizard.step3.name.invalidCharacter.msg': '错误组件名称,只支持字母数字、下划线、连接符、百分号和空格',//'Invalid widget name. Only alphanumerics, underscores, hyphens, percentage and spaces are allowed.',
  'widget.create.wizard.step3.description.invalid.msg': '说明太长。请输入一个描述少于2049个字符.',//Description is too long. Please enter a description less than 2049 characters
  'widget.create.wizard.step3.description.invalidCharacter.msg': '错误的输入,只支持字母数字、下划线、连接符、百分号和空格',//'Invalid input. Only alphanumerics, underscores, hyphens, percentage and spaces are allowed.',

  'widget.edit.wizard.header': '编辑窗口小部件',//Edit Widget

  'widget.clone.body': '你确定要克隆当前控件的<b>{0}</b>?',//Are you sure you want to clone current widget <b>{0}</b>
  'widget.edit.body': '这是一个共享的小部件和编辑要改变这个小部件为所有用户。你喜欢克隆小部件呢?',//This is a shared widget and the edits are going to change this widget for all users. Would you prefer to Clone the widget instead
  'widget.edit.button.primary': '编辑共享',//Edit Shared
  'widget.edit.button.secondary': '克隆和编辑',//Clone and Edit

  'dashboard.widgets.wizard.step2.dataSeries': '数据系列{0}',//Data Series {0}
  'dashboard.widgets.wizard.step2.addMetrics': '添加指标和操作在这里...',//Add Metrics and operators here
  'dashboard.widgets.wizard.step2.newMetric': '新增指标',//Add Metric
  'dashboard.widgets.wizard.step2.newOperator': '添加操作',
  'dashboard.widgets.wizard.step2.newNumber': '添加数量',
  'dashboard.widgets.wizard.step2.Component': '组件',
  'dashboard.widgets.wizard.step2.Metric': '指标',
  'dashboard.widgets.wizard.step2.selectComponent': '选择组件',
  'dashboard.widgets.wizard.step2.selectMetric': '选择指标',
  'dashboard.widgets.wizard.step2.addMetric': '添加指标',
  'dashboard.widgets.wizard.step2.aggregateFunction': '聚集功能',//Aggregator Function
  'dashboard.widgets.wizard.step2.aggregateFunction.scanOps': '选择汇聚',//Select Aggregation
  'dashboard.widgets.wizard.step2.aggregateFunction.notFound': '没有发现聚合函数',//No aggregator function found
  'dashboard.widgets.wizard.step2.aggregateTooltip': '该数学函数将应用于计算单个值在所有主机组件所选指标',//This mathematical function will be applied to compute single value for selected metric across all host components
  'dashboard.widgets.wizard.step2.threshold.ok.tooltip': '这是小部件的阈值颜色变化从绿色(好)到橙色(警告)',//This is the threshold value at which the widget color changes from green (OK) to orange (Warning)
  'dashboard.widgets.wizard.step2.threshold.warning.tooltip': '这是小部件的阈值颜色变化从橙色(警告)到红色(关键)',//This is the threshold value at which the widget color changes from orange (Warning) to red (Critical)
  'dashboard.widgets.wizard.onClose.popup.body': '您有未保存的更改!如果你在这一步退出向导,那么您的更改将不会被保存.',//You have unsaved changes. Your changes will not be saved if you exit the wizard at this step.
  'dashboard.widgets.wizard.onClose.popup.discardAndExit': '放弃并退出',

  'restart.service.all': '全部重启',
  'restart.service.all.affected': '重启所有受影响的',
  'restart.service.rest.context': '重启 {0}s',

  'menu.item.dashboard':'仪表盘',
  'menu.item.services':'服务',
  'menu.item.hosts':'节点管理',
  'menu.item.admin':'系统管理',
  'menu.item.alerts': '警告',
  'menu.item.views':'<i class="icon-th"></i>',
  'menu.item.views.noViews':'无视图',

  'bulkOperation.loading': '加载...',
  'jobs.nothingToShow': '没有工作显示',
  'jobs.loadingTasks': '加载中...',
  'jobs.error.ats.down': '工作数据无法展示,因为YARN App没有运行时间.',//Jobs data cannot be shown since YARN App Timeline Server is not running
  'jobs.error.400': '无法装载数据...',
  'jobs.table.custom.date.am':'上午(AM)',
  'jobs.table.custom.date.pm':'下午(PM)',
  'jobs.table.custom.date.header':'选中时间范围',
  'jobs.table.job.fail':'Job 运行失败',
  'jobs.customDateFilter.error.required':'该字段必填',
  'jobs.customDateFilter.error.incorrect':'日期不正确',
  'jobs.customDateFilter.error.laterThanNow':'指定的时间是一个未来的时间',//The specified time is in the future
  'jobs.customDateFilter.error.date.order':'结束日期必须在开始时间之后',
  'jobs.customDateFilter.startTime':'开始时间',
  'jobs.customDateFilter.endTime':'结束时间',
  'jobs.customDateFilter.duration.15min':'15 分钟',
  'jobs.customDateFilter.duration.30min':'30 分钟',
  'jobs.customDateFilter.duration.1hr':'1 小时',
  'jobs.customDateFilter.duration.2hr':'2 小时',
  'jobs.customDateFilter.duration.4hr':'4 小时',
  'jobs.customDateFilter.duration.12hr':'12 小时',
  'jobs.customDateFilter.duration.24hr':'24 小时',
  'jobs.customDateFilter.duration.1w':'1 周',
  'jobs.customDateFilter.duration.1m':'1 月',
  'jobs.customDateFilter.duration.1yr':'1 年',

  'views.main.yourViews': '您的视图菜单',//Your Views
  'views.main.noViews': '没有视图菜单',
  'views.main.instance.noDescription': '无描述',

  'number.validate.empty': '不能为空',
  'number.validate.notValidNumber': '不是一个有效的数字',
  'number.validate.lessThanMinimum': '值小于 {0}',
  'number.validate.moreThanMaximum': '值大于 {0}',

  'common.combobox.placeholder': '过滤条件...',
  'common.combobox.dropdown.overridden': '重写属性',
  'common.combobox.dropdown.final': '最终的属性',
  'common.combobox.dropdown.changed': '改变的属性',
  'common.combobox.dropdown.issues': '显示属性问题',
  'common.combobox.dropdown.warnings': '显示属性警告',

  'quick.links.error.quicklinks.unavailable.label': '快捷方式不可用',//'Quick Links are not available',
  'quick.links.error.label': '主机名未定义',
  'quick.links.publicHostName': '{0} ({1})',
  'quick.links.label.active': '有效的',//Active
  'quick.links.label.standby': '待机',

  'contact.administrator': '有关更多信息,请与系统管理员联系!',

  'config.group.selection.dialog.title': '{0} 个配置组',
  'config.group.selection.dialog.subtitle': '选择或创建 {0} 个配置组的配置值将覆盖.',
  'config.group.selection.dialog.option.select': '选择一个现有的 {0} 配置组',
  'config.group.selection.dialog.option.select.msg': '覆盖属性将改变主机属于所选组.',
  'config.group.selection.dialog.option.create': '创建一个新的 {0} 配置组',
  'config.group.selection.dialog.option.create.msg': '将会创建一个新的{0}配置组的名字。最初没有组中的主机,只有选中的属性被覆盖.',
  'config.group.selection.dialog.err.name.exists': '配置组名称已经存在',
  'config.group.selection.dialog.err.create': ' 创建新的配置组 [{0}] 错误',
  'config.group.selection.dialog.no.groups': '没有现有的 {0} 配置组.',
  'config.group.host.switch.dialog.title': '改变组',

  'config.group.save.confirmation.header': '保存配置组',
  'config.group.save.confirmation.msg': '点击 <em> 管理主机</em>加入到配置组',
  'config.group.save.confirmation.configGroup': '配置组',
  'config.group.save.confirmation.saved': '保存成功',
  'config.group.save.confirmation.manage.button': '管理主机',
  'config.group.description.default': '在 {0} 上创建一个新的配置组',

  'config.infoMessage.wrong.value.for.widget': '配置值不能转化为UI控件的值',
  'config.warnMessage.outOfBoundaries.greater': '当前值大于 {0}, 不推荐',
  'config.warnMessage.outOfBoundaries.less': '当前值小于 {0}, 不推荐',
  'config.warnMessage.llap_queue_capacity.max': 'LLAP will consume entire Yarn queue',

  'errorMessage.config.required': '这是必选',//'This is required',
  'errorMessage.config.number.integer': '只能是数字',//'Must contain digits only',
  'errorMessage.config.number.float': '必须有效数字',//'Must be a valid number',
  'errorMessage.config.mail': '必须email地址',//'Must be a valid email address',
  'errorMessage.config.user': '该值无效',//'Value is not valid',
  'errorMessage.config.password': '密码不匹配',//'Passwords do not match',
  'errorMessage.config.directory.heterogeneous': '路径格式错误,应该是"[{storage type}]/{dir name}"',//'dir format is wrong, can be "[{storage type}]/{dir name}"',
  'errorMessage.config.directory.default': '必须/开始,不能包含空格',//'Must be a slash or drive at the start, and must not contain white spaces',
  'errorMessage.config.directory.allowed': '不能以"home(s)"开始',//'Can\'t start with "home(s)"',
  'errorMessage.config.spaces.trailing': '末尾不能包含空格',//'Cannot contain trailing whitespace',
  'errorMessage.config.spaces.trim': '首尾不能包含空格',//'Cannot contain leading or trailing whitespace',

  'config.infoMessage.wrong.value.for.widget': '配置值不能转化为UI控件的值',
  'config.warnMessage.outOfBoundaries.greater': '当前值大于 {0}, 不推荐',
  'config.warnMessage.outOfBoundaries.less': '当前值小于 {0}, 不推荐',

  'wizard.inProgress': '{0}正在执行',//'{0} in Progress',

  'alerts.instance.fullLogPopup.header': '实例响应',//'Instance Response',
  'admin.addHawqStandby.button.enable': '增加HAWQ备用master',//'Add HAWQ Standby Master',
  'admin.addHawqStandby.closePopup':'增加HAWQ备用master正在进行。'+//'Add HAWQ Standby Master Wizard is in progress. You must allow the wizard to' +
   '必须允许向导完成在不可用状态。如果你选择退出，你必须手工查找文档'+//   ' complete for Ambari to be in usable state. If you choose to quit, you must follow documented manual' +
  '说明完成回滚添加HAWQ备用master。你确定选择退出吗',//' instructions to complete or reverting adding HAWQ Standby Master. Are you sure you want to exit the wizard?',
  'admin.addHawqStandby.wizard.header': '增加HAWQ备用master向导',//'Add HAWQ Standby Master Wizard',
  'admin.addHawqStandby.wizard.step1.header': '开始',//'Get Started',
  'admin.addHawqStandby.wizard.step1.body':'This wizard walks you through the process of adding the HAWQ Standby ' +
    'Master as a backup of the current HAWQ Master host. After you add the HAWQ Standby Master, it serves as a <i>warm standby</i> ' +
    'which may be activated in the event of the primary HAWQ Master host becoming non-operational.<br/><br/>' +
      '<b>This procedure restarts the HAWQ service. Perform this procedure during a scheduled cluster maintenance window.</b>',
  'admin.addHawqStandby.wizard.step2.header': '选择主机',//'Select Host',
  'admin.addHawqStandby.wizard.step2.body': '选择一台主机运行HAWQ备用master',//'Select a host that will be running the HAWQ Standby Master',
  'admin.addHawqStandby.wizard.step3.header': '复览',//'Review',
  'admin.addHawqStandby.wizard.step3.configs_changes': '复览配置变更',//'Review Configuration Changes.',
  'admin.addHawqStandby.wizard.step3.confirm.host.body':'<b>Confirm your host selections.</b>',
  'admin.addHawqStandby.wizard.step3.confirm.config.body':'<div class="alert alert-info">' +
      '<b>Review Configuration Changes.</b><br/><br/>' +
      'The following lists the configuration changes that will be made by the Wizard to add HAWQ Standby Master. ' +
      'This information is for <b> review only </b> and is not editable.</div>',
  'admin.addHawqStandby.wizard.step3.hawqMaster': '当前HAWQmaster',//'Current HAWQ Master',
  'admin.addHawqStandby.wizard.step3.newHawqStandby': '新HAWQ备用master',//'New HAWQ Standby Master',
  'admin.addHawqStandby.wizard.step3.confirm.dataDir.title': 'HAWQ备用master文件夹确认',//'HAWQ Standby Master Directory Confirmation',
  'admin.addHawqStandby.wizard.step3.confirm.dataDir.body': 'Before you complete this procedure, ensure that you ' +
      'rename the directory <b>{0}</b> on the HAWQ Standby Master host <b>{1}</b> if it exists (for example, ' +
      'change it to {0}_old).<br/><br/><b>If {0} exists on the HAWQ Standby Master host, then the new HAWQ ' +
      'Standby Master may be started with stale data, leaving the cluster in an inconsistent state.</b><br/><br/>' +
      'Click Confirm to indicate that you have renamed any existing <b>{0}</b> directory on the HAWQ Standby Master host <b>{1}</b>.',
  'admin.addHawqStandby.step4.save.configuration.note': 'This configuration is created by Add HAWQ Standby wizard',
  'admin.addHawqStandby.wizard.step4.header': '配置组件',//'Configure Components',
  'admin.addHawqStandby.wizard.step4.task0.title': '停止HAWQ服务',//'Stop HAWQ Service',
  'admin.addHawqStandby.wizard.step4.task1.title': '安装HAWQ备用master',//'Install HAWQ Standby Master',
  'admin.addHawqStandby.wizard.step4.task2.title': '重新配置HAWQ',//'Reconfigure HAWQ',
  'admin.addHawqStandby.wizard.step4.task3.title': '启动HAWQ服务',//'Start HAWQ Service',
  'admin.addHawqStandby.wizard.step4.notice.inProgress':'请等待HAWQ备用master安装完成',//'Please wait while HAWQ Standby Master is being deployed.',
  'admin.addHawqStandby.wizard.step4.notice.completed':'HAWQ备用master已经成功安装',//'HAWQ Standby Master has been added successfully.',
  'admin.removeHawqStandby.button.enable': '删除HAWQ备用',//'Remove HAWQ Standby',
  'admin.removeHawqStandby.wizard.header': '删除HAWQ备用向导',//'Remove HAWQ Standby Wizard',
  'admin.removeHawqStandby.wizard.step1.header': '开始',//'Get Started',
  'admin.removeHawqStandby.wizard.step1.body':'This wizard walks you through the process of removing the HAWQ Standby Master ' +
      'in the event of HAWQ Standby Master host failure or maintenance. After you remove the HAWQ Standby Master, the existing HAWQ Master will run in standalone mode without a backup.' +
      '<br/><br/><b>This procedure stops and restarts the HAWQ service. Perform this procedure during a scheduled cluster ' +
      'maintenance window, only when HAWQ Master is functioning properly.</b>' +
      '<br/><br/>After you complete this wizard, the HAWQ cluster will no longer have a Standby Master. ' +
      'As a best practice, use the “Add HAWQ Standby Master” service action to configure a new HAWQ Standby Master for the cluster.',
  'admin.removeHawqStandby.wizard.step2.header': '复览',//'Review',
  'admin.removeHawqStandby.wizard.step2.hawqStandby': '<b>当前HAWQ备用:</b>',//'<b>Current HAWQ Standby:</b>',
  'admin.removeHawqStandby.wizard.step2.confirm.config.body':'<div class="alert alert-info">' +
      '<b>Review Configuration Changes.</b></br></br>After removing the HAWQ Standby Master, the Wizard removes the ' +
      'hawq_standby_address_host property from hawq-site.xml. As a best practice, you should configure a new HAWQ Standby Master host after the Wizard completes.</div>',
  'admin.removeHawqStandby.wizard.step2.confirm.host.body':'<b>Review HAWQ Standby Master role changes.</b>',
  'admin.removeHawqStandby.wizard.step2.confirmPopup.body': 'Do you wish to continue with removing HAWQ Standby Master? Please confirm, before proceeding as you will not be able to rollback from Ambari.',
  'admin.removeHawqStandby.wizard.step3.header': '最终安装',//'Finalize Setup',
  'admin.removeHawqStandby.wizard.step3.task0.title': '删除HAWQ备用',//'Remove HAWQ Standby',
  'admin.removeHawqStandby.wizard.step3.task1.title': '停止HAWQ服务',//'Stop HAWQ Service',
  'admin.removeHawqStandby.wizard.step3.task2.title': '重新配置HAWQ',//'Reconfigure HAWQ',
  'admin.removeHawqStandby.wizard.step3.task3.title': '删除角色：HAWQ备用',//'Delete Role: HAWQ Standby',
  'admin.removeHawqStandby.wizard.step3.task4.title': '启动HAWQ服务',//'Start HAWQ Service',
  'admin.removeHawqStandby.closePopup':'Remove HAWQ Standby Wizard is in progress. You must allow the wizard to' +
      ' complete for Ambari to be in usable state. If you choose to quit, you must follow manual instructions to' +
      ' get back to a stable state. Are you sure you want to exit the wizard?',
  'admin.removeHawqStandby.wizard.step3.notice.inProgress':'请等待HAWQ备用master删除',//'Please wait while HAWQ Standby is being removed',
  'admin.removeHawqStandby.wizard.step3.notice.completed':'HAWQ备用已经成功删除',//'HAWQ Standby has been removed successfully.',
  'admin.removeHawqStandby.wizard.step3.removeHawqStandbyCommand.context': '执行HAWQ备用删除命令',//'Execute HAWQ Standby remove command',
  'admin.removeHawqStandby.wizard.step3.save.configuration.note': '该配置文件是删除HAWQ备用向导创建',//'This configuration was created by Remove HAWQ Standby wizard',
  'admin.activateHawqStandby.button.enable': '激活HAWQ备用master',//'Activate HAWQ Standby Master',
  'admin.activateHawqStandby.wizard.header': '激活HAWQ备用master向导',//'Activate HAWQ Standby Master Wizard',
  'admin.activateHawqStandby.wizard.step1.header': '开始',//'Get Started',
  'admin.activateHawqStandby.wizard.step1.body': 'This wizard walks you through the process of activating the HAWQ Standby Master ' +
      'in the event of HAWQ Master host failure. After you activate the HAWQ Standby Master, ' +
      'it is promoted as the new HAWQ Master, and the previous HAWQ Master configuration ' +
      'is removed from the cluster.<br/><br/><b>This procedure restarts the HAWQ service. ' +
      'Perform this procedure during a scheduled cluster maintenance window, unless the current ' +
      'HAWQ Master is not functioning.</b><br/><br/> After you complete this wizard, the HAWQ cluster ' +
      'will no longer have a Standby Master. As a best practice, use the “Add HAWQ Standby Master” ' +
      'service action to configure a new HAWQ Standby Master for the cluster.',
  'admin.activateHawqStandby.wizard.step2.header': '复览',//'Review',
  'admin.highAvailability.wizard.step2.toBeDeleted': '将被删除',//'TO BE DELETED',
  'admin.activateHawqStandby.wizard.step2.hawqMaster': '<b>当前HAWQ master:</b>',//'<b>Current HAWQ Master:</b>',
  'admin.activateHawqStandby.wizard.step2.hawqStandby': '当前HAWQ备用master',//'<b>Current HAWQ Standby Master:</b>',
  'admin.activateHawqStandby.wizard.step2.toBeActivated': '激活成新HAWQ master',//'TO BE ACTIVATED AS NEW HAWQ MASTER',
  'admin.activateHawqStandby.wizard.step2.confirm.config.body': '<div class="alert alert-info">' +
      '<b>Review Configuration Changes.</b><br/><br/>The Wizard will make the following configuration changes. '+
      'This information is for review only, and cannot be edited.<br/><br/><b>After activating the HAWQ Standby ' +
      'Master, the wizard removes the hawq_standby_address_host property from hawq-site.xml.</b> ' +
      'As a best practice, you should configure a new HAWQ Standby Master host after the wizard completes.</div>',
  'admin.activateHawqStandby.wizard.step2.confirm.host.body':'<b>Review HAWQ Master & Standby Master role changes.</b>',
  'admin.activateHawqStandby.wizard.step2.confirmPopup.body': 'Do you wish to continue with activating HAWQ Standy Master? ' +
      'Please confirm, before proceeding as you will not be able to rollback from Ambari.',
  'admin.activateHawqStandby.wizard.step3.header': '最终安装',//'Finalize Setup',
  'admin.activateHawqStandby.wizard.step3.task0.title': '激活HAWQ备用master',//'Activate HAWQ Standby Master',
  'admin.activateHawqStandby.wizard.step3.task1.title': '停止HAWQ服务',//'Stop HAWQ Service',
  'admin.activateHawqStandby.wizard.step3.task2.title': '重新配置HAWQ',//'Reconfigure HAWQ',
  'admin.activateHawqStandby.wizard.step3.task3.title': '新建角色：新HAWQ master',//'Install Role: New HAWQ Master',
  'admin.activateHawqStandby.wizard.step3.task4.title': '删除角色：前HAWQ master',//'Delete Role: Previous HAWQ Master',
  'admin.activateHawqStandby.wizard.step3.task5.title': '删除角色： 前HAWQ备用',//'Delete Role: Previous HAWQ Standby',
  'admin.activateHawqStandby.wizard.step3.task6.title': '启动HAWQ服务',//'Start HAWQ Service',
  'admin.activateHawqStandby.closePopup':'Activate HAWQ Standby Wizard is in progress. You must allow the wizard to' +
      ' complete for Ambari to be in usable state. If you choose to quit, you must follow manual instructions to' +
      ' get back to a stable state. Are you sure you want to exit the wizard?',
  'admin.activateHawqStandby.wizard.step3.notice.inProgress':'请等待，HAWQ备用master正在被激活',//'Please wait while HAWQ Standby Master is being activated',
  'admin.activateHawqStandby.wizard.step3.notice.completed':'HAWQ备用master已经被激活',//'HAWQ Standby Master has been activated successfully.',
  'admin.activateHawqStandby.wizard.step3.activateHawqStandbyCommand.context': '执行HAWQ备用master激活命令',//"Execute HAWQ Standby Master activate command",
  'admin.serviceAutoStart.save.popup.title': '保存自动启动配置',//'Save Auto-Start Configuration',
  'admin.serviceAutoStart.save.popup.body': 'You are changing the auto-start configuration.' +
      'Click <b>Save</b> to commit the change or <b>Discard</b> to revert your changes',
  'admin.serviceAutoStart.save.popup.transition.title': '警告',//'Warning',
  'admin.serviceAutoStart.save.popup.transition.body': '还未保存修改',//'You have unsaved changes',

  'reset.ui.states': '重置UI状态',//'Reset UI State',
  'reset.ui.states.body': 'You should proceed only if the UI is misbehaving (such as incorrect navigation upon login, UI is stuck and won&apos;t load, etc.).  Are you sure you want to reset the UI state?',

  'app.logger.ajax': 'Ajax加载时间：{0} [{1}]',//'Ajax loading time: {0} [{1}]',
  'app.logger.wizard': '向导第{0}步加载时间',//'wizard step {0} loading time'

};
