const BaseAPIController = require("./base.api.controller");
const XlController = require("../controllers/xl.controller");
const appError = require("../models/error");
const sendResponse = require("../utils/sendResponse");
class XlAPIController extends BaseAPIController {
  constructor() {
    super(new XlController());
  }
  async create(req, res, next) {
    try {
      const data = req.body;
      const result = await this.controller.create({name:"myExcel",cells:data});
      return sendResponse(res, result, next);
    } catch (err) {
      next(new appError(err, "Error occurred"));
    }
  }

  async get(req, res, next) {
    try {
      const result = await this.controller.getXl();
      return sendResponse(res, result.cells, next);
    } catch (err) {
      next(new appError(err, "Error occurred"));
    }
  }

  async update(req, res, next) {
    const data = req.body;
    try {
      const result = await this.controller.updateXl({cells:data});
      return sendResponse(res, result, next);
    } catch (err) {
      next(new appError(err, "Error occurred"));
    }
  }
}

module.exports = XlAPIController;