let printHello = function (newString){
    let staticString = "Hello ";
    console.log(staticString+" "+ newString);

};
let printGretting = printHello;
printHello ( "Ananda!")
printGretting ("John!")