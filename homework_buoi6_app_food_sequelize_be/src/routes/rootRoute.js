const express = require("express");
const rootRoute = express.Router();
const userRoute = require("./v1/userRoute");
const foodRoute = require("./v1/foodRoute");
const restaurantRoute = require("./v1/restaurantRoute");
const foodTypeRoute = require("./v1/foodTypeRoute");

rootRoute.use("/user", userRoute);
rootRoute.use("/food", foodRoute);
rootRoute.use("/restaurant", restaurantRoute);
rootRoute.use("/foodType", foodTypeRoute);

// rootRoute.get("/", (req, res) => {
//   res.send("Hello World!fdsaf");
// });

module.exports = rootRoute;
