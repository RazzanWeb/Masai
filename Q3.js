function isPalindrome(str){
    const cleanedStr=str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    return cleanedStr=== cleanedStr.split('').reverse().join('');
}

const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true
