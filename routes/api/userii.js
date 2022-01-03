const express = require("express");
const router = express.Router();
const userIIServ = require("../../services/userii_Service");
const { asyncHandler } = require("../getSendResult");
const jwt = require("../jwt");

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    // console.log('receive request of userii login  .')
    const result = await userIIServ.login(req.body.loginId, req.body.loginPwd);
    if (result) {
      let value = result.id;
      //登录成功
      jwt.publish(res, undefined, { id: value });
    }
    return result;
  })
);

// user query by account
const userQuery = require("../../services/userii_Query");
router.post(
  "/query",
  asyncHandler(async (req, res) => {
    // console.log('receive request of [ query ].')
    const result = await userQuery.getUserIByAccount(req.body.account);
    return result;
  })
);


// adduser
router.post(
  "/adduser",
  asyncHandler(async (req) => {
    // console.log('received request of [ userii adduser ] .', req.body); //req.body : 用户传过来的 userObj
    const result = await userIIServ.addUser(req.body);
    return result;
  })
);

// updata: useri userii
router.post(
  "/update",
  asyncHandler(async (req) => {
    console.log("api / userii : ", req.body); //req.body : 用户传过来的 userObj
    const result = await userIIServ.updateUser(req.body);
    console.log('user updata done. '); // 这里不是直接返回userObj结果？而是一串信息
    return result;
  })
);



router.get("/whoami", asyncHandler(async (req, res) => {
  return await userIIServ.getUserIById(req.userId)
}))

module.exports = router;
