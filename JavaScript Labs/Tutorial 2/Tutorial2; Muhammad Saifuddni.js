// Task 1: Reassigning funcitons to different binding names
let printHello = function (name)
{
    let message = "Hello";
    console.log(message + " " + name);
};

let printGreeting = printHello;

printGreeting("Muhammad");

//Task 2: Passing functions as arguments to other functions
let printVertical = function (StringToBePrinted)
{
    for(i = 0; i < StringToBePrinted.length; i++)
    {
        console.log(StringToBePrinted.charAt(i));
    }
};

//printVertical("muhammad");

let printWithSpaces = function (StringToBePrinted)
{
    let result = " ";

    for (i = 0; i < StringToBePrinted.length; i++)
    {
        result = result + StringToBePrinted.charAt(i) + " ";
    }

    console.log(result);
};
//printWithSpaces("muhammad");

let printInReverse = function (StringToBePrinted)
{
    let result = "";

    for(i = StringToBePrinted.length; i >= 0; i--)
    {
        result = result + StringToBePrinted.charAt(i);
    }

    console.log(result);
};
//printInReverse("muhammad");

let genericPrinter = function (StringToBePrinted, printingFunction)
{
    printingFunction(StringToBePrinted);
};

genericPrinter("Hi Everybody", printInReverse);
genericPrinter("Hi Everybody", printVertical);
genericPrinter("HiEverybody", printWithSpaces);

//Task 3: Returning functions from other functions
let calenderName = function (MonthOrDay)
{
    let monthName = function(number)
    {
        let month = "";
        switch(number)
        {
            case(1):
                month = "January";
                break;
            case(2):
                month = "February";
                break;
            case(3):
                month = "March";
                break;
            case(4):
                month = "April";
                break;
            case(5):
                month = "May";
                break;
            case(6):
                month = "June";
                break;
            case(7):
                month = "July";
                break;
            case(8):
                month = "August";
                break;
            case(9):
                month = "September";
                break;
            case(10):
                month = "October";
                break;
            case(11):
                month = "November";
                break;
            case(12):
                month = "December";
                break;
            default:
                month = "Unknown";
        }

        return "_m" + month;
    };

    let dayName = function(number)
    {
        let day = "";
        switch(number)
        {
            case(1):
                day = "Monday";
                break;
            case(2):
                day = "Tuesday";
                break;
            case(3):
                day = "Wednesday";
                break;
            case(4):
                day = "Thursday";
                break;
            case(5):
                day = "Friday";
                break;
            case(6):
                day = "Saturday";
                break;
            case(7):
                day = "Sunday";
                break;
            default:
                day = "Unknown";
        }

        return "_d" + day;
    };

    if (MonthOrDay == 'm')
    {
        return monthName;
    }

    else
    {
        return dayName;
    }
};

let findNameOfTheMonth = calenderName('m');
console.log(findNameOfTheMonth(6));

let findNameOfTheDay = calenderName('d');
console.log(findNameOfTheDay(4));

//Task 4: Returning functions from other functions
let powerOf = function(powerfactor)
{
    let raiseToPower = function(base)
    {
        result = 1;

        for(i = 0; i < powerfactor; i++)
        {
            result = result * base;
        }

        return result;
    };

    return raiseToPower;
};

let powerOfTwo = powerOf(2);
console.log(powerOfTwo(5));

let powerOfThree = powerOf(3);
console.log(powerOfThree(5));

let powerOfFour = powerOf(4);
console.log(powerOfFour(5));