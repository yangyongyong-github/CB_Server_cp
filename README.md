# 中国银行存储管理系统（全栈）- Node.js后端项目

npm install # 安装依赖

npm run start # 启动项目


# 中国银行存储管理系统（全栈） 

## 项目描述： 
综合在校期间所学的各种技术，完成一个全栈项目；实现一个银行系统的基本功能：用 户（存款用户、取款用户、系统普通管理员、银行高级管理员）登录、注册、存取款、贷还款、抽奖、修改部分个人信息，管理员管理用户（例如设置用户的权限（冻结用户、设置大额贷款限制））、管理银行（修改删除用户信息、增改利率、设置银行本金等）；实现了在浏览器端借助 node 服务器完成对
数据库的增删改查等功能，实现了项目所需各种业务需求，极大的锻炼了自己的开发能力和提升了技术水平。

## 技术栈：
（前端部分）
1. 基于 Vue 技术，项目采用 vue-cli3 脚手架为基础模板创建；
2. 数据共享主要使用 Vuex 技术，其中国际化（多语言切换）功能，借助于 vuex 来实现；
3. 路由导航上使用 VueRouter 技术，其中用户访问页面的权限借助于 beforeEnter+Vuex 来实现；
4. 大量使用了 Vue 的生命周期钩子函数，例如打开网站后，自动调用 created 钩子函数，向服务器发
起网络请求，获取最新的数据库中的银行信息，保存在数据仓库 Store 中，便于用户在未登录的情况下，
即可看到银行的首页展示信息，例如利率等；
（后端和数据库）
5. 服务器为 Node.js，采用 express 框架，其中广泛使用了中间件，例如 log4js；
6. 数据传输安全上采用 jwt（json web token）和 token，为多种终端设备，提供统一的、安全的令牌格式；
7. 数据库采用 MySQL，Node 服务器借助于成熟的 ORM 框架中的 sequelize、mysql2 驱动，实现和数据库的交互；
