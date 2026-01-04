
// 4 
var num1 = Number(prompt("Введите первое число:"));
var num2 = Number(prompt("Введите второе число:"));

if (num1 > num2) {
    console.log(num1 + " больше, чем " + num2);
} else if (num2 > num1) {
    console.log(num2 + " больше, чем " + num1);
} else {
    console.log("Числа равны");
}

