const express = require("express");
const router = express.Router();

// 这里是 node中,不能使用 ES6 module 报错:导入失败
// import userI from 
// import userII from '../../services/userii_Service'
// import { asyncHandler } from '../getSendResult';

// 只能使用 commonJS
const userI = require('../../services/useri_Service');
const userII = require('../../services/userii_Service');
const { asyncHandler } = require("../getSendResult");

router.post(
    '/users',
    asyncHandler(async (req) => {
        const I = await userI.getAllUserCount(req.body);
        const II = await userII.getAllUserCount();

        const result = [];
        result.push(I);
        result.push(II);
        // const result = Object.assign({}, I) 容易导致覆盖，数据丢失

        if (result) {
            return result;
        } else {
            console.log('get fail')
        }
    })
)

module.exports = router;