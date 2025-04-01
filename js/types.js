// function types(){

    //Number


// let firstNum = prompt('Enter first number', '')
// let secondNum = prompt('Enter second number', '')

// alert(Number(firstNum) + Number(secondNum))


// alert( Math.round(6.35 * 10)/10) ;


// function readNumber(){
//     let number = prompt('Enter the number', '')

//     number = parseFloat(number)

//     if(isNaN(number) || number === '' || number === null ){
//     return null
//     }else{
//         return(number)
//     }
// }

// readNumber()


// function random(min, max){
//     return min + Math.random() * (max - min)
// }

// alert( random(1, 5) ); 
// alert( random(1, 5) ); 
// alert( random(1, 5) ); 



// function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
//   }
  
//   alert( randomInteger(1, 3) );


// String

// function ucFirst(str){
//     let word 
//     let firstChar = str[0].toUpperCase()

//     word = firstChar + str.slice(1)

//     alert(word)
// }

// ucFirst('marta')

// function checkSpam(str){
//     str = str.toLowerCase()
//     if (str.includes('viagra') || str.includes('xxx')){
//         return true
//     }else{
//         return false
//     }
// }

// alert(checkSpam('buy ViAgRA now'))

// function truncate(str, maxlength){
//     if(str.length > maxlength){
//         str = str.slice(0, maxlength - 1) + '...'
//     }
//     return str
// }

// alert(truncate("Що я хотів би розповісти на цю тему:", 20))
// alert(truncate("Всім привіт!", 20))

// function extractCurrencyValue(str){
//     return +str.slice(1)
    
// }
// console.log( extractCurrencyValue('$120') === 120 )
// alert( extractCurrencyValue('$120') === 120 )
// }

// types()

// export default types