const unfriendBtn = document.querySelector("#unfriend--btn");

const handleUnfriendBtn = (e) => {
  const URI = e.target.baseURI.split("/");
  const userId = URI[URI.length - 1];
  fetch(`/unfriend/${userId}`);
  unfriendBtn.classList.remove("visible");
  location.reload();
};

if (unfriendBtn !== null) {
  unfriendBtn.addEventListener("click", handleUnfriendBtn);
}
