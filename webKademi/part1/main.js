//неизменяемая константа и сразу объявляется
const year = 1990;

//изменяемая константа
let userName = "Иван";
userName = "Вася";

console.log(userName);

/*
=== - строгое сравнение с приведением к типам
== -нестрогое сравнение с приведением к типам

 */

console.log('10' == 10); //true
console.log('10' === 10); //false


//----------Тернарное сравнение------------------

console.log(5 > 1 ? "Да" : "Нет"); //Да

//-----------Функция как аргумент-----------------

function diff(a, b) {
    return a - b;
}

function sum(a, b) {
    return a + b;
}

function doSomething(func) {
    let x = 10;
    let y = 4;
    let result = func(x, y);
    console.log(result);
}

doSomething(sum); // 14
doSomething(diff); // 6

// Стрелочная функция
const sum2 = (a, b) => a + b;
console.log(sum2(10, 15)); // 25

//Массивы можно дополнять
const array = [1, 2, 3];
array.push(10); //Добавить в конец
array.pop(); //Удалить из конца
array.shift(); //Удалить из начала
array.unshift(10); // Добавить в начало
array.splice(0, 2); //удалить начиная с индекса сколько элементов

console.log(array);


