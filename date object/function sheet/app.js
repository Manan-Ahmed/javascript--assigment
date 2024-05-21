
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
// console.log(find_longest_word('web development tutorial'));









function capitalWord(word){
     let arr = word.split(' ')

     for (let i = 0;i < arr.length;i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
     }
    let str =  arr.join('')
     return str
}

console.log(capitalWord('hello world pakistan'))





// function findPaland(word){
//    let palandrom = word.split('').reverse().join('')

//    if (word === palandrom){
//     console.log('it is palandrom word')
//    }
//    else if (word !== palandrom){
//     console.log('it is not palandrom')
//    }
// }


// findPaland(prompt('enter your word'))


// function date(){
//     console.log(new Date())
// }
// date()






// function count(num1,num2){
//  for(let i = num1;i <= num2;i++){
//     console.log(i)
//  }
// }

// count(prompt('enter your start counting'),prompt('enter your end counting'))






// function findHypo(base,perpend){
//    function findSquare(num){
//      num * num
//      return num
//    }
//    let side1 = findSquare(base)
//    let side2 = findSquare(perpend)

//    let perpendicular = Math.sqrt(side1).toFixed()
//    return perpendicular
// }

// console.log(findHypo(20,20))


// function largNum(num){
// let num1 = num[0]
// for(let i = 0;i < num.length;i++){
//     if (num[i] > num1)
//   num1 = num[i]
// }
// return num1
// }
// console.log(largNum('26589'))


// let arr = ['manan','ahmed','shamas']

// console.log(arr.length)

// function length(text){
//      let newText = text.length
//      return newText
// }
// let arr = length('manan ahmed')

// console.log(arr)






// function findAreaRec(w,h){
//      let a = w * h
//      return a;
// }
// console.log(findAreaRec(20,30))






// let num = '38583841'

// let smNm = num[0]

// for (let i = 0;i < num.length;i++){
//     if (num[i] < smNm) {
//         smNm = num[i]
//     }
// }

// console.log(smNm)





// function findSort(text){
//     text.sort()
//     return text
// }
// console.log(findSort(['banan','orange','mango','apple']))







// let text = ('hello world')

// console.log((text.charAt(0).toUpperCase() + text.slice(1)))



// function findOccurenceWord(word,letter){
//     let count = 0;
//     for (let i = 0;i < word.length;i++){
//         if (word[i] === letter) {
//            count++
//         }
//    }
//    return count
// }

// console.log(findOccurenceWord('hello world','l'))
// let str = 'hello world'

// let find = 'l'
// let count = 0;
// for (let i = 0;i < str.length;i++){
//      if (str[i] === find) {
//         count++
//      }
// }
// console.log(count)
// function largestWord(text){
//     let newText = text.split()
//     for (let i = 0;i < newText.length;i++){
//        newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)
//     }
//    let str = newText.join('')
//     return str
// }

// console.log(largestWord('hello world'))





// let text = 'the quick brown fox'
// let count = 0;
// for (let i = 0;i < text.length;i++) {
// if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
//     count++
// }

// }


// console.log(count)



// let now = new Date()

// let diff = Math.floor(now.getTime() / 1000 * 60)

// console.log(diff)


// let past = new Date('december 5,2015')

// let now = new Date()


// let diff = now.getTime() - past.getTime()

// console.log(Math.floor((diff / 1000 )))


// let d = new Date()
// let d = new Date("may 7, 2024 04:13:59");
// console.log('1 hours ago ' + d)
// let now = new Date()

// console.log(now)

// console.log(now.getHours())


// function userName(user){
//    let symbols = ('!@,.')
//    for(let i =0;i < symbols.length;i++){
//       let special = symbols[i]
//       if (user === special){
//          console.log('tnvalid user name')
//       }
   
//       else {
//          console.log('valid user name')
//       }
//       break

//    }
  
// }

// userName('ali')


// function findOccurrences(word,sentence){
//    let lowWord = word.toLowerCase()
//   let lowsent = sentence.toLowerCase()

//   let arr = lowsent.split('')
//    let count = 0
//   for (let i = 0;i < arr.length;i++){

//          if(arr[i] === lowWord){
//         count++
//          }
//   }
//   console.log( count)
// }

// findOccurrences('the quick brown fox jumps over the lazy dog')


function find(){

}