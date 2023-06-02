var array = [5,7,8,1,0,5,6];
console.log("Размер массива: " + array.length);
console.log(array.join(" | "));
console.log("Сортировка массива: " + array.sort());
console.log("Обратная сортировка: " + array.reverse().join("```"));

var str = array.reverse().join("```").split("```");
console.log(str);