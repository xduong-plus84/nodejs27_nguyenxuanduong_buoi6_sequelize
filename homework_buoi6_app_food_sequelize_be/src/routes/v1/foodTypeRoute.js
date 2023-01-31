const express = require("express");
const foodTypeRoute = express.Router();

const {
  getFoodTypeAll,
  getFoodTypeOne,
  createFoodType,
  updateFoodType,
  deleteFoodType,
  getAllTypeAndFood,
  getOneTypeAndFood,
} = require("../../controllers/foodTypeController");

// 5 phuowng thức CRUD
foodTypeRoute.get("/getFoodTypeAll", getFoodTypeAll);
foodTypeRoute.get("/getFoodTypeOne/:id", getFoodTypeOne);
foodTypeRoute.post("/createFoodType", createFoodType);
foodTypeRoute.put("/updateFoodType/:id", updateFoodType);
foodTypeRoute.delete("/deleteFoodType/:id", deleteFoodType);

// lấy kiểu đồ ăn kèm với món ăn
foodTypeRoute.get("/getAllTypeAndFood", getAllTypeAndFood);
foodTypeRoute.get("/getOneTypeAndFood/:typeID", getOneTypeAndFood);

module.exports = foodTypeRoute;
