function enterName(){
    let result = prompt('Please enter your name')

    const name = document.getElementById('name')

    if(result){
    name.textContent = `Your name ${result}`
    } else {
        name.textContent = `You forgot enter name!`
    }
}

enterName()

export default enterName