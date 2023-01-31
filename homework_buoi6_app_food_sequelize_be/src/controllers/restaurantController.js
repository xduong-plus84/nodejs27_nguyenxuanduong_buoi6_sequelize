// const User = require("../models/user");
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const modelSequelize = initModels(sequelize);
const moment = require("moment");

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
      where: { res_id: id },
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

// xử lý like nhà hàng
const likeRestaurant = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;

    let dataOne = await modelSequelize.like_res.findOne({
      where: {
        res_id,
        user_id,
      },
    });

    if (dataOne) {
      res.status(200).send("Người dùng đã like");
    } else {
      let date_like = moment().format("YYYY-MM-DD HH:mm:ss").toString();
      let model = { user_id, res_id, date_like };
      await modelSequelize.like_res.create(model);
      res.status(200).send("Like Restaurant thành công");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
// xử lý unlike nhà hàng
const unLikeRestaurant = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;

    let dataOne = await modelSequelize.like_res.findOne({
      where: {
        res_id,
        user_id,
      },
    });

    if (dataOne) {
      await modelSequelize.like_res.destroy({
        where: {
          res_id,
          user_id,
        },
      });
      res.status(200).send("Unlike Restaurant thành công");
    } else {
      res.status(400).send("Không tìm thấy người dùng hoặc nhà hàng");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
// lấy danh sách like và user của tất cả nhà hàng
const getAllRestaurantAndUserLike = async (req, res) => {
  try {
    // let dataAll = await modelSequelize.like_res.findAll({
    //   include: ["user", "re"],
    //   // include: ["re", "user"],
    // });

    let dataAll = await modelSequelize.restaurant.findAll({
      include: ["user_id_users"],
    });

    res.status(200).send(dataAll);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
// lấy danh sách like và user của một nhà hàng
const getOneRestaurantAndUserLike = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await modelSequelize.restaurant.findOne({
      where: { res_id: id },
      include: ["user_id_users"],
    });

    res.status(200).send(dataOne);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// thêm đánh giá
const rateRestaurant = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;

    let dataOne = await modelSequelize.rate_res.findOne({
      where: {
        res_id,
        user_id,
      },
    });

    if (dataOne) {
      res.status(200).send("Người dùng đã đánh giá");
    } else {
      let date_rate = moment().format("YYYY-MM-DD HH:mm:ss").toString();
      let model = { user_id, res_id, amount, date_rate };
      await modelSequelize.rate_res.create(model);
      res.status(200).send("Đánh giá Restaurant thành công");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
// lấy danh sách đánh giá và user của tất cả nhà hàng
const getAllRestaurantAndUserRate = async (req, res) => {
  try {
    let dataAll = await modelSequelize.restaurant.findAll({
      include: ["user_id_user_rate_res"],
    });

    res.status(200).send(dataAll);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
// lấy danh sách đánh giá và user của một nhà hàng
const getOneRestaurantAndUserRate = async (req, res) => {
  try {
    let { id } = req.params;
    let dataOne = await modelSequelize.restaurant.findOne({
      where: { res_id: id },
      include: ["user_id_user_rate_res"],
    });

    res.status(200).send(dataOne);
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
  getAllRestaurantAndUserRate,
  getOneRestaurantAndUserRate,
  likeRestaurant,
  unLikeRestaurant,
  rateRestaurant,
};
