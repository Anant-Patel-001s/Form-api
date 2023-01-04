module.exports = (app) => {
  const registration = require("../controller/registration.controller.js");
  const express = require("express");
  const router = express.Router();
  router.post("/addUser", registration.addUser);
  router.get("/allUser", registration.allUser);
  router.post("/editUser", registration.updateRegistration);
  router.delete("/deleteUser", registration.deleteRegistration);

  app.use("/api", router);
};
