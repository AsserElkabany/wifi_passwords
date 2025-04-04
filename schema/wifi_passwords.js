const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
  passwords: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Password = mongoose.model('wifi_Passwords', passwordSchema);

module.exports = Password;