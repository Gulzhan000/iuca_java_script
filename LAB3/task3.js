var type = prompt("Введите тип карты (SILVER, GOLD или PLATINUM)").toUpperCase();
var liters = Number(prompt("Сколько литров заправили?"));
var points = 0;

if (type === "SILVER") {
    points = liters * 0.5;
} else if (type === "GOLD") {
    points = liters * 0.75;
} else if (type === "PLATINUM") {
    points = liters * 1;
} else {
    console.error("Ошибка: такой карты нет!");
}

if (points > 0) {
    console.log("Вы заправили " + liters + " л. Ваша карта " + type + ". Баллы: " + points);
}
