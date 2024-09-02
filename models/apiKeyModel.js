const mongoose = require("mongoose");

const apiKeySchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  active: { type: Boolean, default: true }, // To deactivate keys if needed
});

module.exports = mongoose.model("ApiKey", apiKeySchema);
