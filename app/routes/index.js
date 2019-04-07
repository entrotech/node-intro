const router = require("express").Router();
const newsController = require("../controllers/news.controller");

router.get("/hello/:name", (req, res) => {
  res.status(200).json({ hello: req.params.name });
});

router.get("/api/hackernews/:q", newsController.get);

module.exports = router;
