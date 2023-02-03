// let Data = JSON.parse(localStorage.getItem("loggedUser")) || [];


let form = document.querySelector("form")
let Arr = JSON.parse(localStorage.getItem("signupData")) || [];
form.addEventListener("submit", logFun);


function logFun(event) {
    event.preventDefault();
    let obj = {
        email: form.email.value,
        password: form.password.value,
    }
    console.log(obj)
    if (checkSignin(obj.email, obj.password) === true) {
        Arr.push(obj);
        localStorage.setItem("signin", JSON.stringify(Arr));
        alert("SignIn Succesfully !!")
        window.location.href="index.html";
    } else {
        alert("wrong username or password")
    }
}
function checkSignin(email, password) {
    let filter = Arr.filter(function (elem) {
        return elem.email === email && elem.password === password
    })
    if (filter.length > 0) {
        return true;
    } else {
        return false;
    }
}
