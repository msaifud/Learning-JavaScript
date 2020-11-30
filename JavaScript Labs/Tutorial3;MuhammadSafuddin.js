// Task 1
const loopedDecimalToBin = function(Value) {
    let output = "";
    while(Value !== 0) {
        output = Value%2 + output;
        Value = Math.floor(Value/2);
    }
    return output;
};

const recursionDecimalToBin = function(Value) {
    let output = "";
    if(Value === 0) {
        return "";
    }
    else {
        return recursionDecimalToBin(Math.floor(Value / 2)) + Value % 2 + output;
    }
};

for(let i = 1; i <= 20; i++) {
    console.log("Decimal: " + i + "   Looping: " + loopedDecimalToBin(i) + "     Recursion: "
        + recursionDecimalToBin(i));
}

//Task 2
const jSONparser = function (jSONString) {
    let result = [];
    if((jSONString.charAt(0) !== "{") || (jSONString.charAt(jSONString.length - 1) !== "}")) {
        console.log("missing {}");
        return null;
    }
    jSONString = jSONString.slice(1,jSONString.length - 1);
    let jSONArray = jSONString.split(",");
    for(let element of jSONArray) {
        let splitIndex = element.indexOf(":");
        let propertyName = element.slice(0,splitIndex);
        let propertyValue = element.slice(splitIndex + 1,element.length);
        result[propertyName] = [propertyValue];
    }
    return result;
};
let firstInput = jSONparser("{x:4,y:5,z:6}");
console.log(firstInput.x);
console.log(firstInput.y);
console.log(firstInput.z);

//Task 3
const restParser = function (threshold, ...arrays) {
    let output = "";
    let checker = true;
    for(let array of arrays) {
        for(let element of array) {
            if(element < threshold) {
                checker = false;
                break;
            }
        }
        if(checker) {
            output = array;
            break;
        }
        checker = true;
    }
    console.log(output);
    console.log(...output);
};
let array1 = [1, 2, 3];
let array2 = [10, 20, 30];
let array3 = [20, 30, 40];
let array4 = [30, 40, 50];
restParser(15, array1, array2, array3, array4);
