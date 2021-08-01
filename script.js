// // Assignment Code

var generateBtn = document.querySelector("#generate");


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXWY";
var lowercase = "abcdefghijklmnopqrstyvwzyz";
var special = "!@#$%^&";
var numberChar = "1234567890";
var userChoice = "";


function thePassword() { 
    var password = passgen();
    var passwordtxt = document.querySelector("#password");
    passwordtxt.value = password;
}


generateBtn.addEventListener("click", thePassword)

function passgen() {
    var result = "";
    var length = prompt("pick a number between 8 and 128");
    if (isNaN(length)) {
        alert("between 8 and 128!");
        return passgen()
}

    if(length < 8 || length > 128) {
        alert("Please for the love of God!");
        return passgen()
    }

    var wantsUpperCase = confirm("would you like uppercase letters?");
    var wantsLowerCase = confirm("would you like lowercase letters?");
    var wantsNumbers = confirm("would you like numbers?");
    var wantsSpecial = confirm("would you like special charicters?");


    if (wantsUpperCase) {
        userChoice += upperCase
    }

    if (wantsLowerCase) {
        userChoice += lowercase
    }

    if (wantsNumbers) {
        userChoice += numberChar
    }
    
    if (wantsSpecial) {
        userChoice += special
    }

for (var i = 0; i < length; i++) {
    result += userChoice.charAt(Math.floor(Math.random() * userChoice.length));

}
    return result;






// // var nat = prompt("Pick a number between 8-128?")
// // var becca = confirm("Would you like uppercase letters in your password?")
// // var clay = confirm("Would you like special charectors?")

// // // function pw() {!
// // //   alert("lets make a passwrord!");}
// // // var passLength = 

// // document.querySelector('#generate').addEventListener('click', promptMe);

// // function promptMe() {
// //     var nat = prompt("Pick a number between 8-128?");
// //     if (nat > 8 && nat < 128) {
// //         var becca = confirm("Would you like uppercase letters in your password?")
// //     } if (becca = true) {
// //         var clay = confirm("Would you like special Charactor?")
// //     } else (""); {
// //         if (clay = true) {
// //             confirm("Would you like numbers?")
// //         } else ("");
// //     }
// //     return nat;
// // }

// // function all4() {

// // }







// window.prompt("how many characters do you want your password to be?")


// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





// //define variabls 

// // defined 4 variables 

// //promt box that asks how many characters



// //prompt box that asks uppercase 

// //propmt box that asks special

// //prompt box that asks numbers

// //then password is generated

}