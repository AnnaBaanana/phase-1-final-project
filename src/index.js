//original datasource
const urlAPI = "https://api.opensea.io/api/v1/assets?format=json"
//my json-server url
const url="http://localhost:3000/assets"

function getNFT() {
    const cardHolder = document.querySelector("#cardlist")
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        data.forEach(card => cardHolder.append(renderNFT(card)))
    })
}

function renderNFT(card) {
    const cardDiv = document.createElement("div")
    cardDiv.className = "card-div"
    cardDiv.id = card.id
    const image = document.createElement('img')
    image.className = "card-image"
    image.src = card.image_url
    const likeBtn = document.createElement('button')
    likeBtn.textContent = "Like!"
    likeBtn.className = "like"
    const likeCount = document.createElement('span')
    likeCount.textContent = card.likes
    likeCount.id = "likeCount"
    likeCount.className = "hidden"
    likeBtn.addEventListener("click", (e)=> {
        console.log(e)
        if (likeCount.className==="hidden") {
            likeCount.textContent++
            likeBtn.textContent="Liked!"
            likeCount.className ="liked"
            } else {
            likeCount.textContent--
            likeBtn.textContent="Unliked"
            likeCount.className="hidden"}
        fetch(`${url}/${card.id}`, {
            method: "PATCH",
            headers: {
                "Content-type":"Application/json" },
            body: JSON.stringify({"likes": likeCount.textContent})
        }).then(res=>res.json()).then(data => console.log(data))
        })
    cardDiv.append(image,likeBtn, likeCount)
    return cardDiv
}

 
function revealMostLiked() {
    const revealBtn = document.querySelector("#reveal")
    revealBtn.addEventListener('click', (e)=> {
        fetch(url).then(res => res.json()).then(data => {
            const mostLikes = Math.max(...data.map(card => card.likes))
            const mostLiked = data.find(el => el.likes==mostLikes)
            revealBtn.className ="hidden"
            const likeCount = document.querySelector("#likeCount")
            const showMostLiked = document.querySelector("#currentwinner")
            showMostLiked.append(renderNFT(mostLiked))
    })
})
}

function handleForm() {
    const form = document.querySelector('#addCard')
    console.log(form)
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(e)
        const cardObj = {
            "image_url": e.target[0].value,
            "name": e.target[1].value,
            "description": e.target[2].value,
            "likes": 0
        }
        console.log(cardObj)
        form.reset()
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"},
            body: JSON.stringify(cardObj)
        }).then(res => res.json()).then(data => {
            console.log(data)
            document.querySelector('#card-container').append((renderNFT(data)))})
    })
}

function domLoaded() {
    document.addEventListener("DOMContentLoaded", () => {
        getNFT()
        handleForm()
        revealMostLiked()
    })
}

domLoaded()


