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

router.get("/whoami", asyncHandler(async (req, res) => {
  return await userIServ.getUserIById(req.userId)
}))

module.exports = router;
