const BaseController = require("./base.controller");
const XlModel = require("../models/Xls");

class XlController extends BaseController {
  constructor() {
    super(XlModel);
  }
  getXl() {
    return this.model.findOne({});
  }
  updateXl(data) {
    return this.model.findOneAndUpdate({}, data, {
      new: true
    });
  }
}

module.exports = XlController;
