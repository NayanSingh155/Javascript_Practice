//Synchronus execution: One line at a time . Js executes line by line . A lmost every programming language executes code line by line.

// ex:
//  console.log(1);
//  console.log(2);
//  console.log(3);
//  console.log(4);

//  so Js executeing multiple code with browser help 

// 1.setTimeout(() => {
    
// }, timeout);

// 2.setInterval(() => {
    
// }, interval);

// 3.clearInterval();


// -----setTimeout-----

function test(){
    console.log("Hey, I am here");
}
console.log(1);
 console.log(2);
 console.log(3);
 console.log(4);
//  setTimeout(test,3000);
//  setTimeout(test,5000);

 //afetr 3 and 5 sec You will get Hey,I am there

// ---------setInterval-----

// function test(){
//     document.body.append("Hello, I am Here");
// }
//  console.log(1);
//  console.log(2);
//  console.log(3);
//  console.log(4);

//  setInterval(test,1000);


// It will append Hey I am here every 3 sec 

// ----------clearInterval-----

function test(){
    document.body.append("Hello, I am Here");
}
console.log(1);
 console.log(2);
 console.log(3);
 console.log(4);
//  var id=setInterval(test,2000);
// --it execute every 2 sec
//  clearInterval(id);
// --but it clear these code after 2sec



