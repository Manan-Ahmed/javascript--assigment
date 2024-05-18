// let str = prompt('enter your text')

// for(let i =0;i < str.length;i++){
//     if (str.slice(i,i + 2) === " "){
//         console.log('no double space')
//         break
//     }
    
// }



// let text = " brown fox jumps over the lazy world war II brown fox jumps over fast"
// for (let i = 0;i < text.length;i++){
//     let targetTxt = text.slice(i,i + 12)
//     if (targetTxt === "world war II"){
//       text = text.slice(0, i) + "the second world war" + text.slice(i + 12) 
//     }
//     }

// console.log(text)


// let text = 'hello world'

// for (var i = 0; i < text.length; i++) {
//    if (text.charAt(i) === "!") {
//    alert("Exclamation point found!");
//    break;
//    }
  

//   }

  




// let str = 'hello world karachi'
// console.log(str.charAt(0))
// console.log(str.slice(0,1))

// console.log(str.charAt(5))



// let text = "brown fox jumps over the lazy world war II" 

// var firstChar = text.indexOf("World War II");
//  if (firstChar !== -1) {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }



// console.log(text)





// let text = "brown fox jumps over the lazy world war II " 

// let newText = text.indexOf("world war II")

// if (newText !== -1){
//   text =  text.slice(0,newText) + 'the second world war' + text.slice(i + 12) 
// }

// console.log(text)



// let num = Math.round(.000001)

// console.log(num)



// let num = Math.ceil( 1.00001 )

// console.log(num)



// let num = Math.floor( -.00009 )

// console.log(num)


// let num = Math.random() *  6 + 1

// console.log(num )

// let bigDecimal = Math.random();
//  let improvedNum = (bigDecimal * 6) + 1;
// let numberOfStars = Math.floor(improvedNum);


// console.log(numberOfStars)


// let num = prompt('enter your age')

// let current = parseInt(num) + 1

// console.log(typeof(current))

// let num = ("1.9999")
// console.log(parseInt(num))
// console.log(parseFloat(num))






// function  print(){
//      console.log('hello world')
// }
// print()
// print()
// print()


// function currentDat(){
//     console.log(new Date())
// }
// currentDat()



// function greetMsg(userName,msg){
//     console.log(`${msg} ${userName}`)
// }

//  greetMsg('haider' ,'hy')




// function greetUser(userName,msg){
//     console.log( `${msg} ${userName}!  `
//     )
// }

// greetUser('ali','hello')


// function addNum(num){
//      return num + num
// }

// let sum = addNum(2)

// console.log(sum)


// function calculater(num,operater,num2){
//     if (operater === "+") {
//         console.log(num + num2)
//     }
//     else if (operater === "-"){
//         console.log(num - num2)
//     }
//     else if (operater === "*"){
//         console.log(num * num2)
//     } else if (operater === "/"){
//         console.log(num / num)
//     } else if (operater === "%"){
//         console.log(num % num2)
//     }
// }


// calculater(+prompt("enter your number"),prompt('enter your operater'),+prompt("enter your number"))



// function square(num){
//     return num * num 
// }

// let sqr = square(2)

// console.log(sqr)


// function count(firstNum,lastNum){
//     for (let i = firstNum;i < lastNum;i++){
//           console.log(i)
//     }
// }

// count(1,9)



// function findHypo(base,perpen){
//     function findSquare(num) {
//         return num * num
//     }
//     let sqr = findSquare(2)
//     let leftSide = sqr * (base)
//     let rightSide = sqr * (perpen)

//     let perpendicular = (Math.sqrt(leftSide).toFixed() + Math.sqrt(rightSide).toFixed())
// return perpendicular
// }

// console.log(findHypo(5,3))






// function findHyp(base,perpend){
//      function sqr(num){
//         return num * num
//      }

//      let hyp2 = sqr(base) + sqr(perpend)
//      let findPerpendicular = Math.sqrt(hyp2)
//      console.log(findPerpendicular.toFixed(2))
// }


// findHyp(5,3)


// function largNum(){
//     // let sum = 0
//     let large = arguments[0]

//     for (let i = 0;i < arguments.length;i++){
//         if (arguments[i] > large) {
//            large = arguments[i]
//     }
    
//     }

  
//   let str = ` 
//   largestNum ${large}
//   `
// console.log(str)

// }

// largNum('1,3,5,2')





// function largNum(num){
//     let num1 = 0;
//     for (let i = 0;i < num.length;i++) {
//         if (num[i] > num) {
//             num1 = num[i]
//         }
//     }
// return num1
// }

// console.log(largNum(1,2,3,4,5))



// function area(w,h){
//      let multiply = w * h
//      return multiply
// }

// let answer = area(10,5)

// console.log(answer)



// let now = new Date()
// let str = now.toString()
// let day = now.getDay()
// console.log(now)

// console.log(str)



// let  dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// let now = new Date()

// let day = dayNames[now.getDay()]


// console.log(day)


// let now = new Date()

// let month = now.getMonth()
// let date = now.getDate()
// let year = now.getFullYear()
// let hours = now.getHours()
// let second = now.getSeconds()
// let minute = now.getMinutes()
// let milliSecond = now.getMilliseconds()
// let mili = now.getTime()

// console.log(month)
// console.log(date)
// console.log(year)
// console.log(hours)
// console.log(second)
// console.log(minute)
// console.log(milliSecond)
// console.log(mili)



// let today = new Date()
//  var doomsday = new Date("June 30, 2035");
//  var msToday = today.getTime();
//  var msDoomsday = doomsday.getTime();
//  var msDiff = msDoomsday - msToday;
//  var dDiff = msDiff / (1000 * 60 * 60 * 24);
// console.log(dDiff)


