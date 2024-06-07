"use strict";
// Question 1
/*
let num: number = 2;
let str: string = 'Hello';
let bool: boolean = true;

console.log(num);
console.log(str);
console.log(bool);
*/
// Quesiton 2
/*
const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
};

console.log(multiply(3,2));
*/
/* Question 3
const calculateArea = (width: number, height: number = 10): number => {
    return width * height;
};

console.log(calculateArea(5));
console.log(calculateArea(5, 20));
*/
// Question 4
/*
interface Movie {
    title: string,
    director: string,
    releaseYear: number,
    isAvailableOnStreaming: boolean
}

const movie1: Movie = {
    title: 'Hulk',
    director: 'Brad',
    releaseYear: 2014,
    isAvailableOnStreaming: true
}

console.log(movie1)
*/
// Question 5
/*
interface Product {
    name: string,
    price: number,
    catogory?: string,
    readonly propertyID: number
}

let product1: Product = {
    name: 'ball',
    price: 30,
    catogory: 'sport',
    propertyID: 22
}

console.log(product1)
product1.propertyID =  33
*/
// Question 6
/*
class Course {
    title: string;
    duration: string;

    constructor(title: string, duration: string) {
        this.title = title;
        this.duration = duration;
    }

    describe() {
        console.log(`The title of this course is ${this.title} and the duration is ${this.duration}`)
    }
}

let english = new Course("English", "3 days");
english.describe()
*/
// Question 7
/*
class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    describe() {
        console.log(`The shape is ${this.color}`)
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number, color: string) {
        super(color)
        this.width = width;
        this.height = height
    }

    calculateArea() {
        console.log(this.width * this.height)
    }
}

let rectangle = new Rectangle(8, 4, 'Red')
rectangle.describe()
rectangle.calculateArea()
*/
// Question 8
class Vehicle {
}
class Car extends Vehicle {
    drive() {
        console.log("The car is driving");
    }
}
const myCar = new Car();
myCar.drive();
