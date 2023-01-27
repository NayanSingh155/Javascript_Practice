//Object literal

let obj={};//object literal

let girl1={
    name:"Nayan Singh",
    age:26,

}//object literal But we can"t create 100 object using this method. For that we use CF.

//who is the owner of a key value pair?- Girl1

let girl_1={
   name:"Nanhi",
   age:23,
   myName: function(){
//    how to get the value of name here-Namhi

    console.log(girl_1.name);//owner-girl_1

   }
}
// girl_1.myName()

// <---Introduction to "this" keyword---->

// "this"--- refers owner Object

var men={
    name:"vikram",
    brotherName:function(){
        console.log(this.name)//this==men
    }

}
// men.brotherName();

var men_2={
    name:"Vikash kumar",
    bigbroName:function(){
        console.log(this.name);
    }
}
// men_2.bigbroName();

var men_3={
    name:"Vinay Prasad Yadav",
    fatherName:function(){
        console.log(this.name);
    }
}
// men_3.fatherName()

var women_1={
    name:"premlata Devi",
    motherNmae:function(){
        console.log(this.name);
    }
}
// women_1.motherNmae();

var sister1={
    name:"Shilpi Yadav",
    sisterName:function(){
        console.log(this.name);
    }
}
// sister1.sisterName();

var sister2={
    name:"Shivani Yadav",
    sisterName:function(){
        console.log(this.name);
    }
}
// sister2.sisterName();

var sister3={
    name:"Nisha Kumari",
    sisterName:function(){
        console.log(this.name);
    }
}
// sister3.sisterName();

var sister4={
    name:"Arti Devi",
    sisterName:function(){
        console.log(this.name)
    }
}
// sister4.sisterName();

var mom={
    name:"Aansu Devi",
    momName:function(){
        console.log(this.name);
    }
}
// mom.momName();

var dad={
    name:"Mritunjay Chaudhary",
    dadNmae:function(){
        console.log(this.name);
    }
}
// dad.dadNmae();

var grandPa={
    name:"Ramanand Chaudhary",
    grandpaName:function(){
        console.log(this.name);
    }

}
// grandPa.grandpaName();

var granny={
    name:"Savitri Devi",
    grannyName:function(){
        console.log(this.name);
    }
}
// granny.grannyName();

var bro={
    name:"Adi chaudhary",
    broName:function(){
        console.log(this.name);
    }
}
// bro.broName();



// <--------Global Object---------->

function myName(){
    console.log(this)//this-would refers to global obj.
}
// myName();

// <------------object using CF--------->


function Family(n,a,c){
    this.name=n,
    this.age=a
    this.city=c
}
let sisters1= new Family("nayan",27,"patna");
// console.log(sisters1);

let s2=new Family("Nisha",21,"Banka");
// console.log(s2);

let s3=new Family("Nidhi",18,"Munger")
// console.log(s3);

let s4=new Family("khushi",29,"kgg");
// console.log(s4);


function brothers(n,a,s){
    this.name=n,
    this.age=a,
    this.study=s
}
let bro1=new brothers("Shivam",23,"Pharmacy");
// console.log(bro1);

let bro2=new brothers("Shubham",21,"Neet");
// console.log(bro2);

let bro3=new brothers("Vikram",21,"polytechnic");
// console.log(bro3);

let bro4=new brothers("Adi",14,7);
// console.log(bro4);

let bro5=new brothers("vikky",29,"job");
// console.log(bro5)

// <-------------.Call.........>


var sis1={
    name:"Nisha",
}

var sis2={
    name:"Nidhi"
}

var sis3={
    name:"lol"
}

function myName(a,c){
   console.log(this.name,a,c)

}
// myName.call(sis2,21,"patna");
// myName.call(sis3,100,"Patal");


// ---------or--------
function sisName(a,c){
    this.age=a,
    this.city=c
}
sisName.call(sis1,18,"Banka");
// console.log(sis1);

sisName.call(sis2,21,"patna")
// console.log(sis2);

sisName.call(sis3,18,"bup")
// console.log(sis3);


var bro_1={
    name:"vikky"
}

var bro_2={
    name:"tue"
}

var bro_3={
    name:"Adi"
}

function broName(a,j){
    this.age=a,
    this.job=j
}
// ---call kar rahe h
  broName.call(bro_1,21,"Engineer")
//   console.log(bro_1);

  broName.call(bro_2,23,"Polytechnic")
//   console.log(bro_2);

broName.call(bro_3,22,"school")
// console.log(bro_3);


var mom={
    name:"Anshu devi"
}

var mom1={
    name:"Premlata devi"
}

function momName(work){
    console.log(this.name,work)
}

// momName.call(mom1,"seva");
// momName.call(mom,"dowork");

// --or--

function momName(a,w){
    this.age=a,
    this.work=w
}

momName.call(mom,42,"housewife")
// console.log(mom);

momName.call(mom1,24,"housewife");
// console.log(mom1);



var b1={
    name:"Vikash kumar"
}

var b2={
    name:"vikram kumar"
}

var b3={
    name:"Tejash singh"
}

function details(a,c,w){
    this.age=a,
    this.city=c,
    this.work=w
}

details.call(b1,21,"Engineer","Delhi")
// console.log(b1);

details.call(b2,19,"polytechnic","patna")
// console.log(b2);

details.call(b3,1,"Khagaria","sarart")
// console.log(b3);


// <----------apply-------->

// details.apply(b3,[2,"Khagaria","sarart"])

// details.apply(b1,[21,"Engineer","Delhi"])

// details.apply(b2,[19,"polytechnic","patna"])


// <----------bind---------->

var a={
    name:"nayan"
}

function Name(){
    console.log(this.name);
}
var result=Name.bind(a);
// result();


// --------lecture------


function car(n,m,b,y){
    this.name=n,
    this.model=m,
    this.bodystyle=b,
    this.year=y
}

var i10=new car("Honda","Accord","Sedan",1999);
// console.log(i10);


var kia=new car("Kia","Seltos","SUV",2022)
// console.log(kia);

// <--this points to global Object in a function invocation--->

function myFun(){
    this;
}
myFun();

var myObject={
   myObject:function(){
    this;
   }

}
myFun();

