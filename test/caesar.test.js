// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return encoded message", () => {
        const input = "Brown Fox!";
        const shift = 5;
        const encode = true;
        const expected = "gwtbs ktc!";
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should return false if shift parameter is greater than 25 or less than -25", () => {
        const input = "Brown Fox";
        const shift = 30;
        const encode = true;
        const expected = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should return decoded message", () => {
        const input = "gwtbs ktc!";
        const shift = 5;
        const encode = false;
        const expected = "brown fox!";
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it("should return false if shift parameter is 0", () => {
        const input = "brown fox";
        const shift = 0;
        const encode = true;
        const expected = false;
        const actual = caesar(input);
        expect(actual).to.equal(expected);
    });
});
