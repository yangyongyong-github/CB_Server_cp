// 用户初始化
const User = require("../models/User_II");
const userTemp = require("./userii_Query")

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
        console.log(" > userii login done : ", result.toJSON());
        return result.toJSON();
    }
    return null;
}

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
            console.log("新用户UserII数据 创建成功！");
            return ins.toJSON();
        }
    })
}


/**
 * depisit take
 * 部分 个人信息
 * 
 * @param {*} id 
 * @param {*} userObj 
 * @returns 
 */
exports.updateUser = async function (userObj) {
    // adminObj.loginPwd = md5(adminObj.loginPwd);
    const result = await User.update(userObj, {
        where: {
            loginId: userObj.loginId
        }
    });
    return result;
}


// ==============================================

// https://sequelize.org/v5/manual/querying.html

/**
 * 拿到所有的用户 -> 拿到各前5条，既 id <=5 的
 * @returns 
 */
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

exports.getAllUser = async function () {
    // const result = await User.findAll();

    // const result = await Sequelize.query("SELECT `id`, `name`, `account`, `loginId`, `loginPwd`, `sex`, `birthday`, `mobile`, `job`, `isFreezed`, `deposit`, `interest`, `flag`,FROM `chinabankdb.user_iis` where id <= 5  order by `deposit` desc", { type: Sequelize.QueryTypes.SELECT}).then(users => {
    //    console.log('hihi', users)
    //   })

   
    /**
     * 找出存款数最多的前三位用户
     */
    const users = await User.findAll({
        
        // where: {
        //     id: {
        //         [Op.lte]: 3 // [Op.lte]: 10,  // <= 10
        //     }
        // },
    //    order:[
    //     [ Sequelize.fn('max', Sequelize.col('deposit')), 'DESC'],
    //    ]
        // order: Sequelize.literal('max(age) DESC')
        order: Sequelize.literal('deposit') // 默认升序
      
    });
    const result = JSON.parse(JSON.stringify(users));
    // console.log(result)
    const usersTop =[];
    usersTop.push(result[result.length-1]); // max
    usersTop.push(result[result.length-2]); // max-1(前一位)
    usersTop.push(result[result.length-3]); // max-2
    // console.log(userTop)
   return usersTop;

};

// findAndCountAll
exports.getAllUserCount = async function () {
    // const result = await User.findAndCountAll(); 
    const result = await User.findAndCountAll({
        attributes: ["deposit", "interest"],
    });
    /*  const result = await User.findAndCountAll({
         attributes: ["loginId", "account", "name", "sex", "deposit", "interest"],
         where: { sex: 0 } 
     }); */
    return {
        Count: result.count,
        datas: JSON.parse(JSON.stringify(result.rows)),// 输出数据为 attributes中定义好的
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