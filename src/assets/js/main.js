//Choose the menu nav links
const links = {
  home: document.getElementById("linkHome"),
  project: document.getElementById("linkProjects"),
  about: document.getElementById("linkAbout"),
  contact: document.getElementById("linkContact")
};

const menuBtn = document.getElementById("nav-button");
const menuLinks = document.getElementsByClassName("menu-links")[0];
// initial state of the menu
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    links.home.classList.add("show");
    links.project.classList.add("show");
    links.about.classList.add("show");
    links.contact.classList.add("show");
    menuLinks.classList.add("show");
    //Set Menu State
    showMenu = true;
    console.log("Close Button Activated");
  } else {
    menuBtn.classList.remove("close");
    links.home.classList.remove("show");
    links.project.classList.remove("show");
    links.about.classList.remove("show");
    links.contact.classList.remove("show");
    menuLinks.classList.remove("show");
    //Set Menu State
    showMenu = false;
    console.log("Close Button Deactivated");
  }
}

// Function for obscufier of an email

//Event Listener for Mouse Click to Toggle Menu on smaller screens;
menuBtn.addEventListener("click", toggleMenu);

/*****************************
                  NOTES
|*****************************/
let notes = [];
notes[0] =
  "1. Add transition duration to a menu for a smooth animated transition from class show to remove class show";
notes[1] = "2. Add RED transition hovers to Nav Button.";
notes[3] =
  "3. Stick footer to a bottom, when website is getting smaller than the size of the window.";
notes[4] = "";
console.log(notes);
