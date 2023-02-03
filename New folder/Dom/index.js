function likeMe(){
    alert("someone liked me")
}
function dislikeMe(){
    // alert("someone disliked me!!")
    console.log("disliked")
}

function changeFun(){
    let x= document.getElementById("head")
x.innerText="Now I am Changed I am new Head"

let y= document.getElementById("para")
y.innerText="Now I am N ew Para"

let z= document.getElementById("div")
z.innerText="new div"
}


function changeName() {
    let x = document.getElementById("h")
    x.innerText = "Nayan Singh"
    x.style.color = "red"
    x.style.textAlign = "center"
}

function subFun() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;

    document.getElementById("n").innerText = a;
    document.getElementById("e").innerText = b;

}

let count = 0;
function countFun() {
    console.log("signUp")
    count++;
    console.log(count)
}

// let count=0;
function countSign() {
    console.log("signIn")
    count++;
    console.log(count)
}

function callingMe() {
    alert("ring Bell")
}

function added() {
    alert("added to cart")
}

function getId() {
    let p = document.getElementById("para").innerText;
    console.log(p);

    let box = document.getElementById("box").innerText;
    console.log(box);

    let head = document.getElementById("head").innerText;
    console.log(head);
}
let l=document.getElementById("legato").innerHTML;
console.log(l)

let t= document.getElementById("legato").innerText;
console.log(t)


function signup(){
    let input=document.getElementById("email").value;
    let email=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;

    let dn=document.getElementById("dn").innerText=input;
    console.log(dn)

    let em=document.getElementById("em").innerText=email;
    console.log(em)

    let mb=document.getElementById("mb").innerText=mobile;
    console.log(mb)
}