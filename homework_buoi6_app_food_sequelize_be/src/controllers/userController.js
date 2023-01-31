// const User = require("../models/user");
const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const modelSequelize = initModels(sequelize);

const getOneUser = async (req, res) => {
  try {
    let { id } = req.params;

    let userOne = await modelSequelize.user.findOne({
      where: {
        user_id: id,
      },
      // and, count,
    });

    if (userOne) {
      res.status(200).send(userOne);
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

const getAllUser = async (req, res) => {
  try {
    let userList = await modelSequelize.user.findAll();

    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

const createUser = async (req, res) => {
  try {
    let { full_name, email, pass_word } = req.body;

    let model = { full_name, email, pass_word };

    let data = await modelSequelize.user.create(model);
    if (data) {
      res.status(200).send("Thêm user thành công");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

const editUser = async (req, res) => {
  try {
    let { id } = req.params;
    let userOne = await modelSequelize.user.findOne({
      where: {
        user_id: id,
      },
    });

    if (userOne) {
      let { full_name, email, pass_word } = req.body;
      let model = { full_name, email, pass_word };

      // UPDATE user SET ... WHERE user_id = id;
      await modelSequelize.user.update(model, {
        where: {
          user_id: id,
        },
      });

      res.status(200).send("Update User thành công");
    } else {
      res.status(400).send("User không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    let userOne = await modelSequelize.user.findOne({
      where: {
        user_id: id,
      },
    });

    if (userOne) {
      await modelSequelize.user.destroy({
        where: {
          user_id: id,
        },
      });

      res.status(200).send("Delete User thành công");
    } else {
      res.status(400).send("User không tồn tại");
    }
  } catch (error) {
    res.status(500).send("Backend error");
  }
};

module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  editUser,
  deleteUser,
};
