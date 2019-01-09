const BaseAPIController = require("../controllersApi/base.api.controller");
const UserController = require("../controllers/user.controller");
const sendResponse = require("../utils/sendResponse");
const appError = require("../models/error");
const _ = require("lodash");
class UserAPIController extends BaseAPIController {
  constructor() {
    super(new UserController());
  }

  async login(req, res, next) {
    const { password, email } = req.body;
    try {
      const [result] = await this.controller.get({ password, email });
      if(!result){
        return next(new appError("No User Found", "Error occurred"));
      }
      return sendResponse(res, result, next);
    } catch (err) {
      next(new appError(err, "Error occurred"));
    }
  }
}

module.exports = UserAPIController;
