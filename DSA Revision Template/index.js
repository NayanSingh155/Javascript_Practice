document.querySelector("form").addEventListener("submit", dsaFun);
var queArr = JSON.parse(localStorage.getItem("dsa")) || [];

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
    displayTable(queArr)
}

function displayTable(queArr) {
    document.querySelector("tbody").innerHTML = "";
    queArr.forEach((elem, i) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let dlt = document.createElement("button")
        dlt.innerText = "Delete";
        dlt.addEventListener("click", dltFun);
        function dltFun() {
            console.log("delete")
            queArr.splice(i,1)
            // console.log(queArr)
            window.location.reload();
            localStorage.setItem("dsa", JSON.stringify(queArr));
        }

        td1.innerText = elem.title;
        td2.innerText = elem.link;
        td3.innerText = elem.difficulty;

        if (elem.difficulty === "Easy") {
            td4.innerText = "No";
        } else if (elem.difficulty === "Hard") {
            td4.innerText = elem.innerText = "YES";
        }
        else if (elem.difficulty === "Medium") {
            td4.innerText = elem.innerText = "YES";
        }
        else {
            td4.innerText = elem.innerText = "";
        }
        tr.append(td1, td2, td3, td4, dlt)
        console.log(tr)
        document.querySelector("tbody").append(tr);
    });
    // window.location.reload()
}