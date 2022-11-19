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

function myName(a){
    console.log(this.name,a)
}
myName.call(sis2,21);
myName.call(sis1,18);
myName.call(sis3,100);


var bro_1={
    name:"vikky"
}

var bro_2={
    name:"tue"
}

var bro_3={
    name:"Adi"
}

function broName(){
    console.log(this)
}

broName.call(bro_1)