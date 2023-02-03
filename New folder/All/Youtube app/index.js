
const apiKey = "AIzaSyDMo_vQMR3h9xQprFXrVA3HlM0My0PqcJI";

const SR = document.getElementById("showResult");
async function searchFun() {
    SR.innerHTML = "";
    try {
        let video_query = document.querySelector("#inputBox").value;
        let res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&q=${video_query}&type=video&key=${apiKey}&maxResults=20`
        );
        let data = await res.json();
        // console.log("data:",data)
        let Grid = data.items;
        appendVideos(Grid);
    } catch (x) {
        console.log("x:", x);

    }
}

const appendVideos = (items) => {
    items.forEach((el) => {
        console.log("el:", el);
        let {
            id: { videoId },
        } = el;
        console.log("videoId:", videoId);


        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.height = "150px";
        iframe.width = "100%";
        iframe.setAttribute("allowfullscreen", true);
        SR.append(iframe);
    });
};

