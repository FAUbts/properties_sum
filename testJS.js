/*Сумма свойств

Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

Если объект пустой, то результат должен быть 0.

Например:*/


"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650

function getSum(obj){
	var sum = 0;
	for (var key in obj){
		sum += obj[key];
	}
	return sum;
}

console.log("Не пустой объект: " + getSum(salaries));

delete salaries["Вася"];
delete salaries["Петя"];
delete salaries["Даша"];

console.log("Пустой объект: " + getSum(salaries));