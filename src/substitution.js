const substitutionModule = (function () {
    // a function that will substitute input string
    // with corresponding characters from user-defined
    // alphabet, with the ability to encode or decode
    function substitution(input, alphabet, encode = true) {
        if (!alphabet) {
            return false
        }
        const alphaCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
        const inputAlphaCharacters = alphabet.split('')
        if (
            alphabet.length != 26 || 
            inputAlphaCharacters.filter((character, index) => inputAlphaCharacters.indexOf(character) != index).length > 0
        ) {
            return false
        }
        const inputCharacters = input.toLowerCase().split('')
        let cypher = {}
        let outputCharacters = []
        alphaCharacters.forEach((alphaCharacter, i) => cypher[alphaCharacter] = inputAlphaCharacters[i])
        if (!encode) {
            outputCharacters = inputCharacters.map((character) => {
                if (character === ' ') {
                    return character
                } else {
                    for (alpha in cypher) {
                        if (cypher[alpha] === character) {
                            return alpha
                        }
                    }
                }
            })
        } else {
            outputCharacters = inputCharacters.map((character) => {
                if (character === ' ') {
                    return character
                } else {
                    for (alpha in cypher) {
                        if (alpha === character) {
                            return cypher[alpha]
                        }
                    }
                }   
            })
        }
        console.log(outputCharacters.join(''))
        return outputCharacters.join('')
    }
    return {
        substitution,
    }
})()

module.exports = substitutionModule.substitution
