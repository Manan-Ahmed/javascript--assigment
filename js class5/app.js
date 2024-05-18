// let shopName = prompt('which shop is open');

// if (shopName === 'farhan') {
//     console.log('bring french fries')
// }
// else if (shopName === 'almadina') {
//     console.log('mje ande wala burger')
// }
// else if (shopName === ' ejazz') {
//     console.log('brinf 1 biryani')
// }
// else{
//     console.log('bring some thing to eat ');
// }




// let bodyfit = prompt('enter your bodyfit');

// if(bodyfit >= 40){
//     console.log('you are recommended for cardio');
// }
// else if (bodyfit >= 30) {
//     console.log('you are recommended for strenth');
// }
// else if (bodyfit >= 20) {
//     console.log('you are recommended for cardio + strenth');
// }
// else if (bodyfit < 20) {
//     console.log('you are recommended for crossfit');
// }













// let isMatriculation = confirm('Are you Matriculation');
// let score = +prompt('what was your entry test score?');



// if (isMatriculation && score >= 60 ) {
//     console.log('congrats you have got admission ');
// }


// let weight = prompt('enter your weight')
// let runnindTime = prompt('enter your time')
// let gender = prompt('enter your gender');
// let age = prompt('enter your age');

// if(weight >= 300 && runningTime <= 6 && gender === 'male' && age >= 30) {
//     console.log('you are eligible for our fitness club')
// }



// let availableFood = prompt('which food is available?');

// if(availableFood === 'french fries' || availableFood === 'burger') {
//     console.log('bring 1')
// }







// let city = prompt('what is your city');

// if(city === 'Karachi'){
//     console.log('welcome to city of light');
//     document.write('welcome to city of light');
//     alert ('welcome to city of light');
// }






// let gender = prompt('enter your gender');

// if(gender === 'male') console.log('Good morning sir') 
// else if (gender === 'female') {
//     console.log('Good Morning Maam')
// }


// let traficLight = prompt('which trafic light is on');

// if (traficLight === 'red') {
//     console.log('vehicles must stop');
// }
// else if (traficLight === 'yellow') {
//     console.log('vehicles should get ready to move');
// }
// else if (traficLight === 'green') {
//     console.log('vehicles can move now');
// }



// let areYouGraduate = confirm('Are you graduatr');
// let division = +prompt('what was your score');
// let sports = prompt('which sports do you play');

// if (( areYouGraduate && division >= 60) || sports ==='cricket') {
//     console.log('you are admission foe eligible');
// }



// let areYouGraduate = confirm('Are you graduatr');
// let sports = prompt('which sports do you play');

// if (confirm('areYougraduate?')  && +prompt('what was your score') >= 60) {

// }
// else if (prompt('which sports do you play?') === 'cricket') {

// }

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


// let chr = prompt('enter a character');

// if (
//     chr === 'a' ||
//     chr === 'e' ||
//     chr === 'i' ||
//     chr === 'o' ||
//      chr === 'u' ||
// )
// {
//     console.log()
// }






// let  areYouGraduate = confirm('Are you graduate');

// if (areYouGraduate) {

//     let faculty = prompt ('which faculty you were enrolld in? ');
//     if (faculty === 'engineer') {
//         console.log('you are appointed as Engineer')
//     }
//     else if (faculty === 'medical') {
//         console.log('you are appointed as Docter');
        
        
//     }
//     else if  (faculty === 'commmerce') {
//         console.log('you are interest in HR or accounts');
//         if (interest === 'HR') {
//             console.log('you are appointed as HR');
            
//         }
//     }
        
//         else if (faculty === 'accounts') {
//             console.log('you are appointed as Accountant');
            
//         }
//         else {
//             console.log('you are appointed as Accountant');
            
//         }
        
//          }
    




// let students = ["umair" , "anas" , "shayan"];

// console.log(students[2]);
// console.log(students[1]);


// let students = [];

// console.log(students);

// students[0] = "Ahmed";
// students[1] = "Umair";
// students[5] = "Aslam";

// console.log(students[3]);





// let fruits = ['apple', 'banana', 'orange']

//  console.log (fruits.length)
//  console.log (fruits.indexOf('watermalen'))
//  console.log(fruits.includes("watermelon"));




// let books = ('Deewan Ghalib', "Baal Jebreel", "Bhar Shriat")

// let userRequiredBook = prompt('which book do you want to read?');

// let bookIndex = books.indexOf(userRequiredBook);
// if(bookIndex > -1) {
//     console.log('your required book is indexed at ' + bookIndex)
// }
// else {
//     console.log('sorry your required book is unavailable.');
// }







let books = ['Deewan Ghalib', "Baal Jebreel","Bahar Shariat","Rich Dad Poor Dad" ];

let userRequiredBook = prompt('which book do you want to read?');
let bookIndex = books.indexOf(userRequiredBook);

if (bookIndex > -1) {
    console.log("Your required book is indexed at " + bookIndex)
}
else {
    console.log('Sorry your required book is unavailable.');
}












// let fruits = ['apple', 'banana', 'orange']

// // friuts.pop();
// // friuts.push('Kharboza')
// friuts.shift()
// friuts.unshift('mango' , 'pineapple')
// console.log(friuts)




// let fruits = ['apple', 'banana', 'orange' , 'mango', 'watermelon' ]

// // fruits.splice(1,0, 'Melon','Graps');
// fruits.splice(3,2, );



// console.log(fruits)


// let fruits = ['apple','banana','orange', 'mango','watermelon' ]

//  console.log(fruits.length)
//  console.log(fruits.indexOf('mango'))
//  console.log(fruits.includes('banana'))


// let fruits = ['appla', 'banana', 'mango', 'watermelon']

// console.log(fruits)

// fruits.splice(3,0,'stawbery')

// let fruits = ['appla', 'banana', 'mango', 'watermelon']


// fruits.pop()
// fruits.push('graps')

// fruits.shift()
// fruits.unshift('kharboza')



// let fruits = ['appla', 'banana', 'mango', 'watermelon']

// let favFruits = fruits.slice(1,3)
// console.log(favFruits)




// let cars = {"civic", "fortuner", "aqua" }

// console.log{cars[0]}
























































// let name = confirm('manan');
// console.log(name)
