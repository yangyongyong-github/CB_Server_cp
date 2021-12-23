

// const UserI = require("./services/useri_Service");

// /*
// UserII
let newObj = {
    name: "南佳昕2",
    sex: false,
    birthday: "1998-3-10",
    account: "nanjiaxin02",
    loginId: "nanjiaxin01",
    loginPwd: "nanjiaxin01.p",
    job: "teacher_baby",
    mobile: 15118735028,
    isFreezed: false,
    cage: "II",
    company: "childrenGraden",
    deposit: 6000.2,
    interest: 102.1,
}

UserII.addUser(newObj );

/*
// UserI
let newObj = {
    name: "陈曦",
    sex: false,
    birthday: "2001-10-10",
    account: "chenxi01",
    loginId: "chenxi01",
    loginPwd: "chenxi01.p",
    job: "teacher",
    mobile: 19958552946,
    limited: true,
    isFreezed: false,
    cage: "I",
    company: "school_lanzhou",
    ident: 1,
    loan: 3010.1,
    interest: 10.1,
    cause: "get married",
} 
*/

// UserI.addUser(newObj );

//  UserII.login('yangxiang01', 'yangxiang01.p');

// 查询利率
const RatePer = require("./services/rateServe")

async function getAsyncValue() {

    // 添加一条利率
    // const result = await RatePer.addRate(RateInfo)

    // 查询利率
    const result = await RatePer.getRate(1);

    // 修改利率
    // const result = await RatePer.updateRate(1, RateInfo)

    console.log('异步数据操做，处理完成！   ', result)
}

// 测试
// getAsyncValue()

// 修改用户信息，deposit & take
