"use strict";
import { PEOPLE, DATA, NUMBERED } from "./db.js";
console.log(PEOPLE);
console.log(DATA);
console.log(NUMBERED);
// document.querySelectorAll(".btn").forEach((item) => {
//   item.addEventListener("click", () => {
//     alert("Hello World");
//   });
// });

document.body.style.backgroundColor = "green";

// ================================================================================
// 12th April 2023
// ================================================================================

// VARIABLES, VALUES and DECLARATORS
// Variables are storage facilities for storing data or values
// Values are just pieces of data
// Declarators are used in declaring variables(let, const, var)

// let keyword
let firstName = "Christy";
console.log(firstName);

let lastName = "Obi";
console.log(lastName);

// var keyword
// var country = "Nigeria";
// console.log(country);

var tribe = "Yoruba";
console.log(tribe);

// const keyword
const PIE = 3.142;
console.log(PIE);

// lET vs CONST vs VAR

// VAR --- Declares, re-declares and re-assigns
var gender = "Male";
var gender = "non-binary";
gender = "Female";
console.log(gender);

// LET ---  Declares and re-assigns
let state = "Lagos";
// let state = 'Delta';
state = "Delta";
console.log(state);

// CONST --- Declares
const fullName = "Chris";
// const fullName = 'Downey';
// fullName = 'Evans';
console.log(fullName);

// Constraints in Variable Naming
// ----- Variable names can only contain letters, numbers, underscore, dollar sign but cannot start with a number
// ----- Don't give spaces between variable names. Use camel casing
// ----- Reserved names can't be used as a variable name, since it is reserved
// ----- By convention, don't start variable names with uppercase except for const
// ----- Use descriptive names when calling out variables

// DATA TYPES
// Strings ---- Used for storing letters. They are denoted by single('') or double qoutes("")
// Number ---- Used for numbers(Can hold decimal and whole numbers)
// Boolean ---- True or False
// Null ---- Empty
// Undefined
// Objects (Arrays, Dates)---- For holding more than one value and denoted by {}
// Symbols
// BigInt

// ================================================================================
// 12th April 2023
// ================================================================================

// STRINGS
// let continent = "Africa";
// console.log(continent);

let firstName2 = "Christy";
let lastName2 = "Obi";

let fullName2 = firstName2 + " " + lastName2;
console.log(fullName2);

// STRING PROPERTIES AND METHODS
// Properties
let email = "askjeeves@hotmail.com";
console.log(email);
console.log(email.length);

// Getting properties
let city = "surulere";
console.log(city[4]);

// Methods
let trainee = "Abimbola";
console.log(trainee);

// to upperCase()
console.log(trainee.toUpperCase());
let traineeUpperCase = trainee.toUpperCase();
console.log(traineeUpperCase);

// to lowerCase()
let newTrainee = "ENIOLA";
console.log(newTrainee);
let newTraineeLowerCase = newTrainee.toLowerCase();
console.log(newTraineeLowerCase);

// indexOf()
let newEmail = "techstudio@gmail.com";
console.log(newEmail);
let newEmailIndexOf = newEmail.indexOf("h");
console.log(newEmailIndexOf);

//lastIndexOf()
let applicant = "Racheal";
console.log(applicant);
let lastIndexOfApplicant = applicant.lastIndexOf("a");
console.log(lastIndexOfApplicant);

//slice()
let religion = "Christianity";
console.log(religion);
let slicedReligion = religion.slice(0, 9);
console.log(slicedReligion);

//replace(
let profession = "developer";
console.log(profession);
let replaceProfession = profession.replace("d", "z");
console.log(replaceProfession);

//TASK 1
let animal = "hippopotamus";

console.log(animal.toUpperCase());
console.log(animal.toLowerCase());

console.log(animal.indexOf("t"));

console.log(animal.lastIndexOf("o"));

console.log(animal.slice(5, 8));

console.log(animal.replace("h", "b"));

//NUMBERS
let year = 2023;
console.log(year);

let score = 100;
console.log(score);

let score2 = 200;
console.log(score2);

//Math Operators
// +, - /, *, **, %
let finalScore = score + score2;
console.log(finalScore);

