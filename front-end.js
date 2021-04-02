function convertFromArabicToRoman(){
    try{
        document.getElementById("roman").value = evaluateArabicNum(document.getElementById("arabic").value);
        document.getElementById("error").innerHTML = 'NONE';
    }catch(error){
        document.getElementById("error").innerHTML = error;
    }   
}

function convertFromRomanToArabic(){
    try{
        document.getElementById("arabic").value = evaluateRomanNum(document.getElementById("roman").value);
        document.getElementById("error").innerHTML = 'NONE';
    }catch(error){
        document.getElementById("error").innerHTML = error;
    }
    
}