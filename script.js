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

// Global variables for state
let passMin = 8;
let passMax = 256;
let allowLowerCase = false;
let allowUpperCase = false;
let allowNumbers = false;
let allowSpecial = false;
let passlength = 0;

// Potential characters
let lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];


function generatePassword() {

  let possibleChars = [];
  let pass = [];
  findLengthMin();
  findLengthMax();
  validateCharacters();

  // Find length of password
  passlength = Math.floor(Math.random() * (passMax - passMin) + passMin);

  // Creating array of possible characters
  if (allowLowerCase) {
    possibleChars = [...possibleChars, ...lowerCaseChar];

  }

  if (allowUpperCase) {
    possibleChars = [...possibleChars, ...upperCaseChar];
  }

  if (allowNumbers) {
    possibleChars = [...possibleChars, ...numbersChar];
  }

  if (allowSpecial) {
    possibleChars = [...possibleChars, ...specialChar];
  }

  // Loop through the length of password to randomly add character from list.
  for (let i = 0; i <= passlength; i++) {
    let randomChar = possibleChars[Math.floor(Math.random() * possibleChars.length)];
    pass.push(randomChar);
  }

  // Turn array to string
  return pass.join("");
}

function findLengthMin() {
  // prompt user to enter
  let passwordMin = window.prompt("What is the minimum password length?");
  passwordMin = parseInt(passwordMin);

  // validate minimum
  if (!passMin || typeof passwordMin !== "number") {
    window.alert("Please enter a valid number.");
    findLengthMin()
  } else if (passwordMin < 8) {
    window.alert("Password needs to be a minimum of 8 characters. Try again.");
    findLengthMin()
  }

  //update global
  passMin = passwordMin;

}

function findLengthMax() {
  // prompt user to enter
  let passwordMax = window.prompt("What is the maximum password length?");
  passwordMax = parseInt(passwordMax);

  //validate max
  if (!passwordMax || typeof passwordMax !== "number") {
    window.alert("Please enter a valid number.");
    findLengthMax();
  } else if (passwordMax > 256) {
    window.alert("The password maximum length is 256. Try again.");
    findLengthMax();
  }
  //update global
  passMax = passwordMax;

}

function checkLowerCase() {
  // prompt user to enter
  let lowerCase = window.prompt('Do you want to include lowercase? Type "YES" or "NO"');
  lowerCase = lowerCase.toUpperCase();

  //validate yes or no
  if (lowerCase === "YES") {
    //update global
    allowLowerCase = true;
  } else if (lowerCase === "NO") {
    return;
  } else {
    window.alert(`Please type "YES" or "NO".`);
    checkLowerCase();
  }
}


function checkUpperCase() {
  // prompt user to enter
  let upperCase = window.prompt('Do you want to include uppercase? Type "YES" or "NO"');
  upperCase = upperCase.toUpperCase();

  //validate yes or no
  if (upperCase === "YES") {
    //update global
    allowUpperCase = true;
  } else if (upperCase === "NO") {
    return;
  } else {
    window.alert(`Please type "YES" or "NO".`);
    checkUpperCase();
  }
}

function checkNumbers() {
  // prompt user to enter
  let number = window.prompt('Do you want to include numbers? Type "YES" or "NO"');
  number = number.toUpperCase();
  //validate yes or no
  if (number === "YES") {
    //update global
    allowNumbers = true;
  } else if (number === "NO") {
    return;
  } else {
    window.alert(`Please type "YES" or "NO".`);
    checkNumbers();
  }
}

function checkSpecial() {
  // prompt user to enter
  let special = window.prompt('Do you want to include special characters? Type "YES" or "NO"');
  special = special.toUpperCase();
  //validate yes or no
  if (special === "YES") {
    //update global
    allowSpecial = true;
  } else if (special === "NO") {
    return;
  } else {
    window.alert(`Please type "YES" or "NO".`);
    checkSpecial();
  }

}

function validateCharacters() {
  // Ask for potential characters
  checkLowerCase();
  checkUpperCase();
  checkNumbers();
  checkSpecial();

  // validate that at least one type of character is selected.
  if (!allowLowerCase && !allowUpperCase && !allowNumbers && !allowSpecial) {
    window.alert(`At least one character type needs to be selected. Try again`);
    validateCharacters();
  };
}

