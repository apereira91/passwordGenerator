var txtarea = document.getElementById("password");
var copyBtn = document.getElementById("copy");
var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", function(){
    txtarea.value="";

    var length = prompt("How many characters would you like for your password?");
    var specialChar = confirm("Would you like to include special characters?");
    var numChar = confirm("Would you like to use numbers?");
    var upperCaseChar = confirm("Would you like to use uppercase alphabets?");
    var lowerCaseChar = confirm("Would you like to use lowercase alphabets?");
    
    var temps = "";
    var password = "";

    if ((length < 8) || (length > 128)) {
        alert("Password must at least 8 characters and less than 128 characters");
    }

    if (specialChar) {
        specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        temps += specialChar;
    }

    if (numChar) {
        numChar = '0123456789';
        temps += numChar;
    }

    if (upperCaseChar) {
        upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        temps += upperCaseChar;
    }
    
    if (lowerCaseChar) {
        lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
        temps += lowerCaseChar;
    }
    //temps = '!@#$%^&*()_+~`|}{[]\:;?><,./-=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < length; i++) {
        password += temps.charAt(Math.floor(Math.random() * temps.length));
    }

    txtarea.value += password;

});

copyBtn.addEventListener("click", function() {
    txtarea.select();
    document.execCommand("copy");

    alert("Password has been copied to clipboard");
})