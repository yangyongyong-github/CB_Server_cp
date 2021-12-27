const express = require("express");
const router = express.Router();
const bankServ = require("../../services/bankQuery");
const { asyncHandler } = require("../getSendResult");
const jwt = require("../jwt");

/**
 * 无需任何条件，拿到 rate
 */
 router.post(
    '/bank',
    asyncHandler(async (req) => {
        console.log(req.body);
        const result = await bankServ.getBankByBankId(req.body.id);
        return result;
    })
)
