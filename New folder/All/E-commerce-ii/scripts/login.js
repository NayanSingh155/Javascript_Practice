let arr = JSON.parse(localStorage.getItem("signupdata")) || [];
let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        email: form.email.value,
        password: form.password.value,
    }
    console.log(data)
    if (checkSingnIn(data.email, data.password) === true) {
        arr.push(data)
        localStorage.setItem("signin", JSON.stringify(arr));
        alert("SignIn successfully!!")
        window.location.href = "index.html";
    } else {
        alert("wrong email or password");
    }

    function checkSingnIn(email, password) { 
    let filter = arr.filter(function (el) {
        return el.email === email && el.password === password
    })
    if (filter.length > 0) {
        return true;
    }
    else {
        return false;
    }
    }
})