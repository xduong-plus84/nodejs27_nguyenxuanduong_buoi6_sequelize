// kết nối CSDL
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_bt_sequelize", "root", "1234", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});

// try {
//   sequelize.authenticate();
//   console.log("Kết nối thành công");
// } catch (error) {
//   console.log("Kết nối thất bại");
// }

module.exports = sequelize;

// node src/models/index.js
