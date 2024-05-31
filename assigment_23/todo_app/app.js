

// function addtodo() {
//     var todoParent = document.getElementById("todoParent")
//     var todoinput = document.getElementById("todoinput")

//     if (todoinput.value.length < 3) {
//         alert("eneter currect value")
//         return
//     }

//     var li = document.createElement("li")
//     li.innerHTML = todoinput.value

//     // crete delete btn

//     var editBtn = document.createElement("button")
//     editBtn.innerHTML = "EDIT"
//     var deltBtn = document.createElement("button")
//     deltBtn.innerHTML = "DEL"

//     li.appendChild(editBtn);
//     li.appendChild(deltBtn);
//     editBtn.setAttribute("onclick", "editBtn(this)")

//     deltBtn.setAttribute("onclick", "delTodo(this)")
//     // deltBtn.onclick = "delTodo()"



//     todoParent.appendChild(li)
//     todoinput.value = ""



// }
// function delTodo(ele) {
//     console.log("delTodo", ele.parentNode)

//     ele.parentNode.remove()
// }


// function deleteAll() {
//     var todoParent = document.getElementById("todoParent")
//     todoParent.innerHTML = " "
// }


// function editBtn(ele) {
//     // ele.parentNode = "hello"

//     var editVal = prompt("enter value", ele.previousSibling.nodeValue)
//     console.log(editVal)
//     ele.previousSibling.nodeValue = editVal
// }   





function addtodo() {
    var todoParent = document.getElementById("todoParent");
    var todoinput = document.getElementById("todoinput");

    if (todoinput.value.length < 3) {
        alert("Enter correct value");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = todoinput.value;

    // Create button container
    var buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    // Create edit button
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "EDIT";
    editBtn.setAttribute("onclick", "editBtn(this)");

    // Create delete button
    var deltBtn = document.createElement("button");
    deltBtn.innerHTML = "DEL";
    deltBtn.setAttribute("onclick", "delTodo(this)");

    // Append buttons to the container
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deltBtn);

    // Append button container to the li
    li.appendChild(buttonContainer);

    // Append li to the todoParent
    todoParent.appendChild(li);

    // Clear the input
    todoinput.value = "";
}

function delTodo(ele) {
    console.log("delTodo", ele.parentNode.parentNode);
    ele.parentNode.parentNode.remove();
}

function deleteAll() {
    var todoParent = document.getElementById("todoParent");
    todoParent.innerHTML = "";
}

function editBtn(ele) {
    var editVal = prompt("Enter value", ele.parentNode.parentNode.firstChild.nodeValue);
    console.log(editVal);
    ele.parentNode.parentNode.firstChild.nodeValue = editVal;
}







console.log("one"/2)