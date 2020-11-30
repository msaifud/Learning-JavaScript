//
//Task 1
//
//Create a template object to represent a complex number
let ComplexNumberPrototype = {
    real:0,
    img:0,
    print:function() {
        console.log(this.real + " + " + this.img + "i");
    }
};
//Create a function to create and assign variables to a complex number using the template object
function createComplexNumber(r, i) {
    let complex = Object.create(ComplexNumberPrototype);
    complex.real = r;
    complex.img = i;
    return complex;
}
//Use the function to create and call a complex number
let num1 = createComplexNumber(4, 6);
num1.print();
//Create a constructor function which also creates a complex number
function ConstructorFunction(r,i) {
    this.real = r;
    this.img = i;
    this.print = function() {
        console.log(this.real + " + " + this.img + "i");
    };
    //
    //Task 2
    //
    //Create an add method to add two complex numbers
    this.add = function (obj) {
        let output = Object.create(ComplexNumberPrototype);
        output.real = this.real + obj.real;
        output.img = this.img + obj.img;
        return output;
    };
    //Create a subtract method to subtract two complex numbers
    this.subtract = function (obj) {
        let output = Object.create(ComplexNumberPrototype);
        output.real = this.real - obj.real;
        output.img = this.img - obj.img;
        return output;
    };
    //Create a multiply method to multiply two complex numbers
    this.multiply = function (obj) {
        let output = Object.create(ComplexNumberPrototype);
        output.real = (this.real * obj.real) - (this.img * obj.img);
        output.img = (this.real * obj.img) + (this.img * obj.real);
        return output;
    };
    //Creating a divide method to divide two complex numbers
    this.divide = function (obj) {
        let output = Object.create(ComplexNumberPrototype);
        let divisor = (obj.real * obj.real) + (obj.img * obj.img);
        output.real = ((this.real * obj.real) + (this.img * obj.img))/divisor;
        output.img = ((this.real * obj.img) - (this.img * obj.real))/divisor;
        return output;
    };
}

//Calling each individual method and printing their results
let num2 = new ConstructorFunction(5, 7);
num2.print();
let num3 = num2.add(num1);
num3.print();
let num4 = num2.subtract(num1);
num4.print();
let num5 = num2.multiply(num1);
num5.print();
let num6 = num2.divide(num1);
num6.print();