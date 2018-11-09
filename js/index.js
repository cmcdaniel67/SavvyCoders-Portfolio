import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
function handleNavigation(event) {
  // pull the component name from the text in the anchor tag
  var component = event.target.textContent;
  event.preventDefault();
  // select a piece of the state tree by component
  render(state[component]);
}

var state = {
  Home : {
      title: "Welcome to Carol's Savvy Coders Portfolio"
  },
  Blog : {
      title: "Welcome to my blog!"
      },
  Projects : {
      title: "Welcome to my projects page!"
  },
  Contact : {
      title: "Welcome to my Contact Page!"
      }
}

var root = document.querySelector("#root"); // this doesn't need to be queried every time we re-render
function render(state) {
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
      `;
    var links = document.querySelectorAll(".navigation a");
    links[0].addEventListener("click",handleNavigation);
     links[1].addEventListener("click", handleNavigation);
     links[2].addEventListener("click", handleNavigation);
     links[3].addEventListener("click",handleNavigation);
  }
  
render(state.Home)
// var firstName = prompt("Hi there! What's your first name?");
// var lastName = prompt("What's your last name?");
// var output = document.querySelector("#greeting");

// function checkName(){
//   if(firstName && firstName != "null" && lastName != 'null')  {
//     output.innerHTML = `<p>Thanks for visiting ${firstName} ${lastName}.</p>`; 

//   } else {
//     firstName = prompt('What is your first name, for real this time?');
//     lasttName = prompt('What is your last name, for real this time?');
//     checkName(); // repeats until a name exists
//   }
// }

// checkName(); // kicks off the name-checking the first time

// alert('Hello ' + name);

