// Отслеживание событий

var counter = 0;

function onClickButton() {
    alert("Вы нажали на меня");
    counter++;
    console.log(counter);
}

function onClickButtonThis(el) {
    counter++;
    console.log(counter);
    el.innerHTML = `Вы нажали на кнопку: ${counter}`;
    // el.style.background = "red";
    // el.style.color = "blue"
    console.log(el.name);

    el.style.cssText = "border-radius: 5px; border: 5; font-size: 20px";
}

function onInput(el) {
    if (el.value == "Hello") alert("И тебе привет!")
    console.log(el.value);
}

