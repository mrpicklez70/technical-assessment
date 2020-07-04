//Import 'fs' module
const fs = require('fs');
//Import 'readline' module and create an instance of it
const rl = require('readline').createInterface({
    input: fs.createReadStream('first-item/sample-file.txt'),
});

let content = [];

// Event Listener - Pushes every line of the 'sample-file.txt' into the 'content' array
rl.on('line', function (line) {
    content.push(line);
});

//Event Listener - Once the the 'rl' instance finishes reading the file, it invokes the 'findLargestWord' method
rl.on('close', function () {
    console.log(`Array initialized:\n${content}\n`);
    try {
        let result = messageBuilder(findLargestWord(content), reverseWord(findLargestWord(content)));
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});


/**
 * Receives an array of strings. Finds the largest string and returns it in a message along with its reversed version.
 * @param {array} array - Array of strings to loop through in order to determine the largest of all
 * @throws Error if array length is not greater than 0
 */
function findLargestWord(array) {
    if (array.length > 0) {
        let word = '';
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > word.length) {
                word = array[i];
            }
        }
        return word;
    } else {
        throw "Array length must be greater than 0"
    }
};

/**
 * Receives a word and returns its reversed version
 * @param {string} word
 * @returns {string} - Reversed Word
 * @throws Error if word length is not greater than 1
 */
function reverseWord(word) {
    if (word !== null && word.length > 1) {
        let reversedWord = word.split('').reverse().join('');
        return reversedWord;
    } else {
        throw "Not a valid word to reverse";
    }

};

/**
 * Receives two string parameters and prints a message in the console with them.  
 * @param {string} word 
 * @param {string} reversedWord
 * @throws Error if parameters passed are null
 */
function messageBuilder(word, reversedWord) {
    if (word != null && reversedWord != null) {
        let template = `Largest Word: ${word}\nLargest Word Reversed: ${reversedWord}\n`
        return template;
    } else {
        throw "No valid words to build message";
    }
}

module.exports = { findLargestWord, reverseWord, messageBuilder };