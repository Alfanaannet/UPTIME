const mongoose = require("mongoose");

const UrlsConfig = new mongoose.Schema(
  {
    userID: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: false,
    },
    link: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    name: {
      type: mongoose.SchemaTypes.String,
      default: "Add By Discord Bot",
    },
    userName: {
      type: mongoose.SchemaTypes.String,
      default: "!its Elfanaan",
    },
    pinged: {
      type: mongoose.SchemaTypes.Number,
      required: true,
      default: 0,
    },
    error: {
      type: mongoose.SchemaTypes.Boolean,
      required: false,
      default: false,
    },
    errorText: {
      type: mongoose.SchemaTypes.String,
      required: false,
    },
    code: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ex-urls-config", UrlsConfig);
