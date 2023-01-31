const express = require("express");
const foodRoute = express.Router();

const {
  getOneFood,
  getAllFood,
  createFood,
  updateFood,
  deleteFood,
  getAllFoodAndType,
  getOneFoodAndType,
} = require("../../controllers/foodController");

// 5 phuowng thức CRUD
foodRoute.get("/getAllFood", getAllFood);
foodRoute.get("/getOneFood/:id", getOneFood);
foodRoute.post("/createFood", createFood);
foodRoute.put("/updateFood/:id", updateFood);
foodRoute.delete("/deleteFood/:id", deleteFood);

// lấy thức ăn kèm theo loại thức ăn
foodRoute.get("/getAllFoodAndType", getAllFoodAndType);
foodRoute.get("/getOneFoodAndType/:foodID", getOneFoodAndType);

module.exports = foodRoute;
