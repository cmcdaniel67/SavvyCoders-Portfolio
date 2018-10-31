import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
document.querySelector("#root").innerHTML = `
      ${Navigation}
      ${Header}
      ${Content}
      ${Footer}
  `
var firstName = prompt("Hi there! What's your first name?");
var lastName = prompt("What's your last name?");
var output = document.querySelector("#greeting");

var checkName = function(){
  if(firstName && firstName != "null" && lastName != 'null')  {
    output.innerHTML = `<p>Thanks for visiting ${firstName} ${lastName}.</p>`; 

  } else {
    firstName = prompt('What is your first name, for real this time?');
    lasttName = prompt('What is your last name, for real this time?');
    checkName(); // repeats until a name exists
  }
}

checkName(); // kicks off the name-checking the first time

// alert('Hello ' + name);