let minus = score2 - score;
console.log(minus);

let multiply = score * score2;
console.log(multiply);

let divide = score2 / score;
console.log(divide);

let num = 10;
let num2 = 3;
let indices = num ** num2;
console.log(indices);

let modulus = num % num2;
console.log(modulus);

//Decremental and Incremental
let newYear = year + 2;
console.log(newYear);

// year++
// year += 2;
year *= 2;
console.log(year);

//ASSIGNMENT
let continent = "Africa";
let language = "Pidgin english";
let ghanaPopulation = 500;
let finlandPopulation = 800;
let country = "Nigeria";
let nigeriaPopulation = 1000;

//1
let splitNigeriaPopulation = nigeriaPopulation / 2;
console.log(splitNigeriaPopulation);

//2
nigeriaPopulation++;
console.log(nigeriaPopulation);

//3
let greaterPopulation = nigeriaPopulation > finlandPopulation;
console.log(greaterPopulation);

//4
let greaterPopulation2 = ghanaPopulation > finlandPopulation;
console.log(greaterPopulation2);

//5
let disciple =
  country +
  " is in " +
  continent +
  " and its " +
  nigeriaPopulation +
  " people speak " +
  language +
  ".";
console.log(disciple);

let footballer = "Rashford is a player";

console.log(footballer.charAt(0));

console.log(footballer.includes("not"));

console.log(footballer.startsWith("R"));

console.log(footballer.endsWith("d"));

let descriptions = " pringles";
console.log(descriptions);

let descriptionTrim = descriptions.trim();
console.log(descriptionTrim);
//The trim() method basically removes the empty space in the string.

// ================================================================================
// 13th April 2023
// ================================================================================

//Concatenating(merging) variables with strings
let blog = 50;

let statement = "The blog has " + blog + " likes.";
console.log(statement);

let traineeScore = 90;
let traineeName = "Christy";
let school = "Aguda grammar school";
let response =
  "Ejiro did you know " +
  traineeName +
  " attends " +
  school +
  " and scored " +
  traineeScore +
  " in her test?";
console.log(response);

//Template literals or String Literals (uses backticks(``) and interpolation(${}))

let newResponse = `Ejiro did you know ${traineeName} attends ${school} and scored ${traineeScore} in her test?`;
console.log(newResponse);

let classAvailable = "Javascript Fullstack Course";
let bootCamp = "Techstudio Academy";
let stateLocation = "Lagos";
let regFeeInNaira = 300;
let prospectiveTrainee = "John";

let adminSay =
  "Hello " +
  prospectiveTrainee +
  " " +
  bootCamp +
  " offers " +
  classAvailable +
  " in " +
  stateLocation +
  " and the registration fee in naira is " +
  regFeeInNaira +
  ".";
console.log(adminSay);

//TASK --- Re-write the above statement using template literals.
let adminSay2 = `Hello ${prospectiveTrainee}, ${bootCamp} offers ${classAvailable} in ${stateLocation} and the registration fee in naira is ${regFeeInNaira}.`;
console.log(adminSay2);

//ARRAYS --- They are used for storing collections of strings, numbers, booleans and other data types. They are denoted by square brackets([]).
let christyFavFoods = ["Beans", "Rice", "Okpa"];
console.log(christyFavFoods);

//Array Properties
let lengthOfChryFavFoods = christyFavFoods.length;
console.log(lengthOfChryFavFoods);
console.log(christyFavFoods[0]);

christyFavFoods[0] = "Fufu";
console.log(christyFavFoods);

//Array Methods
// includes()
let includes = christyFavFoods.includes("corn");
console.log(includes);

// join()
let join = christyFavFoods.join("-");
console.log(join);

// concat()
let concat = christyFavFoods.concat(["Banga", "Starch", "Yam"]);
console.log(concat);

// push()
let push = christyFavFoods.push("Efo-riro");
console.log(push);
console.log(christyFavFoods);

// pop()
let pop = christyFavFoods.pop();
console.log(pop);
console.log(christyFavFoods);

