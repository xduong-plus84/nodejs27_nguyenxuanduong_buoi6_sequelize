const express = require("express");
const restaurantRoute = express.Router();

const {
  getRestaurantAll,
  getRestaurantOne,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getAllRestaurantAndUserLike,
  getOneRestaurantAndUserLike,
} = require("../../controllers/restaurantController");

// 5 phuowng thức CRUD
restaurantRoute.get("/getRestaurantAll", getRestaurantAll);
restaurantRoute.get("/getRestaurantOne/:id", getRestaurantOne);
restaurantRoute.post("/createRestaurant", createRestaurant);
restaurantRoute.put("/updateRestaurant/:id", updateRestaurant);
restaurantRoute.delete("/deleteRestaurant/:id", deleteRestaurant);

// Lấy nhà hàng và số user đã like nhà hàng đó
restaurantRoute.get(
  "/getAllRestaurantAndUserLike",
  getAllRestaurantAndUserLike
);
restaurantRoute.get(
  "/getOneRestaurantAndUserLike/:id",
  getOneRestaurantAndUserLike
);

module.exports = restaurantRoute;
