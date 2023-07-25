/** Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */


function functCubing(num) {
	return Math.pow(num,3);
}

const cubing1 = functCubing(2);
const cubing2 = functCubing(3);

console.log(cubing1 + cubing2);



/


 /**Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел 

function maxNumber(num1, num2, num3) {
	if (num1 > num2) {
		console.log(`${num2} - минимальное число`);
	} else {
		console.log(`${num1} - минимальное число`);
	}
}

minMaxFn(1, 10);*/