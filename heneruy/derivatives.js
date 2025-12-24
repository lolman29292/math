let deriva, derivax, derivb, derivbx, derivc, derivcx, derivd, derivdx, derivtext, derivans, derivterms;


function changevarsderiv(){
    deriva = Math.floor(1 + 9 * Math.random());
    derivax = Math.floor(1 + 9 * Math.random());
    derivb = Math.floor(1 + 9 * Math.random());
    derivbx = Math.floor(1 + 9 * Math.random());
    derivc = Math.floor(1 + 9 * Math.random());
    derivcx = Math.floor(1 + 9 * Math.random());
    derivd = Math.floor(1 + 9 * Math.random());
    derivdx = Math.floor(1 + 9 * Math.random());

    if(newlevel === 0){
        derivterms = "4 terms"
        console.log(derivterms);
    }
    else{
        derivterms = document.getElementById("selectdiff").value;
    }

    if (derivterms === "4 terms"){
    derivtext = "Find the derivative of " + deriva + "x^" + derivax + " + " + derivb + "x^" + derivbx + " + " + derivc + "x^" + derivcx + " + " + derivd + "x^" + derivdx;
    derivans = derivax * deriva + "x^" + (derivax - 1) + " + " + derivbx * derivb + "x^" + (derivbx - 1) + " + " + derivcx * derivc + "x^" + (derivcx - 1) + " + " + derivdx * derivd + "x^" + (derivdx - 1);
    }
    if (derivterms === "3 terms"){
    derivtext = "Find the derivative of " + deriva + "x^" + derivax + " + " + derivb + "x^" + derivbx + " + " + derivc + "x^" + derivcx;
    derivans = derivax * deriva + "x^" + (derivax - 1) + " + " + derivbx * derivb + "x^" + (derivbx - 1) + " + " + derivcx * derivc + "x^" + (derivcx - 1);
    }
    if (derivterms === "2 terms"){
    derivtext = "Find the derivative of " + deriva + "x^" + derivax + " + " + derivb + "x^" + derivbx;
    derivans = derivax * deriva + "x^" + (derivax - 1) + " + " + derivbx * derivb + "x^" + (derivbx - 1);
    }
    if (derivterms === "1 term"){
    derivtext = "Find the derivative of " + deriva + "x^" + derivax;
    derivans = derivax * deriva + "x^" + (derivax - 1);    
    }
    console.log(derivans);
    console.log(derivterms);
    document.getElementById("question").textContent = derivtext;
}

function checkderiv(){
    answer = document.getElementById("answer").value;
    if(derivans === answer){
        changevarsderiv();
        console.log("YES!");
        document.getElementById("answer").value = "";
    }
    else{
        console.log("NO! " + answer + "is not " + derivans);
    }
}
