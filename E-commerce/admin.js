function addProduct(n, c, i, p, s, g) {
  this.name = n,
    this.category = c,
    this.image = i,
    this.price = p,
    this.sold = s,
    this.gender = g

}

let form = document.getElementById("form");
form.addEventListener("submit", myFun);


function myFun(e) {
  e.preventDefault();

  let name = form.name.value;

  let cat = form.category.value;

  let image = form.image.value;

  let price = form.price.value;

  let gender = form.gender.value;

  let sold = form.sold.value;

  let product = new addProduct(name, cat, image, price, gender, sold);
  console.log(product);

  let arr = JSON.parse(localStorage.getItem("productArr")) || [];

  arr.push(product);

  localStorage.setItem("productArr", JSON.stringify(arr));

  alert("Product added successfully");

  

}