export function vowelCount(phrase) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCountResult = 0;
  vowels.forEach((vowel) => {
    vowelCountResult += phrase.split(vowel).length-1
  });
  return vowelCountResult;
}
