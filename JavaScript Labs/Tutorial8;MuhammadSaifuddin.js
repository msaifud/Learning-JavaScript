// Task 1

class Shape {
    constructor(newX, newY) {
        //__x , __y are private members of the Shape class
        let __x;
        let __y;

        this.setX = function (x) { // we are setting the value of x
            // to avoid assigning the x coordinate to a negative number
            __x = (x > 0) ? x : 0;
        };
        this.getX = function () {
            return __x;  // returning x value
        };

        this.setY = function (Y) { // we are setting a value for y
            __y = (y > 0) ? y : 0;
        };
        this.getY = function () { // returning y value
            return __y;
        };
        // we will pass the x and y coordinates to the private members using the methods we created

        this.setX(newX);
        this.setY(newY);
    }

    showPoint() {
        console.log(this.getX() + ", " + this.getY()); // show the outputs of the points x and y using get.x and get.y
    }

    // create a method called createHorizontalOffset that takes an offset
    createHorizontalOffset(offset) {
        //create a space
        let horizontalOffset = "";
        // if the offset is undefined, then the value of x will be used as the offset
        let numberOffset = (offset > 0) ? offset : this.getX();
        for (let i = 0; i < numberOffset; i++) {
            //add number of spaces
            horizontalOffset = horizontalOffset + " ";
        }
        //return a string with number of horizontal empty spaces
        return horizontalOffset;
    }

    draw() {
        // prints number of empty lines vertically equals to the number of Y coordinate
        for (let i = 0; i < this.getY(); i++) {
            console.log("");
        }

    }
    // we are creating displayInfo method to print the coordinates of the of the main point in the Shape class
    displayInfo()
    {
        // output the coordinates of the main point
        return "Shape with main points at: " + this.getX() + "," + this.getY();
    }
}

class Square extends Shape{
    constructor(newX,newY,length){
        // we use the parent constructor for newX and newY
        super(newX, newY);
        // need to add functions for length
        let __length;
        // we set for length. if length is invalid (negative or zero), the output would be 1
        this.setLength = function(length){
            __length = (length>1)?length:1;
        };
        // get for length
        this.getLength = function(){
            return __length;
        };
        // we set for length
        this.setLength(length);
    }
    showPoint() {
        // override the point to include the square's length
        console.log(this.getX() + ", " + this.getY()+ " ,The length is: " + this.getLength());
    }
    draw() {
        // first we call the parent function for draw and then we override
        super.draw();
        let square = "";
        // we should have horizontal lines to be offsetted first
        let offset = this.createHorizontalOffset();
        // length of square
        for(let i = 0; i< this.getLength(); i++){
            let line = offset;
            for(let j = 0; j < this.getLength(); j++){
                // prints number of stars equal to length
                line += "*  ";
            }
            square += line + "\n";
        }
        console.log(square); // prints square
    }
    // we are creating displayInfo method to print the coordinates of the of the main point in the Square subclass
    displayInfo() {
        // output the coordinates of the main point
        return "Square " + super.displayInfo();
    }


}
let square = new Square(6,4,5);
square.draw();


// We do the same thing for Triangle but the difference that we change the variable name for length to height
class Triangle extends Shape{
    constructor(newX,newY,height){
        // we use the parent constructor for newX and newY
        super(newX, newY);
        // need to add functions for height
        let _height;
        // we set for height. if height is invalid (negative or zero), the output would be 1
        this.setHeight = function(height){
            _height =(height>1)?height:1;
        }
        // get for height
        this.getHeight = function(){
            return _height;
        }
        // we set for height
        this.setHeight(height);
    }
    showPoint() {
        // override the point to include the triangle's height
        console.log(this.getX() + ", " + this.getY()+ " ,The height is: " + this.getHeight());
    }
    draw(){
        // first we call the parent function for draw and then we override
        super.draw();
        let triangle = "";
        // we do the height of triangle. We use spaces variable to calculate the number of spaces from offset to the first star in triangle
        for(let i = 0,spaces = this.getHeight(); i<this.getHeight(); i++,spaces--) {
            // we calculate the number of spaces between X offset and the first star(the number of offset begins from the bottom of the Triangle)
            let offset = this.createHorizontalOffset(this.getX() + (spaces*3-3));
            let line = offset;
            for (var j = 0; j< ((i*2)+1); j++){
                line += "*  ";
            }
            triangle += line + "\n";
        }
        console.log(triangle);
    }
    // we are creating displayInfo method to print the coordinates of the of the main point in the Triangle subclass
    displayInfo() {
        // output the coordinates of the main point
        return "Triangle " + super.displayInfo()
    }

}
let triangle = new Triangle(6,6,4);
triangle.draw();

//--------------------------------------------------------------------------------------------


//Task 2



// plain objects is an array of objects
let plainObjects = [
    {x:5,y:6},
    {type:'Square', x:7,y:10, length:10},
    {x:8,y:9,type:'Triangle', height:50},
];

let transformPLainObjectsToShapes = function(data){
    // we will pass the array of objects to this function
    let shapes = [];
    let s;
    // we will iterate through the array to get the shapes
    for(let d of data){
        switch(d.type){
            case undefined:
                s= new Shape (d.x, d.y);
                break;
            case 'Square':
                s= new Square(d.x,d.y,d.length);
                break;
            case 'Triangle':
                s= new Triangle(d.x,d.y,d.height);
                break;
        }
        // after each iteration we will push the shape "s" into the list shapes
        shapes.push(s);
    }

    return shapes;
};
// we are calling the displayInfo method on each object in the returned array
let results = transformPLainObjectsToShapes(plainObjects);
for(let s of results)
    console.log(s.displayInfo());


//---------------------------------------------------------------------------------------------------



//Task 3 - use the higher order method .map()

results = plainObjects.map(object => (object.type === undefined)? new Shape(object.x, object.y):
    (object.type === 'Square')? new Square (object.x, object.y, object.length):
        new Triangle(object.x, object.y, object.height));

for(let s of results)
    console.log(s.displayInfo());