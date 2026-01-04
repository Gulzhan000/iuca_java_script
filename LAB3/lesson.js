let secret = Math.floor(Math.random() * 100) + 1
let guess
while (guess !== secret) {
  guess = Number(prompt("Угадай число от 1 до 100"))
  if (guess > secret) alert("Меньше!")
  else if (guess < secret) alert("Больше!")
  else alert("Правильно!")
}
