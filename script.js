
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Ошибка: деление на ноль";
    }
}
function calculate(num1, num2, operation) {
    if (operation === "+") {
        return add(num1, num2);
    } else if (operation === "-") {
        return subtract(num1, num2);
    } else if (operation === "*") {
        return multiply(num1, num2);
    } else if (operation === "/") {
        return divide(num1, num2);
    } else {
        return "Неправильная операция";
    }
}
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let operation = prompt("Выберите операцию (+, -, *, /):");
let result = calculate(num1, num2, operation);
console.log (prompt("Результат:", result));
