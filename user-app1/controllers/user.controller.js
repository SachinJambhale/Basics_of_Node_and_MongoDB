const { request } = require("express");
const UserModel = require("../models/user.model");
const { encrypt } = require("../helpers/encryption");

class UserCtrl {
  static createUser(req, res) {
    // accessing the data from request body
    const data = req.body;

    if (data.password) data.password = encrypt(data.password);

    // console.log("File: ", req.file);
    if (req.file?.filename) data.avatar = req.file?.filename;

    //storing  the data in the database
    new UserModel(data)
      .save()
      .then((result) => {
        console.log("Result: ", result);
        res.status(201).send({ message: "User is created", data: result });
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.status(500).send({ message: "User could not created", error: err });
      });

    // sending response to the client
  }
  static updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;

    // UserModel.findByIdAndUpdate(id, data, { new: true });
    UserModel.findOneAndUpdate({ _id: id }, data, { new: true })
      .then((result) => {
        res.status(200).send({ message: "User updated", data: result });
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.status(404).send({ message: "User could not created", error: err });
      });
  }
  static deleteUser(req, res) {
    const { id } = req.params;

    UserModel.deleteOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "user deleted", data: result });
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.status(404).send({ message: "user not deleted", error: err });
      });
  }
  static getOneUser(req, res) {
    const { id } = req.params;
    UserModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "User details", data: result });
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.status(404).send({ message: "User is not available", error: err });
      });
  }
  static getAllUsers(req, res) {
    const { gender, mobile } = req.query;
    const filter = {};

    if (gender) filter.gender = gender;
    if (mobile) filter.mobile = mobile;

    UserModel.find(filter)
      .then((result) => {
        res.status(200).send({ message: "User list", data: result });
      })
      .catch((err) => {
        console.log("Error: ", err);
        res
          .status(404)
          .send({ message: "User list is not available", error: err });
      });
  }
}

module.exports = UserCtrl;
