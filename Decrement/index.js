let h2=document.getElementById("timer");
let count=5;
function decrement(){
    count--;
    h2.innerText=count;
    if(count==0){
        clearInterval(id);
    }
}
let id=setInterval(decrement,1000);