const url = "https://api.opensea.io/api/v1/assets?format=json"

function domLoaded() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM Loaded")
        getNFT()
    })
}

function getNFT() {
    fetch(url).then(res => res.json()).then(data => console.log(data.assets))

}

domLoaded()