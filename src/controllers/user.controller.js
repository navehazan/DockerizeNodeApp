const BaseController = require("./base.controller");
const UserModel = require("../models/Users");

class UserController extends BaseController {
  constructor() {
    super(UserModel);
  }
}

module.exports = UserController;
