const url1 = "https://api.opensea.io/api/v1/assets?format=json"
const url="http://localhost:3000/assets"

function domLoaded() {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM Loaded")
        getNFT()
        renderNFT()
        //revealMostLiked()
    })
}

function getNFT() {
    const cardHolder = document.querySelector("#cardlist")
    console.log(cardHolder)
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.assets)
        data.forEach(card => cardHolder.append(renderNFT(card)))
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
    likeCount.textContent = card.likes
    likeCount.className = "hidden"
    likeBtn.addEventListener("click", (e)=> {
        console.log(e)
        if (likeCount.className==="hidden") {
            likeCount.textContent++
            likeBtn.textContent="Liked!"
            likeCount.className ="liked"
            } else {
            likeCount.textContent--
            likeBtn.textContent="Like!"
            likeCount.className="hidden"}})

    cardDiv.append(image, likeBtn, likeCount)
    return cardDiv
}

function revealMostLiked() {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        const likes = data.assets.map(card => card.likes)
        console.log(likes)
    })
}



domLoaded()