function showMenu(event){
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show")

    let fadeLayer = document.querySelector(".fade-layer")
    fadeLayer.classList.toggle("visible")
}

function changeButton(event) {
    document.getElementById("button").innerHTML = "Hem"
    document.getElementById("button").href = "index.html"
}