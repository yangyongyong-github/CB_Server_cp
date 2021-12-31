const express = require("express");
const router = express.Router();
const userIServ = require("../../services/useri_Service");
const { asyncHandler } = require("../getSendResult");
const jwt = require("../jwt");

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const result = await userIServ.login(req.body.loginId, req.body.loginPwd);
    if (result) {
      let value = result.id;
      //登录成功
      jwt.publish(res, undefined, { id: value });
    }
    return result;
  })
);


// user query by account
const userQuery = require("../../services/useri_Query");
router.post(
  "/query",
  asyncHandler(async (req, res) => {
    // console.log('receive request of [ query ].')
    const result = await userQuery.getUserIByAccount(req.body.account);
    return result;
  })
);

router.post(
  "/delete",
  asyncHandler(async (req, res) => {
    // console.log('receive request of [ query ].')
    const result = await userIServ.deleteUser(req.body.account);
    return result;
  })
);


// adduser
router.post(
  "/adduser",
  asyncHandler(async (req) => {
    // console.log('received request of [ userii adduser ] .', req.body); //req.body : 用户传过来的 userObj
    const result = await userIServ.addUser(req.body);
    return result;
  })
);

// updata: useri userii
router.post(
  "/updata",
  asyncHandler(async (req) => {
    console.log("api / userii : ", req.body); //req.body : 用户传过来的 userObj
    const result = await userIServ.updateUser(req.body);
    console.log('user updata done. '); // 这里不是直接返回userObj结果？而是一串信息
    return result;
  })
);



router.get("/whoami", asyncHandler(async (req, res) => {
  return await userIServ.getUserIById(req.userId)
}))

module.exports = router;
