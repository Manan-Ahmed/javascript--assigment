// let num = "223222299";

// let modNum = ""

// for (let i = 0;i < num.length;i++) {
//     if (num[i] % 2 !==0 && i !== 0) {
//         modNum += "-" + num[i]
//     }
//     else (modNum += num[i])
// }

// console.log(modNum)


// let word = prompt("enter your word")

// let revWord = word.split("").reverse().join("");

// if (word === revWord) {
//     console.log("it s palandrom word")

// }
// else if (word !== revWord) {
//     console.log("it s not palandrom word")

// } 


// let num = "233677899"

// let num2 = ""

// for (let i = 0;i < num.length;i++) {
//     if (num[i] % 2 ) { 
//      num2 += "-" + num[i]
//     }
//     else (num2 += num[i])
// }

// console.log(num2)


//   q 1

// let firstName = prompt("enter your first name")

// let lastName = prompt("enter your last name")

// let fullName = "assalamoalaikum" + firstName + lastName

// console.log(fullName)


//   q 2


// let mobileModel = prompt("enter your favorite mobile model")

// let num = mobileModel.length

// document.write ("<p>" + "my favorite phone is :" + " " + mobileModel + "</p>" )

// document.write("<p>" + "length of string" + num +"</p>")


//   q 3


// let country = "pakistani"

//  country.indexOf()

// console.log( country.indexOf("n"))

//   q 4

// function index (word,chr) {
//     let lowerWord = word.toLowerCase()
//     let lowerChr = chr.toLowerCase()

//     let lastIndex = lowerWord.lastIndexOf(lowerChr)

//     console.log(lastIndex)
// }

// index("hello world","l")


//   q 5

// let h1El = document.querySelectorAll("h1")
// function index (word,num) {
//     let text = word.charAt(num)
//    document.write( h1El[0].innerhtml = "string" + " " + word + "<br>" + "character at index" + num)
// }


// index("pakistan",3)



//   q 7

// function cityName(text,word) {

// let city = text.replace(text,word)

// document.write("city" + " " +  text + "<br>")

// document.write("After Replacement" + " " +  word)


// }

// cityName("hyderabad","Islamabad")


//   q 8


// let text = "Ali and Sami are best friend,They play cricket and football together"

// let repText = text.replace(/and/g,"&")

// document.write("<h1>" + "Message" + text + "</h1>" + "<br>")

// document.write("<h1>" + "After replace" + repText + "<h1>")

//   q 9


// let string = "472"

// document.write("value" +" " + string + "<br>")
// document.write("type" + " " +"string "+ "<br>")


// let num = Number(string)

// document.write("value" +" " + num + "<br>")
// document.write("value" + " " + "number"+ "<br>")



//   q 10

// let userUrl = prompt("enter your url")

// let userDomain = prompt("enter your domain")


// document.write("url" + userUrl+ " " + "<br>")

// document.write("Domain" + userDomain+ " " + "<br>")


//   q 11

// let text = prompt("enter your text")

// let upperCase = text.toUpperCase()

// document.write("")




//   q 12

// let userText = prompt("enter yout text")

// let lowText = userText.toLowerCase()


// document.write("LowerCase :" + " " + lowText )



//   q 13

// function tittleCase(text) {
//     let fWord = text.slice(0,1).toUpperCase()
//     let sWord = text.slice(1).toLowerCase()
//     let changeCase = fWord + sWord;

//     document.write("TittleCase:" + changeCase)
// }

// tittleCase(prompt("enter your text"))

//   q 14


// let num = prompt("enter your number")


//   q 15


// let a = prompt("enter your number") 
// let b = prompt("enter your number")

// let rezult = a + b

// document.write("a" + " is " + a + "<br>")
// document.write("b" + " is " + b + "<br>")
// document.write("a" +  "+" +" b " + "is" + rezult )



//   q 16


// let a = prompt("enter your number") 
// let b = prompt("enter your number")

// let rezult = a - b

// document.write("a" + " is " + a + "<br>")
// document.write("b" + " is " + b + "<br>")
// document.write("a" +  "-" +" b " + "is" + rezult )

//   q 17


//   q 18

// let bakeryItem = ["cake","applepie","cookie","chips","patties"]


// let user = prompt("please enter your bakery item")

// let num = bakeryItem.indexOf(user)

// if (num !== -1) {

//     document.write(user + " " + "is" + " " + "available" + " " +  " at  index" + " " + num +  " " + "in our bakery")

// }
// else if(num === -1) {
//     let num = bakeryItem.indexOf(user)

//   document.write("<p>we are sorry user is not available </p>")
// }








