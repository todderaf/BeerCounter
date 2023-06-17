let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let warningEl = document.getElementById("warning-el")

function increment() {
    count += 1
    countEl.textContent = count
    warningEl.style.display = "none"
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    if (count > 2) {
        warningEl.style.display = "block"
    }
    countEl.textContent = 0
    count = 0
}
