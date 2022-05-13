const url = "https://api.opensea.io/api/v1/assets?format=json"

function domLoaded() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM Loaded")
        getNFT()
        renderNFT()
    })
}

function getNFT() {
    const cardHolder = document.querySelector("#cardlist")
    console.log(cardHolder)
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.assets)
        data.assets.forEach(card => cardHolder.append(renderNFT(card)))
    })
}

function renderNFT(card) {
    const cardDiv = document.createElement("div")
    cardDiv.className = "card-div"
    const image = document.createElement('img')
    image.className = "card-image"
    image.src = card.image_url
    const likeBtn = document.createElement('button')
    likeBtn.textContent = "Like!"
    likeBtn.className = "like"
    const likeCount = document.createElement('span')
    likeCount.textContent =  0
    likeCount.className = "hidden"
    likeBtn.addEventListener("click", (e)=> {
        console.log(e)
        if (likeCount.className==="hidden") {
            likeCount.textContent++
            likeCount.className ="liked"
            } else {
            likeCount.textContent--
            likeCount.className="hidden"}})

    cardDiv.append(image, likeBtn, likeCount)
    return cardDiv
}

domLoaded()