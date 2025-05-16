// Змінна, яка може містити або рядок, або число (Union Type)
let value: string | number = 'Hello';
value = 42; // також допустимо

// Змінна, яка може містити тільки 'enable' або 'disable' (Literal Type)
let status: 'enable' | 'disable' = 'enable';
status = 'disable'; // також допустимо
