var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    response = prompt("Here's a new prompt, with new options");
} else if (response === "gaze") {
    response = prompt("Here's a new prompt, with new options");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}



---------*******var response = prompt("You walk into a meadow with a tree and a swing. Type 'pick' to pick an apple, type 'swing' to swing from the tree");

if(response === "pick"){
    response = prompt("There's a tree. Type 'hungry' to get an apple from the tree, type 'munch' to eat the apple");
} else if (response === "swing") {
    alert("Now you are going to starve."); 
} else 
    alert("Now you have a tummy ache.");
} 