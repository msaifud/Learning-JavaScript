//  //let x = 5; // or use var; however if dont use anything this
//  // it is automatically part of the global object
//  //console.log(x);
// //console.log(global.x) ; // this is because we used 'let' to
// //defined x; thus it is not apart of the global scope leading to an output of
// // undefined
//  /*
//  even if you declare and initialize a variable within a function
//  if you do not use and specific data type before typing the variable
//  then its scope will be throughout the whole code
//  meaning it is automatically added to the global object
//   */
//
//  /*
//  using "use strict" we can prevent this
//   */
//
//  "use strict";
//  x = 5; // using a data binding type you can then use this
//
//  console.log("x = " +x); // Reference Error ; adding the data type at the
//  // bottom it hoisted the variable declaration to the top of the scope
// console.log("global.x  ="+ global.x);
//  var x;
// //IIFE; Immediately - Invoked Function Expressions
//
//
//  (
//      function sayHello (){
//          console.log("Hello")
//      }
//
//  )();// '()' calls the function without the extra mess!
//  (function (x){
//      console.log(x/2);
//
//  }
//  )(4);
// //Above and Below both are the same thing
//  (
//      x => {console.log(x / 2);}
//  )(4);
//
//
// class CourseClass {
//     constructor(name, hrs) {
//         this.name = name;
//         this.hrs = hrs;
//
//     }
//     showInfo(){
//         console.log(this.name + " - " + this.hrs);
//     }
//
// }
//
// var course1 = new CourseClass("Calc", 3);
// course1.showInfo();

/*
 Async programming is used to allow the program to continue running while
 an action is taking place

 where as

 Sync programming stops the program from running while an action is taking
 place; only once the action is done the program will continue to run
 */


// function doHomework (subject,callback){
//     console.log(`starting my ${subject} homework`);
// }
// doHomework(`javascript`);


// let numbers = [3,6,7,8,9];
// let halfNumbers = [];
//
// function splitToHalf(item){
//     halfNumbers.push(item/2);
// }
// numbers.forEach(splitToHalf);
// console.log(halfNumbers);
//
//
// // output[1.5,3,3.5,4,4.5]
// setTimeout(function (){
//     console.log("hello");
// }, 500)
//
// /*
// then you can rewrite this as
// setTimeout(()=>console.log("hello"), 1500)
//  */
//
// setTimeout(()=>console.log("how about you"), 2000)
//
//
// setTimeout(()=>console.log("hello, good morning"), 1000)
// setTimeout(()=>console.log("Im Jack"),1500 )

function noisy (f){
    return (...args) =>{
        console.log("calling with" + args);
    }
}