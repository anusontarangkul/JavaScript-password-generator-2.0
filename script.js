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

let passMin = 8;
let passMax = 256;

function generatePassword() {
  findLengthMin();
  findLengthMax();


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
  let passwordMin = window.prompt("What is the minimum password length?");
  passwordMin = parseInt(passwordMin);
  if (!passMin || typeof passwordMin !== "number") {
    window.alert("Please enter a valid number.");
    findLengthMin()
  } else if (passwordMin < 8) {
    window.alert("Password needs to be a minimum of 8 characters. Try again.");
    findLengthMin()
  }
  passMin = passwordMin;
}

function findLengthMax() {
  let passwordMax = window.prompt("What is the maximum password length?");
  passwordMax = parseInt(passwordMax);
  if (!passwordMax || typeof passwordMax !== "number") {
    window.alert("Please enter a valid number.");
    findLengthMax();
  } else if (passwordMax > 256) {
    window.alert("The password maximum length is 256. Try again.");
    findLengthMax();
  }
  passMax = passMax;

}
