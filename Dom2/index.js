function signUp(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;

    document.getElementById("dn").innerText=name;
    document.getElementById("de").innerText=email;
    document.getElementById("dm").innerText=mobile;
    
}