let products = document.getElementById("product");
let cartLs = JSON.parse(localStorage.getItem("cart-page")) || [];


function displayProducts(data) {
    let products = document.getElementById("product");
    products.innerHTML = "";
    data.forEach(function (elem) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.img;
        let name = document.createElement("h3")
        name.innerText = elem.name;
        let category = document.createElement("h3");
        category.innerText = elem.catagory;

        let button = document.createElement("button");
        button.innerText = "Delete";
        button.addEventListener("click", function () {
            deleteFun(elem.productID)
        })

        div.append(img, name, category, button);
        products.append(div);
    })
}
displayProducts(cartLs);

function deleteFun(id) {
    console.log(id)
    let deleted = cartLs.filter(function (el) {
        return el.productID!= id;
    })
    cartLs = deleted;
    localStorage.setItem("cart-page", JSON.stringify(cartLs));
    displayProducts(cartLs);

    console.log(deleted);
}