// Question 1

const sumOfNaturalNumber = (n: number): number => (n * (n + 1)) / 2;

console.log(sumOfNaturalNumber(6));

// Question 2

const isPalindrome = (text: string): boolean =>
	text.split("").reverse().join("") === text.split("").join("");

// console.log(isPalindrome(1));
console.log(isPalindrome("abc"));
console.log(isPalindrome("mamam"));

// Question 3

const getLeftPaddedWord = (word: string, padLength: number): string =>
	word.padStart(padLength + word.length);

console.log(getLeftPaddedWord("abc", 3));

// Question 4

type Tuple = [number, number];

const zip = (list1: number[], list2: number[]): Tuple[] => {
	const zipped: Tuple[] = [];
	const zippedLength = Math.min(list1.length, list2.length);

	for (let index = 0; index < zippedLength; index++) {
		zipped.push([list1[index], list2[index]]);
	}

	return zipped;
};

console.log(zip([1, 2, 3, 4, 5], [2, 3, 4]));

// Question 5

type Point = {
	x: number;
	y: number;
};

const calculateDistance = (p1: Point, p2: Point): number => {
	const horizontalDistance = p2.x - p1.x;
	const verticalDistance = p2.y - p1.y;

	return Math.sqrt(
		Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2)
	);
};

const p1: Point = { x: 1, y: 2 };
const p2: Point = { x: 2, y: 3 };

console.log(calculateDistance(p1, p2));

// Question 6

type Circle = {
	center: Point;
	radius: number;
};

const calculateArea = (circle: Circle): number =>
	Math.PI * Math.pow(circle.radius, 2);

const calculatePerimeter = (circle: Circle): number =>
	2 * Math.PI * circle.radius;

const isInside = (circle: Circle, point: Point): boolean => {
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

// Question 7

type Person = {
	name: string;
	age: number;
	gender?: string;
};

const display = (person: Person): void =>
	console.log(person.name, person.age, person.gender);

const milan = {
	name: "Milan",
	age: 20,
	gender: "Male",
};

display(milan);

const filterEligibleVoters = (peoples: Person[]): Person[] =>
	peoples.filter((people) => people.age >= 18);

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
