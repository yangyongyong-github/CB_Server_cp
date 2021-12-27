require("./init"); // modal包括了 所有前端过来的请求


const { sum } = require("./util/sum")


const UserI = require("./services/useri_Service");
const UserII = require("./services/userii_Service");
const bk = require('./services/bankQuery');

async function getAsyncData() {

    const resuI = await UserI.getAllUser(); // getAllUser Obj 该表中用户的所有信息 [{},{},...]
    const resuII = await UserII.getAllUser();
    const bank = await bk.getBankByBankId('CBNo1');
    console.log(bank);

    // const resultI = await UserI.getAllUserCount();
    // const resultII = await UserII.getAllUserCount();

    const Obj = [];
    Obj.push(resuI);
    Obj.push(resuII)
    // const Obj = Object.assign({}, resuII,resuI ) // 同名属性 系统默认的id，实现覆盖
 
    // const result = await User.getUserByAccount(2); // byPk:id
    // const result = await User.getUserByAccount("yangxiang01"); // account

    // const result = await User.deleteUser("nanjiaxin02"); // deleteUser by account
    // console.log("getAllUser :", Obj);
    // console.log('异步数据操做，处理完成！');

    // console.log(" > User_II : deposit 存款用户 ---------- ")
    // console.log('存款用户 :',resultII.Count);
    // console.log("总存款额度 :", sum(resultII.datas, 'deposit'))
    // console.log("总存款利息 :", sum(resultII.datas, 'interest'))

    // console.log("> User_I : loan 贷款用户 ----------- ")
    // console.log('贷款用户 :',resultI.Count);
    // console.log("总贷款额度 :", sum(resultI.datas, 'loan'))
    // console.log("总贷款利息 :", sum(resultI.datas, 'interest'))

}

// 测试
// getAsyncData();
