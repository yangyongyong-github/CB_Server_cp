const sequelize = require("./db")
const { DataTypes } = require("sequelize")

module.exports = sequelize.define(
    "Rate", {
    // 存款利率
    // 存款额度限制:仅在用户输入金额时，作为判别依据
    A: { // 大额，例如10000
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    B: { //中额，例如1000
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    // 存款时间和利率
    // 大额:
    A_1: { // 1-3year(不满一年按一年算) 2.44 * 0.01
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    A_3: { // > 3year  4.13 * 0.01
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    // 中额：1000，2.1 * 0.01
    B_1: { // 1-3year
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    B_3: { // > 3year：3.85 * 0.01
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    C: { // 大额贷款限制
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    // 贷款利率(没有数额限制，只有时间限制)
    L_s: { //短期 <= 1 year:4.35
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    L_m: { //中期 1-5 year:4.75
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    L_l: { //长期 >5 year:4.90
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    //  表的类型 唯一标识符 : bank rate admin useri userii
    flag: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        createAt: false,
        updateAt: false,
        paranoid: true,//从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
    }
)