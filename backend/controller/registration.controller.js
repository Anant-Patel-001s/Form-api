const db = require("../models");
const Registration = db.registration;

exports.addUser = (req, res) => {
  const user = new Registration({
    fname: req.fields.fname,
    lname: req.fields.lname,
    gender: req.fields.gender,
    birthdate: req.fields.birthdate,
    email: req.fields.email,
    password: req.fields.password,
    address: req.fields.address,
    city: req.fields.city,
    state: req.fields.state,
    zip: req.fields.zip,
  });

  user
    .save()
    .then((data) => {
      res.status(200).send({
        success: "true",
        message: "User Added!",
        data: data,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: "false",
        message: "User Not Added!",
        data: error,
      });
    });
};
exports.allUser = (req, res) => {
  Registration.find({}).then((data) => {
    res.status(200).send({
      success: "true",
      message: "All User!",
      data: data,
    });
  });
};

exports.updateRegistration = (req, res) => {
  const edit = {
    fname: req.fields.fname,
    lname: req.fields.lname,
    gender: req.fields.gender,
    birthdate: req.fields.birthdate,
    email: req.fields.email,
    password: req.fields.password,
    address: req.fields.address,
    city: req.fields.city,
    State: req.fields.state,
    zip: req.fields.zip,
  };
  Registration.findByIdAndUpdate(req.fields.id, edit, {
    useFindAndModify: false,
  })
    .then((data) => {
      res.status(200).send({
        success: "true",
        message: "User Updated !!",
        data: null,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: "false",
        message: "User Not Added !!",
        data: error,
      });
    });
};


exports.deleteRegistration = (req, res) => {
  Registration.findByIdAndDelete(req.fields.id)
    .then((data) => {
      res.status(200).send({
        success: "true",
        message: "User Removed !!",
        data: null,
      });
    })
    .catch((error) => {
      res.status(400).send({
        success: "false",
        message: "User deletion failed !!",
        data: error,
      });
    });
};
