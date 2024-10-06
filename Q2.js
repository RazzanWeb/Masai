function reverseWords(str){
    return str.split('')
    .reverse()
    .join('');
}
const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"