# 架构整洁之道 
* 最近读完《架构整洁之道》，对架构有了更深层次的认识
* 做一个TodoList的应用
## TodoList
* 用户输入标题、事项的详细内容、选择提醒时间点、是否到时间提醒等内容。创建成功
* 这个待办事项会加入到自己的日程里，根据用户的设置，到时间后是否会提醒用户。（待定）
* 用户以时间线的方式，可以查看自己的当天的待办事项
* 用户可以删除自己的事项，该事项进入垃圾桶里
* 用户可以修改标题、事项的详细内容、提醒时间、是否到时间提醒等内容
* 在垃圾桶找回自己删除的事项
* 删除垃圾桶里的待办事项，不能找回
## 要求
* 因为要训练架构能力，所以增加复杂度
* 需要支持Web、H5等，UI风格不一样
* 数据的存储方式支持localStorage、sessionStorage、内存
* 不同的端对应的存储方式不固定，会改变存储方式（暂时不考虑数据的持久化）
* 不同的端对应的请求方式不一样，支持fetch、ajax
## 实现
* 如果想设计一个容易扩展的系统，其策略是要在设计中尽可能长时间地保留尽可能多的可选项
* 依赖接口，不依赖细节
* UI、数据库、请求方式都是细节，这些不能作为被依赖的一方
* 业务实体是核心，是被依赖的一方
* 划分主要模块：view、presenter、controller、interactor、database
* view是纯展示相关的，现在有web、h5。
* presenter负责连接view和modal
* controller是控制器，执行增删改查等操作
* interactor是核心模块，负责业务的具体实现，以及读写数据库，返回数据
* database是数据存储，暂时有localStorage、sessionStorage、内存三种方式
* 模块之间、模块内部之间依赖接口，不依赖实现
* 支持两种请求方式axios、fetch。需要定义IHTTP接口，axios和fetch实现IHTTP