//  dDiff = Math.floor(dDiff);


//  var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
//  var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
//  var d = new Date("July 21, 1983 13:25:00");


// console.log(d)






// function tellTime() {
//      var now = new Date();
//     var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
//      }
    
//      tellTime()

// function showMessage(m, string, num){
//  alert(m + string + num);
// }

// var month = "March";
//  showMessage(month, "'s winner number is ", 23);



// function greetUser(){
//     console.log('hello world')
// }

// greetUser()


// function greetUser(greet){
//     alert(greet)
// }
// // let msg = "hy, user"
// greetUser('hy,user')








// function calcTot(merchTot) {
//      var orderTot;
//      if (merchTot >= 100) {
//      orderTot = merchTot;
//      }
//      else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//      }
//      else {
//      orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//      }

     
//     var totalToCharge = calcTot(79.99);
//     var totalToCharge = 85.00;
//     var totalToCharge = merchTotal;
//     var totalToCharge = merchTotal + ship + tax;
//     var totalToCharge = calcTot(79.99);


//     alert(calcTot(79.99));

//  return orderTot;
//     }
    
//     calcTot('55')



// function add(num){
//     let sum = num + num
//     return sum
// }

// console.log(add(2))


// let x =prompt('enter your text')
// let correctAnswer = 'vication'

// if(x === correctAnswer){
//     console.log('correct')
// }
// else if (x === 'room'){
//   alert('incorrect but close')
// }
// else{
//     alert('Incorrect')
// }




// let weight = prompt('enter your weight')
// let time  = prompt('enter your age')

// if (weight > 300 && time < 6){
//     alert('come to our tryout')
// }
// else {
//     alert('come to our cookout')
// }


// let age = prompt('enter your age')
// let res = prompt('enter your res')

// if (age < 65 || (age > 21 && res === 'US')) {
//     alert('you are apply')
// }
// else {
//     alert("sorry")
// }

// let age = prompt('enter your age')
// let res = prompt('enter your res')
// if ((age > 65 || age < 21) && res === "U.S.") {
//     alert('you are apply')
// }
// else {
//     alert("sorry")
// }






// let arr = ['apple','stawbery','mango']

// console.log(arr.unshift('water','melon','banana','ldk'))
// console.log(arr)









// let arr = ['apple','stawbery','mango']

// console.log(arr.splice(0,1,1))






// let fruits = ['apple', 'banana', 'oranges', "mango", "watermelon"];

// // fruits.splice(1, 0, "Melons", 'Grapes');
// fruits.splice(3, 2);

// console.log(fruits)

// let  fruits = ["Banana", "Orange", "Apple", "Mango"]

// console.log(fruits.splice(1,0,'graps'))

// console.log(fruits)






// let arr = prompt('enter your city')

// let cityCheck = 'karachi'


// let match = 'no'

// for(let i = 0;i < 1;i++){
//     if (arr === cityCheck){
//         match = 'yes'
//         console.log('karachi is cleaneast city')

//     }
//     else {
//         console.log('it is wrong')
//     }
      
    
// }

//

/*
hlmmm.mkmjj
*/

// let h = 'kil'

// function greet(el){
//     console.log('hello',el)
//     el.innerHTML = 'i love javascript'
// }

// let hEl = document.querySelectorAll('h1')

// greet(hEl[0])


// let inpEl = document.querySelectorAll('.box')

// inpEl[0].innerHTML = Range





// let str = 'Hello'

// let userName = prompt('enter your fullname')

// console.log(`${str} ${userName}`)

// console.log(userName.indexOf())



// let str = 'pakistani'

// let ind = str.indexOf('n')

// document.write(str + "</br>" +'index of' + 'n' + ind )





// let str = 'hyder Islam'

// for (let i = 0;i < 5;i++){
//     if(str.slice(i,i + 11) === 'hyder Islam') {
//         console.log(str.slice(0,0) + 'hyderabad Islamabad')
//     }
// }

// let str = 'hyder Islam'

// console.log(str.replace('hyder Islam','Islamabad Hyderabad'))




// let message = 'Ali and Sami are best friends. They play cricket and football together.'


// let text = message.replace(/and/g,'&')

// console.log(message)
// console.log(text)





// let str = '472'

// let typ = typeof str
// let num = Number(str)

// let typ2 = typeof num

// console.log(str + typ + num + typ2)



// let user = 'peanut'

// console.log(user.toUpperCase())
// console.log(user.toLowerCase())








// let num = 35.36
// let str = num.toString().replace('.','')

// console.log(str)











// let now = new Date()

// console.log(now.setFullYear(2015))

// let hours = now.setMonth(11)

// console.log(hours)















// let greet = 'hello'

// function dob(user){
//     consoele.log(user + greet)
// }

// let greet = 'hy'

// dob('haider')

// let num1 = 23

// function calculater(w,h){
//     return w * h;
// }
// calculater(console.log(2,23))
// let now = calculater(2,num1)


// console.log(now)

// let i = 0

// while (i <= 1) {
//     console.log(i)
//     i++
// }

let j = 1

do { 
    console.log(j)
    j++
}while(j <= 2)





// let num;
// console.log(num)

// function abc(num1,num2) {
//     return num1 * Number(num2)
// }

// let now = abc(3,5)
// console.log(now)




// let num = 10

// let n = 'hello world'

// console.log(n.slice(3))

// var d = new Date("July 21, 1983 15:25:00");
// var a = new Date("July 21, 1983 14:25:00");

// console.log(a < d)