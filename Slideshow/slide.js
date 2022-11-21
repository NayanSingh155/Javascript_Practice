let counter=0;
let id;
function Start(){

    let images=JSON.parse(localStorage.getItem("images"))
    let container=document.getElementById("container");

    container.innerHTML=null;
    let img=document.createElement("img");

    id=setInterval(function(){
        if(counter===images.length){
            counter=0;
        }
        img.src=images[counter];
        container.append(img);
        console.log("counter:",counter);
        counter++;
    },3000)
}

function pause(){
    console.log("pause:",counter);
    clearInterval(id);

}