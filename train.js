console.log('Hello world!');

let name = "Codecademy";
console.log(`Hello, ${name}`);
// Prints: Hello, Codecademy
console.log(`Billy is ${6+8} years old.`);
// Prints: Billy is 14 years old.

const food = 'salad';
switch (food) {
 case 'oyster':
 console.log('The taste of the sea');
 break;
 case 'pizza':
 console.log('A delicious pie ');
 break;
 default:
 console.log('Enjoy your meal');
}

const size = 10;
if (size > 100) {
 console.log('Big');
} else if (size > 20) {
 console.log('Medium');
} else if (size > 4) {
 console.log('Small');
} else {
 console.log('Tiny');
}

let number = 100;
// Both statements will add 10
number = number + 10;
number += 10;
console.log(number);
   
let age = 7;
// String concatenation
'Tommy is ' + age + ' years old.';
// String interpolation
`Tommy is ${age} years old.`;

const currency = '$';
let userIncome = 85000;
console.log(currency + userIncome + 'is more than the average income.');

let service = 'credit card';
let month = 'May 30th';
let displayText = 'Your ' + service + 'bill is due on ' + month + '.';
console.log(displayText);

let amount = 6;
let price = 4.99;


let message = 'good nite';
console.log(message.length);
// Prints: 9
console.log('howdy'.length);
// Prints: 5

// calculates # of weeks in a year, rounds down to nearest integer

const weeksInYear = Math.floor(365/7);

// calcuates the number of days left over after 365 is divded by 7

const daysLeftOver = 365 % 7 ;

console.log("A year has " + weeksInYear +
" weeks and " + daysLeftOver + " days");


const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(famousSayings[2]);
console.log(famousSayings);

console.log(famousSayings[3]);
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
console.log(seasons);
seasons[3] = 'Autumn';
console.log(seasons); 
//astray updates 
