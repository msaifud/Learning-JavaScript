class Shape {
    constructor(newX, newY) {
        let __x;
        let __y;

        this.setX = function (x) {
            // to avoid assigning the x coordinate to a negative number
            __x = (x > 0) ? x : 0;
        };

        this.setY = function (y) {
            __y = (y > 0) ? y : 0;
        };

        this.getX = function () {
            return __x;
        };

        this.getY = function () {
            return __y;
        };

        this.setX(newX);
        this.setY(newY);
    }

    showPoint() {
        console.log(this.getX() + ', ' + this.getY())
    }

}

// test the shape class
let s = new Shape(3, 6);
s.showPoint();

s.setX(-5);
s.setY(8);

console.log("the new x value is: " + s.getX() + ", and the new y value is: " + s.getY());


// check if we can access the private members
console.log(s.__x);     // supposed to return undefined because we can't


// task 2
class Square extends Shape {
    //Should have constructor method
    constructor(x, y, newLength) {
        super(x, y);

        let _length;

        this.setLength = (length) => {
            _length = length > 0 ? length : 1
        };

        this.getLength = () => {
            return _length;
        };

        this.setLength(newLength);
    }
/*
  *
  *  @override
*/
    draw() {
        super.draw();
        this.createHorizontalOffset();

        //First line of square drawn
        console.log("* ", repeat(this.getX()));

        // Loop and draw the two sides and the inner
        for (let i = 2; i < this.getX(); i++) {
            console.log("* " + "   ".repeat(this.getX() - 2) + " * ");
        }

        console.log("*  ".repeat(this.getX()));

    }
}

class Triangle extends Shape {
    //Constructor
    constructor(x, y, height) {
        super(x, y);

        let _height;

        this.setHeight = (height) => {
            _height = height > 0 ? height : 1;
        };
        this.getHeight = () => {
            return _height;
        };
        this.setHeight(height);
    }
/*
    @override
*/
    draw() {
        super.draw();

        let triangle = "";

        let offset = (n) => {
            let empytspace = "";
            for (let i = 0; i < n; i++) {
                emptyspace += " ";
            }
            return emptySpace;
        };

        for (let i = 0; i < this.getX(); i++) {
            let line = "\n" + offset(this.getX() - i);

            for (let j = 0; j < ((i * 2) + 1); j++)
                line += "*";

            triangle += line;
        }

        console.log += line;

    }

}


