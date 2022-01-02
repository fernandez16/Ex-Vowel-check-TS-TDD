import { vowelCount } from "../../scripts/modules/vowelCount";


describe("tests the functionality of the vowelCount function", () => {
  test("checks wether vowels are correctly counted", () => {
    // Given
    let phrase = "This is a phrase";
    // When
    let result = vowelCount(phrase);
    // Then
    expect(result).toBe(5);
  });
});
