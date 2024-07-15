"use strict";
// Question 1
const sumOfNaturalNumber = (n) => (n * (n + 1)) / 2;
console.log(sumOfNaturalNumber(6));
// Question 2
const isPalindrome = (text) => text.split("").reverse().join("") === text.split("").join("");
// console.log(isPalindrome(1));
console.log(isPalindrome("abc"));
console.log(isPalindrome("mamam"));
// Question 3
const getLeftPaddedWord = (word, padLength) => word.padStart(padLength + word.length);
console.log(getLeftPaddedWord("abc", 3));
const zip = (list1, list2) => {
    const zipped = [];
    const zippedLength = Math.min(list1.length, list2.length);
    for (let index = 0; index < zippedLength; index++) {
        zipped.push([list1[index], list2[index]]);
    }
    return zipped;
};
console.log(zip([1, 2, 3, 4, 5], [2, 3, 4]));
const calculateDistance = (p1, p2) => {
    const horizontalDistance = p2.x - p1.x;
    const verticalDistance = p2.y - p1.y;
    return Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));
};
const p1 = { x: 1, y: 2 };
const p2 = { x: 2, y: 3 };
console.log(calculateDistance(p1, p2));
const calculateArea = (circle) => Math.PI * Math.pow(circle.radius, 2);
const calculatePerimeter = (circle) => 2 * Math.PI * circle.radius;
const isInside = (circle, point) => {
    const distance = calculateDistance(circle.center, point);
    return distance <= circle.radius;
};
const circle1 = {
    center: { x: 0, y: 0 },
    radius: 3,
};
console.log(calculateArea(circle1)); //28.27
console.log(calculatePerimeter(circle1)); //18.85
const circle2 = {
    center: { x: -2, y: 1 },
    radius: 3,
};
const point2 = {
    x: -4,
    y: 3,
};
console.log(isInside(circle2, point2)); // true
const circle3 = {
    center: { x: 3, y: 2 },
    radius: 5,
};
const point3 = {
    x: 8,
    y: 0,
};
console.log(isInside(circle3, point3)); // false
const display = (person) => console.log(person.name, person.age, person.gender);
const milan = {
    name: "Milan",
    age: 20,
    gender: "Male",
};
display(milan);
const filterEligibleVoters = (peoples) => peoples.filter((people) => people.age >= 18);
const bittu = {
    name: "Bittu",
    age: 17,
};
const sauma = {
    name: "Sauma",
    age: 23,
};
console.log(filterEligibleVoters([milan, bittu, sauma]));
console.log(filterEligibleVoters([]));
