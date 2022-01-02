import { vowelCheckCount } from "../../scripts/modules/vowelCheckCount";


describe("tests the functionality of the vowelCheck function", () => {
  test("checks wether vowels are correctly grabbed", () => {
    // Given
    let phrase = "This is a phrase";
    // When
    let result = vowelCheckCount(phrase);
    // Then
    expect(result).toBe("a2, e1, i2");
  });
});
