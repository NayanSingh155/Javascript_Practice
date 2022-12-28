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
let box = document.getElementById("box");
function appendData(arrData) {
    box.innerHTML = null;
    arrData.forEach(el => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;

        let title = document.createElement("h3")
        title.innerText = el.title;

        let price = document.createElement("h3")
        price.innerText = el.price;

        let category = document.createElement("h4")
        category.innerText = el.category;

        div.append(img, title, price, category);
        box.append(div);

    });

}
// --------------sort--------------
function sortLH() {
    data = data.sort(function
        (a, b) {
       return a.price - b.price;
        // console.log(data)
    })
    appendData(data);
}

function sortHL() {
    data = data.sort(function
        (a, b) {
       return b.price - a.price;
        // console.log(data)

    })
    appendData(data);
}
// -----------filter---------
function filter(){
    let query=document.getElementById("query").value;
    let copy_data=data;

    copy_data=copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query);
    })
    appendData(copy_data)
}