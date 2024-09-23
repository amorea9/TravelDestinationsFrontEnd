const addDestinationContainer = document.getElementById("addDestinationContainer");
const userAccessContainer = document.getElementById("userAccessContainer");

//on reload check if the user is still logged in?
export const displayForm = (userLoginStatus) => {
  // console.log(user.logInStatus);
  // userStatus = user.logInStatus;
  userLoginStatus = false;
  if (userLoginStatus === true) {
    console.log(userLoginStatus);
    addDestinationContainer.classList.remove("hidden");
    userAccessContainer.classList.remove("userAccessContainer");
    userAccessContainer.classList.add("hidden");
  } else if (userLoginStatus === false) {
    console.log(userLoginStatus);
    addDestinationContainer.classList.add("hidden");
    addDestinationContainer.classList.remove("userAccessContainer");
    userAccessContainer.classList.remove("hidden");
  }
};
window.addEventListener("load", displayForm);
