//import users and destinations
const destinationsContainer = document.getElementById("destinationsContainer");

//fetch destinations and display them

const displayDestinations = () => {
  //looping through the destinations to display them - ignore array name for now
  destinations.map((topic) => {
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
};

window.addEventListener("load", displayDestinations);
