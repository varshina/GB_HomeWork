/**Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */

const day = prompt("Введите число месяца");

if (day > 0 && day < 10) { 
    alert(`Число ${day} в 1ой декаде месяца`);    
} else if (day > 10 && day < 20){
    alert(`Число ${day} во 2ой декаде месяца`);    
} else if (day > 21 && day < 31){
    alert(`Число ${day} в 3ей декаде месяца`);    
} else {
    alert(`Вы ввели ${day} / Это некорректное значение. В месяце не больше 31 дня. Попытайтесь еще раз!`); 
}