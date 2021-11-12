const loginform = document.querySelector("#login-form");
const input = loginform.querySelector("input");
const h1 = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){

    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username = input.value;    
    localStorage.setItem("username", username);
    h1.innerText = `Hello ${username}`; 
    h1.classList.remove(HIDDEN_CLASSNAME);
}

loginform.addEventListener("submit", onLoginSubmit);