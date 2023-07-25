 /**Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел 
*/
	let num1 = Number(prompt("Введите первое число:"));
	let num2 = Number(prompt("Введите второе число:"));
	let num3 = Number(prompt("Введите третье число:"));
	
function findMaxNumber() {	
	let maxNum = num1;
	if (num2 > maxNum) {
	  maxNum = num2;
	}
	if (num3 > maxNum) {
	  maxNum = num3;
	}
  
	console.log(`Максимальное число: ${maxNum}`);
  }
  
  findMaxNumber();