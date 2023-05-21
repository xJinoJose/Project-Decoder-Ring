// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  const keys = "abcdefghijklmnopqrstuvwxyz"

  // >>>>>>>>>> Start of caesar Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function caesar(input, shift, encode = true) {

    // check if shift value is valid and return false if not
    if(shift === 0 || shift > 25 || shift < -25 || shift === undefined) {
      return false
    }
    
    //creates variable to store the result
    let results = "";

    // reverse shift if decoding
    shift *= encode ? 1 : -1;

    // split the input and store into an array
    const letters = input.split("");
    
    // loop through the letters array
    letters.forEach((letter) => {
      const isLetter = (/[a-zA-Z]/).test(letter); // check if the character is a letter
      const letterIndex = keys.indexOf(letter.toLowerCase()); // store the index number of the character using the keys string
      let shiftIndex = letterIndex + shift;

      // if index is over 25 which means it goes over 
      // the alphabet then subtract 26 to start from the beginning
      if (shiftIndex > 25) {          
        shiftIndex = shiftIndex - 26;      
      } else if(shiftIndex < 0 && shiftIndex > -25) {
        shiftIndex += 26;
      }

      // if the character is a letter then shift it
      // if not, then just add the same character
      if(isLetter) {
        const shiftLetter = keys[shiftIndex];
        results += shiftLetter;
      } else {
        results += letter;
      }

    });

    return results;
  
  }
  // >>>>>>>>>> End of caesar Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
