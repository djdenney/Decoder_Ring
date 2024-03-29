const polybiusModule = (function () {
    // a function that will substitute an input
    // string with a string of numeric characters
    // based on a  5 x 5 number grid
    function polybius(input, encode = true) {
        const coordinates = {
            11: "a",
            21: "b",
            31: "c",
            41: "d",
            51: "e",
            12: "f",
            22: "g",
            32: "h",
            42: "(i/j)",
            52: "k",
            13: "l",
            23: "m",
            33: "n",
            43: "o",
            53: "p",
            14: "q",
            24: "r",
            34: "s",
            44: "t",
            54: "u",
            15: "v",
            25: "w",
            35: "x",
            45: "y",
            55: "z",
        };
        let inputCharacters = [];
        let outputCharacters = [];
        if (!encode) {
            if (input.replace(/\D/g, "").length % 2 != 0) {
                return false;
            }
            for (let i = 0; i < input.length; i = i + 2) {
                if (Number(input[i]) === 0 || Number.isNaN(Number(input[i]))) {
                    inputCharacters.push(input[i]);
                    i += -1;
                } else {
                    inputCharacters.push(`${input[i]}${input[i + 1]}`);
                }
            }
            outputCharacters = inputCharacters.map((character) => {
                for (coordinate in coordinates) {
                    if (coordinate === character) {
                        return coordinates[coordinate];
                    } else if (
                        character === " " ||
                        Number.isNaN(Number(character))
                    ) {
                        return character;
                    }
                }
            });
        } else {
            inputCharacters = input.toLowerCase().split("");
            outputCharacters = inputCharacters.map((character) => {
                for (coordinate in coordinates) {
                    if (coordinates[coordinate].includes(character)) {
                        return coordinate;
                    }
                }
                if (
                    !Object.values(coordinates).includes(character) &&
                    character != "i" &&
                    character != "j"
                ) {
                    return character;
                }
            });
        }
        return outputCharacters.join("");
    }
    return {
        polybius,
    };
})();

module.exports = polybiusModule.polybius;
