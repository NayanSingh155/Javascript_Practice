
let h2 = document.getElementById("result");
let Time_Start = 10;
function counter() {
    let inp = document.getElementById("typing").value;
    console.log(inp)
    Time_Start = Time_Start - 1;
    h2.innerText = Time_Start;
    if (inp === "tera chehra hai aaine jaisa") {
        // alert("Winner Yeah!!!")
        h2.innerText = "Winner Yeah!!!"

    }
    if (Time_Start === 0) {
        // alert("Ooh Looser!!")
        clearInterval(id)
        h2.innerText = "Ooh Looser!!"

    }
}
function refresh() {
    window.location.href = "index.html";
    // console.log("hii")
}
// refresh()
let id = setInterval(counter, 1000);
