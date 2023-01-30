document.querySelector("form").addEventListener("submit", dsaFun);

let queArr = JSON.parse(localStorage.getItem("dsa")) || [];
console.log(queArr)
function dsaFun(event) {
    event.preventDefault();
    // console.log("inside")
    let dsaObj = {
        title: document.getElementById("title").value,
        link: document.getElementById("link").value,
        difficulty: document.getElementById("difficulty").value,
    }
    // console.log(dsaObj)
    queArr.push(dsaObj)
    // console.log(queArr)
    localStorage.setItem("dsa", JSON.stringify(queArr));

}