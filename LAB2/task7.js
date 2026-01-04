

while (true) {
    let input = prompt("Введите число от 1 до 3999 (или 'exit' для выхода):");

    if (input === null) break;           
    if (input.toLowerCase() === "exit") break; 

    let number = Number(input);

    if (Number.isInteger(number) && number >= 1 && number <= 3999) {
        console.log("Вы ввели число: " + number);
    } else {
        console.error("Ошибка! Введите целое число от 1 до 3999.");
    }
}
