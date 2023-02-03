let arr=JSON.parse( localStorage.getItem("productArr")) || [];


let count= document.getElementById("count").innerText="Total no.of product are ="+ arr.length;

arr.forEach((el,i) => {
    let card=document.createElement("div");

    let image=document.createElement("img");
    image.src=el.image;
    
    let name=document.createElement("p");
    name.innerText=el.name;
    
    let price=document.createElement("p");
    price.innerText="Rs."+el.price;
    
    let remove=document.createElement("button");
    remove.innerText="Remove";
    remove.setAttribute("id","remove");
    remove.addEventListener("click",()=>{
        arr.splice(i,1);
        localStorage.setItem("productArr",JSON.stringify(arr));
        window.location.reload();
    })

    
    let soldButton=document.createElement("button");
    
    soldButton.setAttribute("id","sold");
    if(el.sold){
        soldButton.innerText="Sold Out";
        soldButton.style.backgroundColor="red";
    }
    else{
        soldButton.innerText="In Stock";
        soldButton.style.backgroundColor="green";
    }

    soldButton.addEventListener("click",()=>{
        if(el.sold){
            el.sold=false;
        }else{
            el.sold=true;
        }

        localStorage.setItem("productArr",JSON.stringify(arr));
        window.location.reload();
    })

    card.setAttribute("class","productCard");



   
    
    card.append(image,name,price,remove,soldButton);
    document.getElementById("main").append(card);




});