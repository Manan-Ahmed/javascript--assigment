// let inpEl = document.querySelectorAll(".inp")[0]


// let divEl = document.createElement("DIV")

// let bodyEle = document.querySelectorAll('body')[0]


//  bodyEle.insertBefore(divEl,bodyEle.childNodes[4])


// // let todo = document.querySelectorAll('.todo-list')

// console.log(bodyEle)

// function add(){
// printAllTodo()
// inpEl.value = ''
// }

// function  printAllTodo(){
//    let pTodo = document.createElement("P")
//    let newTodo = document.createTextNode(inpEl.value)
//    let edBtn = document.createElement('BUTTON')
//    let dBtn = document.createElement('BUTTON')
//    edBtn.setAttribute('onclick' , 'edit(this)')
//    dBtn.setAttribute('onclick', 'delet(this)')
//    let editText = document.createTextNode('edit')
//    let deleteText = document.createTextNode('delete')
//   //  let  br1 = document.createElement('br')
//   //  let  br2 = document.createElement('br')
// //   let space = document.createTextNode(' ')
  

// edBtn.appendChild(editText)
// dBtn.appendChild(deleteText)

//    divEl.appendChild(pTodo)
//    pTodo.appendChild(newTodo)
//    pTodo.appendChild(edBtn)
//    pTodo.appendChild(dBtn)
// }

// function delet(index){
//    divEl.removeChild(index.parentElement)
  

// }



//  let addTodoDiv = document.querySelectorAll("#add-todo-container")[0]
//  let editTodoDiv = document.querySelectorAll("#edit-todo-container")[0]
//  let  editInput  = document.querySelectorAll(".edit-todo-input")[0]

//  let editIndex;

// function edit(index){
//    if(isChange){
//   errorMessage()
//    }
//    else{
//  editInput.value = index.parentElement.childNodes[0].nodeValue

//  editIndex = index
//  toggleTodo()
//  console.log(editIndex)
//    }
// }


// function updateTodo(){
//    let text = document.createTextNode(editInput.value)
//    let pTodo = editIndex.parentElement
//    pTodo.removeChild(editIndex.parentElement.childNodes[0])
//  pTodo.insertBefore(text,editIndex.parentElement.childNodes[0])
//    // editTodoDiv.className = 'hide'
//    // addTodoDiv.className = ' '

// toggleTodo()
//    }



// let isChange = false
// function toggleTodo(){
//    if (isChange) {
//       addTodoDiv.className = ''
//       editTodoDiv.className = 'hide'
//    }
//    else {
//       addTodoDiv.className = 'hide'
//       editTodoDiv.className = ''
//    }
//    isChange = !isChange

// }






// function errorMessage(){
//    let msgEl = document.querySelectorAll(".error-msg")

//    msgEl[0].innerHTML = 'please save your current todo'
// }






let inpEl = document.querySelectorAll("input")[0]

let divEl = document.createElement('DIV')

let bodyEl = document.querySelectorAll("body")[0]

bodyEl.insertBefore(divEl,bodyEl.childNodes[6])

console.log(bodyEl)

// divEl.className = 'display'


function add(){
   printAllTodo()
inpEl.value = ''

}



function printAllTodo() {
   let pEl = document.createElement("P")
  let textNode = document.createTextNode(inpEl.value)
let btn1 =  document.createElement("BUTTON")
 btn1.setAttribute("onclick","edit(this)")
 let editText = document.createTextNode('edit')
let btn2 =  document.createElement("BUTTON")
btn2.setAttribute("onclick", "delet(this)")
let deleteText = document.createTextNode('delete')
pEl.setAttribute('class','display')
pEl.appendChild(textNode)
divEl.appendChild(pEl)
btn1.appendChild(editText)
btn2.appendChild(deleteText)
pEl.appendChild(btn1)
pEl.appendChild(btn2)


}




function delet(index) {
   divEl.removeChild(index.parentElement)
}


let addTodoDiv = document.querySelectorAll("#add-todo-container")[0]
let editTodoDiv = document.querySelectorAll('#edit-todo-container')[0]
let editInput = document.querySelectorAll(".edit-todo-input")[0]


let editIndex;
function edit(index){
   if(editIndex) {
      erroeMsg()
   }
editInput.value = index.parentElement.childNodes[0].nodeValue
addTodoDiv.className = 'hide'
editTodoDiv.className = ''
editIndex = index

}

function updateTodo(){
 let pTodo = editIndex.parentElement
 let textNode = document.createTextNode(editInput.value)

 pTodo.removeChild(editIndex.parentElement.childNodes[0])   
   pTodo.insertBefore(textNode,editIndex.parentElement.childNodes[0])
   // divEl.appendChild(textNode)
   editTodoDiv.className = 'hide'
   addTodoDiv.className = ''

}



function erroeMsg(){
   let errorEl = document.querySelectorAll(".error-msg")[0]
    let msg1 = "please edit your current Todo"
    errorEl.className = 'error'
let msg = document.createTextNode(msg1)
errorEl.appendChild(msg)

}