// let colors = [];
// console.log(colors.length);
// colors.push('blue');
// colors.push('orange');
// colors[2] = "green";
// console.log(colors);

// Spread operator(...) and Destructuring
let numbers = [1, 2, 3, 4, 5, 6];
let newNumbers = [7, 8, 9, 10];
let allNumbers = numbers.concat(newNumbers);
console.log(allNumbers);

// with spread operator
let newConcat = [...numbers, ...newNumbers];
console.log(newConcat);

// destructuring
let names = [
  "Bola",
  "Eni",
  "John",
  "Ejiro",
  "Christy",
  "Sam",
  "Henry",
  "Fiyin",
];
console.log(names);
console.log(names[3]);
console.log(names[5]);

// here we go
let [zero, one, two, three, four, five, six, seven] = names;
//  console.log(zero)
// console.log(one);
// console.log(...rest);
console.log(seven);

// typeof
let scores = 50;
console.log(typeof scores);

let pikinName = "Seun";
console.log(typeof pikinName);

let laptops = ["dell", "macbook", "hp", "asus"];
console.log(typeof laptops);

let cart = null;
console.log(typeof cart);

let destination;
console.log(typeof destination);

// Type conversion and coercion
// CONVERSION is when we manually convert from one data type to another and COERCION is when Javascript does the conversion behind the scenes for us.

// Conversion
let inputYear = "1985";
console.log(inputYear);
console.log(typeof inputYear);

let newNumber = Number("1986");
let addedNumber = newNumber + 18;
console.log(typeof newNumber);
console.log(addedNumber);

// Converting something that's not actually a number.
let personName = Number("Eggy");
console.log(personName);
console.log(typeof personName);

// Coercion
console.log("I am 36 years old");
//without coercion, the above statement would be written as ...
console.log("I am " + String(22) + " years old");
console.log("22" - 3);
console.log("22" > 3);
console.log("22" > "2");

let z = "1" + 1;
console.log(typeof z);
let w = z - 1;
console.log(w);

// COMPARISON OPERATORS
// >, <, ==(loose comparison operator), ===(strict comparison operator), 1=, >=, <=
const YEAR = 2023;
console.log(YEAR > 2001);
console.log(YEAR < 2001);
console.log(YEAR >= 2001);
console.log(YEAR <= 2001);
console.log(YEAR != 2001);
console.log(!true);

// Loose comparison operator (==) --- Only checks for the value and not the data type
let SCORE = "100";
let SCORE2 = SCORE == 100;
let SCORE3 = SCORE != 100;
console.log(SCORE2);
console.log(SCORE3);

// strict comparison operator (===), --- Checks for both values and data types
let SCORE4 = SCORE === 100;
let SCORE5 = SCORE !== 100;

console.log(SCORE4);
console.log(SCORE5);

// ASSIGNMENT 2
// Q1
let trainees = [
  "Christy",
  "Sam",
  "Henry",
  "Fiyin",
  "Ejiro",
  "John",
  "Eni",
  "Bola",
];
console.log(trainees);

// Q2
trainees[0] = "Pappi";
console.log(trainees);

// Q3
trainees.push("Amos", "Mike");
console.log(trainees);

// Q4
trainees.pop();
console.log(trainees);

// Q5
trainees.unshift("Zack", "Bobby");
console.log(trainees);

// Q6
trainees.shift();
console.log(trainees);

// Q7
let ourTrainees = trainees.concat("Queen", "Segun", "Pius", "Emeka");
console.log(ourTrainees);

// OR
let newTrainees = ["Queen", "Segun", "Pius", "Emeka"];
let allTrainees = trainees.concat(newTrainees);
console.log(allTrainees);

// ================================================================================
// 17th April 2023
// ================================================================================

// Control Flow (Loops(for, while, for-in, for-of) and Conditional statements(if, else, else-if, switch, ternary operator)).

// For loop --- Uses the FOR keyword, initializer, condition and a final expression
for (let i = 1; i <= 10; i++) {
  console.log("Lifting weight repetition " + i + " 🏋️‍♂️");
}

let guys = ["sam", "henry", "fiyin", "ejiro", "john", "eni", "bola"];
for (let i = 0; i < guys.length; i++) {
  console.log(guys[i].toUpperCase());
}

