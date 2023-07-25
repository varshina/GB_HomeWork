/** Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */


function functCubing(num) {
	return Math.pow(num,3);
}

const cubing1 = functCubing(2);
const cubing2 = functCubing(3);

console.log(cubing1 + cubing2);

