export function vowelCheck(phrase) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCheckResult = "";
  vowels.forEach((vowel) => {
    if (phrase.includes(vowel)) {
      vowelCheckResult += vowel + ", ";
    }
  });
  return vowelCheckResult.slice(0, -2);
}