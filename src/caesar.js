const caesarModule = (function () {
    // a function that will accept a string argument, then
    // shift all of the characters of that string alphabetically
    // based on the shift argument, this can be used to encode
    // and decode an input based on the encode argument
    function caesar(input, shift, encode = true) {
        if (!shift || shift === 0 || shift < -25 || shift > 25) {
            return false;
        }
        const alphaCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
        const inputCharacters = input.toLowerCase().split("");
        let result = inputCharacters.map((inputCharacter) => {
            const startingPosition = alphaCharacters.indexOf(inputCharacter);
            let endingPosition = startingPosition;
            !encode
                ? (endingPosition = endingPosition - shift)
                : (endingPosition = endingPosition + shift);
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
        return result.join("");
    }
    return {
        caesar,
    };
})();

module.exports = caesarModule.caesar;
