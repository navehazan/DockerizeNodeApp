const express = require("express");
const router = express.Router();
const UserApiController = require("../controllersApi/user.api.controller");
const userApiController = new UserApiController();
router
  .post("/create", userApiController.create.bind(userApiController))
  .post("/login", userApiController.login.bind(userApiController))
  .put("/update/:id", userApiController.update.bind(userApiController))
  .get("/get/", userApiController.get.bind(userApiController))
  .get("/get/:id", userApiController.get.bind(userApiController))
  .delete("/delete/:id", userApiController.delete.bind(userApiController));

module.exports = router;
