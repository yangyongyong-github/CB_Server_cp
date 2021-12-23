const sequelize = require("./db")
const { DataTypes } = require("sequelize")
const moment = require("moment")

module.exports = sequelize.define(
    "User_II",
    {
        // 基本信息
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        account: {
            type: DataTypes.STRING,// VARCHAR(255)
            allowNull: false,
        },
        loginId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loginPwd: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        /*
        birthday&age
            1. 用户的个人信息
            2. 年龄，计算属性
        */
        // 
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                const birth = this.getDataValue("birthday");
                if (birth) {
                    return birth.getTime();
                }
                return undefined;
            },
        },
        age: {
            type: DataTypes.VIRTUAL,
            get() {
                const now = moment.utc();
                const birth = moment.utc(this.birthday);
                return now.diff(birth, "y"); //得到两个日期的年份的差异
            },
        },
        mobile: {
            type: DataTypes.STRING(11),
            allowNull: false,
        },
        job: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        // 管理员对其的基本操做，自己不能对自己操做
        isFreezed: {
            type: DataTypes.BOOLEAN,// 布尔
            allowNull: false,
        },
        deposit: {
            type: DataTypes.DECIMAL(10, 2), //小数位2
            allowNull: true,
        },
        interest: {// 利息
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        // 业务信息 & 表的类型 唯一标识符 : bank rate admin useri userii
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