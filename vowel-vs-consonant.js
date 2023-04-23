//count seperately vowels and consonants of lowercase words
// define a function that take the string as input
const countVowelsAndConsonants = (str) => {

    // count the nujmber of vowels in the string using regex and the match() method
    const numVowels = str.match(/[aeiou]/g).length;

    // count the number of consonants in the string using regex and the match() method
    const numConsonants = str.match(/[^aeiou]/g).length;

    // print the original string followed by the number of vowels and consonants via template literal
    console.log(`${str} has ${numVowels} vowels and ${numConsonants} consonants.`);
}

countVowelsAndConsonants("hello");
countVowelsAndConsonants("ukelele");
countVowelsAndConsonants("awesome");
countVowelsAndConsonants("ononmonopoa");
countVowelsAndConsonants("textbook");