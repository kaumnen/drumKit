// document.querySelectorAll("button").addEventListeners("click", function() {
//     alert("I got clicked!");
// });

const buttons = document.querySelectorAll("button");
buttons.forEach(element => element.addEventListener("click", function(){
    alert("I got clicked!");
}))