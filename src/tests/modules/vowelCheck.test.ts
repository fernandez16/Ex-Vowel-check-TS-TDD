import { vowelCheck } from "../../scripts/modules/vowelCheck";

describe("tests the functionality of the vowelCheck function", () => {
  test("checks wether vowels are correctly grabbed", () => {
    // Given
    let phrase = "This is a phrase";
    // When
    let result = vowelCheck(phrase);
    // Then
    expect(result).toBe("a, e, i");
  });
});
