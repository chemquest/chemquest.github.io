
function changeImage() {
    /*if (document.getElementById('newmandoor').getAttribute('src') === 'newmandoorframes/newmandoorframe1.png') {
        document.getElementById('newmandoor').src = 'newmandoorframes/newmandoorframe6.png';
    }
    else { //if (document.getElementById("newmandoor").src == "newmandoorframe6")
        document.getElementById('newmandoor').src = 'newmandoorframes/newmandoorframe1.png';
    }*/
        if(document.getElementById('newmandoor').getAttribute('src') === 'newmandoorframes/newmandoorframe6.png') {
            document.getElementById('newmandoor').src = 'newmandoorframes/newmandoorframe1.png';
        }
        else if(document.getElementById('newmandoor').getAttribute('src') === 'newmandoorframes/newmandoorframe1.png') {
            document.getElementById('newmandoor').src = 'newmandoorframes/newmandoorframe2.png';
        }
        else if(document.getElementById('newmandoor').getAttribute('src') === 'newmandoorframes/newmandoorframe2.png') {
            document.getElementById('newmandoor').src = 'newmandoorframes/newmandoorframe3.png';
        }
        else if(document.getElementById('newmandoor').getAttribute('src') === 'newmandoorframes/newmandoorframe3.png') {
            document.getElementById('newmandoor').src = 'newmandoorframes/newmandoorframe4.png';
        }
        else if(document.getElementById('newmandoor').getAttribute('src') === 'newmandoorframes/newmandoorframe4.png') {
            document.getElementById('newmandoor').src = 'newmandoorframes/newmandoorframe5.png';
        }
        else if(document.getElementById('newmandoor').getAttribute('src') === 'newmandoorframes/newmandoorframe5.png') {
            document.getElementById('newmandoor').src = 'newmandoorframes/newmandoorframe6.png';
        }
    
}
function checkEnergy() {
    if(document.getElementById('newmandoor').getAttribute('src') === 'newmandoorframes/newmandoorframe6.png') {
        //good
        //document.getElementById('correct').show();
        document.getElementById('wrong').style.display = "none";
        document.getElementById('correct').style.display = "block";
    }
    else {
        document.getElementById('correct').style.display = "none";
        document.getElementById('wrong').style.display = "block";
    }
}