
async function main() {
    try {
        let query = document.getElementById('query').value;
        console.log('query :',query);

        let res = await fetch(`http://www.omdbapi.com/?apikey=c69ce8b&s=${query}`);

        let data = await res.json();
        console.log("data :", data);

        let actual_data=data.Search;
        console.log('actual_data :',actual_data);

        if(actual_data!=undefined){
        appendData(actual_data);
            
        }
    }
     catch (err) {
        console.log('err :', err);
    }

}

let movies = document.getElementById('movies');
function appendData(data){
    movies.innerHTML=null;
    data.forEach(function(el){
        let p=document.createElement('p')
        p.innerText=el.Title;
        movies.append(p);
    });
}
let id;
function debounce(fun,delay){
    if(id){
        // console.log(id)
        clearTimeout(id);
    }

    id=setTimeout(function(){
        // console.log(id)
        fun();
    },delay);
}