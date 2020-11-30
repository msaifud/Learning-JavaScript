let printVertical = function (toBePinted){
    for (let i = 0;i<toBePinted.length; i++) {
        console.log(toBePinted.charAt(i));
    };

};
let printWithSpace = function (toBePinted) {
let result = "";
    for (let i = 0; i < toBePinted.length; i++) {
        result = result + toBePinted.charAt(i) + " ";

    }
    console.log(result);
    ;
}

let printReverse = function (toBePinted){
    for (let i = toBePinted.length;i>=0; i--) {
        console.log (toBePinted.charAt(i));
    };
};

printVertical("Ananda")
printReverse("Ananda")
printWithSpace("Ananda")

let genericPrinter = function (stringToBePrinted, printingFunction){
    printingFunction(stringToBePrinted);
};
genericPrinter ("hello everybody", printWithSpace)
