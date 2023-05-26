function info(str) {
    console.log(`Результат: ${str}`)
}

function sum(a, b) {
    var res = a + b;
    console.log(`Сумма чисел ${a} и ${b} равна ${res}`);
    info(res)
}

function sum_array(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        info(sum);
    }
    info(sum);
    return sum;
}

var array = [6, 8, 4, 5, 1, 0, 5, 7, 8];
console.log(sum_array(array));
