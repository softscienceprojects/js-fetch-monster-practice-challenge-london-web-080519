const URL_PREFIX='http://localhost:3000/';

get = (url) => {
    return fetch(url).then(response => response.json())
}

const API = { get }

const container = document.querySelector("div")
container.setAttribute("id", "monster-container")

getMonsters = () => {
    API.get("http://localhost:3000/monsters/?_limit=50").then(renderAllMonsters)
}

renderAllMonsters = (monsters) => {
    monsters.forEach(monster => appendAMonster(monster))
}

appendAMonster = (monster) => {
    let h2 = document.createElement("h2")
    h2.innerText = monster.name

    let h4 = document.createElement("h4")
    h4.innerText = monster.age

    let p = document.createElement("p")
    p.innerText = monster.description


    container.append( h2, h4, p )
}

document.body.onload = getMonsters