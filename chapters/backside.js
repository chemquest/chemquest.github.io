function changeImage() {
        if(document.getElementById('apparition').getAttribute('src') === 'backsideattackrotations/apparitionr1.png') {
            document.getElementById('apparition').src = 'backsideattackrotations/apparitionr2.png';
        }
        else if(document.getElementById('apparition').getAttribute('src') === 'backsideattackrotations/apparitionr2.png') {
            document.getElementById('apparition').src = 'backsideattackrotations/apparitionr3.png';
        }
        else if(document.getElementById('apparition').getAttribute('src') === 'backsideattackrotations/apparitionr3.png') {
            document.getElementById('apparition').src = 'backsideattackrotations/apparitionr1.png';
        }
    
}
function nucAttack() {
    if(document.getElementById('apparition').getAttribute('src') === 'backsideattackrotations/apparitionr2.png') {
        document.getElementById('wrong').style.display = "none";
        document.getElementById('correct').style.display = "block";
    }
    else {
        document.getElementById('correct').style.display = "none";
        document.getElementById('wrong').style.display = "block";
    }
}