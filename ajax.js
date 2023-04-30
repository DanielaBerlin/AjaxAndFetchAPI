// LOAD ALL USERS

const btn = document.getElementById("btn");
btn.addEventListener("click, getUsers");

//CREATE A FUNCTION GETUSERS

function getUsers(e) {
    e.preventDefault();

    const http = new XMLHttpRequest();

    http.open("GET", "users.json", true);

    http.onload = function() {

    }

    http.send();
}