export function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  export function factorial(num: number):number{
    if(num == 0 || num ==1){
        return 1;
    }else{
        return num * factorial(num -1);
    }
  }

  export function celsiusToFahrenheit(c:number): number{
    return(c*(9/5) +32);
  }
  // Add more functions as needed
  