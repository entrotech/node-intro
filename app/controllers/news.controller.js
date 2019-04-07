const newsService = require("../services/news.service");

const get = (req, res) => {
  newsService
    .get(req.params.q)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(503).json({ message: "Hacker News Service not responding", err: err });
    });
};

module.exports = {
  get
};
