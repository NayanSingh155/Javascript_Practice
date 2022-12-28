let data;
let url = "https://fakestoreapi.com/products";
// fetch(url)
// .then(function(res){
//     return res.json();
// })
// .then(function(res){
//    console.log("res :", res);
// })
// .catch(function(err){
//     console.log("err :",err)
// })

// ------convert into async await-----

async function getData() {
    try {
        let res = await fetch(url)
        data = await res.json();
        console.log("data :", data)
        appendData(data)
    } catch (err) {
        console.log("err :", err);
    }
}
getData();

// ----------append-----------
function appendData(arrData){
   arrData.forEach(el => {
     let div=document.createElement("div");
     let img=document.createElement("img");
     img.src=el.image;

     let description=document.createElement("p");
     description.innerText=el.description;

     let title=document.createElement("h3")
     title.innerText=el.title;

     let price=document.createElement("h3")
     price.innerText=el.price;

     let category=document.createElement("h4")
     category.innerText=el.category;

     div.append(img,title,price,category);
     let box=document.getElementById("box")
     box.append(div);

   });
}