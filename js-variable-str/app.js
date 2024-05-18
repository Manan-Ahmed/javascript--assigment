//   q  9


// let userName = 'ali';

// let age = '17';

// let study = 'bscs';

// let  skills = 'mobile and cloud computing';

// console.log( userName + study + age + skills ) 


// let visitorName = prompt('enter your visitor name')

// let order = prompt('enter your oder');

// let productStiyle = prompt('enter your product title');

// console.log(visitorName + order + productStiyle)





// let color = prompt('enter your color');

// if (color === 'red') {
//     console.log('must stop')
// }
// else if (color === 'green') {
//     console.log('ready to move')

// }
// else if (color === 'orange') {
//     console.log('move now')

// }


// let a = 4;

// if (++a === 5) {
//     alert("given condition for variable a is true");
// }


//  let b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }





// let totalMarks = +prompt('enter your total marks');

// let obtainedMarks = +prompt('enter your obtained marks');


// let percentage =  obtainedMarks / totalMarks * 100;


// document.write('<h1>' + 'Mark Sheet'  + '</h1>' + '<br />')

// document.write('<p> Total Marks:' + totalMarks + '</p>'  )

// document.write('<p>  obtained marks:' + obtainedMarks + '</p>'  )

// document.write('<p> percentage' + percentage + '</p>' )



// if (percentage >= 80) {
//     document.write('<p> Grade: A-1 </p> ')
//     document.write('<p> Remarks: Excellent </p>')

// }
// else if (percentage >= 70) {
//     document.write('<p> Grade: A-1 </p> ')
//     document.write('<p> Remarks: Excellent </p>')


// }
// else if (percentage >= 60) {
//     document.write('<p> Grade: A-1 </p> ')
//     document.write('<p> Remarks: Excellent </p>')


// }

// else if (percentage < 60) {
//     document.write('<p> Grade: A-1 </p> ')
//     document.write('<p> Remarks: Excellent </p>')

// }


// q   9

// let userNum = prompt('enter your number')

// if (userNum  % 2) {
//       console.log(' odd number')
// }
// else console.log('even number')


// q  10

// let temp = prompt('enter your temprature')

// if (temp > 40) {
//    console.log('It is too hot outside')
// }
// else if (temp > 30) {
//     console .log('The Weather today is Normal.')
// }
// else if (temp > 20) {
//     console .log('Todays Weather is cool.')
// }
// else if (temp > 10) {
//     console .log('OMG! Todays weather is so Cool.')
// }






// let num1 = +prompt('enter your number')
// let operat = prompt ('enter your operat')

// let num2 = +prompt('enter your number')

// if (operat == '*') {
//      console.log( num1   *    num2 )
// }
// else if (operat === '+') {
//     console.log( num1   +    num2 )
// }

// else if (operat === '-') {
//     console.log( num1   -   num2 )

// // }

// // else if (operat === '%') {
// //     console.log( num1   %    num2 )

// }
// else if (operat === '/') {
//     console.log( num1  /  num2 )

// }







// chp   statement  


// q    5

// let num = prompt('enter your number')

// if (num === '0') {
//     console.log('your number is negative')
// }
// else  (console.log('your number is positive') )



// let password = prompt('enter your password')

// let confpassword = prompt('enter your confirm password')


// if (password === confpassword) {
//     console.log('correct! the password')
// }



// let time = prompt('enter your time')

// if (time >= 0000 && time < 1200) {
//     console.log('good morning')
// }
// else if (time >= 1200 && time < 1700) {
//     console.log('good afternoon')

// }
// else if (time >= 1700 && time < 2100) {
//     console.log('good evening')

// }
// else if (time >= 2100 && time < 235900) {
//     console.log('good night')

// }


// chp array


// let education = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil", "PhD"]

// document.write("<h1> Qualiufication </h1>")
// let index = 0;

// document.write("<ol>")

// document.write ("<li>" + education[index++] + "<li>");
// document.write ("<li>" + education[index++]  + "<li>");
// document.write ("<li>" + education[index++]  + "<li>");
// document.write ("<li>" + education[index++]  + "<li>");
// document.write ("<li>" + education[index++]  + "<li>");
// document.write ("<li>" + education[index++]  + "<li>");
// document.write ("<li>" + education[index++]  + "<li>");
// document.write ("<li>" + education[index++]  + "<li>");


// document.write("</ol>")




