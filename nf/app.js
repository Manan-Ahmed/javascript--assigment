// function creatStr(word1,word2) {
//     //    let chng = word2
//         for (let i = 0;i < word1.length;i++) {
//            console.log(...word1)
//         }
        
//     }
//     creatStr(['manan ahmed'],['-'])
    
    
    




// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi
// );
//   var result = array1[0];

//   for(var i = 1 ; i < array1.length; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('manan ahmed mansoori'));







// function findHypo(base,perpend){
//      function FindSq(num){
//        return num * num
//      }
//      let side1 = FindSq(base)
//      let side2 = FindSq(perpend)
//    let hypotenuse =  Math.sqrt(side1 + side2).toFixed(2)
//    return hypotenuse
// }

// console.log(findHypo(3,3))



// / function findUpper(text) {
    //     let arr = text.split(" ")
    
    //     for(let i = 0;i < arr.length;i++){
    //         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    //     }
    //    let word = arr.join(' ')
    //     return word
    // }
    // console.log(findUpper('hello world karachi'))
    
    // function calculate(now,birth){
    //     let diff = now - birth
    //     let age = diff / 1000 / 60 / 60 / 24 / 365
    //     return age
    // }
    
    // let day = calculate(new Date('20 november,2004'),new Date()).toFixed()
    
    // console.log(day)




// function addNum(num1,num2) {
//     let sum = num1 + num2
    
//     return sum;
// }

// // console.log(sum)
// let findSum = addNum(+prompt("enter your number"),+prompt("enter your number"))

// console.log(findSum)


// document.write(findSum)



// function findVolume(l,w,h) {
//     let lInMeter = l * 0.0254;
//     let wInMeter = w * 0.0254;
//     let hInMeter = h * 0.0254;

//     let calculatedValoume = lInMeter * wInMeter * hInMeter

//     return calculatedValoume.toFixed(2) + "m";
// }









// function findCube(num) {
//     console.log(num * num * num);
// }

// findCube(3);

// findCube(9);

// findCube(5);



// function displayMessage(userName, msg = 'How may I help you?') {
//     console.log(userName + " " + msg);
// }

// displayMessage("abdullah", "Assalamualaikum");

// displayMessage("Muzammil", "apni fees submit krwayen");

// displayMessage("Ahmed");



// let num1 = +prompt('enter your number')
// let num2 = +prompt('enter your number')
// let operate = prompt('enter your operate')



// function calculation(num1,operate,num2,){
// let calculate;

// if (operate === "+") {
//     calculate = num1 + num2
// }
// else if (operate === "-") {
//     calculate = num1 - num2

// }
// else if (operate === "*") {
//     calculate = num1 * num2

// }
// else if (operate === "/") {
//     calculate = num1 / num2

// }
// else if (operate === "%") {
//     calculate = num1 % num2

// }
// return calculate;
// }

// let num = calculation(+prompt('enter your number'),prompt('enter your operater'),+prompt('enter your number'))

// console.log(num)


// function square(arguments){
//     let findSquare = arguments * arguments * arguments
//     console.log(findSquare)
// }

// square(2,2,2)


// function counting(num1,num2){

//  for (let i = num1;i <= num2;i++) {
//     console.log(i)
//  }
//   return counting
// }

// counting(3,6)


// / function largestNum(num){
    //     let lNum = Math.max(num)
    //     console.log(lNum)
    //     return lNum
    // }
    
    // let pNum = largestNum((8,9,27,30))
    
    // document.write(pNum)
    





// let olEl = document.querySelectorAll("ol")
// function areaOFRectangle(w,h){
//    let multiplication = w * h
//    console.log(multiplication)
//    return multiplication
// }

// let findArea = areaOFRectangle(3,8)

// olEl[0].innerHTML = "<li>" + 'area of Rectengale' + findArea + "</li>"
// function rewerse(num) {
//     for (let i = num.length;i < 0;i--) {
//         console.log(i)
//     }
// }


// rewerse(4395)



// let num = '9345'
// let rewNum = ''

// for (let i = num.length; i >= 0;i--) {
//      rewNum +=  num[i]
// }

// console.log(rewNum)



// function palandrom(word) {
//     let findPalan = word.split('').reverse().join('')
//     // console.log(findPalan)

//     if (word === findPalan) {
//         console.log('word is palandrom')
//     }
//     else {
//         console.log('word is not palandrom')
//     }
// }

// palandrom(prompt('enter your word'))






    // function creatArr(word){
    //     let arr =[]
    //    for(let i = 0;i < word.length;i++){
    //     arr.push(word[i])
    //    }
    // return arr
    // }
    // let text = creatArr('hello','and')
    











    // console.log(text)
    
    



//      var user1 = "haider";
// var user2 = 'abdullah';

// function replaceName() {
//     user1 = 'muzammil';
//     user2 = 'ahmed';
//     var user3 = 'Nasir';

//     console.log(user1, user2, user3); // muzammil ahmed
// }

// console.log(user1, user2); // haider abdullah
// replaceName();
// console.log(user1, user2); // haider ahmed






// let user = 'Akram';

// function replaceName() {
//     // let user;
//     if (true) {
//         let user = 'Aslam';
//     }
//     console.log(user);
// }

// replaceName();






// let theSum;
// console.log(theSum);

// function addNumbers() {
//     theSum = 2 + 2;
// }

// addNumbers();

// console.log(theSum, anotherSum)





// const greet = 'Assalamualaikum! How may I help you?';

// const url = "https://www.google.com";

// const userName = "haider";





// let studentName = "Sameed";
// let rollNumber = 2643;
// let fee = 500;
// let subjects = ["HTML", "CSS", "JavaScript"];



// let student = {
//     studentName: "Manan Ahmed",
//     RollNo: 6345,
//     Fee: 500,
//     Subject: ["HTML", "CSS", "JavaScript"],
//     calculateAge: function (){
//         console.log('19 years,old')
//     }
// }

// console.log(student.studentName)
// console.log(student.RollNo)
// console.log(student.Fee)
// console.log(student.Subject)
// student.calculateAge()

// student.Fee = 700
// student.Subject[3] = ('nextjs')



// console.log(student)

































let creatBook = {
    bookName: "Bahar Shariat",
    author:   "Mufti Amjad Ali Azmi",
    pages:    9000,
    topic:    "Islamic",
    indexBook: function (bookName,author,pages,topic){
         bookName = 'Bahar Shariat'
         author ="Mufti Amjad Ali Azmi"
         pages = 9000
         topic = "Islamic"
    }
}


console.log(creatBook)

creatBook.indexBook()






