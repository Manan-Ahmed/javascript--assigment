// function sum(num1,num2){
//     console.log(num1 + num2)
// }


// function greetUser(userName,msg){
//     console.log( `${msg} ${userName}!  `
//     )
// }


// function doasDirect(a,b,callback){
//     callback(a,b)
// }

// doasDirect(1,5,sum)
// doasDirect(3,9,sum)
// doasDirect('abdullah','eid mubarak',greetUser)


// function subtract(num1,num2){
//       console.log(num1 - num2)
// }

// function doasDirect(a,b,callback){
//     callback(a,b)
// }
// doasDirect(5,3,subtract)


// function displayMsg(str){
//     console.log(str)
// }


// function findOddNm(num,printMsg){
//     if (num%2 === 0){
//         printMsg(num + 'is even number')
//     }
//     else {
//         printMsg(num + 'is odd number')
//     }
// }
// findOddNm(4,displayMsg)





// let authEl = document.querySelectorAll('.auth-msg')

// function authSuccess(){
//    authEl[0].innerHTML = ` 
   
//    <h4 class = 'success'>you are successfully authenticate </h4>
//    `   
// }



// function authFailure(){
//     authEl[0].innerHTML   = ` 
   
//     <h4 class='fail'>Incorrect email or password.</h4>
//     `;
// }


// let users = [
//     {
//         email: 'mananahmed@gmail.com',
//         password: 123456
//     },

//     {
//         email: 'ali@gmail.com',
//         password: 34567
//     }
// ]
    

// function login(email,password,success,failure){
//     let isAuthenticat = false;
//     for(let i =0;i < users.length;i++){
//         let user = users[i]
//     if (user.email === email && user.password === password){
//        isAuthenticat = true;
//        break
//     }
// }


// if (isAuthenticat){
//          success()
// }
// else{
//     failure()
// }
// }

// login ('mananahmed@gmail.com',123456,authSuccess,authFailure)
// // login ('ali@gmail.com',123,authSuccess,authFailure)



// function multiply(num1,num2){
//  console.log(num1 * num2)
// }


// function add(num1,num2){
//     console.log(num1 + num2)
//    }
   
//    function subtract(num1,num2){
//     console.log(num1 - num2)
//    }
   
   
//    function divide(num1,num2){
//     console.log(num1 / num2)
//    }
   
//    function mode(num1,num2){
//     console.log(num1 % num2)
//    }
   
      


// function doasDirect(a,b,callback){
//        callback(a,b)
// }

// doasDirect(2,4,multiply)
// doasDirect(5,4,add)
// doasDirect(10,4,subtract)
// doasDirect(8,4,divide)
// doasDirect(3,4,mode)


let msgEl = document.querySelectorAll(".auth-msg")

function authSuccess(){
    msgEl[0].innerHTML = `
    <h4 class = 'success'>you are successfully authenticate </h4>
    ` 
}

function authFailure(){
    msgEl[0].innerHTML = `
        <h4 class='fail'>Incorrect email or password.</h4>

    ` 
}


let users = [
    {
        email:'mananahmed@gmail.com',
        pasword:'123345'
    },

    {
        email:'ali@gmail.com',
        pasword:'12334'
    }


]
    
function login(email,password,success,fail){
    let isAuthenticat = false;
    for (let i = 0;i < users.length;i++){
        let user = users[i]
        if (user.email === email && user.pasword === password){
             isAuthenticat = true;
        }
        break
    }
    if(isAuthenticat){
        success()
    }
else{
    fail()
}
}



login('mananahmed@gmail.com',123345,authSuccess,authFailure )
login('ali@gmail.com',12334,authSuccess,authFailure )



// let inputEl = document.querySelectorAll('input');

// function showMessage() {
//     let text = inputEl[0].value;
//     inputEl[0].value = "";


