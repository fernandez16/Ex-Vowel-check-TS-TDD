export function vowelCheckCount(phrase) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCheckCountResult = "";
  let vowelCountResult = 0;
  vowels.forEach((vowel) => {
    if (phrase.includes(vowel)) {
      vowelCheckCountResult += vowel;
      vowelCountResult = 0;
      vowelCountResult += phrase.split(vowel).length - 1;
      vowelCheckCountResult += vowelCountResult + ", ";
    }
  });
  return vowelCheckCountResult.slice(0, -2);
}
