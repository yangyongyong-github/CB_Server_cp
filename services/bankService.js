// bank初始化

const Bank = require('../models/Bank');
const BankTemp = require('./bankQuery')

/**
 * 添加 银行信息：超级管理员(很少操做)
 * @param {*} bankObj 
 * @returns 
 */
exports.addBank = async function (bankObj) {
    // 应该判断adminObj的各种属性是否合理，以及账号是否已存在

    // 首先跑一边查询，去数据库中查询该账号是否存在
    await BankTemp.getBankByBankId(bankObj.bankId).then((r) => {
        console.log('> run query of bankId : ', r);
        if (r) {
            // 存在该账号
            console.log("---------------------------");
            console.log('AlreadyExist!');
        }
        else {
            // 不存在，可以创建
            const ins = Bank.create(bankObj);
            console.log("bank create done");
            return ins.toJSON();
        }
    })
}

/**
 * 更新银行信息
 */
exports.updateBankInfo = async function (userObj) {
    const result = await BankTemp.update(userObj, {
        where: {
            id
        }
    });
    return result;
}

