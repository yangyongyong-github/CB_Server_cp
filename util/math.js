
// 和Client(vue) 一致，只是 ES6模块化 -> CommonJS 导出

/**
 * 保留指定位数的小数
 * @param {*} num 原数
 * @param {*} pos 保留的位数
 * @returns 
 */

exports.DecimalPos = function (num, pos) {
    // .toFixed()   String
    num = Number(num.toFixed(pos))
    return num;
}

