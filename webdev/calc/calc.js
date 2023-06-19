let a = '';
let b = '';
let sign = ''; //знак операций
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',];
const action = ['-', '+', 'X', '/',];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    //нажата кнопка ac
    if (event.target.classList.contains('ac')) return;


    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;
    //если нажата 0-9 или .
    if (digit.includes(key)) {
        a += key;
        console.log(a, b, sign);
    }
};



