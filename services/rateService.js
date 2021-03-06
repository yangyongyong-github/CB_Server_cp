const Rate = require("../models/Rate");

/**
 * 拿到利率数据
 * 传入id 拿到这里列的所有值
 * 整体取出式
 */
exports.getRateById = async function (id) {
    const result = await Rate.findOne({
        where: {
            id
        }
    })
    if (result) {
        return result.toJSON();
    } else {
        return null;
    }
}


/**
 * 管理员 修改数据库中的利率表
 * @param {*} id 
 * @param {*} rateObj 
 * @returns 
 */
exports.update = async function (id, rateObj) {
    const result = await Rate.update(rateObj, {
        where: {
           bankId: id
        }
    });
    return result;
}

/**
 * 管理员 添加一条利率
 *  暂时不用
 * @param {*} rateObj 
 * @returns 
 */
exports.addRate = async function (rateObj) {
    const ins = await Rate.create(rateObj);
    console.log("新的一种类型的利率，添加成功！")
    return ins.toJSON();
}