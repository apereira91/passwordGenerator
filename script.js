function generate() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialChar = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

    var add = upperCase + lowerCase + numbers + specialChar;

    var password="";

    for (var i = 0; i < add.length; i++) {
        var char = Math.floor(Math.random() * add.length);
        password += add.substring(char, char + 1);
    }

    return password;

}
var generateBtn = document.querySelector("#generate");
var passwordTxt = document.querySelector("#password");

generateBtn.addEventListener("click",function(){
    passwordTxt.value = generate();
})