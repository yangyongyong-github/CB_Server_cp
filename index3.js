require("./init"); // modal包括了 所有前端过来的请求


const { sum } = require("./util/sum")


const UserI = require("./services/useri_Service");
const UserII = require("./services/userii_Service");

async function getAsyncData() {
    // const result = await User.getAllUser(); // getAllUser Obj
    const resultI = await UserI.getAllUserCount();
    const resultII = await UserII.getAllUserCount();


    // const result = await User.getUserByAccount(2); // byPk:id
    // const result = await User.getUserByAccount("yangxiang01"); // account

    // const result = await User.deleteUser("nanjiaxin02"); // deleteUser by account
    // console.log("getAllUser :", result);
    // console.log('异步数据操做，处理完成！');

    console.log(" > User_II : deposit ")
    console.log("all deposit :", sum(resultII.datas, 'deposit'))
    console.log("all interest :", sum(resultII.datas, 'interest'))

    console.log("> User_I : loan ")
    console.log("all loan :", sum(resultI.datas, 'loan'))
    console.log("all interest :", sum(resultI.datas, 'interest'))

}

// 测试
// getAsyncData();
