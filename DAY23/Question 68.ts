// Multiplying Decimals:
function MultiplyDecimals(num1: number, num2: number): number {
  return Math.round(num1 * num2 * 100) / 100;
}
console.log(MultiplyDecimals(0.1, 0.2));
