// task1 //
// let user = {}
// user.name = "Ivan"
// user.surname = "Smith"
// user.name = "Petro"
// delete user.name

// console.log(user)

//task2//

// let schedule = {};

// function isEmpty(obj){
//     for(let key in obj){
//         return false
//     }
//     return true
// }

// alert( isEmpty(schedule) ); 

// schedule["8:30"] = "Вставай";

// alert( isEmpty(schedule) ); 

//task3//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   function sumObj(obj){   
//   let sum = 0
//   for(let key in obj){
//     sum += obj[key]
//   }
//   return sum
//   }

//   console.log(sumObj(salaries))

//task4//
// до виклику функції
let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };
  
  function multiplyNumeric(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(menu)
  console.log(menu)
  // після виклику функції
//   menu = {
//     width: 400,
//     height: 600,
//     title: "Моє меню"
//   };