"use strict"

const darkMode = document.getElementById('dark');


darkMode.addEventListener('click', function(){
    this.classList.toggle('darkMode');

    if (this.classList.contains('darkMode'))
        this.innerText = 'Light mode'
    else 
        this.innerText = 'Dark mode'
}); 

//w3 schools is a life saver time to fix some things and make it better

// fahrenheit
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
    let n = num.toFixed();
}

//celsius
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
    let n = num.toFixed();
}

//i dont know what im doing anymore, i keep asking you for help and emailing 
//you but i dont get responces and im just tired and nothing works and i dont
//know how to ask for help or what to say and i just dont know anymore