let currentDat = new Date()
let eidDate= new Date('17 june,2024')

let diff = eidDate.getTime() - currentDat.getTime()

let seconds = diff / 1000.
seconds = seconds.toFixed()


let minut = diff / (1000 * 60 )
minut = minut.toFixed()

let hours = diff / (1000 * 60 * 60)
hours = hours.toFixed()


let days = diff / (1000 * 60 * 60 * 24 )
days = days.toFixed()


let dayEl = document.querySelectorAll(".box-1")

dayEl[0].innerHTML= `<h3>Days</h3> ${days}`



let hoursEl= document.querySelectorAll(".box-2")

hoursEl[0].innerHTML = `<h3>Hours</h3> ${hours}`



let minutEl= document.querySelectorAll(".box-3")

minutEl[0].innerHTML = `<h3>Minutes</h3> ${minut}`


let secEl= document.querySelectorAll(".box-4")
secEl[0].innerHTML = `<h3>Seconds</h3> ${seconds}`




// let secEl = document.querySelectorAll(".box1")

// secEl[0].innerHTML = 'second' + findDat()


// const targetDat = new Date('17 january,2024').getTime()

// function findDat(){
//     let currentDat = new Date().getTime()
//     let miliSecond = targetDat - currentDat
//     let second = miliSecond / 1000
//     let minut = miliSecond / (1000 * 60)
//     let hours = miliSecond / (1000 * 60 * 60)
//     let day = miliSecond / (1000 * 60 * 60 * 24)

    
// }

// let el = document.querySelectorAll(".box-2")





// function find(num){
//     let sum = num + num
//     let as = num - num
//     let arr = [sum,as]
//     return arr
// }
// let add = find(2)

// el[0].innerHTML = add.indexOf(0)