// let user = prompt("enter your text")

// let chang = user.split()


// for (let i = 0;i < user.length;i++) [
//     console.log(user[i])

// ]


// let text = prompt("enter your text")

// let find = text.charAt(7)

// console.log(find)



















// let str = prompt("enter your number")

// let num = str.toString()

// let roun = Math.round(str)

// let ceil = Math.ceil(str)

// let floor = Math.floor(str)

// document.write("num :" + num + "<br>" )
// document.write("round of value :" + roun + "<br>" )
// document.write("ceil value :" + ceil + "<br>" )
// document.write("floor value :" + floor + "<br>" )



// let str = prompt("enter your negative number")

// let num = str.toString()

// let roun = Math.round(str)

// let ceil = Math.ceil(str)

// let floor = Math.floor(str)

// document.write("num :" + num + "<br>" )
// document.write("round of value :" + roun + "<br>" )
// document.write("ceil value :" + ceil + "<br>" )
// document.write("floor value :" + floor + "<br>" )





// let num = prompt("enter your positive integers")

// let round = Math.round(num)

// let ceil = Math.ceil(num)
// let floor = Math.floor(num)


// document.write("num" + num + "<br>")
// document.write("round value" + round + "<br>")
// document.write("ceil value" + ceil + "<br>")
// document.write("floor value" + floor + "<br>")


// let num = prompt("enter your negative integers")

// let round = Math.round(num)

// let ceil = Math.ceil(num)
// let floor = Math.floor(num)


// document.write("num" + num + "<br>")
// document.write("round value" + round + "<br>")
// document.write("ceil value" + ceil + "<br>")
// document.write("floor value" + floor + "<br>")




// let random1 = Math.ceil(Math.random() * 4)

// document.write("random dice value" + random1)

// console.log(random1)



// let random2 = Math.ceil(Math.random() * 6)
// document.write("random dice value" + random2)

// console.log(random2)




// let random = Math.ceil(Math.random() * 2)

// if (random === 1) {
//     document.write(random + "<br>" +"random coin value:" + "Heads")
// }
// else if (random === 2) {
//     document.write(random + "<br>" +"random coin value:" + "Tails")
// }








// let random = Math.ceil(Math.random() * 99)

// document.write("random number between 1 and 100:" + random)





// let user = prompt("enter your weight kilograms")

// document.write("The weight of user is" + user + "kilograms" )





// let user = prompt("enter a number 1 to 10") 

// let random = Math.ceil(Math.random() * 10)
// console.log(random)

// if (user === random) {
//     console.log("congratulation")
// }
// else if (user !== random) {
//     console.log("try again")
// }




// let now = new Date()

// console.log(now)

// let mon = ['jan','feb','mar','april','may']

// let month = now.getMonth()

// console.log(mon[month])




// let now = new Date()

// console.log(now)

// let days = ['sun','mon','tue','wed','thr','fri','sat']

// let day = now.getDay()

// console.log(day)
// console.log("Today is "+ days[day])




// let now = new Date()

// console.log(now)

// let days = ['sun','sat']

// let day = now.getDay()

// let d = (days[day])

// console.log("its funday")


// let now = new Date()

// console.log(now)

// let millisec = now.getTime()

// console.log(millisec / 1000 / 60)


// let now = new Date()

// console.log(now)

// let date = now.getDate()

// console.log(date)

// if (date < 16) {
//     console.log("first fifteen days of month")
// } 
// else if (date <= 31) {
//     console.log("last days of month")
// }



// let now = new Date("december 31,2020")

// console.log(now)
// let days = ['sun','mon','tue','wed','thr','fri','sat']


// let lastDate = now.getDay()

// console.log(days[lastDate])





// let now = new Date ("june 18,2015")

// let currentDate  = new Date ()

// let diff = now - currentDate

// console.log(diff / 1000 / 60 / 60 / 24 / 30)




let now = new Date ()

let futDate = new Date ("november 20,2030")

let diff = now.getTime() - futDate.getDate()

let date = diff / (1000 * 60 * 60 * 24)


console.log(Math.floor(date))


// let num1 = '23347789933';

// // let num1 = num.toString()



// let mod = ""

// for (let i = 0;i < num1.length;i++) {
//     if (num1[i] % 2 !== 0 ) {
//         mod += "-" + num1[i]
//     }
//     else (mod += num1[i])
// }

// console.log(mod)


// let arr = [11,13]

// for(let i = 0;i < arr.length;i++) {
//     console.log(arr[i] + 1)
// }




// let now = new Date()

// console.log(now)