const mongoose = require("mongoose");

const { Schema } = mongoose;

const XlsSchema = new Schema({
  name: String,
  cells: Schema.Types.Mixed
});

module.exports = mongoose.model("Xl", XlsSchema);
