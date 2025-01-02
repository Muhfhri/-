$(document).ready(function () {
    var savedName = localStorage.getItem("userName");
    if (savedName) {
        greetUser(savedName);
    } else {
        $("#myModal").modal('show');
    }
});

function greetUser(name) {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 3)
        greet = 'Selamat Malam';
    else if (hrs >= 3 && hrs <= 10)
        greet = 'Selamat Pagi';
    else if (hrs >= 10 && hrs <= 15)
        greet = 'Selamat Siang';
    else if (hrs >= 15 && hrs <= 20)
        greet = 'Selamat Sore';
    else if (hrs >= 20 && hrs <= 24)
        greet = 'Selamat Malam';

    if (name.toLowerCase().includes("aina") || name.toLowerCase().includes("ida") || name.toLowerCase().includes("embul") || name.toLowerCase().includes("yasa")) {
        name = "Sayanggg ^•^ ";
    }

    document.getElementById('lblGreetings').innerHTML =
        greet + ' ' + name + '!<button class="btn btn-sm btn-link" onclick="changeName()"><small><sup><i class="fa-regular fa-pen-to-square"></i></sup></small></button>';
}

function saveName() {
    var name = document.getElementById("name").value;
    localStorage.setItem("userName", name);
    $("#myModal").modal('hide');
    greetUser(name);
}

function changeName() {
    localStorage.removeItem("userName");
    $("#myModal").modal('show');
}