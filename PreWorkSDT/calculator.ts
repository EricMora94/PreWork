export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiplication(a: number, b: number): number {
    return a * b;
}

export function division(a: number, b: number): number {
    return a > b ? a / b : 0;
}

export function remainder(a: number, b: number): number {
    return a > b ? a % b : 0;
}

export function exponentiation(num: number, exp: number): number{
    return num ** exp;
}
  // Add more functions for multiplication, division, etc.
