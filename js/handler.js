const handleHomepage = (req, res) => {
  res.status(200).render("pages/homepage");
};

const handleFourOhFour = (req, res) => {
  res.status(404).send("I couldn't find what you're looking for.");
};

module.exports = { handleHomepage, handleFourOhFour }