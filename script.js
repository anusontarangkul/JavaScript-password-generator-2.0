// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

let passMin = 0;

function generatePassword() {
  findLengthMin();
  console.log(passMin);


  // var passwordMax = window.prompt("What is the maximum password length?");
  // console.log("passwordMin " + passwordMax);

  // characterTypes()
}

function characterTypes() {
  var lowerCaseCheck = window.prompt('Do you want to include lowercase? Type "YES" or "NO"');
  console.log("lower case? " + lowerCaseCheck);

  var upperCaseCheck = window.prompt('Do you want to include uppercase? Type "YES" or "NO"');
  console.log("upper case? " + upperCaseCheck);

  var numericCheck = window.prompt('Do you want to include numbers? Type "YES" or "NO"');
  console.log("numbers? " + numericCheck);

  var specialCheck = window.prompt('Do you want to include special characters? Type "YES" or "NO"');
  console.log("special characters? " + specialCheck);
}

function findLengthMin() {
  var passwordMin = window.prompt("What is the minimum password length?");
  passwordMin = parseInt(passwordMin);
  if (!passwordMin || typeof passwordMin !== "number") {
    window.alert("Please enter a valid number.");
    findLengthMin()
  } else if (passwordMin < 8) {
    window.alert("Password needs to be a minimum of 8 characters.");
    findLengthMin()
  }
  passMin = passwordMin;

}
