let company: string;

company = "MyCompany";

let lastName: string = "Dev";
let age: number | null | 'NONE' = 5;
let any: any = 5;
any = "any";

age = 25;
age = 'NONE';

//////////////////////////////// -> Enum
enum users {
    Vanya = 5,
    Yarik = 23,
    Max
}

////////////////////////////////
const person: {
    name: string
    lastName?: string
    age: number
    country: "Russia" | "UK"
    liked?: string
} = {
    name: "Max",
    lastName: "Petrov",
    age: 25,
    country: "Russia"
}

console.log(person.age);
////////////////////////////////
const names: (string | number)[] = ['Elena', 'Petya', 'Vasya'];
names.push('Valencia');
names.push(1);
////////////////////////////////
const getRandom = (min: number, max: number): number => {
    return min + max;
}

const number: number = getRandom(1, 2);

//////////////////////////////// -> Типы

type TypeCity = {
    born: number
    population: number
    title: string
}
const newYork: TypeCity = {
    born: 1400,
    population: 29002021,
    title: 'New York'
}
console.log(newYork.population);

const cities: TypeCity[] = [newYork, {
    born: 1241,
    population: 114121,
    title: 'Moscow'
}];
//////////////////////////////// -> Наследование

type TypeImage = {
    path: string,
    size: string,
    name: string,
    _id: string
}

interface IProductReviews {
    reviews?: string[]
}

interface IProduct extends IProductReviews {
    name: string,
    created?: string,
    price: number,
    image?: TypeImage
}

const product: IProduct = {
    name: 'Pen',
    price: 9012,
    reviews: ['first', 'second']
}
console.log(product);

let secondProduct: IProduct = {} as IProduct;

secondProduct.price = 12021;
secondProduct.name = 'Book';

//////////////////////////////// -> Generic

const getArray = <T>(items: T[]): T[] => {
    return [...items];
}
const numberArray = getArray<number>([1, 2, 3]);
const stringArray = getArray<string>(['1', '2', '3']);

numberArray.push(4);
stringArray.push('4');

