/**
* Write a JavaScript function called reverseWords that takes a sentence as input
* and returns the sentence with the order of words reversed.
*/
console.log(reverseWords("Hello World"))
function reverseWords(sentence) {
    return Array.from(sentence).reverse().join('')
}
