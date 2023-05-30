document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
    //отключаем обновление страницы
    event.preventDefault();

    //получаем все элементы по тэгу и далее с ним взаимодействуем
    var el = document.getElementById("main-form");

    var name = el.name.value;
    var password = el.password.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";

    if (name == "" || password == "" || state == "")
        fail = "Заполните все поля";
    else if (name.length > 20 || name.length <= 1)
        fail = "Введите корректное имя";
    else if (password != repass)
        fail = "Пароли должны совпадать";
    else if (password.split("&").length > 1)
        fail = "Некорретный пароль";
    if (fail != "") {
        document.getElementById("error").innerHTML = fail;
    } else {
        alert("Все данные корректно заполнены")
        //если никуда не переходим и требуется отправить данные, то возвращаем true
        window.location = "https://ya.ru";
    }
    // return false;
}