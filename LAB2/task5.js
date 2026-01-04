
// 5 
var color = prompt("Введите цвет светофора (красный, желтый, зеленый):").toLowerCase();
if (color === "красный") {
    console.log("Стой!");
} else if (color === "желтый") {
    console.log("Жди!");
} else if (color === "зеленый") {
    console.log("Иди!");
} else {
    console.log("Некорректный цвет");
}

