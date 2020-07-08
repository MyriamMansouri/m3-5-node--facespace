const { users } = require("../data/users");

const handleHomepage = (req, res) => {
  res.status(200).render("pages/homepage", { users });
};

const handleFourOhFour = (req, res) => {
  res.status(404).send("I couldn't find what you're looking for.");
};

const handleProfilePage = (req, res) => {
  const id = req.params.id;
  const user = users.filter((user) => user._id === id)[0];
  const friendsId = user.friends
  const friends = users.filter( user => friendsId.includes(user._id))

  res.status(200).render("pages/profile", { user, friends });
};
module.exports = { handleHomepage, handleFourOhFour, handleProfilePage };
