// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for numbers
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// array for special characters
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '='];
// array for lowercase letters
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// array for uppercase letters
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//
var passwordArray = ['numericCharacters', 'specialCharacters', 'lowerCaseLetters', 'upperCaseLetters'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() { }
var passwordLength = prompt("How long would you like your password? Please enter an integer between 8-128.");
console.log(passwordLength);
var lowerCase = confirm("Press OK for lowercase or CANCEL for none.");
console.log(lowerCase);
var upperCase = confirm("Press OK for uppercase or CANCEL for none.");
console.log(upperCase);
var numeric = confirm("Press OK for numeric or CANCEL for none.");
console.log(numeric);
var specialCharOption = confirm("Press OK for special characters or CANCEL for none.");
console.log(specialCharOption);

if (lowerCase == true) {
  generatePassword(lowerCaseLetters);

} if (upperCase == true) {
  generatePassword(upperCaseLetters);

} if (numeric == true) {
  generatePassword(numericCharacters);

} if (specialCharOption == true) {
  generatePassword(specialCharacters);

}



