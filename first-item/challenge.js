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
    console.log(findLargestWord(content));
});


/**
 * Receives an array of strings. Finds the largest string and returns it in a message along with its reversed version.
 * @param {array} array - Array of strings to loop through in order to determine the largest of all
 */
function findLargestWord(array) {
    let word = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > word.length) {
            word = array[i]
        }
    }
    let reversedWord = word.split('').reverse().join('');
    let template = `Largest Word: ${word} \nLargest Word Reversed: ${reversedWord}`;
    return template;
}