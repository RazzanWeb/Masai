function countVowelsAndConsonants(str){
    const vowels='aeiouAEIOU'
    let vowelCount=0;
    let ConsonantCount=0;

    for (let char of str){
      if (/[a-zA-Z]/.test(char))
        if(vowels.includes(char)){
            vowelCount++;
        } else {
            ConsonantCount++;
        }
    }
    return {
        vowels:vowelCount,
        consonants:ConsonantCount
    };
}
const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }
