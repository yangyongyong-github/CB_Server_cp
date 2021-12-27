const express = require("express");
const router = express.Router();
const rateServ = require("../../services/rateService");
const { asyncHandler } = require("../getSendResult");
const jwt = require("../jwt");

/**
 * 无需任何条件，拿到 rate
 */
 router.post(
    '/rate',
    asyncHandler(async (req) => {
        console.log('received a request of getRate from client .')
        console.log(req.body);
        const result = await rateServ.getRateById(req.body.id);
        return result;
    })
)


/**
 * admin-h 修改 rate
 */
router.post(
    '/admin/rate',
    asyncHandler(async (req, res) => {
        const result =await rateServ.getRate(req.body.id, req.body.rateObj);
        // 通过该id能都拿到对应的信息
        if (result) {
            let value = result.id;
            jwt.publish(res, undefined, { id: value });
        }
        return result;
    })
)

module.exports = router;