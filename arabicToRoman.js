function evaluateArabicNum(arabicNum) {
    //This throws an error for invalid input values, namely non numbers or floating point numbers
    arabicNum = Number(arabicNum)
    if (arabicNum !== parseFloat(arabicNum)) {
        throw "ENTER AN ARABIC NUMERAL";
    }
    if (arabicNum !== parseInt(arabicNum)) {
        throw "ENTER AN INTEGER VALUE";
    }
    //starter place for roman numeral
    let romanNum = '';

    if (arabicNum == 0) {
        throw "ENTER A VALUE GREATER THAN 0";
    } else {
        while (arabicNum > 0) {
            /*
                Algorithm:
                    Loop until arabicNum==0;
                    With each loop figure out what roman numerals to append to romanNum and subtract their value from arabicNum
            */
            if (arabicNum >= 1000) {
                romanNum += 'M';
                arabicNum -= 1000;
            } else if (arabicNum >= 900) {
                romanNum += 'CM';
                arabicNum -= 900;
            } else if (arabicNum >= 500) {
                romanNum += 'D';
                arabicNum -= 500;
            } else if (arabicNum >= 400) {
                romanNum += 'CD';
                arabicNum -= 400;
            } else if (arabicNum >= 100) {
                romanNum += 'C';
                arabicNum -= 100;
            } else if (arabicNum >= 90) {
                romanNum += 'XC';
                arabicNum -= 90;
            } else if (arabicNum >= 50) {
                romanNum += 'L';
                arabicNum -= 50;
            } else if (arabicNum >= 40) {
                romanNum += 'XL';
                arabicNum -= 40;
            } else if (arabicNum >= 10) {
                romanNum += 'X';
                arabicNum -= 10;
            } else if (arabicNum >= 9) {
                romanNum += 'IX';
                arabicNum -= 9;
            } else if (arabicNum >= 5) {
                romanNum += 'V';
                arabicNum -= 5;
            } else if (arabicNum >= 4) {
                romanNum += 'IV';
                arabicNum -= 4;
            } else if (arabicNum >= 1) {
                romanNum += 'I';
                arabicNum -= 1;
            }
        }
    }
    return romanNum;
}