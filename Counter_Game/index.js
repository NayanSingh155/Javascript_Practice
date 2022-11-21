let h2 = document.getElementById("timer")
let count =5;
function typing() {
    let input = document.getElementById("text").value;

    console.log(input)
    count--;
    h2.innerText = count;

    if (input === "pagla gaye ho kya")
        alert("Tum jeet gaye")

    if (count === 0) {
        clearInterval(id);
        alert("Uhh ! TimeOut")
    }
}

let id = setInterval(typing, 1000);