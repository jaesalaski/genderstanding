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

  getContact: (req, res) => {
    res.render("contact.ejs");
  },
  
  getProfile: (req,res) => {
    res.render("profile.ejs");
  },
};
