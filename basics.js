// variables and datatypes
let stringEl = "Javascript";
let intEl = 15;
let booleanEl = false;
let myArray = [1,2,6,9,4];
let lengthofArray = myArray.length;
let object = {
    sai: 92,
    greeshma: 75,
    sushanth: 87
}

console.log(typeof(stringEl));
console.log(typeof(intEl));
console.log(typeof(booleanEl));
console.log(lengthofArray)

//converting string to a number 

let floatEl = "80.3";
console.log(typeof(floatEl));

let convertedEl = parseInt(floatEl);
console.log(typeof(convertedEl))

var A = 75;
var B = 15;

//arthimetic operators

let addition = A+B;
console.log(addition);
let subtraction;
let multiplication = A*B;
console.log(multiplication);
let division = A/B;
console.log(division);
let remainder = A%B;
console.log(remainder);

//relational operators 

console.log(A>B);
console.log(A<B);
console.log(A>=B);
console.log(A<=B);
console.log(A===B);
console.log(A!==B);

//conditional statements and logical operators

if (division === 0 && typeof(A) === "number"){
    console.log(typeof(B));
} else if (division !== 0 || typeof(A) !== "number") {
    console.log(typeof(A));
}

//conditional statements

if (A > B) {
    subtraction = A-B;
    console.log(subtraction);
} 
else {
    subtraction = B-A;
    console.log(subtraction);
}

if (booleanEl === false) {
    booleanEl = true;
    console.log(booleanEl);
} 
else if (booleanEl === true) {
    booleanEl = false;
    console.log(booleanEl);
}

// loop statements 

for (let i=0; i<10; i++) {
    console.log(i);
}

for (let eachNum of myArray) {
    console.log(eachNum);
}

for (let name in object) {
    console.log("Marks of " + name + " are " + object[name])
}

let i = 0;
while (i<B) {
    console.log(i);
    i++;
}

let j = 5
do {
   console.log(j);
    j++; 
} while (j<B)