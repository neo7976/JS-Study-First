/*
for (let i = 0; i < 20; i++) {
    console.log(i);
}*/

var count = 10;
while (count != 0) {
    console.log(count);
    count -= 2;
}
console.log("Новый массив iter:");
var arr = [1,2,3,4,5,7,8,9,10];
for (var number of arr) {
    console.log(number);
}
