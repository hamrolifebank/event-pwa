const jwt = require("jsonwebtoken");

const withToken = (handler) => {
  return async (req, res) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      try {
        req.decodedToken = jwt.verify(
          JSON.parse(authorization),
          process.env.SECRET
        );
      } catch {
        return res.status(401).json({ error: "token invalid" });
      }
    } else {
      return res.status(401).json({ error: "token missing" });
    }
    return handler(req, res);
  };
};
export default withToken;
