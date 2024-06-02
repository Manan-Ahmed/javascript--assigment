
// let plan1 = {
//     planName: "fat loss",
//     excercises: "strength training",
//     fee: 2000,
//     admissionFee: 1000,
//     isAirconditioned: false,
//     calculateBill: function (noOfMonths) {
//         let totalBill = (this.fee * noOfMonths) + this.admissionFee;
//         if (noOfMonths >= 3) {
//             totalBill = totalBill / 100 * 80;
//         }
//         console.log(totalBill);
//     }
// }

// let excercises = 'planName'

// console.log(plan1.excercises)
// console.log(plan1["excercises"])
// console.log(plan1[excercises])
// console.log(plan1.planName)
// console.log(plan1.excercises)
// console.log(plan1.fee)
// plan1.calculateBill(6)
// console.log(plan1.planName);
// plan1.calculateBill(4);
// plan1.calculateBill(2);


// let excercises = "planName";
// console.log(plan1.excercises); // strength training
// console.log(plan1["excercises"]);// strength training
// console.log(plan1[excercises]); // fat loss







// let allkeys = Object.keys(plan1);
// let allValues = Object.values(plan1)
// console.log(allkeys, allValues);


// for (let prop in plan1) {
//     console.log(plan1.prop);
//     console.log(prop, ":", plan1[prop]);
// }







// let user = {
//     userName: 'haider',
//     haider: 'he is a full stack engineer'

// }

// let userName = 'haider'
// // console.log(userName)
// console.log(user.userName)// username ki value print krdi
// console.log(user['userName'])
// console.log(user[userName])


// // console.log(user.userName)
// console.log(user["userName"]); // "haider"
// console.log(user[userName]); //




















// let user = {
//     userName: 'haider',
//     haider: `He is a full stack engineer and trainer.`,
//     isMarried: true,
// }

// for (let prop in user) {
//     user[prop] = prompt(`Enter a new value for key ${prop}`);


// let obj = {
//     [prop]: user[prop]
// }
// console.log(obj);
// }

// console.log(user);




// let user = {
//     userName: 'haider',
//     haider: `He is a full stack engineer and trainer.`,
//     isMarried: true,
// }


// for (let prop in user) {
//     prompt(`enter a value for key ${prop}`)

//     let obj = {
//            [prop]: user[prop]
//     }
//     console.log(obj)
// }
// console.log(user)




// let keyName = prompt('enter a key name')

// let keyValue = prompt('enter a key value')


// let obj = {
//     [keyName]: keyValue
// }
// console.log(obj)



//  demo object 


// {
//     name: 'anas',
//     rollNumber: 2643,
//     subjects: ['HTML','CSS', "JavaScript"],
//     isMatriculate: true

// }



// function Student(name,rollNumber,subjects,isMarried){
//    this.name = name;
//    this.rollNumber = rollNumber;
//    this.subjects = subjects;
//    this.isMarried = isMarried
// }

// Student.prototype.isEntryTextPassed = true

// let student1 = new Student('ali',555,['javascript'],false)
// let student2 = new Student('ahmed',1234,['python'],false)
// let student3 = new Student('shayan',666,['c++'],false)

// console.log(student1,student2,student3)







// function Car(name,varient,model){
//  this.name = name;
//  this.varient = varient;
//  this.model = model;
// }

// Car.prototype.calcFuelKm =  function(fuel,km){
//     console.log(`fuel average is ${km/fuel}`)
// }

// let car1 = new Car ('mehran','vxr',2005) 
// let car2 = new Car ('corola','xli',2010) 
// // let car3 = new Car ('aqua','vxr',2012) 

// console.log(car1,car2)
// car1.calcFuelKm(20,200)
// car2.calcFuelKm(10,130)








// let sec = 1;
// let intervalRef = setInterval(function () {
//     if (sec === 10) {
//         clearInterval(intervalRef);
//     }
//     console.log(sec++);
// }, 250);





// let timeline = setTimeout(function () {
//     console.log('shoot');
// }, 1000);

// let isAmountArranged = prompt('have you arranged the amount');
// if (isAmountArranged === 'yes') {
//     clearTimeout(timeline);
// }





// let timeline = setTimeout(function () {
//     console.log('shoot')
// }, 2000)

// let isAmountArranged = prompt('have you arrange amount')
// if (isAmountArranged === 'yes') {
//     clearTimeout(timeline)
// }












// let user = {
//     userName: 'haider',
//     haider: 'he is a fullstack engineer',
//     isMarried: true,

// }

// let userName = 'haider'
// console.log(user.userName)
// console.log(user['userName'])
// console.log(user[userName])



// let user = {
//     userName: 'haider',
//     haider: 'he is a fullstack engineer',
//     isMarried: true,

// }


// for (let prop in user) {
// prompt(`enter a value of key ${prop}`)
//     let object = {
//    [prop]: user[prop]
//     }
//     console.log(object)
// }

// console.log(user)






// let keyName = prompt('enter your key name')
// let keyValue = prompt('enter your key value')

// let user = {
//     [keyName]: keyValue,
// }

// console.log(user)




// function Student(userName,rollNumber,subjects,isMatriculate){
//     this.userName = userName;
//     this.rollNumber = rollNumber;
//     this.subjects = subjects;
//     this.isMatriculate = isMatriculate;
     
// }

// Student.prototype.isEntryTestPassed = true

// let student1 = new Student('anas',555,['javascript'],true)

// console.log(student1)












// function  Student (name,rollNumber,isFeePaid){
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.isFeePaid = isFeePaid
// }

// Student.prototype.subjects = ['Html','CSS','JavaScript']

// let student1 = new Student('ahmed',2524,true)

// let student2 = new Student('Abdullah',9999,false)
// let student3 = new Student('Moiz',2978,true)

// student1.subjects = ['python']
// student1.name = 'zain'
// console.log(student1)
// console.log(student1,student2,student3)


// let allValues = Object.values(student1)
// console.log(allValues)
// console.log(allValues.includes('haider'))




// for(let key in student1) {
//     if(student1[key] === 'haider'){
//         console.log(key , student1[key])
//     } 
// }





// console.log(student1)


// delete student1.isFeePaid
// student1.isSpecialQuota = true
// console.log(student1)
// console.log('isFeePaid' in student1)
// console.log('isSpecialQuota' in student1)



// let allStudent = [student1,student2,student3]




// for (let i = 0;i < allStudent.length;i++){
//     let student = allStudent[i]
//     if ('isFeePaid' in student){
//         if(student.isFeePaid) {
//         console.log(`${student.name}thank you `)
//     }

//      else {
//         console.log(`${student.name}please submit your fees`)
//     }
// }

//     else if('isSpecialQuota' in student){
//         console.log(`${student.name}dil laga kr parho`)

     
// }
// }




// console.log(student1.subjects,student1)
// console.log(student2.subjects,student2)


// console.log(student1.hasOwnProperty("subjects"))
// console.log(student2.hasOwnProperty("subjects"))








// let currentUrl = location

// console.log(currentUrl)


let newUrl = prompt('please enter a valid  url')

location = newUrl