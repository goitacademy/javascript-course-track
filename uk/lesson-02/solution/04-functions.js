/*
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

function add(x, y) {
  console.log("Выполянется функция add");
  console.log(x, y);
  return x + y;
}

const r1 = add(5, 3);
console.log("r1: ", r1);

const r2 = add(10, 15);
console.log("r2: ", r2);

const r3 = add(30, 50);
console.log("r3: ", r3);

/**
 * - Стек вызовов
 * - Порядок выполения
 */

function fnA() {
  console.log("fnA execution");
}

function fnB() {
  console.log("fnB execution");
}

function fnC() {
  console.log("fnC execution");
}

console.log("Before fnA execution");
fnA();
console.log("After fnA execution");

console.log("Before fnB execution");
fnB();
console.log("After fnB execution");

console.log("Before fnC execution");
fnC();
console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8
