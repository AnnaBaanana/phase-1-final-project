const url = "https://api.opensea.io/api/v1/assets?format=json"

function domLoaded() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM Loaded")
        getNFT()
        renderNFT()
    })
}

function getNFT() {
    const cardHolder = document.querySelector("#card-container")
    console.log(cardHolder)
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.assets)
        data.assets.forEach(card => cardHolder.append(renderNFT(card)))
    })
}

function renderNFT(card) {
    const div = document.createElement('div')
    div.textContent = card.name
    const image = document.createElement('img')
    image.src = card.image_url
    image.className = "cards"
    div.append(image)
    return div
}

domLoaded()