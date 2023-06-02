var date = new Date();

console.log(date.getFullYear());

//Месяц начинается с 0
console.log(date.getMonth() + 1);

console.log(date.getDate());
console.log(date.getHours());
console.log(date.getSeconds());

date.setHours(23);
console.log(date.getHours());