var response = prompt("You walk into a meadow with an apple tree and a swing. Type 'get' to pick an apple, type 'swing' to swing from the tree");

if(response === "get"){
    response = prompt("There's a tree. Type 'peel' to peel an apple, type 'munch' to eat the apple");
} else if (response === "swing") {
    alert("Now you are going to starve."); 
} else 
    alert("Now you have a tummy ache.");
//handle "peel" and "munch"

if(response === "peel"){
    alert("The apple is ripe")
} else if (response === "munch") {
    alert("You are no longer hungry")
}
    