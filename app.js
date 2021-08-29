const loginform = document.querySelector("#login-form");
const input = loginform.querySelector("input");
const button = loginform.querySelector("button");


function buttonClick(){
    console.log(input.value);
}

button.addEventListener("click", buttonClick);