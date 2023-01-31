const express = require("express");
const userRoute = express.Router();

const {
  getOneUser,
  getAllUser,
  createUser,
  editUser,
  deleteUser,
} = require("../../controllers/userController");

// 5 phuowng thức CRUD
userRoute.get("/getAllUser", getAllUser);
userRoute.get("/getOneUser/:id", getOneUser);
userRoute.post("/createUser", createUser);
userRoute.put("/editUser/:id", editUser);
userRoute.delete("/deleteUser/:id", deleteUser);

// tạo API phương thức PUT
// userRoute.put("/updateUser",(req,res)=>{});

module.exports = userRoute;
