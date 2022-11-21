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
console.log(p1)
