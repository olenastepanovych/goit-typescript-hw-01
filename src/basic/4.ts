// Функція, яка приймає рядок і нічого не повертає (тип void)
function showMessage(message: string): void {
console.log(message);
}

showMessage('Привіт, TypeScript!');

// Функція, яка приймає два числа і повертає число
function calc(num1: number, num2: number): number {
return num1 + num2;
}

const result = calc(10, 5);
console.log(result); // 15


// Функція, яка не повертає значення, бо завжди викидає помилку — тип never
function customError(): never {
throw new Error('Error');
}

try {
customError();
} catch (e) {
console.error('Оброблена помилка:', e);
}
