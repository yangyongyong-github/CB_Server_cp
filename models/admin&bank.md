## 银行资金运转表 bankTable

银行的名称（便于分部门）
name bankId curpos | 虚拟（通过计算属性获得）income fund(目前在帐) ULnum UDnum userNum 


## adminTable

> 管理员类别　		权限等级		职能划分（权限对应的操做）

- 超级管理员（高管）	h(high) : 		增减本金、修改利率、查看income、fund 		----（操做银行）
- 普通管理员　		c(common): 	修改部分用户信息、删除用户、冻结、大额贷款限制 	--- （操做用户）

name loginId loginPwd rank
