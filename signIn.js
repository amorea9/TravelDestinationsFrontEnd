//import users and destinations here

//global variables used by both events
const registerButton = document.getElementById("registerButton");
const signInButton = document.getElementById("signInButton");
const registerForm = document.getElementById("registerForm");
const signInForm = document.getElementById("signInForm");
const signInContainer = document.getElementById("signInContainer");
const registerContainer = document.getElementById("registerContainer");
const destinationsContainer = document.getElementById("destinationsContainer");
const userAccessContainer = document.getElementById("userAccessContainer");

const currentDate = new Date().toLocaleString([], {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: undefined,
});

//const user = sharedObject.user;

//depending if the user clicks on register or sign in, we hide or make visibile the correct form
const displayForm = (buttonName) => {
  console.log(buttonName);
  if (buttonName === "signIn") {
    signInForm.classList.remove("hidden");
    signInButton.classList.add("hidden");
    registerContainer.classList.add("hidden");
  } else if (buttonName === "register") {
    registerForm.classList.remove("hidden");
    registerButton.classList.add("hidden");
    signInContainer.classList.add("hidden");
  }
};
//listen for which button is clicked and show the right form
registerButton.addEventListener("click", () => displayForm(registerButton.name));
signInButton.addEventListener("click", () => displayForm(signInButton.name));

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
    alert(`User registered successfully. Welcome ${user.username}!`);
    //POST request to create the user - createUser()
    //for the userId, we set it as the insertedId (generated automatically by MongoDB)
    user.userId = ""; //insertedId - maybe we need a separate step for this one
    user.mail = newUserEmail;
    user.username = username;
    user.password = newUserPassword;
    user.createdOn = currentDate;
    user.lastLoggedIn = currentDate;
    user.logInStatus = true;
    console.log(user);
    //when all is good, we want to hide everything with user sign in or registration, and show the topics on the page
    displayForm(user.logInStatus);
  }
});

//if user signs in
signInForm.addEventListener("submit", (e) => {
  //avoid reloading the page
  e.preventDefault();

  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  //const user = { mail: "", firstName: "", lastName: "", birthday: "", password: "" };

  if (userEmail === "" || userPassword === "") {
    alert("Please make sure you have entered all required fields.");
  }
  //GET request to get user. findUser() to retrieve information with an email check(ideally it would be done with JWtokens - a special encripted key). if the user email exists, sign them in and retrieve the user object
  else {
    user.username = "Logged In user";
    user.logInStatus = true;
    user.lastLoggedIn = currentDate;
    alert(`User signed in. Welcome back ${user.username}!`);
    console.log(user);
    displayForm(user.logInStatus);
  }
});
