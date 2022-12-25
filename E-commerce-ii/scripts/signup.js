let arr=JSON.parse(localStorage.getItem("signupdata")) || [];
let form=document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let data={
       name: form.name.value,
       email:form.email.value,
       password:form.password.value,
    }
    if(checkEmails(data.email)===true){
        arr.push(data);
        localStorage.setItem("signupdata",JSON.stringify(arr));
        alert("signup success!!")
    }else{
        alert("Account Already exists!!!")
    }
    console.log(data)

    function checkEmails(email){
        let filter=arr.filter(function(el){
            return email===el.email;
        })
        if(filter.length>0){
            return false;
        }else{
            return true;
        }
    }
    window.location.href="login.html";
    console.log(arr);

})