/** Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3. */

const num1 = prompt('Введите число num1');
const num2 = prompt('Введите число num2');


if (num1 >= 1) {
    console.log(`Переменная num1 = ${num1} / Больше или равна 1`);
} else {
    console.log(`Переменная num1 = ${num1} / Меньше 1`);
}

// Тернарный оператор
(num2 >= 3) ? console.log(`Переменная num2 = ${num2} / Больше или равна 3`) : console.log(`Переменная num2 = ${num2} / Меньше 3`)







