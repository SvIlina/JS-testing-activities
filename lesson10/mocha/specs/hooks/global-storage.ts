declare global {
    var age: number;
    var someOtherVariable: string;
}

export function initGlobal(): void {
    globalThis.age = 18;
    globalThis.someOtherVariable = 'John Doe';
}
