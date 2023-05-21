// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const keys = {
    1: [ "a", "f", "l", "q", "v"],
    2: [ "b", "g", "m", "r", "w"],
    3: [ "c", "h", "n", "s", "x"],
    4: [ "d", "i/j", "o", "t", "y"],
    5: [ "e", "k", "p", "u", "z"],
  }

  // >>>>>>>>>> Start of polybius Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function polybius(input, encode = true) {    
    const inputArray = input.split(""); // turns the input into an array
    let result = ""; // initializes the variable that will store the result

    if (encode) { 
      result = doEncode(inputArray); // calls the doEncode function
    } else result = doDecode(inputArray); // calls the doDecode function

    return result; // return the result
  }
  // >>>>>>>>>> End of polybius Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
  // >>>>>>>>>> Start of doEncode Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function doEncode (inputArray) {
    let returnResult = ""; // will store the value that will be returned
    inputArray.forEach(character => { // loop through the inputArray
      inputChar = character.toLowerCase();
      if (inputChar == " ") returnResult += " ";
      // will check the keys for the matching position numbers
      for (charCol = 1; charCol <= 5; charCol++) {
        for (charRow = 0; charRow < 5; charRow++) {
          let keyChar = keys[charCol][charRow];
          if (charCol === 4 && charRow === 1) { // check if the value is an 'i' or 'j'
            const charIJ = keys[charCol][charRow].split("/")
            if (inputChar == charIJ[0] || inputChar == charIJ[1]) {
              let matched = charCol + "" + (charRow+1);
              returnResult += matched;
            }
          } else if (inputChar == keyChar) { // if not 'i' or 'j' then check if the character matches
            let matched = charCol + "" + (charRow+1);
            returnResult += matched;
          }
        }          
      }   
    });
    return returnResult;
  }
  // >>>>>>>>>> End of doEncode Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  
  // >>>>>>>>>> Start of doDecode Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function doDecode (inputArray) {
    let returnResult = ""; // will store the value that will be returned
    let totalNum = inputArray.length // the length of the input
    for (inputFirst=0, inputSecond=1;inputFirst < totalNum;inputFirst+=2,inputSecond+=2) {
      // if the next value is space then add space
      if (inputArray[inputFirst] == " ") {
        inputFirst--;
        inputSecond--;
        returnResult += " ";
        if((totalNum-inputFirst) % 2==1) return false; // return false if the remaining number of character is odd
      } else { // decode the next two value into a letter
        first = Number(inputArray[inputFirst]);
        second = Number(inputArray[inputSecond]);
        let matched = keys[first][second-1];
        returnResult += matched;
      }
    }
    return returnResult;
  }
  // >>>>>>>>>> End of doDecode Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
