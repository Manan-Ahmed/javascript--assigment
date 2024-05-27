let btnEl = document.querySelectorAll("button")

function displayMsg(){
    alert("hello world")
}

function divertUser(url){
    // location = url
}






// const imageURL = "https://i.ytimg.com/vi/SjohqtGVZeo/maxresdefault.jpg";
// const originalURL = "https://feeds.abplive.com/onecms/images/uploaded-images/2021/08/13/7d11889aea6d9c2c770a7db462cbf310_original.jpg?impolicy=abp_cdn&imwidth=720";


// function replacedImg(el){
//     if (el === imageURL)return
//    el.src = imageURL
//         console.log(1)
//     } 

// function revertImg(el){
//     if (el === originalURL)return
//         el.src = originalURL
    // console.log(2)

// }


// function replacedImg(el){
//     if (el === imageURL) 
//         el.src = imageURL
//         console.log(1)
//     }


// function revertImg(el){
//     if (el === imageURL)return
// el.src = originalURL
//     }


// let h1El = document.querySelectorAll("h1")

let cityForm = document.querySelectorAll(".city-name")

let provinceForm = document.querySelectorAll(".province-name")

function autoFillProvince(){
    let city = cityForm[0].value.toLowerCase()
        let province;
        switch (city){
          case "karachi":
          province = 'sindh';
          break;
          case "lahore":
          province = "punjab";
          break;
          case "peshawer":
                province = "balochistan";
                break;
                case "kp":
                    province = "quetta";
                    break;
            default:
            province =  "capital";
        }

    provinceForm[0].value = province
}

let p = document.querySelectorAll(".dummy-para")
function displayHelp(){
    p[0].innerHTML = 'please enter your form'
   setTimeout (function(){
    p[0].innerHTML = ''},5000)

}


function changeColor(el){
    let sec = new Date().getSeconds()
    console.log(el)
    if (sec % 2 !== 0) {
        el.style.color = 'red'
    }
    else {
        el.style.color = "blue"
    }
}


// let helpPara = document.querySelectorAll('.dummy-para');
// function displayHelp() {
//     helpPara[0].innerHTML = "Please fill a capital city name.";
//     setTimeout(function () {
//         helpPara[0].innerHTML = "";
//     }, 5000);
// }










// let cityForm = document.querySelectorAll('.city-name');
// let provinceForm = document.querySelectorAll('.province-name');

// function autoFillProvince() {
//     let city = cityForm[0].value.toLowerCase();
//     let province;
//     switch (city) {
//         case "karachi":
//             province = "Sindh";
//             break;
//         case "lahore":
//             province = "Punjab";
//             break;
//         case "quetta":
//             province = "Balochistan";
//             break;
//         case "peshawar":
//             province = "KP";
//             break;
//         case "skardu":
//             province = "Gilgit Baltistan";
//             break;
//         default:
//             province = 'Capital';
//     }
//     provinceForm[0].value = province;
// }



// let helpPara = document.querySelectorAll('.dummy-para');
// function displayHelp() {
//     helpPara[0].innerHTML = "Please fill a capital city name.";
//     setTimeout(function () {
//         helpPara[0].innerHTML = "";
//     }, 5000);
// }




// function changeColor(el) {
//     let sec = new Date().getSeconds();
//     if (sec % 2 !== 0) {
//         el.style.color = 'red';
//     }
//     else {
//         el.style.color = 'blue';
//     }

//     el.className += " success";

// }
// // function colorChng(el){
// //    el.style.color = 'red'
// // }

// // function defColor(el) {
// //     el.style.color = 'black'

// // }