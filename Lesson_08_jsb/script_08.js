/**Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число 

for (let i = 0; i < 11; i++) {
    if (i === 0) {
      console.log("0 – это ноль");
    } else if (i % 2 === 0) {
      console.log(`${i} – четное число`);
    } else {
      console.log(`${i} – нечетное число`);
    }
  }
  */

  /**Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] 

const arr01 = [1, 2, 3, 4, 5, 6, 7];
arr01.splice(3,2)
console.log(arr01);

*/

/**Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
 */

// генерация массива из 5 случайных цифр
const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 10));
}
console.log(arr); 


// расчет суммы элементов массива
const sum = arr.reduce((acc, curr) => acc + curr);
console.log(sum); 

// поиск минимального числа в массиве
const min = Math.min(...arr);
console.log(min); 

// проверка наличия числа 3 в массиве
const numThree = arr.includes(3);
console.log(numThree); 


