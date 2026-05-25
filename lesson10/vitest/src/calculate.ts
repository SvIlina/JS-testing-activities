export function divide(a: number, b: number): number {
    if (b === 0 || isNaN(b)) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}
