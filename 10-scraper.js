/* 
    Web Scraper - this example uses axios to get an HTML page (yes,
    axios can get other type of data besides json). Then it loads
    the HMTL into a cheerio-generated objct. cheerio uses a jquery-like
    syntax to find elements in the HTML and allows you to grab data
    for elements you find to extract data from a web site.

    In your web scraper, you will probably take the resulting data
    and show it on a web page or save it to a database. I am just showing
    how to get the data here for illustration purposes. 
    
    This technique
    only works when the page you are targeting returns static HTML (i.e.,
    it does not need to run javacript or make subsequent AJAX calls to
    get data for display).
*/

const cheerio = require("cheerio");
const axios = require("axios");

axios("https://www.surfline.com")
  .then(result => {
    const $ = cheerio.load(result.data);
    const articles = [];
    const articleWidgets = $(".quiver-base-content-card").each((i, elem) => {
      const articleElement = $(elem);
      const article = {
        title: articleElement.find("h2").text(),
        author: articleElement.find(".quiver-base-content-card__meta").text(),
        subtitle: articleElement.find(".quiver-editorial-article-card__subtitle").text(),
        url: articleElement.find("a").attr("href"),
        pic: articleElement.find(".quiver-editorial-article-card__media").attr("style")
      };

      articles.push(article);
    });

    console.log(JSON.stringify(articles, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
