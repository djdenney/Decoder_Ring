// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    const alphaCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const inputAlphaCharacters = alphabet.split('');
    if (
      alphabet.length != 26 || 
      inputAlphaCharacters.filter((character, index) => inputAlphaCharacters.indexOf(character) != index).length > 0
      ) {
      return false;
    }
    const inputCharacters = input.toLowerCase().split('');
    let cypher = {};
    let outputCharacters = []
    alphaCharacters.forEach((alphaCharacter, i) => cypher[alphaCharacter] = inputAlphaCharacters[i]);
    if (!encode) {
      outputCharacters = inputCharacters.map((character) => {
        if (character === ' ') {
          return character;
        } else {
          for (alpha in cypher) {
            if (cypher[alpha] === character) {
              return alpha;
            }
          }
        }
      });
    } else {
      outputCharacters = inputCharacters.map((character) => {
        if (character === ' ') {
          return character;
        } else {
          for (alpha in cypher) {
            if (alpha === character) {
              return cypher[alpha];
            }
          }
        }   
      });
    }
    console.log(outputCharacters.join(''));
    return outputCharacters.join('');
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
