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

    // }

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
}

arrayMethod()

export default arrayMethod