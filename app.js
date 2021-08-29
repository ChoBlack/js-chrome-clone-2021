const loginform = document.querySelector("#login-form");
const input = loginform.querySelector("input");
const button = loginform.querySelector("button");


function onLoginSubmit(event){
    event.preventDefault();
    const username = input.value;
    console.log(username);
}

loginform.addEventListener("submit", onLoginSubmit);