// Write your tests here!const expect = require('chai').expect;
const { expect } = require('chai');
const polybius = require('../src/polybius');

describe('polybius', () => {
    it('should return encoded message', () => {
        const input = 'Brown Fox Jump!';
        const encode = true;
        const expected = '2124432533 124335 42542353!';
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(('should return decoded message'), () => {
        const input = '2124432533 124335 42542353!';
        const encode = false;
        const expected = 'brown fox (i/j)ump!';
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(('should return encoded message'), () => {
        const input = 'Brown Fox?';
        const encode = true;
        const expected = '2124432533 124335?'
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(('should return false if input contains non-polybius coordinate values'), () => {
        const input = '12423452335 214353';
        const encode = false;
        const expected = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
});