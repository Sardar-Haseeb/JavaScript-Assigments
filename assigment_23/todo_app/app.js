

function addtodo() {
    var todoParent = document.getElementById("todoParent")
    var todoinput = document.getElementById("todoinput")

    if (todoinput.value.length < 3) {
        alert("eneter currect value")
        return
    }

    var li = document.createElement("li")
    li.innerHTML = todoinput.value

    // crete delete btn

    var editBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"
    var deltBtn = document.createElement("button")
    deltBtn.innerHTML = "DEL"

    li.appendChild(editBtn);
    li.appendChild(deltBtn);

    deltBtn.setAttribute("onclick", "delTodo(this)")
    // deltBtn.onclick = "delTodo()"



    todoParent.appendChild(li)
    todoinput.value = ""



}
function delTodo(ele) {
    console.log("delTodo", ele.parentNode)

    ele.parentNode.remove()
}


function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    todoParent.innerHTML = " "
}