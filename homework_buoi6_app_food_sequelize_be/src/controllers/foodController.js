const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const modelSequelize = initModels(sequelize);

// 5 phuowng thức CRUD
const getOneFood = async (req, res) => {
  try {
    let { id } = req.params;

    let foodOne = await modelSequelize.food.findOne({
      where: {
        food_id: id,
      },
    });

    if (foodOne) {
      res.status(200).send(foodOne);
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const getAllFood = async (req, res) => {
  try {
    let foodList = await modelSequelize.food.findAll();

    res.status(200).send(foodList);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const createFood = async (req, res) => {
  try {
    let { food_name, image, price, desc, type_id } = req.body;

    let model = { food_name, image, price, desc, type_id };

    let data = await modelSequelize.food.create(model);
    if (data) {
      res.status(200).send("Thêm food thành công");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const updateFood = async (req, res) => {
  try {
    let { id } = req.params;
    let foodOne = await modelSequelize.food.findOne({
      where: {
        food_id: id,
      },
    });

    if (foodOne) {
      let { food_name, image, price, desc, type_id } = req.body;
      let model = { food_name, image, price, desc, type_id };

      await modelSequelize.food.update(model, {
        where: {
          food_id: id,
        },
      });

      res.status(200).send("Update Food thành công");
    } else {
      res.status(400).send("Food không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const deleteFood = async (req, res) => {
  try {
    let { id } = req.params;

    let foodOne = await modelSequelize.food.findOne({
      where: {
        food_id: id,
      },
    });

    if (foodOne) {
      await modelSequelize.food.destroy({
        where: {
          food_id: id,
        },
      });

      res.status(200).send("Delete Food thành công");
    } else {
      res.status(400).send("Food không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

// lấy thức ăn kèm theo loại thức ăn
const getAllFoodAndType = async (req, res) => {
  try {
    let data = await modelSequelize.food.findAll({
      include: ["type"],
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};
const getOneFoodAndType = async (req, res) => {
  try {
    let { foodID } = req.params;

    let foodOne = await modelSequelize.food.findOne({
      where: {
        food_id: foodID,
      },
      include: ["type"],
    });

    if (foodOne) {
      res.status(200).send(foodOne);
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

module.exports = {
  getOneFood,
  getAllFood,
  createFood,
  updateFood,
  deleteFood,
  getAllFoodAndType,
  getOneFoodAndType,
};
