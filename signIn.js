//import users and destinations here

//global variables used by both events
const registerButton = document.getElementById("registerButton");
const addDestinationContainer = document.getElementById("addDestinationContainer");
const userAccessContainer = document.getElementById("userAccessContainer");
const registerForm = document.getElementById("registerForm");
const signInForm = document.getElementById("signInForm");
const signInContainer = document.getElementById("signInContainer");
const registerContainer = document.getElementById("registerContainer");
const signInMessage = document.getElementById("signInMessage");
const registerMessage = document.getElementById("registerMessage");

//variable to test login status for the user
let isLoggedIn = false;
const currentDate = new Date().toLocaleString([], {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: undefined,
});

//depending if the user clicks on register or sign in, we hide or make visibile the correct forms
const displayRegisterForm = () => {
  signInMessage.classList.add("hidden");
  registerMessage.classList.add("hidden");
  registerForm.classList.remove("hidden");
  registerButton.classList.add("hidden");
  signInContainer.classList.add("hidden");
};
//listen for which button is clicked and show the right form
registerButton.addEventListener("click", displayRegisterForm);

//when register form is submitted
registerForm.addEventListener("submit", (e) => {
  //avoid reloading the page
  e.preventDefault();
  //read input values
  const newUserEmail = document.getElementById("newUserEmail").value;
  const username = document.getElementById("newUsername").value;
  const newUserPassword = document.getElementById("newUserPassword").value;

  if (newUserEmail === "" || username === "" || newUserPassword === "") {
    alert("Please make sure you have entered all required fields.");
    console.log(newUserEmail, username, newUserPassword);
  } else if (newUserPassword.length < 8) {
    alert("Password must be at least 8 characters long");
  } else if (!newUserEmail.includes("@") || !newUserEmail.includes(".")) {
    alert("This email address is invalid. Please make sure to enter a valid email address. Example: 'email@example.com'");
  } else {
    alert(`User registered successfully. Welcome ${username}!`);
    //POST request to create the user - createUser()
    //for the userId, we set it as the insertedId (generated automatically by MongoDB)
    // user.userId = ""; //insertedId - maybe we need a separate step for this one
    // user.mail = newUserEmail;
    // user.username = username;
    // user.password = newUserPassword;
    // user.createdOn = currentDate;
    // user.lastLoggedIn = currentDate;
    // user.logInStatus = true;
    // console.log(user);
    isLoggedIn = true;
    //when all is good and the user is registered, display the create a new destination form
    displayCreateForm(isLoggedIn);
  }
});

//if user signs in - displayed by default
signInForm.addEventListener("submit", (e) => {
  //avoid reloading the page
  e.preventDefault();

  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;

  if (userEmail === "" || userPassword === "") {
    alert("Please make sure you have entered all required fields.");
  }
  //GET request to get user. findUser() to retrieve information with an email check(ideally it would be done with JWtokens - a special encripted key). if the user email exists, sign them in and retrieve the user object
  else {
    // user.username = "Logged In user";
    // user.logInStatus = true;
    // user.lastLoggedIn = currentDate;
    // alert(`User signed in. Welcome back ${user.username}!`);
    // console.log(user);
    isLoggedIn = true;
    displayCreateForm(isLoggedIn);
  }
});

//on reload check if the user is still logged in?

const displayCreateForm = (isLoggedIn) => {
  console.log(isLoggedIn);
  if (isLoggedIn === true) {
    console.log(isLoggedIn);
    addDestinationContainer.classList.remove("hidden");
    addDestinationContainer.classList.add("userAccessContainer");
    userAccessContainer.classList.remove("userAccessContainer");
    userAccessContainer.classList.add("hidden");
  } else if (isLoggedIn === false) {
    console.log(isLoggedIn);
    addDestinationContainer.classList.remove("userAccessContainer");
    addDestinationContainer.classList.add("hidden");
    userAccessContainer.classList.remove("hidden");
  }
};
window.addEventListener("load", displayCreateForm(isLoggedIn));
