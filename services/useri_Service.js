// 用户初始化
const User = require("../models/User_I");
const userTemp = require("./useri_Query")


/**
 * 登录验证函数
 * 通用: admin user_i user_ii
 * @param {*} loginId 
 * @param {*} loginPwd 
 * @returns 
 */
exports.login = async function (loginId, loginPwd) {
    const result = await User.findOne({
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
        console.log(" > useri login done .");
        return result.toJSON();
    }
    else {
        console.log(' > login fail .');
        return null;
    }
}



// /**
//  * 通过loginId查找用户信息
//  * admin user_i user_ii 通用
//  * 用处：1. 新增用户前的验证 2. 拿到用户的信息
//  * @param {*} account 
//  * @returns 
//  */
exports.getUserIById = async function (account) {
    // const result = await Admin.findByPk(id);
    const result = await User.findOne({
        where: {
            loginId
        }
    })
    if (result) {
        console.log("fint it .")
        console.log("---------------------------")
        return result.toJSON();
    } else {
        return null;
    }
}
// // 内部使用的
// async function getUserIByAccount(account) {
//     // const result = await User.findByPk(id);
//     const result = await User.findOne({
//         where: {
//             account
//         }
//     })

//     if (result) {
//         return result.toJSON();
//     } else {
//         return null;
//     }
// }
// // 对外导出的
// // exports.getUserIByAccount = getUserIByAccount();
// /*
// 注意细节：
//     账号不存在，但是loginId存在，这时就冲突
//     前提 account和loginId一样，就不会发生
// */


/**
 * 这里的多个异步执行的Promise串联是一个麻烦，开发中一定要小心！ 
 */

// 用户自己注册
exports.addUser = async function (userObj) {
    // 应该判断adminObj的各种属性是否合理，以及账号是否已存在

    // 首先跑一边查询，去数据库中查询该账号是否存在
    await userTemp.getUserIByAccount(userObj.account).then((r) => {
        console.log('> run query : ', r);
        if (r) {
            // 存在该账号
            console.log("---------------------------");
            console.log('AlreadyExist!');
        }
        else {
            // 不存在，可以创建
            const ins = User.create(userObj);
            console.log("新用户UserI数据 创建成功！");
            return ins.toJSON();
        }
    })
}


/**
 * 部分 个人信息 
 */
exports.updateUser = async function (userObj) {
    const result = await User.update(userObj, {
        where: {
            loginId: userObj.loginId
        }
    });
    return result;
}



// ==============================================

/**
 * 拿到 贷款用户最多的前三位
 * @returns 
 */
const Sequelize = require('sequelize');

exports.getAllUser = async function () {
    const users = await User.findAll({
        order: Sequelize.literal('loan') // 默认升序
    });

    const result = JSON.parse(JSON.stringify(users));

    const usersTop = [];
    usersTop.push(result[result.length - 1]); // max
    usersTop.push(result[result.length - 2]); // max-1(前一位)
    usersTop.push(result[result.length - 3]); // max-2
    // console.log(userTop)
    return usersTop;
};

/**
 * findAndCountAll
 * @returns 
 */
exports.getAllUserCount = async function () {
    // const result = await User.findAndCountAll(); 
    const result = await User.findAndCountAll({
        attributes: ["loan", "interest"],
    });
    /*  const result = await User.findAndCountAll({
         attributes: ["loginId", "account", "name", "sex", "deposit", "interest"],
         where: { sex: 0 }
     }); */
    return {
        Count: result.count, // 总人数
        datas: JSON.parse(JSON.stringify(result.rows)),// 输出数据为 attributes中定义好的 // 总额度
    };

};


/* 
  default return result: 默认返回结果
        count: 3,
        rows: [ {},{},{}]
 */


/**
 * 查找指定的用户，通过id/account
 * @param {*} id
 * @returns 
 */
// 方式一
exports.getUserById = async function (id) {
    const result = await User.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
};

// 方式二
exports.getUserByAccount = async function (account) {
    const result = await User.findOne({
        where: {
            account,
        },
    });
    if (result) {
        return result.toJSON();
    }
    return null;
}


/**
 * Delete User
 * @param {*} account 
 * @returns 
 */
exports.deleteUser = async function (account) {
    // 方式1
    //   // 1.得到实例
    //   const ins = await Admin.findByPk(adminId);
    //   //   console.log(ins);
    //   // 2.删除实例
    //   if (ins) {
    //     await ins.destroy();
    //   }
    // 方式2
    const result = await User.destroy({
        where: {
            account,
        },
    });
    return result;
};