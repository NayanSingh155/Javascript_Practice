let key = "bc4a51b88e120a6686d069d177c0a08b";
let map=document.getElementById("gmap_canvas");
async function getWeather(){
    try {
        let city = document.getElementById("city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        let data=await res.json();
        appendData(data)
        console.log("data:",data);
    }
    catch(err){
        console.log("err:",err);
    }

}
// --------append-----------

function appendData(data){
   let box=document.getElementById("box");
   box.innerHTML=null;
   let name=document.createElement("p");
   name.innerText=`Name-${data.name}`;

   let temp=document.createElement('p');
   temp.innerText=`Temp-${data.main.temp}`;

   let humidity=document.createElement('p');
   humidity.innerText=`Humidity-${data.main.humidity}`;

   let pressure=document.createElement('p');
   pressure.innerText=`Pressure=${data.main.pressure}`;

   box.append(name,temp,humidity,pressure);

//    -----map append----
map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}