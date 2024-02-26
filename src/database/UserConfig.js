const mongoose = require('mongoose');

const UserConfig = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  coins: {
    type: Number,
    required: true,
    default: 10,
  },
  totalProjects: {
    type: Number,
    required: true,
    default: 0,
  }
});

module.exports = mongoose.model('ex-user-config', UserConfig);
