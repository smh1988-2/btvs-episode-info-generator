const BASE_URL = "https://buffy-the-vampire-slayer-api.herokuapp.com/episode"
const form = document.querySelector("#form")

form.addEventListener("submit", grabEpisodes)

function grabEpisodes(e) {
    e.preventDefault();
    const season = document.querySelector("#season-number").value;
    const episode = document.querySelector("#episode-number").value;

    if (season === "Season" && episode === "Episode") {
        alert("Pick something");
    return
    }

    if (season === "1" && episode > 12) {
        alert("Season 1 only had 12 episodes!");
    return
    }

    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(episodes => tester(episodes))
}

 function tester(ep) {

    let season = document.querySelector("#season-number").value;
    let episode = document.querySelector("#episode-number").value;
    let epId

    season = Number(season)
    episode = Number(episode) 

    console.log(season)
    console.log(episode)

    if (season === 1) {
        epId = (season + episode) - 2
    } else if (season === 2) {
        epId = (season + episode) + 9
    } else if (season === 3) {
        epId = (season + episode) + 30
    } else if (season === 4) {
        epId = (season + episode) + 51
    } else if (season === 5) {
        epId = (season + episode) + 72
    } else if (season === 6) {
        epId = (season + episode) + 94
    } else if (season === 7) {
        epId = (season + episode) + 115
    }

    console.log(ep[epId])

    let renderedEpisode = document.createElement("p")
    renderedEpisode.innerHTML = `<p>You picked epsiode no. ${episode} from season ${season}.</p>
    <p>The title is ${ep[epId]["title"]}. It was directed by ${ep[epId]["director"]} and written by ${ep[epId]["writers"]}. It aired on ${ep[epId]["air_date"]}.</p> 
    <p><strong>Plot:</strong> ${ep[epId]["plot"]}</p>
    <p><strong>Trivia:</strong> ${ep[epId]["trivia"]}</p>
    <p><strong>Quote:</strong> ${ep[epId]["quote"]}</p>`

    putHere = document.querySelector("#episode-info")
    putHere.append(renderedEpisode)

    form.reset();

}
