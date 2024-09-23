//import users and destinations
const destinationsContainer = document.getElementById("destinationsContainer");

//GET request to retrieve destinations from database
// const topicsArray = sharedObject.topicsArray;
// const user = sharedObject.user;

//on reload check if the user is still logged in?
export const displayDestinations = (userStatus) => {
  console.log(user.logInStatus);
  userStatus = user.logInStatus;
  if (userStatus === true) {
    console.log(user.logInStatus);
    destinationsContainer.classList.remove("hidden");
    userAccessContainer.classList.remove("userAccessContainer");
    userAccessContainer.classList.add("hidden");
    //looping through the destinations to display them - ignore array name for now
    topicsArray.forEach((topic) => {
      const destinationDiv = document.createElement("div");
      const image = document.createElement("img");
      image.src = topic.image;
      image.alt = topic.title;

      const anchor = document.createElement("a");
      anchor.href = topic.topicPage;

      const button = document.createElement("button");
      button.textContent = topic.title;

      // Append the button inside the anchor
      anchor.appendChild(button);
      destinationDiv.appendChild(image);
      destinationDiv.appendChild(anchor);
      // Append the anchor (which wraps the button) to the topics container
      destinationsContainer.appendChild(topicDiv);
    });
  } else if (userStatus === false) {
    console.log(user.logInStatus);
    destinationsContainer.classList.add("hidden");
    userAccessContainer.classList.remove("hidden");
  }
};

window.addEventListener("load", displayDestinations);
