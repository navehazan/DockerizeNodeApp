const express = require("express");
const router = express.Router();
const responseMiddleware = require("../middleware/response.middleware");
const path = require("path");
router.use("/api/users", [require("./users"), responseMiddleware]);
router.use("/api/xls", [require("./xls"), responseMiddleware]);
router.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = router;