// document.write("<h3>Qualifications:</h3>");
// let qualifications = ['SSC', "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "Ph.D"];
// let index = 0;
// document.write("<ol>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("</ol>");


// let totalNum = 500;
// let userName = ['manan','ahmed','shayan']

// let score = [320,220,480]

// let percentage1 = score[0]  / totalNum * 100;
// let percentage2 = score[1]  / totalNum * 100;
// let percentage3 = score[2]  / totalNum * 100;


// document.write('score of '+ userName[0] +  'is' +  score[0] +  'percentage' + percentage1 + '<br />'  )

// document.write('score of '+ userName[1] +  'is' +  score[1] +  'percentage' + percentage2 + '<br />')
// document.write('score of '+ userName[2] +  'is' +  score[2] +  'percentage' + percentage3 + '<br />')



// let cities = ['karachi','peshawar','quetta','islamabad','sukkuhr']

// // console.log(cities.length -1)

// console.log(cities.slice(2,4))



// let arr = ['this','is','my','cat'];

// console.log(arr.join())


// let device = ['keyboard','mouse','printer','moniter'];

// document.write("<h1>Device</h1>")
// document.write(device)

// document.write('<p> out:</p>')
// document.write(device[0])


// document.write('<p> out:</p>')
// document.write(device[1])

// document.write('<p> out:</p>')
// document.write(device[2])

// document.write('<p> out:</p>')
// document.write(device[3])








// let num1 = [0,1,2,3]
// let num2 = [1,0,1,2]
// let num3 = [2,1,0,1]

// document.write(...num1 + '<br />')
// document.write(...num2 + '<br />')
// document.write(...num3 + '<br />')




// chp loops

// for (let i = 1;i < 11; i++) {
//    console.log((i))
// }



// let table = prompt('enter your number');

// for (let i = 1;i < 11;i++) {
//     document.write("<h1>" + table + "x" + i + "=" + table * i + "</h1>")
// }



// let deviceName = ['nokia','samsung','apple','sony','huawei']

// for (let i = 1;i < deviceName.length;i++) {
//     console.log(deviceName[i])






// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];



// document.write(...matrix[0] + "<br />")
// document.write(...matrix[1] + "<br />")
// document.write(...matrix[2] + "<br />")



// let totalMarks = +prompt('totalMarks')
// let obtaintMarks = +prompt('obtaintMarks')

// let percentage = obtaintMarks / totalMarks * 100

// document.write('<h1>MarkSheet</h1> <br />  <br />')

// document.write('<p> TotalMarks:  ' + totalMarks + "</p>" )
// document.write('<p> ObtaintMarks:  ' + obtaintMarks + "</p>"  )
// document.write('<p> Percentage:  ' + percentage + "</p>"  )


// if (percentage >= 80) {
//     document.write('<p> Grade: A-1 </p> ')
//     document.write('<p> Remarks: Excellant </p> ')
// }
// else if (percentage >= 70) {
//     document.write('<p> Grade:A </p> ')
//     document.write('<p> Remarks: Good </p> ')
// }
// else if (percentage >= 60) {
//     document.write('<p> Grade:B </p> ')
//     document.write('<p> Remarks: You need to improve </p> ')
// }
// else if (percentage < 60) {
//     document.write('<p> Grade:Failed </p> ')
//     document.write('<p> Remarks:Try again</p> ')
// }



// let tableNum = prompt("enter your number")

// let tableLen = prompt("enter your table length")

// for (let i = 1;i <= tableLen; i++) {
//     console.log(tableNum + "x" + i + "=" + (tableNum * i))
// }


//  [24,50.68,90]

// console.log(Math.min (24,50.68,90)) 


// for (let i = 1;i <=20;i++) {
//     console.log(i * 5)
// }


// let num = [12,45,3,22,34, 50]

// let userNum = +prompt("enter your number")

// for (let i = 0;i < num.length; i++) {
//     console.log(num[i])
//   if (num[i] === userNum) {
//        break;
//   }
// }



let userName = ['manan','ahmed','salman','ali']
let scores = [23,45,67,89]

for (let i = 0;i < userName.length;i++) {
    console.log(userName[i])
    console.log(scores[i])
}



// let scores = [12, 45, 3, 22, 34, 50];
// let stopNum = +prompt("enter a number");

// for (let i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
//     if (scores[i] === stopNum) {
//         break;
//     }
// }