// While loop
let i = 0;
while (i < guys.length) {
  console.log(guys[i]);
  i++;
}

// For-in loop
let babes = ["christy", "beauty", "princess", "joan"];
for (let p in babes) {
  console.log(babes[p]);
}

// For-of loop
for (let b of babes) {
  console.log(b.toUpperCase());
}

// Examples
let colors = ["blue", "pink", "black", "red"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let i of colors) {
  console.log(i.toUpperCase());
}

for (let i in colors) {
  console.log(colors[i]);
}

// Conditional statements
let AGE = 5;

if (AGE === 50) {
  console.log("You don old");
} else {
  console.log("Invalid");
}

let password = "pas";
console.log(password.length);

if (password.length >= 12) {
  console.log("that's a very strong password");
} else if (password.length >= 8) {
  console.log("Password is good!");
} else if (password.length >= 4) {
  console.log("Password is weak");
} else {
  console.log("Password must be at least 12 characters");
}

// Logical Operators
// ||(double pipe) means logical OR
// &&(ampersand) means logical AND

// FOR LOGICAL AND
// true && true = True
// true && false = false
// false && true = false
// false && false = false
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// FOR LOGICAL OR
// true || true = true
// true || false = true
// false || true = true
// false || false = false
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let PASSWORD = "pass@";

if (PASSWORD.length >= 7 && PASSWORD.includes("@")) {
  console.log("super strong password");
} else if (PASSWORD.length >= 7 && PASSWORD.includes("@")) {
  console.log("very very strong");
} else if (
  PASSWORD.length >= 5 ||
  (PASSWORD.includes("-") && PASSWORD.length > 6) ||
  (PASSWORD.includes("@") && PASSWORD.includes("#"))
) {
  console.log("Password is good");
} else {
  console.log("Password isn't good enough");
}

// let newPassword = prompt("type a password");
// if (newPassword.length >= 12 && newPassword.includes("@")) {
//   alert("very very strong password");
// } else if (newPassword.length >= 8 || newPassword.includes("*")) {
//   alert("Password is good");
// } else {
//   alert("Password is weak");
// }

// TASK
let n = 44;

if (n % 2 !== 0) {
  console.log("Weird");
} else {
  console.log("Not Weird");
}

// Break and Continue
let Result = [20, 40, 0, 50, 100, 15, 4, 6, 8, 9];

for (let i = 0; i < Result.length; i++) {
  if (Result[i] === 0 || Result[i] === 50) {
    continue;
  }
  if (Result[i] === 9) {
    break;
  }
  console.log(Result[i]);
}

// If statement vs switch statement
let points = "F";
if (points === "A") {
  console.log("You got A");
} else if (points === "B") {
  console.log("You got B");
} else if (points === "C") {
  console.log("You got C");
} else if (points === "D") {
  console.log("You got D");
} else {
  console.log("Guy you don fail. Try dey attend class aaabeeg!");
}

// Switch
let GRADE = "A";
switch (GRADE) {
  case "A":
    console.log("You got A");
    break;
  case "B":
    console.log("You got B");
    break;
  case "C":
    console.log("You got C");
    break;
  case "D":
    console.log("You got D");
    break;
  default:
    console.log("Guy you don fail. Try dey attend class aaabeeg!");
}

// ASSIGNMENT
let samheight = 10;
let samweight = 60;
let samBMI = (samweight / samheight) ** 2;

let christyheight = 9;
let christyweight = 70;
let christyBMI = (christyweight / christyheight) ** 2;

// if (samBmi > christyBmi) {
//   console.log("Sam's BMI is greater than Christy's");
// } else {
//   console.log("Christy's BMI is greater than Sam's.");
// }

samBMI > christyBMI
  ? console.log("Sam's BMI is greater than Christy's")
  : console.log("Christy's BMI is greater than Sam's.");

// Ternary Operator
const number = 8;
let result;

number === 0
  ? console.log("You have nothing")
  : number < 10
  ? console.log("You have very little")
  : console.log("You have a lot");

