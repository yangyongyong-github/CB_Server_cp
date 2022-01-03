const express = require("express");
const router = express.Router();
const bankServ = require("../../services/bankService");
const { asyncHandler } = require("../getSendResult");

/**
 * 无需任何条件，拿到 rate
 */
const bankQuery = require("../../services/bankQuery");
 router.post(
    '/query',
    asyncHandler(async (req) => {
        // console.log(req.body);
        const result = await bankQuery.getBankByBankId(req.body.id);
        return result;
    })
)

/**
 * update bank corpus 
 */
 router.post(
    '/update',
    asyncHandler(async (req) => {
        const result = await bankServ.update(req.body.id, req.body.bankObj);
        if (result) {
          console.log('result : ',result)
        }
        return result;
    })
)
module.exports = router;
