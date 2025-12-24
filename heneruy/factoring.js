let faca, facax, facb, facbx, facc, faccx, facd, facdx, factortext, factorans, factorterms;

function changevarsfactor(){
    faca = Math.floor(1 + 9 * Math.random());
    facax = Math.floor(1 + 9 * Math.random());
    facb = Math.floor(1 + 9 * Math.random());
    facbx = Math.floor(1 + 9 * Math.random());
    facc = Math.floor(1 + 9 * Math.random());
    faccx = Math.floor(1 + 9 * Math.random());
    facd = Math.floor(1 + 9 * Math.random());
    facdx = Math.floor(1 + 9 * Math.random());

    if(newlevel === 0){
        factorterms = "4 terms"
        console.log(factorterms);
    }
    else{
        factorterms = document.getElementById("selectdiff").value;
    }

    if(factorterms === "4 terms"){
        factortext = "Factor (" + faca + "x + " + facax + ")(" + facb + "x + " + facbx + ")(" + facc + "x + " + faccx + ")(" + facd + "x + " + facdx + ")";
        factorans = faca * facb * facc * facd + "x^4+" + (faca * facb * (facc * facdx + faccx * facd) + (faca * facbx + facax * facb) * facc * facd) + "x^3+" + (faca * facb * faccx * facdx + (faca * facbx + facax * facb) * (facc * facdx + faccx * facd) + facax * facbx * facc * facd) + "x^2+" + ((faca * facbx + facax * facb) * faccx * facdx + facax * facbx * (facc * facdx + faccx * facd)) + "x+" + (facax * facbx * faccx * facdx);
    }
    if(factorterms === "3 terms"){
        factortext = "Factor (" + faca + "x + " + facax + ")(" + facb + "x + " + facbx + ")(" + facc + "x + " + faccx + ")";
    }   factorans = faca * facb * facc + "x^3+" + (faca * facb * faccx + (faca * facbx + facax * facb) * facc) + "x^2+" + ((faca * facbx + facax * facb) * faccx + (facax * facbx * facc)) + "x+" + (facax * facbx * faccx);
    if(factorterms === "2 terms"){
        factortext = "Factor (" + faca + "x + " + facax + ")(" + facb + "x + " + facbx + ")";
        factorans = faca * facb + "x^2+" + (faca * facbx + facb * facax) + "x+" + (facax * facbx);
    }
    console.log(factorans);
    console.log(factorterms);
    document.getElementById("question").textContent = factortext;
}

function checkfactor(){
    answer = document.getElementById("answer").value;
    if(factorans === answer){
        changevarsfactor();
        console.log("YES!");
        document.getElementById("answer").value = "";
    }
    else{
        console.log("NO! " + answer + "is not " + factorans);
    }
}