
const expect = require('chai').expect;
const challenge = require('../first-item/challenge');

// Test Data
const testArray = ['find', 'the', 'largest', 'word', 'in', 'this', 'tremendous', 'array'];
const emptyArray = [];
const placeholder = 'placeholder';
const invalidWord = 'a'

context('Unit Tests', function(){
    describe('Positive Unit Tests', function(){
        it('Should find largest word from the testArray: "tremendous"', function(){
            let result = challenge.findLargestWord(testArray)
            expect(result).to.equal('tremendous');
        });
    
        it('Should reverse a the word "tremendous"', function(){
            let result = challenge.reverseWord(testArray[6]);
            expect(result).to.equal('suodnemert');    
        });
        it('Should print a template', function(){
            let result = challenge.messageBuilder(placeholder, placeholder)
            expect(result).to.equal(`Largest Word: ${placeholder}\nLargest Word Reversed: ${placeholder}\n`);
        });
    });
    describe('Negative Unit Tests', function(){
        it('Should throw error if array length is not greater than 0', function(){
            expect(() => challenge.findLargestWord(emptyArray)).to.throw('Array length must be greater than 0');
        });
    
        it('Should not reverse a word with length not greater than 0', function(){
            expect(() => challenge.reverseWord(invalidWord)).to.throw('Not a valid word to reverse');    
        });

        it('Should throw error when passed "null" parameters', function(){
            expect(() => challenge.messageBuilder(null, null)).to.throw('No valid words to build message');
        });
    });
});
