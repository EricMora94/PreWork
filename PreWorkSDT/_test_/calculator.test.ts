import { add, division, exponentiation, multiplication, remainder, subtract } from "../calculator"

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiply two numbers correctyl", () => {
  expect(multiplication(3, 4)).toBe(12);
});

test("divide two numbers correctly", () => {
  expect(division(12, 3)).toBe(4);
});

test("remain fo two numbers correctly", () => {
  expect(remainder(7, 3)).toBe(1);
});

test("exponential two numbers correctly", () => {
  expect(exponentiation(2, 3)).toBe(8);
})

// Add more test cases for the other calculator functions
