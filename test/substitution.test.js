const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution Tests by Jino", () => {

    describe("correctly encoding results", () => {
        it("should return the correct encrypted value", () => {
            const input = "jino";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actualValue = substitution(input, alphabet);
            const expectedValue = "kufl";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore space when encoding", () => {
            const input = "ji no";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actualValue = substitution(input, alphabet);
            const expectedValue = "ku fl";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore uppercase when encoding", () => {
            const input = "JiNo";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actualValue = substitution(input, alphabet);
            const expectedValue = "kufl";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should work with special characters when encoding", () => {
            const input = "jino";
            const alphabet = "xoyqmcgru@swaflnthdjpzibev";
            const actualValue = substitution(input, alphabet);
            const expectedValue = "@ufl";
            expect(actualValue).to.be.equal(expectedValue);
        });
    });

    describe("correctly decoding results", () => {
        it("should return the correct decrypted value", () => {
            const input = "kufl";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actualValue = substitution(input, alphabet, false);
            const expectedValue = "jino";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore space when decoding", () => {
            const input = "ku fl";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actualValue = substitution(input, alphabet, false);
            const expectedValue = "ji no";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should ignore uppercase when decoding", () => {
            const input = "kUfL";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actualValue = substitution(input, alphabet, false);
            const expectedValue = "jino";
            expect(actualValue).to.be.equal(expectedValue);
        });
        it("should work with special characters when decoding", () => {
            const input = "@ufl";
            const alphabet = "xoyqmcgru@swaflnthdjpzibev";
            const actualValue = substitution(input, alphabet, false);
            const expectedValue = "jino";
            expect(actualValue).to.be.equal(expectedValue);
        });
    });

    describe("valid input", () => {
        it("should return false if alphabet is not 26", () => {
            const input = "jino";
            const alphabet = "xoy";
            const actualValue = substitution(input, alphabet);            
            expect(actualValue).to.be.false;
        });
        it("should return false if alphabet contain a similar character", () => {
            const input = "jino";
            const alphabet = "xxxqmcgrukswaflnthdjpzibev";
            const actualValue = substitution(input, alphabet);            
            expect(actualValue).to.be.false;
        });
    });
})

