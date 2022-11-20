let ParseData= JSON.parse(localStorage.getItem("products")) || [];

ParseData.forEach((el,i) => {
    let div=document.createElement("div");

    let type=document.createElement("p");
    type.innerText=el.type;

    let desc=document.createElement("p");
    desc.innerText=el.desc;

    let price=document.createElement("p");
    price.innerText="Rs."+el.price;

    let image=document.createElement("img");
    image.src=el.image;

    div.setAttribute("class","card");

    let remove=document.createElement("button");
    remove.innerText="Remove";
    remove.setAttribute("id","remove_product");
    remove.addEventListener("click",()=>{
        ParseData.splice(i,1);
        localStorage.setItem("products",JSON.stringify(ParseData));
        window.location.reload();
    })

    div.append(type,desc,price,image,remove);
    document.getElementById("all_products").append(div);
    
});