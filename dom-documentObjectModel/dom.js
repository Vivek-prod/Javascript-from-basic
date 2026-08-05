/*
document.body.innerHTML = "hello";
document.title = "goodjob";

console.log(document.title);

document.title = "changed";

console.log(document.body);

console.log(typeof document.body); //will be an object

console.log(document.body.innerHTML);

document.body.innerHTML = "<button>goodjob</button>";
*/
//method is an function saved inside an object

console.log(document.querySelector("button").innerHTML);

document.querySelector("button").innerHTML = "changed";

console.log(document.querySelector("button").innerHTML);

const buttonElement = document.querySelector(".js-button"); //chosed the class

console.log(buttonElement);