// ================================================================================
// 18th April 2023
// ================================================================================

// Global Scope, Block and Function Scope
let myAge = 100;

if (myAge) {
  let myAge = 200;
  console.log("Inside 1st block of code: " + myAge);

  if (myAge) {
    let myAge = 300;
    console.log("Inside 2nd block of code: " + myAge);
  }
}
console.log("Outside 1st block of code: " + myAge);

// Functions
// Functions are simply a resuable block of code that perform a given task.They have to be called or invoked before they can work/run.
// There are three types of functions (Declaration, Expression and Arrow Function)
// A function is written by using a 'function' keyword, a function name and a block of code

// Function Declaration
// Allows hoisting
team();
function team() {
  let name = "Christy";
  console.log(name);
}

// Function Expression
// Doesn't allow hoisting
let speak = function () {
  let myColor = "yellow";
  console.log(myColor);
};
speak();

// Arrow Functions
// Doesn't allow hoisting
let newTrainer = () => {
  let country = "Nigeria";
  console.log(country);
};
newTrainer();

// Parameters and Arguments in Functions
function getName(userName) {
  let person = "Hi, my name is " + userName + ".";
  console.log(person);
}
getName("Sam");

// ===========================================
let getSpeaker = function (customerName) {
  let person = `Hello, my name is ${customerName}.`;
  console.log(person);
};
getSpeaker("Abimbola");

// ================================================
let getAge = (nameOfClient, clientYearOfBirth) => {
  let clientAge = `${nameOfClient} is ${2023 - clientYearOfBirth} years old.`;
  console.log(clientAge);
};
getAge("Sam", 1985);

// ================================================
const getGreetings = function (name, time) {
  let statement = `Good ${time}, ${name}.`;
  console.log(statement);
};
getGreetings("John", "Afternoon");

// ================================================
let getDay = (currency) => {
  let count = 10 + " " + currency;
  console.log(count);
};
getDay("Naira");

// Returning variables from a function
let getProgramme = () => {
  let stack = "JavaScript Fullstack";
  console.log(stack);
  return stack;
};

let returned = getProgramme();
let newApplicant =
  "Hi Blessing, did you know that Tech-Studio offers " + returned + "?";
console.log(newApplicant);

// ================================================================================
// 19th April 2023
// ================================================================================

let getWords = (food) =>
  "Hello Eni did you know Christy ate " + food + " wraps of fufu";

let newWords = getWords(20);
let reiterate = newWords + " after class today?";
console.log(reiterate);

// ================================================
let fees = [60, 80, 0, 120];
let peeps = ["Ejiro", "Christy", "Kruz", "Sam", "Eni", "Henry"];

function getDetails(sth, newSth) {
  for (let i = 0; i < sth.length; i++) {
    console.log(sth[i]);
  }
  for (let i = 0; i < newSth.length; i++) {
    if (newSth[i] === 0) {
      continue;
    }
    console.log(newSth[i]);
  }
}
getDetails(peeps, fees);

// Higher Order Functions and Callback Functions
// Higher Order functions accept another function as an argument or returns another function as a result.
// Callback functions are functions passed to another function as an argument and executed inside the function.

function getHello() {
  return "Hi";
}
let rr = getHello();

let getReport = (nth) => {
  console.log(nth + "," + " nothing is working at the moment.");
};

getReport(rr);

// Objects ------ Object Literal, Math Object, Dates
// DOM (Document Object Model)

// Objects have key-value pairs and are denoted by curly braces({});
let christyCustomer = {
  firstName: "Henry",
  lastName: "Kingsley",
  complexion: "Dark",
  friends: ["Kruz", "Sam"],
  age: 2023 - 1960,
  canDrive: true,
  isBlind: false,
  date: Date(),
};

console.log(christyCustomer);
console.log(typeof christyCustomer);

let newCustomer = {
  country: "Nigeria",
  state: "Lagos",
};
console.log(newCustomer);

let allCustomers = { ...christyCustomer, ...newCustomer };
console.log(allCustomers);

