const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const modelSequelize = initModels(sequelize);

// 5 phuowng thức CRUD
const getFoodTypeAll = async (req, res) => {
  try {
    let foodList = await modelSequelize.food_type.findAll();

    res.status(200).send(foodList);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const getFoodTypeOne = async (req, res) => {
  try {
    let { id } = req.params;

    let dataOne = await modelSequelize.food_type.findOne({
      where: {
        type_id: id,
      },
    });

    if (dataOne) {
      res.status(200).send(dataOne);
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const createFoodType = async (req, res) => {
  try {
    let { type_name } = req.body;

    let model = { type_name };

    let data = await modelSequelize.food_type.create(model);
    if (data) {
      res.status(200).send("Thêm FoodType thành công");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const updateFoodType = async (req, res) => {
  try {
    let { id } = req.params;
    let dataOne = await modelSequelize.food_type.findOne({
      where: {
        type_id: id,
      },
    });

    if (dataOne) {
      let { type_name } = req.body;
      let model = { type_name };

      await modelSequelize.food_type.update(model, {
        where: {
          type_id: id,
        },
      });

      res.status(200).send("Update FoodType thành công");
    } else {
      res.status(400).send("FoodType không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const deleteFoodType = async (req, res) => {
  try {
    let { id } = req.params;

    let foodOne = await modelSequelize.food_type.findOne({
      where: {
        type_id: id,
      },
    });

    if (foodOne) {
      await modelSequelize.food_type.destroy({
        where: {
          type_id: id,
        },
      });

      res.status(200).send("Delete FoodType thành công");
    } else {
      res.status(400).send("FoodType không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// lấy kiểu đồ ăn kèm với món ăn
const getAllTypeAndFood = async (req, res) => {
  try {
    let data = await modelSequelize.food_type.findAll({
      include: ["foods"],
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const getOneTypeAndFood = async (req, res) => {
  try {
    let { typeID } = req.params;

    let dataOne = await modelSequelize.food_type.findOne({
      where: {
        type_id: typeID,
      },
      include: ["foods"],
    });

    if (dataOne) {
      res.status(200).send(dataOne);
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

module.exports = {
  getFoodTypeAll,
  getFoodTypeOne,
  createFoodType,
  updateFoodType,
  deleteFoodType,
  getAllTypeAndFood,
  getOneTypeAndFood,
};
