const User = require("../models/User_I");

/**
 * 通过账号查找用户信息
 * admin user_i user_ii 通用
 * 用处：1. 新增用户前的验证 2. 拿到用户的信息
 * @param {*} account 
 * @returns 
 */
// 内部要使用，还要导出外部使用
exports.getUserIByAccount = async function (account) {
    // const result = await Admin.findByPk(id);
    const result = await User.findOne({
        where: {
            account
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
