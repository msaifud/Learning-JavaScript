/*
console.log("This is the first line\nAnd this is the second line");
console.log("con"+"crete")
var x = 13, y = 4;
let caught = 5*5;
// let is a type of binding; the above statment creates a binding called caught and
// it catches the number produced by 5 multiplied by 5
let theNumber = 5
console.log("your Number is the square root of " + theNumber*theNumber);

if (x!=13){
    console.log(y);
}
else {
    console.log(15)
}
let k = 0;
while (k<=11){
    k= k+2;
    console.log(k);
}

 const square = function(x){
    return x*x;
 };
console.log(square(4));

const power = function(base, exponent){
    let result = 1;
    for (let counter = 0; counter < exponent; counter++){
        result *= base;
    }
    return result;
}
console.log(power(2,10));
// the difference between var and let is that if you use let to define
// something within a black they are only avaliable to the block thus being
//local however if the same is done with var; the variable is still available
// throughout the function
function greet(who){
    console.log("Hello "+ who)
}
greet ("harry");
console.log("bye");

let cow = function(){
    console.log("something");
};
 cow();
let cow2 = cow;
cow2();


let multiplier = function(factor){
    let innerMultiplier = function(value){
        return factor * value;
    }
    return innerMultiplier;
}

let twice = multiplier (3);
console.log(twice(4));

let list = [3,5,6];
console.log(list.reduce((a,b)=> a*b));

let powerWithRecursion = function (base, power){
    if (power==0)
        return 1;
    else
        return base * powerWithRecursion(base, power-1);
}

console.log(powerWithRecursion(5,3));

let listOfNumbers = [1,2,3,4];


for (let i = 0; i<listOfNumbers.length;i++){
    console.log(listOfNumbers[i]);

}

let course1 = {
    name: "Scripting Languages" ,
    "credit hours":3,
    classroom: "SEB2200"
}
console.log(course1.name);
course1.name = "JavaScript";
console.log(course1.name);
console.log(course1["credit hours"])
console.log(course1["credit hours"] = 2)
console.log(course1["credit hours"]);
console.log(course1.classroom);


function reduce (array, combine, start){
    let current = start;
    for (let element of array){
        current = combine(current, element);
    }
    return current;

}
console.log(reduce([1,2,3,4], (a,b)=> a+b), 0);

function greaterThan(n){
    return m =>(m<n);

}
let greaterThan10 = greaterThan(10)
console.log(greaterThan10(11));
console.log([1,2,3,4].reduce((a,b)=> a+b));
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

let coursePrototype = {
    name: "",
    "credit hours" :"",
    classroom: "",
    evaluation:{
        homework: "",

    },
    homeworkGrades:[],
    printGrades: function(){
        console.log(this.homeworkGrades);
    }

}

let course1 = Object.create(coursePrototype);
course1["credit hours"] = "names";
console.log(course1["credit hours"]);
course1.evaluation.homework = "names in homework";
console.log(course1.evaluation.homework);


let rabbit = {};
rabbit.speak = function(line){
    console.log(`The rabbit says '${line}'`);
}

rabbit.speak("Im Alive");
let object = new class {getWord(){return "Paris";}};
console.log(object.getWord());

rabbit.prototype.toString = function(){
    return `a '${this.type}' rabbit`;

};
console.log(String(blackRabbit));
*/
function cool(){

     console.log("this is a method");

}
cool();





let course1 = {

    statements: "cows, ninjas and chocolate cookies",

}
console.log(course1.statements);
