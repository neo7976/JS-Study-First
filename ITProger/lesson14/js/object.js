class Person {
    constructor(name, surname, age, happiness) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.happiness = happiness;
    }
    infoByPerson() {
        console.log("Человек с именем: " + this.name);
    }
}

var alex = new Person("Alex", "Petrov", 10, true);
console.log(alex);
console.log(alex.name);
alex.name = "НеАлекс";
console.log(alex.name);

alex.infoByPerson();

