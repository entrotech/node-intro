const router = require("express").Router();

module.exports = router;

const newsController = require("../controllers/news.controller");

router.get("/api/news/:q", newsController.get);
