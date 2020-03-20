// Assignment Code
var generateBtn = document.querySelector("#generate");

// array for lowercase letters
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "w", "x", "y", "z"];
// array for uppercase letters
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// array for numbers
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// array for special characters
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var passwordArray = [];

var blankPassword = '';
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

  passwordArray = [];
  blankPassword = '';

  var passwordLength = prompt("How long would you like your password? Please enter an integer between 8-128.");

  //extra I didn't use
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert('This number is within the parameters: ' + passwordLength + ' ~Thanks!');
    console.log(passwordLength);
  } else {
    alert('Ya know what, sounds great. Just do whatever you want then. Enter this in: ' + passwordLength);
    console.log(passwordLength);
  }
  

  var upperCase = confirm("Press OK for uppercase or CANCEL for none.");
  console.log(upperCase);

  var lowerCase = confirm("Press OK for lowercase or CANCEL for none.");
  console.log(lowerCase);

  var numeric = confirm("Press OK for numeric or CANCEL for none.");
  console.log(numeric);

  var specialCharOption = confirm("Press OK for special characters or CANCEL for none.");
  console.log(specialCharOption);

  do {
    if (lowerCase == false && upperCase == false && numeric == false && specialCharOption == false) {
      alert("HAHA you so CUTE, go ahead and try to refresh!!!")
      
    }
  }
  while (lowerCase == false && upperCase == false && numeric == false && specialCharOption == false)


  if (lowerCase) {
    passwordArray = passwordArray.concat(lowerCaseLetters);

  }

  if (upperCase) {
    passwordArray = passwordArray.concat(upperCaseLetters);

  }

  if (numeric) {
    passwordArray = passwordArray.concat(numericCharacters);

  }

  if (specialCharOption) {
    passwordArray = passwordArray.concat(specialCharacters);

  }


  for (i = 0; i < passwordLength; i++) {
    blankPassword += passwordArray[Math.floor(Math.random() * passwordArray.length)];

  }

  return blankPassword;

}



// some extras I didn't use.


    // if (upperCase == true) {
    //   generatePassword(upperCaseLetters);

    // }


    // if (numeric == true) {
    //   generatePassword(numericCharacters);

    // }


    // if (specialCharOption == true) {
    //   generatePassword(specialCharacters);

    // }

  // } else {
  //   alert('NOPE, this is not within parameters: ' + passwordLength);
  //   console.log(passwordLength);
  // }


