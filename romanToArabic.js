//read in roman numeral, eventually replace this with an HTML5 interface
//let romanNumString = prompt("Enter a roman numeral");
//a function to evalutate the string
function evaluateRomanNum(romanNumString) {
    //I'll start with a basic aproach
    let sum = 0;
    //change to uppercase
    romanNumString = romanNumString.toUpperCase();
    let subtractor = 0;
    for (let index = 0; index < romanNumString.length; ++index) {
        //this ensures that the subtraction comparsions don't throw errors at the end of the string
        if (index + 1 == romanNumString.length) {
            sum += convertRomanCharToValue(romanNumString[index]) - subtractor;
            subtractor = 0;
        } else {
            //revisit this logic
            if (convertRomanCharToValue(romanNumString[index]) < convertRomanCharToValue(romanNumString[index + 1])) {
                //this error is thown if a symbol representing 10^x precedes a symbol larger than 10^(x+1)
                //I can't tell by the instructions if an error is supposed to be thrown by VX = 5 because V=5. From what I read I think that VX is illegal and should throw an error
                if (!canPrecede(romanNumString[index], romanNumString[index + 1])) {
                    let error = `${romanNumString[index+1]} cannot be preceded by ${romanNumString[index]}`;
                    throw error;
                }
                //this error is thrown if two subracting pre-digits are present. The second condition is present because this error checking won't work if index is pointing to the first charecter in the string.
                if (index != 0 && convertRomanCharToValue(romanNumString[index]) >= convertRomanCharToValue(romanNumString[index - 1])) {
                    throw "SUBTRACTIVE NOTATION HAS MORE THAN TWO SUBTRACTORS"
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

function canPrecede(firstRomanChar, secondRomanChar) {
    //This returns true because if the first character has a larger value than the second, it can precede the second
    if (convertRomanCharToValue(firstRomanChar) > convertRomanCharToValue(secondRomanChar)) {
        return true;
    }
    //These return false because if, for example, V precedes X (VX) has the same value as V, which is ambiguous
    if (firstRomanChar == 'V' || firstRomanChar == 'L' || firstRomanChar == 'D') {
        return false;
    }
    return convertRomanCharToValue(firstRomanChar) * 10 > convertRomanCharToValue(secondRomanChar) / 10
}
//dummy calls
//alert(convertRomanCharToValue('I'));
try {
    //alert(evalutateRomanNum('lc'));
    //alert(canPrecede("C", "M"));
} catch (error) {
    alert(error);
}