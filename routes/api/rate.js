const express = require("express");
const router = express.Router();
const rateServ = require("../../services/rateService");
const { asyncHandler } = require("../getSendResult");
const jwt = require("../jwt");

/**
 * 无需任何条件，拿到 rate
 */
router.post(
    '/query',
    asyncHandler(async (req) => {
        console.log('received a request of getRate from client .')
        // console.log(req.body);
        const result = await rateServ.getRateById(req.body.id);
        console.log(result)
        return result;
    })
)

/**
 * admin-h 修改 rate
 */
router.post(
    '/update',
    asyncHandler(async (req, res) => {
        const result = await rateServ.update(req.body.id, req.body.rateObj);
     if (result) {
          console.log('result : ',result)
        }
        return result;
    })
)

module.exports = router;