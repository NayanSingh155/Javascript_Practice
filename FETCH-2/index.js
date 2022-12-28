let key = "bc4a51b88e120a6686d069d177c0a08b";
async function getWeather(){
    try {
        let city = document.getElementById("city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        let data=await res.json();
        console.log("data:",data);
    }
    catch(err){
        console.log("err:",err);
    }

}