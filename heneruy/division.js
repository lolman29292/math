// a * b = c
// c / b = a
let divtext;
function changevarsdiv(){
    changevarsmult();
    divtext = "What is " + multans + " / " + mult2 + "?";
    console.log("multtext = " + multtext);
}

function checkdiv(){
    let answer = Number((document.getElementById("answer")).value);
    console.log("answer = " + answer);

    if(answer === mult1){
        document.getElementById("answer").value = ""; //reset text
        console.log("YES!");
        
        changevarsdiv();
        
        document.getElementById("question").textContent = divtext;

        changescore()
    } else {
        console.log("NO! " + answer + " is not " + mult1);
    }
}

function changedifficultydiv(){
    let dropdowndiff = document.getElementById("selectdiff");
    diff = dropdowndiff.value;
    
    if (diff === "4 digits"){
    digits = 10000;
    console.log(digits);
    }
    if (diff === "3 digits"){
    digits = 1000;
    console.log(digits);
    }
    if (diff === "2 digits"){
    digits = 100;
    console.log(digits);
    }
    if (diff === "1 digit"){
    digits = 10;
    console.log(digits);
    }
    console.log("digits = " + digits);
    
    changevarsdiv();
    
    document.getElementById("question").textContent = divtext;
    return digits;
}