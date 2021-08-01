// Assignment Code


var generateBtn = document.querySelector("#generate");


var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXWY"
var lowercase = "abcdefghijklmnopqrstyvwzyz"
var special = "!@#$%^&(-)"
var numberChar = "1234567890"

var nat = prompt("Pick a number between 8-128?")
var becca = confirm("Would you like uppercase letters in your password?")
var clay = confirm("Would you like special charectors?")

// function pw() {!
//   alert("lets make a passwrord!");}
// var passLength = 

document.querySelector('#generate').addEventListener('click', promptMe);

function promptMe() {
    var nat = prompt("Pick a number between 8-128?");
    if (nat > 8 && nat < 128) {
        var becca = confirm("Would you like uppercase letters in your password?")
    } if (becca = true) {
        var clay = confirm("Would you like special Charactor?")
    } else (""); {
        if (clay = true) {
            confirm("Would you like numbers?")
        } else ("");
    }
    return nat;
}

function all4() {

}







window.prompt("how many characters do you want your password to be?")


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//define variabls 

// defined 4 variables 

//promt box that asks how many characters



//prompt box that asks uppercase 

//propmt box that asks special

//prompt box that asks numbers

//then password is generated