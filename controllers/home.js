module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getAbout: (req, res) => {
    res.render("about.ejs");
  },
  getFAQ: (req, res) => {
    res.render("faq.ejs");
  },
  getDonate: (req, res) => {
    res.render("donate.ejs");
  },
};
