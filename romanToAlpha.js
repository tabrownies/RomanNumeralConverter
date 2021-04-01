//read in roman numeral, eventually replace this with an HTML5 interface
//let romanNumString = prompt("Enter a roman numeral");
//a function to evalutate the string
function evalutateRomanNum(romanNumString){
    //I'll start with a basic aproach
    //make it to uppercase
    let sum = 0;
    romanNumString = romanNumString.toUpperCase();
    for(romanChar of romanNumString){
        sum+=convertRomanCharToValue(romanChar);
    }
    return sum;
}
function convertRomanCharToValue(romanChar){
    let value = 0;
    switch(romanChar){
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
alert(evalutateRomanNum("Iv"));



