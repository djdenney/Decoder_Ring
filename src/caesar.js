// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false
    }
    const alphaCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const inputCharacters = input.toLowerCase().split('');
    let result = inputCharacters.map((inputCharacter) => {
      const startingPosition = alphaCharacters.indexOf(inputCharacter);
      let endingPosition = startingPosition;
      !encode ? endingPosition = endingPosition - shift : endingPosition = endingPosition + shift;    
      if (!alphaCharacters.includes(inputCharacter)) {
        return inputCharacter;
      }
      if (endingPosition > 25) {
        endingPosition += -26;
      } else if (endingPosition < 0) {
        endingPosition += 26;
      }
      return alphaCharacters[endingPosition];
    });
    return result.join('');
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
