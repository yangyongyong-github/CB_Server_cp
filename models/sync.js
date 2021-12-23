// 同步所有模型
require("./Bank")
require("./Admin")
require("./User_I")
require("./User_II")
require("./Rate")
const sequelize = require("./db")
sequelize.sync({ alert: true }).then(() => {
    console.log("所有模型同步完成");
});