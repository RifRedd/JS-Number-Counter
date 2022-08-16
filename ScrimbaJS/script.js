
let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment () {
    count += 1
    countEl.textContent = count
}

function save () {
    let countSaved = `${count} - ` ;
    saveEl.textContent += " " + countSaved;
    count = 0
    countEl.innerText = count
}



