const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const Bank = sequelize.define(
    "Bank",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bankId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        corpus: { //本金
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        // 表的类型 唯一标识符 : bank rate admin useri userii
        flag: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        /**
         * 虚拟字段（通过计算属性获得）
         * income 
         * fund(目前在帐) 
         * ULnum 
         * UDnum 
         * userNum 
         */
    },
    {
        createAt: false,
        updateAt: false,
        paranoid: true,
    }
)

module.exports = Bank;