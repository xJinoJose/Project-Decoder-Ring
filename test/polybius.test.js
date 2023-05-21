const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Tests by Jino", () => {

    describe("correctly encoding inputs", () => {
        it("should return the correct encrypted value", () => {
            const input = "abcd";            
            const actualValue = polybius(input);
            const expectedValue = "11213141";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore spaces", () => {
            const input = "ab cd";            
            const actualValue = polybius(input);
            const expectedValue = "1121 3141";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should return the correct value for i or j", () => {
            const input = "jino";            
            const actualValue = polybius(input);
            const expectedValue = "42423343";
            expect(actualValue).to.be.equal(expectedValue);
        });
    });

    describe("correctly decoding inputs", () => {
        it("should return the correct decrypted value", () => {
            const input = "11213141";            
            const actualValue = polybius(input, false);
            const expectedValue = "abcd";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore spaces", () => {
            const input = "1121 3141";            
            const actualValue = polybius(input, false);
            const expectedValue = "ab cd";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should return the correct value for i or j", () => {
            const input = "42423343";            
            const actualValue = polybius(input, false);
            const expectedValue = "i/ji/jno";
            expect(actualValue).to.be.equal(expectedValue);
        });
    });
})