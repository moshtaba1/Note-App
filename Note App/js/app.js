let $ = document

let inputElem = $.querySelector("#input-field")
let btnSave = $.querySelector("#btn-save")
let btnDelete = $.querySelector("#btn-delete")
let colorBox = $.querySelectorAll(".color-box")
let containeer = $.querySelector("#listed")


function createNote () {
    let newNoteDiv = $.createElement("div")
    newNoteDiv.className = "card shadow-sm rounded"
    let inputBg = inputElem.style.backgroundColor
    newNoteDiv.style.backgroundColor = inputBg
    newNoteDiv.addEventListener("click",removeNote)

    let newNoteP = $.createElement("P")
    newNoteP.className = "card-text p-3"

    newNoteP.innerHTML = inputElem.value

    newNoteDiv.append(newNoteP)
    containeer.append(newNoteDiv)

    inputElem.value = ""
    inputElem.style.backgroundColor = "#fff"
}

function removeNote (event) {
    event.target.parentElement.remove()
}

colorBox.forEach(function(colorBox){
    colorBox.addEventListener("click", function(event){
        let mainColor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = mainColor
    })
})

btnDelete.addEventListener("click", function(){
    inputElem.value = ""
    inputElem.style.backgroundColor = "#fff"
})
btnSave.addEventListener("click", function(){
    if(inputElem.value){
        createNote()
    }
})

inputElem.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        if(inputElem.value){
            createNote()
        }
    }
})