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
  if (currentUser._id === undefined) {
    res.status(200).render("pages/signin", { currentUser });
  } else {
    res.status(200).redirect(`/users/${currentUser._id}`);
  }
};

const handleName = (req, res) => {
  const firstName = req.body.firstName;
  if (users.find((user) => user.name === firstName)) {
    currentUser = users.find((user) => user.name === firstName);
  }

  if (currentUser._id === undefined) {
    res.status(404).redirect("/signin");
  } else {
    res.status(200).redirect(`/users/${currentUser._id}`);
  }
};

const handleUnfriend = (req, res) => {
  const friendId = req.params.id;
  currentUser.friends = currentUser.friends.filter((id) => id !== friendId);
  users.forEach(
    (user) =>
      (user.friends =
        user._id === friendId
          ? user.friends.filter((id) => id !== currentUser._id)
          : user.friends)
  );
  
};

module.exports = {
  handleHomepage,
  handleFourOhFour,
  handleProfilePage,
  handleSignin,
  handleName,
  handleUnfriend,
};
