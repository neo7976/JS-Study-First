var counter = 0;

var id = setInterval(my_func, 1000);

function my_func() {
    counter++;
    console.log(`Counter = ${counter}`);

    if (counter == 3) {
        clearInterval(id);
    }
}

// setInterval(function () {
//     counter++;
//     console.log(`Прошло ${counter} сек.`);
// }, 1000)

setTimeout(time_func, 1500);

function time_func() {
    counter++;
    console.log(`Timer = ${counter}`);}