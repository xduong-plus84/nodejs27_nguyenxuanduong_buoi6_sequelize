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
  getAllRestaurantAndUserRate,
  getOneRestaurantAndUserRate,
  likeRestaurant,
  unLikeRestaurant,
  rateRestaurant,
} = require("../../controllers/restaurantController");

// 5 phuowng thức CRUD
restaurantRoute.get("/getRestaurantAll", getRestaurantAll);
restaurantRoute.get("/getRestaurantOne/:id", getRestaurantOne);
restaurantRoute.post("/createRestaurant", createRestaurant);
restaurantRoute.put("/updateRestaurant/:id", updateRestaurant);
restaurantRoute.delete("/deleteRestaurant/:id", deleteRestaurant);

// xử lý like nhà hàng
restaurantRoute.post("/likeRestaurant", likeRestaurant);
// xử lý unlike nhà hàng
restaurantRoute.delete("/unLikeRestaurant", unLikeRestaurant);
// lấy danh sách like và user của tất cả nhà hàng
restaurantRoute.get(
  "/getAllRestaurantAndUserLike",
  getAllRestaurantAndUserLike
);
// lấy danh sách like và user của một nhà hàng
restaurantRoute.get(
  "/getOneRestaurantAndUserLike/:id",
  getOneRestaurantAndUserLike
);

// lấy danh sách đánh giá và user của tất cả nhà hàng
restaurantRoute.get(
  "/getAllRestaurantAndUserRate",
  getAllRestaurantAndUserRate
);
// lấy danh sách đánh giá và user của một nhà hàng
restaurantRoute.get(
  "/getOneRestaurantAndUserRate/:id",
  getOneRestaurantAndUserRate
);
// xử lý thêm đánh giá
restaurantRoute.post("/rateRestaurant", rateRestaurant);

module.exports = restaurantRoute;
