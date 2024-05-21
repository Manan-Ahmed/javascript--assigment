let inpEl = document.querySelectorAll(".input")
let divEl = document.querySelectorAll("div")
let btnEl = document.querySelectorAll(".btn-1")
let arr = []

function add(){
    let newTodo =  inpEl[0].value 
    arr.push(newTodo)
    printAllTodo()
    inpEl[0].value = ''
}

function printAllTodo(){
    divEl[0].innerHTML = ''
    for(let i =0;i < arr.length;i++){
   divEl[0].innerHTML += `
   <p id="box-${i}">
   ${arr[i]}
    <button onclick="deleteTodo(${i})">Delete</button>
    <button onclick="editTodo(${i})">Edit</button>

   </p>`
    
}
}




function deleteTodo(index){
arr.splice(index,1)
printAllTodo()
}


function editTodo(index){
    btnEl[0].innerHTML = `save`
    let newTodo = inpEl[0].value
    arr.splice(index,0,newTodo)
    printAllTodo()

}



// function saveTodo(index){
//        let newTodo = inpEl[0].value
//     arr.splice(index,0,newTodo)
//     printAllTodo()
// }