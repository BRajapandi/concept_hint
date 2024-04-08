const products = (req, res, next) => {
  console.log(req.userId);
  res.status(200).json({ name: "DOLO" });
};
module.exports = { products };
