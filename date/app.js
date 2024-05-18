// let now = new Date()

// console.log(now)

// let dayName = ["sunday","mon","wed","thu","fri","sat"]

// let day = now.getDay();
// console.log(day)

// console.log(dayName[day])



// let monName = ["jan","feb","mar","april","may"]

// let month = now.getMonth()

// console.log(month)
// console.log(monName[month])



// let ms = now.getMilliseconds()

// console.log(ms)

// let msNow = now.getTime()

// console.log(msNow)














let dob = new Date("november 20, 2004");
let now = new Date();

let age = now.getTime() - dob.getTime()

console.log(Math.floor(age / 1000 / 60 / 60 / 24 / 365.25));