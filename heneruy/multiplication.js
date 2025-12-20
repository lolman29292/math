// a * b = c

let mult1 = Math.round(Math.random() * digits);
let mult2 = Math.round(Math.random() * digits);
let multans = mult1 * mult2;
let multtext;

function changemult1(){
    let mult1 = Math.round(Math.random() * digits);
    if(mult1 === 0){
        changemult1();
    }
    return mult1;
}

function changemult2(){
    let mult2 = Math.round(Math.random() * digits);
    if(mult2 === 0){
        changemult2();
    }
    return mult2;
}

function changemultans(){
    multans = mult1 * mult2;
    return multans;
}

function changevarsmult(){
    mult1 = changemult1();
    console.log("mult1 = " + mult1);
    mult2 = changemult2();
    console.log("mult2 = " + mult2);
    multans = changemultans();
    console.log("multans = " + multans);
    multtext = "What is " + mult1 + " x " + mult2 + "?";
    console.log("multtext = " + multtext);
}

function checkmult(){
    let answer = Number((document.getElementById("answer")).value);
    console.log("answer = " + answer);

    if(answer === multans){
        document.getElementById("answer").value = ""; //reset text
        console.log("YES!");
        
        changevarsmult();
        
        document.getElementById("question").textContent = multtext;
        
        changescore()
    } else {
        console.log("NO! " + answer + " is not " + multans);
    }
}

function changedifficultymult(){
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
    
    changevarsmult();
    
    document.getElementById("question").textContent = multtext;
    return digits;
}