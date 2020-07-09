const { users } = require("../data/users");
let currentUser = {};

const handleHomepage = (req, res) => {
  res.status(200).render("pages/homepage", { currentUser, users });
};

const handleFourOhFour = (req, res) => {
  res.status(404).send("I couldn't find what you're looking for.");
};

const handleProfilePage = (req, res) => {
  const id = req.params.id;
  const user = users.filter((user) => user._id === id)[0];
  const friendsId = user.friends;
  const friends = users.filter((user) => friendsId.includes(user._id));
  res.status(200).render("pages/profile", { currentUser, user, friends });
};

const handleSignin = (req, res) => {
  if (currentUser === undefined) {
    res.status(200).render("pages/signin");
  } else {
    res.status(200).redirect(`/users/${currentUser._id}`);
  }
};

const handleName = (req, res) => {
  const firstName = req.body.firstName;
  currentUser = users.find((user) => user.name === firstName);

  if (currentUser === undefined) {
    res.status(404).redirect("/signin");
  } else {
    res.status(200).redirect(`/users/${currentUser._id}`);
  }
};

module.exports = {
  handleHomepage,
  handleFourOhFour,
  handleProfilePage,
  handleSignin,
  handleName,
};
