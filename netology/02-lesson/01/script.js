let person = {
    name: 'Ivan',
    age: 18
};

console.log(person);
console.log(person.age);
console.log(person['name']);

console.log('name' in person);
console.log('named' in person);

//добавить новый ключ
person.demo = [1,5];
console.log(person);

//удалить ключ
delete person.age;
console.log(person);