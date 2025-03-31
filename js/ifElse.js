function checking(){
// let firmName = prompt('Яка “офіційна” назва JavaScript?', '')

// if(firmName == 'ECMAScript'){
//     alert('Правильно!')
// }else{
//     alert('Не знаєте? “ECMAScript”!')
// }

// let value = prompt('Enter number', 0)

// if(value > 0){
//     alert(1)
// }else if(value < 0){
//     alert(-1)    
// }else if(value == 0){
//     alert(0)
// }

// let result;
// let a = 4
// let b = 2
// result = (a + b < 4) ? 'Нижче' : 'Вище'

// alert(result)

// let message;
// let login = prompt('enter your login', '')

// message =  (login == 'Працівник') ? 'Привіт' : (login == 'Директор') ? 'Вітаю' : (login == '') ? 'Немає логіну' : ''

// alert(message)

let message = prompt('Who is there?', '')

if (message === 'Admin') {
    let password = prompt('enter you password', '')

    if (password === 'TheMaster') {
        alert('Welcome!')
    }else if(password === '' || password === null){
        alert('Canceled')
    }else{
        alert('Wrong password')
    }
}else if( message === '' || message === null){
    alert('Canceled')
}else{
    alert('I do not know you!')
}
}

checking()

export default checking