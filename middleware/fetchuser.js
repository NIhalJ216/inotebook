const jwt = require("jsonwebtoken");
const JWT_SECRETE = "SecreteToken@id";

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please auntheticate using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRETE);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please auntheticate using valid token" });
  }
};

module.exports = fetchuser;
