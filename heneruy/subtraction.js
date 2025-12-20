// a + b = c
// add1 + add2 = rand
// rand - add2 = add1

let subtractiontext;
function changevarssubtraction(){
    changevarsaddition();
    subtractiontext = "What is " + rand + " - " + add2 + "?";
    console.log(subtractiontext);
}

function checksubtraction(){
    let answer = Number((document.getElementById("answer")).value);
    console.log("answer = " + answer);

    if(answer === add1){
        document.getElementById("answer").value = ""; //reset text
        console.log("YES!");
        
        changevarssubtraction();
        
        document.getElementById("question").textContent = subtractiontext;

        changescore()
    } else {
        console.log("NO! " + answer + " is not " + add1);
    }
}

function changedifficultysubtraction(){
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
    
    changevarssubtraction();
    
    document.getElementById("question").textContent = subtractiontext;
    return digits;
}