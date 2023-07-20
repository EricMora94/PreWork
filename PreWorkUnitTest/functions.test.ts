import { capitalize, celsiusToFahrenheit, factorial, multiply } from "./functions";

test("capitalize function capitalizes the first letter of a word", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
});

test("factorial of number ", () => {
    expect(factorial(3)).toBe(6);
});

test("convert celsius to fahrenheit", () => {
    expect(celsiusToFahrenheit(30)).toBe(86);
});
// Add more test cases for the other functions
