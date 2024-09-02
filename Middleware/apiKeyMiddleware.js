const ApiKey = require("../models/apiKeyModel");

const apiKeyMiddleware = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"]; 
    if (!apiKey) return res.status(401).json({ error: "API key required" });

    const keyRecord = await ApiKey.findOne({ key: apiKey, active: true });
    if (!keyRecord) return res.status(403).json({ error: "Invalid API key" });

    next();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = apiKeyMiddleware;
