let API=`AIzaSyDUwUBpkaP6blPrJZjMokvPwzB-z4aEW2k`;

let getData=async()=>{
    try{
        let query=document.getElementById('query').value;
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`);
        let {items}=await res.json();
        let array_of_videos=items;
        appendVideos(array_of_videos)
        console.log(array_of_videos)
    }
    catch(err){
        console.log('err :',err);
    }

}
let search_results=document.getElementById('search_results');

let appendVideos=(data)=>{
    search_results.innerHTML=null;

    data.forEach(({snippet:{title},id:{videoId}}) => {
        

        let div=document.createElement('div');
        let iframe=document.createElement('iframe');
        iframe.src=`https://www.youtube.com/embed/${videoId}`;

        iframe.width="100%";
        iframe.height="100%";
         iframe.allow='fullscreen';
        let Title=document.createElement('h5');
        Title.innerText=title;

        div.append(iframe,Title);
        search_results.append(div);
        

        // let data={
        //     snippet:snippet,
        //     videoId:videoId,
        // }

        // div.onclick=()=>{
        //     localStorage.setItem('clicked_video',JSON.stringify(data));
        // }
        // console.log(title,videoId);
    });
}