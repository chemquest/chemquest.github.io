document.getElementById("moat").addEventListener("load", moatColorRandom());
var pH = 7;
var ableToSail = false;
function moatColorRandom() {
    pH = Math.floor(Math.random() * (10 - 3 + 1) + 3);
    if(pH==7) {
        moatColorRandom();
    }
   changeColor(); 
}
function changeColor() {
    switch(pH) {
        case 3:
            document.getElementById('moat').setAttribute('fill', "#f75c80");
            break;
        case 4:
            document.getElementById('moat').setAttribute('fill', "#f7955c");
            break;
        case 5:
            document.getElementById('moat').setAttribute('fill', "#f7bc5c");
            break;
        case 6:
            document.getElementById('moat').setAttribute('fill', "#f7dd5c");
            break;
        case 7:
            document.getElementById('moat').setAttribute('fill', "#319466");
            break;
        case 8:
            document.getElementById('moat').setAttribute('fill', "#03989e");
            break;
        case 9:
            document.getElementById('moat').setAttribute('fill', "#2163bb");
            break;
        case 10:
            document.getElementById('moat').setAttribute('fill', "#8141a8");
            break;
    }
}
function addBase() {
    if(pH<=10 && !ableToSail) {
        pH++;
        changeColor();
        if(pH==7) {ableToSail=true;}
        if (ableToSail){setSail(); }
    }
}
function addAcid() {
    if(pH>=3 && !ableToSail) {
        pH--;
        changeColor();
        if(pH==7) {ableToSail=true;}
        if (ableToSail){setSail(); }
    }
}
function setSail() {
    /*if(pH==7) {*/
        document.getElementById('wrong').style.display = "none";
        document.getElementById('correct').style.display = "block";
        document.getElementById('setSail').style.display = "none";
    /*}*/
    /*else {
        document.getElementById('correct').style.display = "none";
        document.getElementById('wrong').style.display = "block";
    }*/
}