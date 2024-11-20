/* window.alert("Hello World"); */

document.write("<h3>Good evening all</h3>");
document.write("Hope you're having a nice one");

document.write("<p>It's a lovely evening for coding</p>");


// FOR LOOP
for(let counter=1; counter<=10; counter=counter + 1) {
    document.write("<br>", counter, "   ");
    document.write("  ", counter * 6);
}

let testVar = document.getElementsByTagName("h1").innerHTML

testVar = "Welcome to my JavaScript playground";

console.log(testVar);

// ARRAYS

let drummers = ['Larnell', 'Calvin', 'Matt', 'Tony'];

drummers[4] = 'Billy';
drummers.push('Napper');
console.log(drummers);


// FOR LOOP
let arrayLength = drummers.length;
console.log(arrayLength);
for (let drummer = 0; drummer < arrayLength; drummer++){
    console.log('Drummer no. ' + [drummer + 1] + " is " + drummers[drummer]);
}


// ARROW FUNCTIONS

// Vanilla Javascript With Parameters
function addTwoNumbers(a, b){
    return a + b;
}

// let sum = addTwoNumbers(20, 127);
// console.log(sum);



// Arrow Function With Parameters
const addNewNumbers = (a, b) => {
    return a + b
}

// let sum = addNewNumbers(20, 127);
// console.log(sum);



// Single Line Arrow Function With Parameters
const addMoreNumbers = (a, b) => a + b;
// const addMoreNumbers = (a, b) => (a + b); also valid

let sum = addMoreNumbers(20, 127);
console.log(sum);



// Implicit Returns | does not need parentheses arround the parameter
const saySomething = prompt => console.log(prompt);
saySomething('This is a test');

// Can use empty parentheses when there's no parameter provided
const sayHello = () => console.log('Hello');
sayHello();



// Returning Multiple Lines | the "code block" should be wrapped in parentheses
const returnMultiLineString = () => (
    `This is a test for multiline code
    This is fun
    Learning A lot`
)
console.log(returnMultiLineString);





// SPREAD OPERATOR & REST SYNTAX

// No Spread Operator
let arr1 = [1, 2, 3]
// assigns array to a new variable
let arr2 = arr1   
console.log("Second Array: ", arr2);



// Copying An Array
let arr3 = [4, 5, 6]
console.log('Third Array: ', arr3);
// copies array to a new variable
let arr4 = [...arr3];
console.log('Fourth Array: ', arr4);
arr4.push(7, 8);
console.log('Fourth Array: ', arr4);



// Copying An Object 
let obj1 = {a: 1, b: 2, c: 3};
// copies the first object to a new variable and pushes a new property
let obj2 = {...obj1, d: 4};
console.log(obj2);
// copies object to new variable and overied one of the properies without changing original object
let obj3 = {...obj2, d: 20};
console.log(obj3);



// Copying Only Part Of An Array/Object
let arr5 = [...arr1, { ...obj3 }, ...arr3, 'Beans', 'Soy Sauce'];
console.log(arr5);





// REST PARAMETER SYNTAX

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum1 = sumAll(1, 2, 3);
console.log(sum1);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log(sum2);

// Function using "...rest"
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (i of rest){
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum3);






// Destructuring Arrays
let ages = [23, 30, 45];
// assigning individual variables to the array indeces
// let john = ages[0];
// let mary = ages[1];
// let ben = ages[2];

// using destructuring
let [john, mary, ben] = ages;
console.log(john, mary, ben);



// Destructuring Objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
}
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);



// Destructuring Subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
// only assigns the first two values in the array
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
// skip places in the array by using commas in place of the values
let [, , maggieNative, maggieSecondary] = languages;
console.log(maggieNative, maggieSecondary);

let languages2 = {
    firstLang: "english",
    secondLang: "french",
    thirdLang: "spanish",
    fourthLang: "german"
};
// destructuring objects by matching property name
let {firstLang, secondLang} = languages2;
console.log(firstLang, secondLang);



// Using Rest Parameters
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [fav, secondFav, ...others] = fruits;
console.log(fav);
console.log(secondFav);
console.log(others);


let favFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegeterian",
    jay: "steak"
}
let {brian, anna, ...rest} = favFoods;
console.log(brian);
console.log(anna);
console.log(rest);





// MAP,FILTER & REDUCE

