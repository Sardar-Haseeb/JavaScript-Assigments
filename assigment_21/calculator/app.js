
function addValue(num) {
    var inputField = document.getElementById("inputField")
    inputField.value += num
}

function result() {
    var inputField = document.getElementById("inputField")
    inputField.value = eval(inputField.value)
}


function fullClear() {
    var inputField = document.getElementById("inputField")
    inputField.value = ""
}


function oneClear() {
    var inputField = document.getElementById("inputField")
    inputField.value = inputField.value.slice(0, -1)
}


