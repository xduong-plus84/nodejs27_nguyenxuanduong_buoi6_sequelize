// const User = require("../models/user");
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const modelSequelize = initModels(sequelize);

// 5 methods CRUD
const getRestaurantAll = async (req, res) => {
  try {
    let restaurantAll = await modelSequelize.restaurant.findAll();

    res.status(200).send(restaurantAll);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const getRestaurantOne = async (req, res) => {
  try {
    let { id } = req.params;

    let restaurantOne = await modelSequelize.restaurant.findOne({
      where: {
        res_id: id,
      },
    });

    if (restaurantOne) {
      res.status(200).send(restaurantOne);
    } else {
      res.status(400).send("Restaurant not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const createRestaurant = async (req, res) => {
  try {
    let { res_name, image, desc } = req.body;

    let model = { res_name, image, desc };

    let data = await modelSequelize.restaurant.create(model);
    if (data) {
      res.status(200).send("Thêm restaurant thành công");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const updateRestaurant = async (req, res) => {
  try {
    let { id } = req.params;
    let restaurantOne = await modelSequelize.restaurant.findOne({
      where: {
        res_id: id,
      },
    });

    if (restaurantOne) {
      let { res_name, image, desc } = req.body;
      let model = { res_name, image, desc };

      await modelSequelize.restaurant.update(model, {
        where: {
          res_id: id,
        },
      });

      res.status(200).send("Update Restaurant thành công");
    } else {
      res.status(400).send("Restaurant không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const deleteRestaurant = async (req, res) => {
  try {
    let { id } = req.params;

    let restaurantOne = await modelSequelize.restaurant.findOne({
      where: {
        res_id: id,
      },
    });

    if (restaurantOne) {
      await modelSequelize.restaurant.destroy({
        where: {
          res_id: id,
        },
      });

      res.status(200).send("Delete Restaurant thành công");
    } else {
      res.status(400).send("Restaurant không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// lấy nhà hàng và số user đã like nhà hàng
const getAllRestaurantAndUserLike = async (req, res) => {
  try {
    // let dataAll = await modelSequelize.like_res.findAll({
    //   include: ["user", "re"],
    //   include: ["re", "user"],
    // });

    let dataAll = await modelSequelize.restaurant.findAll({
      include: ["user_id_users"],
    });

    res.status(200).send(dataAll);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const getOneRestaurantAndUserLike = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await modelSequelize.restaurant.findOne({
      where: {
        res_id: id,
      },
    });

    if (dataOne) {
      res.status(200).send(dataOne);
    } else {
      res.status(400).send("Restaurant not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

module.exports = {
  getRestaurantAll,
  getRestaurantOne,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getAllRestaurantAndUserLike,
  getOneRestaurantAndUserLike,
};
