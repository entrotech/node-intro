const axios = require("axios");

const get = q => {
  return axios.get(`https://hn.algolia.com/api/v1/search?query=${q}`).then(response => {
    return response.data;
  });
};

module.exports = {
  get
};
