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

const handleSignin = (req, res) => {
  res.status(200).render("pages/signin");
}

const handleName = (req, res) => {
  const firstName = req.body.firstName;
  const user = users.find( user => user.name === firstName)

  if ( user === undefined ) {
    res.status(404).send(firstName);
  } else {
    res.status(200).redirect(`/users/${user._id}`);
  }
  
}
module.exports = { handleHomepage, handleFourOhFour, handleProfilePage, handleSignin, handleName };
