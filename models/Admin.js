const sequelize = require("./db")
const { DataTypes } = require("sequelize")

// 创建一个模型对象
const Admin = sequelize.define(
    "Admin",
    {
        name: {
            type: DataTypes.STRING, // 类型
            allowNull: false, // 是否允许为空
        },
        loginId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loginPwd: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rank: { // 管理员权限等级 h(high) c(common)
            type: DataTypes.STRING,
            allowNull: false
        },
        //表的类型 唯一标识符 : bank rate admin useri userii
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
);

module.exports = Admin;