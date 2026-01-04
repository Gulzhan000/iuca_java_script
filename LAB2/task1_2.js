

//студент
var student = {
    name: "Мария",
    surname: "Петрова",
    group: "IT-100",
    currentMonth: 8,
    isGraduate: false,
    direction: "IT",
    monthsPassed: 8
};
console.log("Студент:", student);

//банк. счет
var bankAccount = {
    accountNumber: "890567333248",
    currency: "KGZ",
    balance: 70500,
    owner: "Мария Петрова",
    isBlocked: false
};
console.log("Банковский счет:", bankAccount);






var studentDiv = document.createElement("div");
studentDiv.style.backgroundColor = "#d0f0fd"; 
studentDiv.style.padding = "15px";
studentDiv.style.border = "1px solid #a0c4d9";

studentDiv.innerHTML = `
    <h2>Студент</h2>
    <p><b>Имя:</b> ${student.name}</p>
    <p><b>Фамилия:</b> ${student.surname}</p>
    <p><b>Группа:</b> ${student.group}</p>
    <p><b>Месяц обучения:</b> ${student.currentMonth}</p>
    <p><b>Выпускник:</b> ${student.isGraduate}</p>
    <p><b>Направление:</b> ${student.direction}</p>
    <p><b>Пройдено месяцев:</b> ${student.monthsPassed}</p>
`;
document.body.appendChild(studentDiv);







var bankDiv = document.createElement("div");
bankDiv.style.backgroundColor = "#fdebd0"; 
bankDiv.style.padding = "15px";
bankDiv.style.margin = "10px 0";
bankDiv.style.border = "1px solid #f5c27d";

bankDiv.innerHTML = `
    <h2>Банковский счет</h2>
    <p><b>Номер счета:</b> ${bankAccount.accountNumber}</p>
    <p><b>Валюта:</b> ${bankAccount.currency}</p>
    <p><b>Баланс:</b> ${bankAccount.balance}</p>
    <p><b>Владелец:</b> ${bankAccount.owner}</p>
    <p><b>Заблокирован:</b> ${bankAccount.isBlocked}</p>
`;
document.body.appendChild(bankDiv);





