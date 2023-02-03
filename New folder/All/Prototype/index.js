// An Original model on which something is patternel.

let objA={
    name:"Bike"
}

let obj2 = Object.create(objA);
// console.log("obj2:",obj2)
// console.log("obj2:",obj2.name);

let family={
    father:"Mritunjay chaudhary",
    myFather(){
        console.log(this.father);
    }
}

var son=Object.create(family)
// son.myFather();
// console.log("son :" ,son)

var myFamily={
  grandPa:"Ramanand Chaudhary",
  Dad: "Mritunjay Ch.",
  Property:25+"acre",
  Building:2,
  myGrandpa(){
    console.log(this.grandPa)
  },

  myDad(){
    console.log(this.Dad)
  }
}

var potaJi=Object.create(myFamily);
// console.log("PotaJi:",potaJi)
// potaJi.myGrandpa();
// potaJi.myDad();


//we can use Js prototypal inheritance in two ways-1.Cf 2.Object.create();

// ---using CF----

function person(n,a){
    this.name=n,
    this.age=a
}

var personNew=new person("nayan",23);
// console.log("personNew :", personNew)

function person(n,a){
    this.name=n,
    this.age=a
}

person.prototype.city="Patna";
let p1=new person("nayan",28);
// console.log(p1)

// ---what is prototype?---

// --An original model on which something is patterned.

let cat={
    type:"Cat",
    leg:4,
    tail:true
}

let tiger=Object.create(cat);
tiger.speed=100;
// console.log(tiger);

let Lion=Object.create(cat);
Lion.color="Yellow";
Lion.tail=false;
Lion.speed=50;
// console.log(Lion);

//Fact:Object.create()stores the parent properties in [[prototype]]
// and it is an Object

// Q.Create a web16 student database using Object.create

let web_16={
    batch:"web-16",
    track:"Javascript",
    IA:"shantanu",
    Unit:1,
    Instructor:"Varun"
}

let s1= Object.create(web_16);
s1.studentguide="Muskan";
// console.log(s1)

function nikeProduct(n,p){
    this.name=n,
    this.price=p
}
nikeProduct.prototype.brand="Nike"
nikeProduct.prototype.sale=function(){
    console.log("20% Off");
}

var prod1=new nikeProduct("tshirt",999);
// console.log("Prod1 :",prod1);

let n2=new nikeProduct("pant",1999);
// console.log(n2);

//let add product using Object.create;

// --------Everything In Js is an Object----

// let arr=[1,2,3];
// arr.push(4);
// console.log(arr)
//arr will in key value FormD

let str="raju";//expectation
str.charAt(0);
let str2= new String("raju");//reality
// console.log(str2)
// console.log(str)

// ----------Custom Array------

let arr1=[1,2,3];//expectation
// console.log(arr1)

// but reality is-

let arr2=new Array(1,2,3);//Reality
// console.log(arr2);

//Create your own custom array

let arr3=new Array(1,2,3)

// Array(1,2,3)-what is tis?

// it is CF


// how?

function nayan(n,a){
    this.name=n,
    this.age=a
}
let name1=new nayan("nanhi",23);

// let arr3=new Array(1,2,3)
// vs
// let name=new nayan("nanhi",23);
// both are similar and both are CF 
// If I 
nayan.prototype.title=function(){
    console.log("Chaudhari");
}

// name1.title() 

nayan.prototype.caste="Bhumihar"
// console.log(name1.caste)

// like that I  can add my own method
// let arr3=new Array(1,2,3)-line no142
let arr4=new Array(1,2,3)

 Array.prototype.namaste=function(){
    console.log("apka swagat karte h")
 }
// arr4.namaste()

//so namaste is my own created method.















