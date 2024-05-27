let addTodoEl = document.querySelectorAll("input")


let divEl = document.createElement("DIV")
let bodyEl = document.querySelectorAll("body")[0]

bodyEl.insertBefore(divEl,bodyEl.childNodes[4])

console.log(bodyEl)


function add(){
    printAllTodo()
    addTodoEl[0].value = ''

}

function printAllTodo(){
    let pEl = document.createElement('P')
    let textNode = document.createTextNode(addTodoEl[0].value)
    pEl.appendChild(textNode)

    let btnEl = document.createElement("BUTTON")
    btnEl.setAttribute("onclick","Edit(this)")
    
    let dbtnEl = document.createElement("BUTTON")
    dbtnEl.setAttribute("onclick","Delete(this)")
    
     let editText =document.createTextNode('edit')
 
    let space1 = document.createTextNode(' ')

    let deleteText = document.createTextNode('Delete')

    let br = document.createElement("br")
 
    divEl.appendChild(pEl)
    btnEl.appendChild(editText)  
    dbtnEl.appendChild(deleteText)  


    pEl.appendChild(btnEl)
    pEl.appendChild(space1)
    pEl.appendChild(dbtnEl)
pEl.appendChild(br)

    divEl.appendChild(pEl)
}




function Delete(index){
  divEl.removeChild(index.parentElement)
}



let addTodoDiv = document.querySelectorAll(".add-todo")

let  editTodo = document.querySelectorAll("#sec-con")

let editInput = document.querySelectorAll("#edit-input")








function Edit(index){
    toggleTodo()
  editInput.value = index.parentElement.childNodes[0].nodeName
//   addTodoDiv.className = 'hide'
//  editTodo.className = ''   
}






let isChange = false;

function toggleTodo(){
    if (isChange){
        addTodoDiv.className = ''
        editTodo.className = 'hide'   

    }
    else {
        addTodoDiv.className = 'hide'
        editTodo.className = ''   

    }
    isChange = !isChange
}