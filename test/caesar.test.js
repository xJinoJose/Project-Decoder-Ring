const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Tests by Jino", () => {

    describe("correctly encoding inputs", () => {
        it("should return the correct ecrypted value", () => {
            const input = "thinkful";
            const shift = 3;
            const actualValue = caesar(input, shift);
            const expectedValue = "wklqnixo";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore uppercase letters when encoding", () => {
            const input = "JinoIsTheAuthor";
            const shift = 1;
            const actualValue = caesar(input, shift);
            const expectedValue = "kjopjtuifbvuips";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore spaces when encoding", () => {
            const input = "testing spaces";
            const shift = 2;
            const actualValue = caesar(input, shift);
            const expectedValue = "vguvkpi urcegu";
            expect(actualValue).to.be.equal(expectedValue);
        });
    });

    describe("correctly decoding inputs", () => {
        it("should return the correct decrypted value", () => {
            const input = "wklqnixo";
            const shift = 3;
            const actualValue = caesar(input, shift, false);
            const expectedValue = "thinkful";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore uppercase letters when decoding", () => {
            const input = "Kjopjtuifbvuips";
            const shift = 1;
            const actualValue = caesar(input, shift, false);
            const expectedValue = "jinoistheauthor";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore spaces when decoding", () => {
            const input = "vguvkpi urcegu";
            const shift = 2;
            const actualValue = caesar(input, shift, false);
            const expectedValue = "testing spaces";
            expect(actualValue).to.be.equal(expectedValue);
        });
    });

    describe("valid input", () => {
        it("should return false if shift is 0", () => {
            const input = "thinkful";
            const shift = 0;
            const actualValue = caesar(input, shift);
            expect(actualValue).to.be.false;
        });
        it("should return false if shift is less than -26", () => {
            const input = "thinkful";
            const shift = -27;
            const actualValue = caesar(input, shift);            
            expect(actualValue).to.be.false;
        });
        it("should return flase if shift is greater than 25", () => {
            const input = "thinkful";
            const shift = 26;
            const actualValue = caesar(input, shift);            
            expect(actualValue).to.be.false;
        });
    });

})