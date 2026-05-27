async function getJoke() {
    const API_URL = "https://official-joke-api.appspot.com/random_joke";

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        document.getElementById("setup").innerText = data.setup;
        document.getElementById("punchline").innerText = data.punchline;
    } catch (error) {
        document.getElementById("setup").innerText = "Failed to load joke 😢";
        document.getElementById("punchline").innerText = "";
        console.log(error);
    }
}

document.getElementById("getJoke").addEventListener("click", getJoke);