let digits = 10000;
let diff = "4 digits";
let answer;
let dropdowndiff;

let rand = Math.round(Math.random() * digits); //set random number
console.log("rand = " + rand);

if(rand < 1){
    changerand();
}

function changerand(){
    rand = Math.round(Math.random() * digits); //change random number
        if(rand < 1){
        return changerand();
    }
    return rand;
}

let add1 = rand - Math.round(Math.random() * digits); //set 1st add
function positive(){
    add1 = rand - Math.round(Math.random() * digits); //make sure its pos
  
    if(add1 < 1){
        return positive();
    }
    return add1;
}
if(add1 < 1){
add1 = positive();
}
console.log("add1 = " + add1);

function changeadd1(){
    add1 = rand - Math.round(Math.random() * digits); //change 1st add

    function positive(){
        add1 = rand - Math.round(Math.random() * digits); //make sure its pos
    
        if(add1 < 1){
            return positive();
        }
            return add1;
    }
    if(add1 < 1){
    add1 = positive();
    }
    return add1;
}

let add2 = rand - add1; //set 2nd add
console.log("add2 = " + add2);

function changeadd2(){
    add2 = rand - add1; //change 2nd add
    return(add2);
}

let additiontext = "What is " + add1 + " + " + add2 + "?";
console.log("additiontext = " + additiontext)
function changevarsaddition(){
        rand = changerand(); //change vars
        console.log("rand = " + rand);
        add1 = changeadd1();
        console.log("add1 = " + add1);
        add2 = changeadd2();
        console.log("add2 = " + add2);
        additiontext = "What is " + add1 + " + " + add2 + "?";
        console.log("additiontext = " + additiontext)
}

function checkaddition(){
    answer = Number((document.getElementById("answer")).value);
    console.log("answer = " + answer);

    if(answer === rand){
        document.getElementById("answer").value = ""; //reset text
        console.log("YES!");
        
        changevarsaddition();
        
        document.getElementById("question").textContent = additiontext;

        changescore();
    } else {
        console.log("NO! " + answer + " is not " + rand);
    }
}

function changedifficultyaddition(){
    dropdowndiff = document.getElementById("selectdiff");
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
    
    changevarsaddition();
    
    document.getElementById("question").textContent = additiontext;
    return digits;
}