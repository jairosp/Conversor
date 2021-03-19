import fullSet from './time.js';


const displayer = document.createElement('p');
const button = document.getElementById('button');
const input = document.querySelector('input');
const result = document.getElementById('result');


button.addEventListener('click', display);

function display(){
    const obj = fullSet(input.value);
    console.log(obj);
    const text = `  
        Dias: ${obj.Dias},
        Horas: ${obj.Horas},
        Minutos: ${obj.Minutos},
        Segundos: ${obj.Segundos}`
    displayer.textContent = text;
    displayer.style.fontSize = '20px';
    displayer.style.padding = '20px'
    result.appendChild(displayer);
    return false;
}
