function potionIncorrect() {
    document.getElementById('correct').style.display = "none";
    document.getElementById('wrong').style.display = "block";
}
function potionCorrect() {
    document.getElementById('wrong').style.display = "none";
    document.getElementById('correct').style.display = "block";
}