// Accessing Objects (Dot vs Bracket Notation)
let christyTrainee = {
  firstName: "Kruz",
  lastName: "Bola",
  skinColor: "Dark",
  tribe: "Yoruba",
  age: 39,
  address: {
    stateOfOrigin: "Ibadan",
    stateOfResidence: "Lagos",
    lga: "Surulere",
  },
  favFoods: ["Banga", "Egusi", "Fufu", "Amala"],
  canDrive: true,
  profession: "Senior Frontend Developer",
  canSmoke: false,
  numberOfKids: null,
};

console.log(christyTrainee);

// Using the dot notation
let newChristyTrainee2 = christyTrainee.firstName.toUpperCase();
console.log(newChristyTrainee2);

let newChristyTrainee3 = christyTrainee.favFoods;
console.log(newChristyTrainee3);

let newChristyTrainee4 = christyTrainee.address.stateOfOrigin;
console.log(newChristyTrainee4);

// Using the bracket notation
let bracketChristyTrainee = christyTrainee["firstName"].toUpperCase();
console.log(bracketChristyTrainee);

let bracketChristyTrainee2 =
  christyTrainee["address"]["stateOfOrigin"].toUpperCase();
console.log(bracketChristyTrainee2);

// Destructuring Objects
let account = {
  name: "Uloma",
  toes: 10,
  stateOfMind: "extra cool",
  statusOfLove: "shey shey bere",
};

console.log(account);

let nameInAccount = account.name;
console.log(nameInAccount);

let toesInAccount = account.toes;
console.log(toesInAccount);

let stateOfAccount = account.stateOfMind;
console.log(stateOfAccount);

// Using destructuring to get the values
let { name, toes, stateOfMind, statusOfLove } = account;
console.log(name, toes, stateOfMind, statusOfLove);

// Object Method
let passenger = {
  firstName: "Christy",
  lastName: "Kingsley",
  year: 2023,
  busFareInNaira: 200,
  pocketMoneyInNaira: 1000,
  currentDate: Date(),
  calcBal: function () {
    let statement =
      this.firstName +
      " has " +
      (this.pocketMoneyInNaira - this.busFareInNaira) +
      " naira";
    return statement;
  },
};

console.log(passenger.calcBal());

// ASSIGNMENT

// Q1
let calcAverage = (n1, n2, n3) => {
  let average = (n1 + n2 + n3) / 3;
  return average;
};

// Q2
let teamAlpha = calcAverage(43, 21, 73);
console.log(teamAlpha);

let teamSpartan = calcAverage(63, 55, 47);
console.log(teamSpartan);

let alphaAverage2 = calcAverage(87, 55, 39);
console.log(alphaAverage2);

let spartanAverage2 = calcAverage(21, 33, 2);
console.log(spartanAverage2);

// Q3
let checkWinner = (aveAlpha, aveSpartan) => {
  if (aveAlpha >= aveSpartan * 2) {
    console.log("Alpha wins " + "(" + aveAlpha + " vs " + aveSpartan + ")");
  } else if (aveSpartan >= 2 * aveAlpha) {
    console.log("Spartan wins " + "(" + aveSpartan + " vs " + aveAlpha + ")");
  } else {
    console.log("It's A Tie 🏆");
  }
  return;
};

// Q4
// TEST DATA 1
checkWinner(teamAlpha, teamSpartan);

// TEST DATA 2
checkWinner(alphaAverage2, spartanAverage2);

// ================================================================================
// 20th April 2023
// ================================================================================

// Higher Order Functions (forEach, map, filter, find, findIndex, reduce)
for (let i = 0; i < DATA.length; i++) {
  console.log(DATA[i]);
}

// forEach()
// It doesn't return a new array
// It loops
DATA.forEach((datum) => {
  console.log(datum);
});

// Map method
// It returns an array
// It doesn't change the size of the original array
// It uses values from the original Array
// It loops
let anotherPerson = PEOPLE.map((person) => person);
console.log(anotherPerson);

// filter()
// It loops
// It returns based on a condition
let filteredPerson = PEOPLE.filter(function (person) {
  return person.name === "Christy";
});
console.log(filteredPerson);

// findIndex()
let itemidx = DATA.findIndex((idx) => {
  return idx.id === 2;
});

