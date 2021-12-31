require("./init"); // modal包括了 所有前端过来的请求 

// 
// const BK = require('./services/bankService')
// const Admin = require('./services/adminService')
   
// 查询利率
const RatePer = require("./services/rateService")

async function getAsyncValue() {
    console.log(" > run async func ... ");

    // 查询利率
    const result = await RatePer.getRateById(1);

    // add bank info
    /* 
    let bkObj = {
        name: 'china bank',
        bankId: 'CBNo1',
        corpus: 0,
        flag:'bank'
    }
    BK.addBank(bkObj);
   */

    //    add admin

    // let newObj = {
    //     name: "总经理", 
    //     loginId: "admin1",
    //     loginPwd: 1234, // 一定要注意数字就写数字，不要写"123"字符串的数字，否则后患无穷
    //     rank:'h'
    // }
    // let newObj1 = {
    //     name: "管理员",
    //     loginId: "admin2",
    //     loginPwd: 1234, // 一定要注意数字就写数字，不要写"123"字符串的数字，否则后患无穷
    //     rank:'c'
    // }

    // Admin.addAdmin(newObj1);
    // console.log('异步数据操做，处理完成！   ', result)
}
 
// 测试
// getAsyncValue()

