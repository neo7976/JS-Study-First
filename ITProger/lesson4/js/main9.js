//помещаем сообщение в всплывающие окно
// for (let i = 0; i < 2; i++) {
//     alert(`Проверим погоду: ${i}`);
// }

// окно Да или Нет
// var data = confirm("Вы дома?")
// if (data)
//     alert("Вы молодец!")
// console.log(data);

// var age  = prompt("Скажите сколько вам лет", 20);
// console.log("Вам:" + age);

var person = null;
if (confirm("Вы точно уверены?")) {
    person = prompt("Введите ваше Имя");
    alert("Привет " + person);
} else {
    alert("Вы нажали на «Отмена»");
}

