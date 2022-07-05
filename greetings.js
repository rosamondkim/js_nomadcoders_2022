const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const setLogout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(tomato){
    greeting.innerText = `Hello ${tomato}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

} else {
   paintGreetings(savedUsername);
   setLogout.classList.remove(HIDDEN_CLASSNAME);
}

function setLogoutBtn(){
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

setLogout.addEventListener("click",setLogoutBtn);


