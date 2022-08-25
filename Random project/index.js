let users = [
   {name: "Virat", profession: "Cricketer"},
   {name: "Ambani", profession: "Businessman"},
   {name: "You", profession: "UI Developer"},

]

function showText() {
    let randomObject = Math.floor(Math.random() * users.length);

    document.getElementById("random").innerHTML = users[randomObject].name + " " + ":"+ " " + users[randomObject].profession;
}

function checkAge() {
    var age = prompt("Please enter your age below: ")
    if ( age >= 18) {
        document.getElementById("welcome").innerHTML = "Welcome"
    } else {
        document.getElementById("wait").innerHTML = "You're not allowed"
    }
}

// submitForm();
let submitForm = function saveForm() {
    document.getElementById("save").addEventListener("click", function () {
        window.alert("Your form has been submitted")
    })
}
submitForm();