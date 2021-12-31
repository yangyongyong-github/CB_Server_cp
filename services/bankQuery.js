const Bank = require('../models/Bank')

/**
 * 通过bankId查找bank信息
 * @param {*} bankId 
 * @returns 
 */
// 内部要使用，还要导出外部使用
exports.getBankByBankId = async function (bankId) {
    const result = await Bank.findOne({
        where: {
            bankId
        }
    })

    if (result) {
        console.log('bank query : ', result);
        return result.toJSON();
    } else {
        return null;
    }
}
