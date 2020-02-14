module.exports = (req, res, next) => {
  if (req.session && req.session.loggedin === true) {
    next();
  } else {
    res.status(401).json({ message: "what, no cookies???" });
  }
};
