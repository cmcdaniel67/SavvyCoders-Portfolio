import Navigation from "~/components/Navigation"
  import Header from "~/components/Header"
  import Content from "~/components/Content"
  import Footer from "~/components/Footer"
  import * as states from "../store"
  import { lowerCase } from "lodash";
  import { capitalize } from "lodash";
  import axios from "axios";
  import Navigo from "navigo";
  let state = states
  let router = new Navigo(window.location.origin)
  axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.data));
  
  var root = document.querySelector("#root"); // this doesn't need to be queried every time we re-render
  function startApp(state) {
      root.innerHTML = `
          ${Navigation(state)}
          ${Header(state)}
          ${Content(state)}
          ${Footer(state)}
        `;
        router.updatePageLinks()
      
    }
    function handleRoute(params) {
  
      startApp(state[capitalize(params.path)])
     
    }
    router
    .on(":path", handleRoute)
    .on("/", () => startApp(state["Home"]))
    .resolve();
  
  
  // var firstName = prompt("Hi there! What's your first name?")
  // var lastName = prompt("What's your last name?")
  // var output = document.querySelector("#greeting")
  
  //         function checkName(){
  //             if (firstName && firstName != 'null' && lastName && lastName != 'null'){
  //                 output.innerHTML = `<p>Thanks for visiting <span class="highlighted">${firstName} ${lastName}.</span></p>`
  //             } else {
  //                 firstName = prompt('For real, what is your first name?')
  //                 lastName = prompt("For real, what's your last name?")
  //                 checkName()
  //             }
  //         } 
          
  //         checkName()
