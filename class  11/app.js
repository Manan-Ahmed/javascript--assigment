
// let userInput = +prompt("enter star count")

// for (i = 0;i < userInput; i++) {
//     let star = "*"

//     for (j = 0;j < i; j++) {
//         star += "*"
//     }
//     console.log(star)
// }





// let userInput = +prompt('enter star count'); //10

// for (let i = userInput; i >= 0; i--) {
//     let star = "*";
//     for (let j = 0; j < i; j++) {
//         star += "*";
//     }
//     console.log(star);
// }




// let  userInput = prompt("enter your count") 

// for (let i = 0;i < userInput; i++) {  
//     let star = "*"
//     for (let j = 0;j < i; j++) { 
//         star += "*"
//     }
//     console.log(star)
// }



// let userInput = prompt("enter your count")

// for (let i = userInput;i >= 0;i--) {   
//     let star = "*"

//     for (let j = 0;j < i;j++) {
//         star += "*";
//     }
//     console.log(star)
// }

 

// let userInput = +prompt('enter star count'); //10

// for (let i = userInput; i >= 0; i--) {
//     let star = "*";
//     for (let j = 0; j < i; j++) {
//         star += "*";
//     }
//     console.log(star);
// }












// let inpEl = document.querySelectorAll("input")

// let ulEl = document.querySelectorAll("ul")

// function showMsg () {
//     let usermsg = inpEl[0].value

//     if (usermsg !== "" && usermsg !== " ") {
//         ulEl[0].innerHTML += "<li>" + usermsg + "</li>"
//         inpEl[0].value = ""; 
//     }
// }




// let inputEl = document.querySelectorAll("input");
// let ulEl = document.querySelectorAll('ul');

// function showMsg() {
//     let userMsg = inputEl[0].value;
//     if (userMsg !== "" && userMsg !== " ") {
//         ulEl[0].innerHTML += "<li>" + userMsg + "</li>";
//         inputEl[0].value = "";
//     }
// }






let str = "the quick world war II brown fox jumps world war II over the lazy world war II dog.";


//  the second world war

for (let i = 0;i < str.length;i++) {
 let target = str.slice(i,i + 12)
 if (target === "world war II")
 str = str.slice(0,i) + "the second world war" + str.slice(i + 12)

}

console.log(str)






// let str = "the quick world war II brown fox jumps world war II over the lazy world war II dog.";


// str = str.replace(/world war II/g,"the second world war")


// console.log(str)





// let number = prompt("enter your number")

// for (let i = 0;i < number.length;i++) {
//     console.log(number)
// }