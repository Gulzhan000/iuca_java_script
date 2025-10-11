
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");
const users = [
    {
        login: "gulzhan",
        password: "70700",
        name: "Гулжан"
    },
    {
        login: "irina",
        password: "90nat",
        name: "Ирина"
    },
    {
        login: "emma",
        password: "jj450",
        name: "Эмма"
    },
    {
        login: "harry",
        password: "01hpp",
        name: "Гарри"
    },
    {
        login: "ronald",
        password: "7tt40",
        name: "Рональд"
    }
];

loginBtn.addEventListener("click", () => {
  const login = loginInput.value.trim();
  const password = passwordInput.value.trim();

  const user = users.find(
    (u) => u.login === login && u.password === password
  );

  if (user) {
    message.style.color = "#2ecc71";
    message.textContent = `Добро пожаловать, ${user.name}!`;
  } else {
    message.style.color = "#e74c3c";
    message.textContent = "Ошибка! неверный логин или пароль!";
  }
});
