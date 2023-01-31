const express = require("express");
const userRoute = express.Router();

const {
  getOneUser,
  getAllUser,
  createUser,
  editUser,
  deleteUser,
  createOrder,
} = require("../../controllers/userController");

// 5 methods CRUD
userRoute.get("/getAllUser", getAllUser);
userRoute.get("/getOneUser/:id", getOneUser);
userRoute.post("/createUser", createUser);
userRoute.put("/editUser/:id", editUser);
userRoute.delete("/deleteUser/:id", deleteUser);

// xử lý thêm order
userRoute.post("/createOrder", createOrder);

module.exports = userRoute;
