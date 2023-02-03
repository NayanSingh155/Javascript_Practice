//store the products array in localstorage as "products"

function addProduct(t,d,p,i){
    this.type=t,
    this.desc=d,
    this.price=p,
    this.image=i
}

let form=document.getElementById("products");
form.addEventListener("submit",myFun);

function myFun(e){
   e.preventDefault();

   let type=form.type.value;

   let desc=form.desc.value;

   let price=form.price.value;

   let image=form.image.value;

   let product= new addProduct(type,desc,price,image);
   console.log(product);


   let ParseData= JSON.parse(localStorage.getItem("products")) || [];
   ParseData.push(product);
   localStorage.setItem("products",JSON.stringify(ParseData));

   alert("Product added successfully");

}
