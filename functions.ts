function calculateSum(num1: number, num2: number): number {
    return num1 + num2;
}

console.log("Calculate sum " + calculateSum(5, 2));
console.log("Calculate sum " + calculateSum(1, 3));
console.log("Calculate sum " + calculateSum(4, 6));

function isEven(num: number): boolean {
    return num % 2 !== 1
}

console.log("Is even " + isEven(1));
console.log("Is even " + isEven(2));
console.log("Is even " + isEven(3));

function reverseString(str: string): string {
    let auxStr: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        auxStr = auxStr + str[i];
    }
    return auxStr;
}

console.log("Reverse String " + reverseString("anitalavalatina"));
console.log("Reverse String " + reverseString("palindromo"));
console.log("Reverse String " + reverseString("arriba la birra"));

const calculateAverage = (num: number[]): number => {
    let sum: number = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum / num.length;
}

console.log("Average " + calculateAverage([10, 9, 6]));
console.log("Average " + calculateAverage([2, 7, 12]));
console.log("Average " + calculateAverage([12, 3, 16]));

type MathOperation = (num1: number, num2: number) => number;

const multiply: MathOperation = (num1: number, num2: number) : number => num1 * num2;

console.log("Math Operation " + multiply(3,4));
console.log("Math Operation " + multiply(1,2));
console.log("Math Operation " + multiply(6,5));