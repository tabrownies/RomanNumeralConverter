//read in roman numeral, eventually replace this with an HTML5 interface
//let romanNumString = prompt("Enter a roman numeral");
//a function to evalutate the string
function evalutateRomanNum(romanNumString) {
    //I'll start with a basic aproach
    let sum = 0;
    //change to uppercase
    romanNumString = romanNumString.toUpperCase();
    let subtractor = 0;
    for (let index = 0; index < romanNumString.length; ++index) {
        //this ensures that the subtraction comparsions don't fail at the end of the string
        if (index + 1 == romanNumString.length) {
            sum += convertRomanCharToValue(romanNumString[index]) - subtractor;
            subtractor = 0;
        } else {
            if (convertRomanCharToValue(romanNumString[index]) < convertRomanCharToValue(romanNumString[index + 1])) {
                //this error is thown if a symbol representing 10^x precedes a symbol larger than 10^(x+1)
                //I can't tell by the instructions if it is supposed to be thrown by VX = 5 because V=5. From what I read I think that VX is legal, but I'll check back
                if (convertRomanCharToValue(romanNumString[index]) < convertRomanCharToValue(romanNumString[index + 1]) / 10) {

                    let error = `${romanNumString[index+1]} cannot be preceded by ${romanNumString[index]}`;
                    throw error;
                }
                subtractor = convertRomanCharToValue(romanNumString[index]);
            } else {
                sum += convertRomanCharToValue(romanNumString[index]) - subtractor;
                subtractor = 0;
            }
        }

    }
    return sum;
}

function convertRomanCharToValue(romanChar) {
    let value = 0;
    switch (romanChar) {
        case 'I':
            value = 1;
            break;
        case 'V':
            value = 5;
            break;
        case 'X':
            value = 10;
            break;
        case 'L':
            value = 50;
            break;
        case 'C':
            value = 100;
            break;
        case 'D':
            value = 500;
            break;
        case 'M':
            value = 1000;
            break;
        default:
            throw "INVALID ROMAN NUMERAL";
            break;
    }
    return value;
}
//dummy calls
//alert(convertRomanCharToValue('I'));
try {

    alert(evalutateRomanNum('cc'));
} catch (error) {
    alert(error);
}