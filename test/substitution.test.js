// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should return encoded message", () => {
        const input = "thinkful";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const encode = true;
        const expected = "ziofayxs";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it("should return decoded message", () => {
        const input = "Ngx qkt qf tbetsstfz lhn";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const encode = false;
        const expected = "you are an excellent spy";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it("should return encoded message", () => {
        const input = "You are an excellent spy";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const encode = true;
        const expected = "ngx qkt qf tbetsstfz lhn";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it("should return false if alphabet is not exactly 26 characters", () => {
        const input = "message";
        const alphabet = "qwertyuiopasdfghjklzxcvbn";
        const encode = true;
        const expected = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it("should return false if alphabet parameter is not passed", () => {
        const input = "message";
        const alphabet = "qwertyuiopasdfghjklzxcvbn";
        const encode = true;
        const expected = false;
        const actual = substitution(input);
        expect(actual).to.equal(expected);
    });
    it("should return false if alphabet does not contain entirely unique characters", () => {
        const input = "You are an excellent spy";
        const alphabet = "qwertyuiopasdfghjklzxccbnm";
        const encode = true;
        const expected = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
});