console.log(itemidx);

let item = DATA.find(function (singleItem) {
  return singleItem.id === 1;
});
console.log(item);

// reduce()
// It returns a callback for each element of an array
// The difference here is that 'reduce()' passes the result of this callback(the accumulator) from one array element to another.
const sum = NUMBERED.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log(sum);

let countries = ["Nigeria", "Egypt", "Cameroon", "France"];

// =============================================================
let newCountries = countries.map((country) => country);
console.log(newCountries);

// ==============================================================
let filteredCountry = countries.filter((country) => country === "Egypt");
console.log(filteredCountry);

// ==============================================================
let index = countries.findIndex((country) => country === "Cameroon");
console.log(index);

// Math Object
let floor = 4.9999;
let floorResult = Math.floor(floor);
console.log(floorResult);

let ceil = 5.8888;
let ceilResult = Math.ceil(ceil);
console.log(ceilResult);

let round = 7.2222;
let roundResult = Math.round(round);
console.log(roundResult);

let pow = Math.pow(2, 2);
console.log(pow);
console.log(2 ** 2);

let random = Math.round(Math.random() * 6);
console.log(random);

//===================================================
// ASSIGNMENT
// TAKE HOME 1
// Q1
let samData = {
  fullName: "Samuel",
  mass: 76,
  height: 1.99,
  calcBMI: function () {
    let BMI = (this.mass / this.height) ** 2;
    return BMI;
  },
};

let samuelBMI = Math.round(samData.calcBMI());
console.log(samuelBMI);

let christyData = {
  fullName: "Christiana",
  mass: 80,
  height: 2.1,
  calcBMI: function () {
    let BMI = (this.mass / this.height) ** 2;
    return BMI;
  },
};

let christianaBMI = Math.round(christyData.calcBMI());
console.log(christianaBMI);

// Q3
if (samuelBMI > christianaBMI) {
  console.log(
    `Sam's BMI (${samuelBMI}) is higher than Christy's BMI (${christianaBMI})`
  );
} else {
  console.log(
    `Christy's BMI (${christianaBMI}) is higher than Sam's BMI (${samuelBMI})`
  );
}

// TAKE HOME 2
const companies = [
  { name: "company One", category: "Finance", start: 1981, end: 2003 },
  { name: "company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "company Eight", category: "technology", start: 1981, end: 1989 },
];

// Q1
let companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Q2
let oldCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(oldCompanies);

// Q3
const age = [30, 15, 10, 5, 40, 80, 2, 20, 21, 25];

let adults = age.filter((people) => people >= 21);
console.log(adults);

// TAKE HOME 4
// Q1
let billValue = 275;
// let billValue = 40;
// let billValue = 430;
let tip;

billValue >= 50 && billValue <= 300
  ? (tip = (billValue * 15) / 100)
  : (tip = (billValue * 20) / 100);

// B
console.log(
  `The bill was ${billValue}, the tip was ${tip} and the total value was ${
    billValue + tip
  }.`
);

// ================================================================================
// 25th April 2023
// ================================================================================
// Dates

// console.log(new Date().getSeconds());
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(new Date());

let date = new Date();

let dateOfYear = date.getDate();

const month = date.getMonth();
console.log(MONTHS[month]);

const day = date.getDay();
console.log(DAYS[day]);

let fullYear = date.getFullYear();
console.log(fullYear);

let hour = date.getHours();
console.log(hour);

let minute = date.getMinutes();
console.log(minute);

let second = date.getSeconds();
console.log(second);

let statementOfYear = `${DAYS[day]} ${MONTHS[month]} ${dateOfYear} ${fullYear} ${hour}:${minute}:${second}`;
console.log(statementOfYear);

// Timers
// setTimeout() vs setInterval()

function coloured() {
  console.log("This is a function.");
}

setTimeout(coloured, 5000);

// setTimeout(() => {
//   console.log("This is a function.");
// }, 3000);

// let colours = function () {
//   console.log("Blue");
// };
// setInterval(colours, 5000);

// let interval = setInterval(() => {
//   let date = new Date();
//   console.log(date);
// }, 3000);
