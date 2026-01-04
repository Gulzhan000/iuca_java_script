var num = Number(prompt("Введите число от 2 до 10:"));
if (num >= 2 && num <= 10) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " × " + i + " = " + (num * i));
    }
} else {
    console.error("Ошибка! Введите число от 2 до 10.");
}
