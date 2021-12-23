// 管理员初始化
// 判断数据库中是否有管理员，如果没有，自动添加一个默认管理员
const Admin = require("../models/Admin");

const AdminTemp = require("./adminQuery");

/**
 * 登录验证函数
 * 通用: admin user_i user_ii
 * @param {*} loginId 
 * @param {*} loginPwd 
 * @returns 
 */
exports.login = async function (loginId, loginPwd) {
    const result = await Admin.findOne({
        where: {
            loginId,//ES6的速写属性
            loginPwd
        }
    })

    /*
        区分大小写的判断：
        方式1 数据库中对应的一列设置为二进制
        方式2 使用JS逻辑(use)
  */
    if (result && result.loginId === loginId && result.loginPwd === loginPwd) {
        console.log(" > admin login done .");
       
        return result.toJSON();
    }
    else {
        console.log(' > login fail .');
        return null;
    }
}


/**
 * 通过 账号 查找用户信息
 * admin user_i user_ii 通用
 * 用处：1. 新增用户前的验证 2. 拿到用户的信息
 * @param {*} loginId 
 * @returns 
 */
// 内部要使用，还要导出外部使用

exports.getAdminByLoginId = async function (loginId) {
    // const result = await Admin.findByPk(id);
    const result = await Admin.findOne({
        where: {
            loginId
        }
    })
    if (result) {
        return result.toJSON();
    } else {
        return null;
    }
}


// exports.addAdmin = async function (adminObj) {
//     // 应该判断adminObj的各种属性是否合理，以及账号是否已存在
//     const ins = await Admin.create(adminObj);
//     return ins.toJSON();
// }


/**
 * 添加管理员(用户自己注册)
 * @param {*} 
 * @returns 
 */
exports.addAdmin = async function (userObj) {
    // 应该判断adminObj的各种属性是否合理，以及账号是否已存在

    // 首先跑一边查询，去数据库中查询该账号是否存在
    await AdminTemp.getAdminByLoginId(userObj.loginId).then((r) => {
        console.log('> run query of admin (loginId) : ', r);
        if (r) {
            // 存在该账号
            console.log("---------------------------");
            console.log('AlreadyExist!');
        }
        else {
            // 不存在，可以创建
            const ins = Admin.create(userObj);
            console.log("新用户 Admin 添加成功！");
            return ins.toJSON();
        }
    })
}


// exports.deleteAdmin = async function (adminObj) {
//     const result = await Admin.destory({
//         where: {
//             loginId: adminObj
//         }
//     })
//     return result;
// }


/**
 * 管理员数据更新
 * 
 * 对自身的操做
 * 对银行内部的操做：存贷汇率变动、银行本金的增减
 * 对用户的操做：冻结用户
 *      -   AdminI 大额贷款
 *      -   AdminII 
 * 
 * @param {*} loginId 
 * @param {*} adminObj 
 * @returns 
 */
exports.updateAdmin = async function (loginId, adminObj) {
    const result = await Admin.update(adminObj, {
        where: {
            loginId: loginId,
        }
    });
    return result;
}


/**
 * 拿到所有的用户, 使用时，放到异步函数中
 * @returns 
 */
exports.getAllUserII = async function () {
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result));
};