// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const keys = "abcdefghijklmnopqrstuvwxyz".split("");

  // >>>>>>>>>> Start of substitution Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function substitution(input, alphabet, encode = true) {

    // store input to an array called inputArray
    const inputArray = input.toLowerCase().split("");
    let result = ""; // will store the result to be returned

    // return false if the alphabet is missing, not 26 characters, or not unique
    if (alphabet === undefined || alphabet.length !== 26 || [...new Set(alphabet)].length !== 26) {
      return false;
    }

    // store alphabet keys to an array called cipherKeys
    const cipherKeys = alphabet.toLowerCase().split("");

    // perform if encode is true
    if (encode) {
      inputArray.forEach((inputChar) => {
        if(inputChar == " ") result += " "; // return space if character is a space
        for(indexKey = 0;indexKey < 26; indexKey++) {
          if(inputChar === keys[indexKey]) {
            result += cipherKeys[indexKey];
          }
        }
        
      });
    } else { // perform if decode needs to be done
      inputArray.forEach((inputChar) => {
        if(inputChar == " ") result += " "; // return space if character is a space
        for(indexKey = 0;indexKey < 26; indexKey++) {
          if(inputChar === cipherKeys[indexKey]) {
            result += keys[indexKey];
          }
        }
      });
    }

    return result;

  }
  // >>>>>>>>>> End of substitution Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