// Using a for loop
let nums = [2, 3, 4, 5];
let results = [];
for (num of nums){
    num *= 2;
    results.push(num)
}
console.log(results);



// Using map()
// The long way to help understand call back function and how it works
const multiplyByTwo = function(num){
    return num * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified with map()
const simplified = nums.map(function(num){return num * 2})
console.log(simplified);

// Simplified with map() & arrow function
const simple2 = nums.map(num => num * 2);
console.log(simple2);

// With objects

const students = [
    {
        id: 1,
        name: "Mark",
        profession: "Developer",
        skill: "JavaScript"
    },
    {
        id: 2,
        name: "Ariel",
        profession: "Developer",
        skill: "HTML"
    },
    {
        id: 3,
        name: "Jason",
        profession: "Designer",
        skill: "CSS"
    }
];

const newArr = students.map(student => [student.name, student.id])
console.log(newArr);


// Using simple filtering
const people = [
    {
        name: "Michael",
        age: "30"
    },
    {
        name: "Lianna",
        age: "25"
    },
    {
        name: "Paul",
        age: "32"
    },
];
const ageGroup = people.filter(person => person.age <= 25);
console.log(ageGroup);

// const paul = people.filter(person => person.name === 'Paul')
// console.log(paul);
// same as the above code | allow for a more clean and elegant looking code
const paul = people.filter(p => p.name === "Paul");
console.log(paul)




// Complex filtering
const studentInfo = [
    {
        id: 1,
        name: "Mark",
        profession: "Developer",
        skills: [
            {name: 'javascript', experience: 1},
            {name: 'html', experience: 5},
            {name: 'css', experience: 3},
        ]
    },
    {
        id: 2,
        name: "Ariel",
        profession: "Developer",
        skills: [
            {name: 'javascript', experience: 0},
            {name: 'html', experience: 4},
            {name: 'css', experience: 2},
        ]
    },
    {
        id: 1,
        name: "Jason",
        profession: "Designer",
        skills: [
            {name: 'javascript', experience: 1},
            {name: 'html', experience: 1},
            {name: 'css', experience: 5},
        ]
    },
]

// complex filtering using one code block
const candidates = studentInfo.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.experience >= 5);
    return strongSkills.length > 0;
})
console.log(candidates);

// complex fitering by calling an external function for better understanding & readabilty
const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.experience >= 5);
    return strongSkills.length > 0;
}
const candidates1 = studentInfo.filter(hasStrongSkills);
console.log(candidates);

// creating all the callback functions externally allows for a more streamlined looking code
const expLevel = skill => skill.experience >= 5;
const hasStrongSkills1 = student => students.skills.filter(expLevel) > 0;
const candidates2 = studentInfo.filter(hasStrongSkills);
// getting just the candidates name
let candidateName = candidates.map(student => student.name);
console.log(candidates2);
console.log(candidateName);





// Using reduce() function to sum up an array
const numArr = [1, 2, 3, 4, 5];
// reduce() function takes in two parameters (acc, curr) accumulator and current values
// reduce() function can also take a parameter for an initial value for the acc parameter
// if one is not specified the accumulator defaults to the first value in the array
// it is advised to always specify an inital value for the accumulator to avoid unexpected errors
let arrSum = numArr.reduce((acc, curr) => acc + curr, 0);
console.log(arrSum);



// Using reduce() function in more complex situations
const teamMembers = [
    {
        name: "Andy",
        profession: "Developer",
        experience: 5
    },
    {
        name: "Ariel",
        profession: "Developer",
        experience: 7
    },
    {
        name: "Mike",
        profession: "Designer",
        experience: 1
    },
    {
        name: "Kelly",
        profession: "Designer",
        experience: 3
    },
];

// Totalling a specifc object property
// using map() & reduce() functions
totalExperience = teamMembers.map(teamMember => teamMember.experience).reduce((acc, curr) => acc + curr, 0);
console.log(totalExperience);
// using just reduce() function
totalExp = teamMembers.reduce((acc, curr) => acc + curr.experience, 0);
console.log(totalExp);



// Grouping based on property and getting a total
const expByProf = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if(!acc[key]){
        acc[key] = curr.experience;
    } else{
        acc[key] += curr.experience;
    }
    return acc;
}, {});
console.log(expByProf);