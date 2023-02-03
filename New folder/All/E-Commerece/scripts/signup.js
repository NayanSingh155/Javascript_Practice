let Arr = JSON.parse(localStorage.getItem("signupData")) || [];
let form = document.getElementById("form");
form.addEventListener("submit", SignUpFun);
function SignUpFun(event) {
    event.preventDefault();
    // console.log("inside")
    let data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
    }
    if (checkEmails(data.email) === true) {
        Arr.push(data);
        localStorage.setItem("signupData", JSON.stringify(Arr));
         alert("SignUp Success!!!")
    } else {
        alert("Account already exists !!")
    }
    console.log(data)

function checkEmails(email) {
    let filtered = Arr.filter(function (element) {
        return email === element.email;
    })
    if (filtered.length > 0) {
        return false;
    } else {
        return true;
    }
}
window.location.href="login.html";
console.log(Arr);
};