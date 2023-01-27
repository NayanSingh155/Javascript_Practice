// function likeMe(){
//     alert("someone liked me")
// }
// function dislikeMe(){
//     // alert("someone disliked me!!")
//     console.log("disliked")
// }

// function changeFun(){
//     let x= document.getElementById("head")
// x.innerText="Now I am Changed I am new Head"

// let y= document.getElementById("para")
// y.innerText="Now I am N ew Para"

// let z= document.getElementById("div")
// z.innerText="new div"
// }


function changeName(){
  let x=  document.getElementById("h")
   x.innerText="Nayan Singh"
   x.style.color="red"
   x.style.textAlign="center"
}

function subFun(){
    let a=document.getElementById("name").value;
    let b=document.getElementById("email").value;
    
    document.getElementById("n").innerText=a;
    document.getElementById("e").innerText=b;

}

let count=0;
function countFun(){
    console.log("signUp")
    count++;
   console.log(count)
}

// let count=0;
function countSign(){
 console.log("signIn")
 count++;
 console.log(count)
}


