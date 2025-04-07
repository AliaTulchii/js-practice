function arrayMethod(){

//* TASK 1 *//
    // function camelize(str){
    // const string = str
    // const splitString = string.split("")
    // const index = splitString.indexOf('-')
    // const str1 = splitString.slice(0, index)
    // let str2 = splitString.slice(index + 1)
    // str2[0] = str2[0].toUpperCase();
    // let newString = str1.concat(str2).join('')
    
    // console.log(newString)

    // }0,

    // function camelize(str) {
    //     return str
    //       .split('-') // розбиваємо 'my-long-word' на масив елементів ['my', 'long', 'word']
    //       .map(
    //         // робимо першу літеру велику для всіх елементів масиву, крім першого
    //         // конвертуємо ['my', 'long', 'word'] в ['my', 'Long', 'Word']
    //         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    //       )
    //       .join(''); // зʼєднуємо ['my', 'Long', 'Word'] в 'myLongWord'
    //   }
    // camelize("background-color")


    //* TASK2 *//

    // function filterRange(arr, a, b){

    //     let filtered = arr.filter(item => item >= a && item <= b)
    //     console.log(filtered)
    //     console.log(arr)
    // }

    // filterRange([5, 3, 8, 1], 1, 4)


    //* TASK3 *//

    // function filterRangeInPlace(arr, a, b){
    // for (let i = arr.length - 1; i >= 0 ; i--) {
    //     if ( arr[i]< a || arr[i] > b) {
    //         arr.splice(i,1)
    //     }
        
    // }
    // console.log(arr)
    // }
    // filterRangeInPlace([5, 3, 8, 1], 1, 4)

    //* TASK4 *//

    // function sortDecrease(arr){
    //      arr.sort((a, b) => b - a)
    //     console.log(arr)
    // }

    // sortDecrease([5, 2, 1, -10, 8])

    //* TASK5 *//
    // function copySorted(arr){
    //     let copyArr = [...arr].sort()
    //     console.log(copyArr)
    // }

    // copySorted(["HTML", "JavaScript", "CSS"])

    //* TASK6 *//

//     let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let users = [ ivan, petro, mariya ];

// let names = users.map( user => user.name)

// console.log( names );

//* TASK7 *//

// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ ivan, petro, mariya ];

// let usersMapped = users.map(item => (
//     {
//         fullName: `${item.name } ${item.surname}`,
//         id: `${item.id}`
//     }
// ))


// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Іван Іванко

//* TASK8 *//



// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [ petro, ivan, mariya ];

// function sortByAge(arr){
//     arr.sort((a,b) => a.age - b.age)
// }
// sortByAge(arr)
// // now: [ivan, mariya, petro]
// console.log(arr[0].name); // Іван
// console.log(arr[1].name); // Марія
// console.log(arr[2].name); // Петро

//* TASK9 *//

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }
  

// shuffle([1, 2, 3])

//* TASK10 *//
// function getAverageAge(arr){
//     let sum = arr.reduce((sum, current) => sum + current.age, 0)
//     let result = sum/arr.length
//     return result
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];


// console.log( getAverageAge(arr) ); 

//* TASK11 *//
// function unique(arr) {
//     let uniqueStr = []

//     for(let str of arr){
//         if(!uniqueStr.includes(str)){
//             uniqueStr.push(str)
//         }
//     }
//     return uniqueStr
//   }
  
//   let strings = ["Привіт", "Світ", "Привіт", "Світ",
//     "Привіт", "Привіт", "Світ", "Світ", ":-O"
//   ];
  
//   console.log( unique(strings) ); 

//* Task12 *//
// function groupById(arr) {
//     return arr.reduce((acc, user) => {
//         acc[user.id] = user; 
//         return acc;
//     }, {}); 
// }
// let users = [
//     {id: 'іван', name: "Іван Іванко", age: 20},
//     {id: 'ганна', name: "Ганна Іванко", age: 24},
//     {id: 'петро', name: "Петро Петренко", age: 31},
//   ];
  
// groupById(users);

//   console.log(usersById)

//task 13//

// function getExtremeElements(array) {
//     // Change code below this line
//     let newArray = []
  
//     let firstEl = array.pop()
//     let lastEl = array.shift()
  
//     newArray.push(firstEl)
//     newArray.push(lastEl)
//     console.log(newArray)
  
//     // Change code above this line
//   }
//   getExtremeElements([1, 2, 3, 4, 5])  

//task14//
// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//    words = message.split(delimiter)
//     // Change code above this line
//     return words;
//   }
//   splitMessage('best_for_week', '_')  

//task15//

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//    let array = []
//    let totalPrice
 
//    array = message.split(" ")
//    totalPrice = array.length * pricePerWord
 
//    return totalPrice
 
 
//     // Change code above this line
//  }

//  calculateEngravingPrice('JavaScript is in my blood', 10)

//task16//

// function slugify(title) {
//     // Change code below this line
//     let array = title.split(' ')
//     let slugString = array.join('-').toLowerCase()
//     console.log(slugString)
//     return slugString
//   }

//   slugify('How to become a JUNIOR developer for TWO WEEKS')

//task17//
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

//task18//
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     let array = firstArray.concat(secondArray).slice(0, maxLength)
     
// console.log(array)
// return array
  

//     // Change code above this line
//   }
//   makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)


//task19//
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i< fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//task 20//
// function findLongestWord(string) {
//     // Change code below this line
//     let array = string.split(' ')
//     let longestWord = ''
//     for (let i = 0; i < array.length; i += 1) {
//       if (array[i].length >= longestWord.length) {
//         longestWord = array[i]
//       }
//     }
  
//   return longestWord
//     // Change code above this line
//   }

//   findLongestWord("The quick brown fox jumped over the lazy dog")

// //task 21//
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//   for (let i = min; i <= max; i+=1) {
//     numbers.push(i)
//   }
//     // Change code above this line
//     return numbers;
//   }

//   createArrayOfNumbers(1, 3) 

//task 22//

// function filterArray(numbers, value) {
//     // Change code below this line
//  let newArray=[]
 
//    for (let i = 0; i <= numbers.length; i++) {
//      if (numbers[i] > value) {
//        newArray.push(numbers[i])
//      }
     
//    }
 
//  return newArray
//    // Change code above this line
//  }

//  filterArray([1, 2, 3, 4, 5], 3)

//task 23//
// function getCommonElements(array1, array2) {
//     // Change code below this line
//   let newArray = []
//     for (let item of array1) {
//       if (array2.includes(item)) {
//           newArray.push(item)
//       }
//     }
//    return newArray
  
//    // Change code above this line
//   }
//   getCommonElements([1, 2, 3], [2, 4])

//task 24//
// function getEvenNumbers(start, end) {
//     let newArray = []
//      // Change code below this line
//   for (let i = start; i <= end; i++) {
//     if( i % 2 === 0){
//       newArray.push(i)
//     }
//   }
  
//     return newArray
  
//       // Change code above this line
//     }

//     getEvenNumbers(2, 5)


}

arrayMethod()

export default arrayMethod