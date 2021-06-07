const app = document.getElementById("app");
const artistName = document.createElement("input");
const songTitle = document.createElement("input");
const button = document.createElement("button");
const resultsArea = document.createElement("textarea");

app.appendChild(artistName);
app.appendChild(songTitle);
app.appendChild(button);
app.appendChild(resultsArea);

button.innerText = "Search";
app.style.display = "flex";

function get (artist, song) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((response) => response.json())
    .then((data) => {
        resultsArea.innerText = data.lyrics;
    });
}

button.addEventListener("click", function(){
    const artist = artistName.value;
    const song = songTitle.value;

    console.log(song);

    get(artist, song);
});