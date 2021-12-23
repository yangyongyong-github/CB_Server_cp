const Admin = require("../models/Admin");

/**
 * 通过账号查找用户信息
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
