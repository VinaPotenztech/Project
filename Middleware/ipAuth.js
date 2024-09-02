const allowedIPs = ["192.168.1.105", "127.0.0.1", "::1"];

const ipAuth = (req, res, next) => {
  const requestIP = req.ip;
  console.log("Detected IP:", requestIP);

  if (!allowedIPs.includes(requestIP)) {
    return res.status(403).json({ message: "IP address not allowed" });
  }

  next();
};

module.exports = ipAuth;
