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
let allowLowerCase = false;
let allowUpperCase = false;
let allowNumbers = false;
let allowSpecial = false;
let passlength = 0;

let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbersChar = "0123456789";
let specialChar = `!"#$%&'()*+,-./:;<=>?@[\\\]^_\`\{|}~"`;


function generatePassword() {
  let possibleChars = "";
  findLengthMin();
  findLengthMax();
  validateCharacters();

  passlength = Math.floor(Math.random() * (passMax - passMin) + passMin);
  if (allowLowerCase) {
    possibleChars += lowerCaseChar;

  }

  if (allowUpperCase) {
    possibleChars += upperCaseChar;
  }

  if (allowNumbers) {
    possibleChars += numbersChar;
  }

  if (allowSpecial) {
    possibleChars += specialChar;
  }

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
  passMax = passwordMax;

}

function checkLowerCase() {
  let lowerCase = window.prompt('Do you want to include lowercase? Type "YES" or "NO"');
  lowerCase = lowerCase.toUpperCase();
  if (lowerCase === "YES") {
    allowLowerCase = true;
  } else if (lowerCase === "NO") {
    return;
  } else {
    window.alert(`Please type "YES" or "NO".`);
    checkLowerCase();
  }
}


function checkUpperCase() {
  let upperCase = window.prompt('Do you want to include uppercase? Type "YES" or "NO"');
  upperCase = upperCase.toUpperCase();
  if (upperCase === "YES") {
    allowUpperCase = true;
  } else if (upperCase === "NO") {
    return;
  } else {
    window.alert(`Please type "YES" or "NO".`);
    checkUpperCase();
  }
}

function checkNumbers() {
  let number = window.prompt('Do you want to include numbers? Type "YES" or "NO"');
  number = number.toUpperCase();
  if (number === "YES") {
    allowNumbers = true;
  } else if (number === "NO") {
    return;
  } else {
    window.alert(`Please type "YES" or "NO".`);
    checkNumbers();
  }
}

function checkSpecial() {
  let special = window.prompt('Do you want to include special characters? Type "YES" or "NO"');
  special = special.toUpperCase();
  if (special === "YES") {
    allowSpecial = true;
  } else if (special === "NO") {
    return;
  } else {
    window.alert(`Please type "YES" or "NO".`);
    checkSpecial();
  }

}

function validateCharacters() {
  checkLowerCase();
  checkUpperCase();
  checkNumbers();
  checkSpecial();
  if (!allowLowerCase && !allowUpperCase && !allowNumbers && !allowSpecial) {
    window.alert(`At least one character type needs to be selected. Try again`);
    validateCharacters();
  };
}

function findLength(min, max) {
  console.log(min)
  console.log(max)
  passlength = Math.floor(Math.random() * (max - min) + min);
  console.log(passlength)
}