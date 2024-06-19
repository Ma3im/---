const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const modalInput = document.getElementById("modal-input");
const modalButton = document.getElementById("modal-button");

function openModal(title, message, input = false) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modalInput.style.display = input ? "block" : "none";
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function modalAction() {
  let inputValue = modalInput.value;

  switch (modalTitle.textContent) {
    case "Задание 1":
      let variable = inputValue;
      openModal("Результат", `Значение: ${variable}`); 
      break;
    case "Задание 2":
      let zodiac = inputValue.toLowerCase();
      let greetings = {
        "овен": "Привет, Овен!",
        "телец": "Привет, Телец!",
        "близнецы": "Привет, Близнецы!",
        "рак": "Привет, Рак!",
        "лев": "Привет, Лев!",
        "дева": "Привет, Дева!",
        "весы": "Привет, Весы!",
        "скорпион": "Привет, Скорпион!",
        "стрелец": "Привет, Стрелец!",
        "козерог": "Привет, Козерог!",
        "водолей": "Привет, Водолей!",
        "рыбы": "Привет, Рыбы!"
      };
      openModal("Приветствие", greetings[zodiac] || "Неизвестный знак зодиака");
      break;
      case "Задание 3":
        let numbers1 = "";
        for (let i = 1; i <= 40; i++) {
          numbers1 += i + " ";
        }
  
        let numbers2 = "";
        let j = 1;
        while (j <= 40) {
          numbers2 += j + " ";
          j++;
        }
  
        let numbers3 = "";
        let k = 1;
        do {
          numbers3 += k + " ";
          k++;
        } while (k <= 40);
        openModal("Циклы", `
          **For цикл:** 
          ${numbers1}
  
          **While цикл:** 
          ${numbers2}
  
          **Do...while цикл:** 
          ${numbers3}
        `);
        break;       
       case "Задание 4":
      setInterval(() => {
        alert("Вирус!");
      }, 1000);
      break;
    case "Задание 5":
      if (inputValue > 5 && !isNaN(inputValue)) {
        openModal("Поздравление", "Поздравляю, вы ввели число больше 5!");
      } else {
        openModal("Неправильно", "Пожалуйста, введите число больше 5.", true);
      }
      break;
    case "Задание 6":
      let evenNumbers = "";
      for (let i = 8; i <= 20; i += 2) {
        evenNumbers += i + " ";
      }
      openModal("Четные числа", `Четные числа от 8 до 20:\n${evenNumbers}`); // Заменил <br> на \n
      break;
    case "Задание 7":
      let oddNumbers = "";
      for (let i = 1; i <= 7; i++) {
        if (i !== 5) {
          oddNumbers += i + " ";
        }
      }
      openModal("Нечетные числа", `Нечетные числа от 1 до 7 (без 5):\n${oddNumbers}`); // Заменил <br> на \n
      break;
  }

  // Вывести информацию и затем закрыть окно ввода
  setTimeout(() => {
    closeModal();
  }, 3000);
}
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      window.location.reload();
    }
  });

const taskButtons = document.querySelectorAll(".task-button");
taskButtons.forEach(button => {
  button.addEventListener("click", () => {
    const taskId = button.dataset.taskId;
    switch (taskId) {
      case "1":
        openModal("Задание 1", "Введите текст", true);
        break;
      case "2":
        openModal("Задание 2", "Введите свой знак зодиака", true);
        break;
      case "3":
        openModal("Задание 3", "Числа от 1 до 40 с разными циклами");
        break;
      case "4":
        openModal("Задание 4", "Вирусная страница");
        break;
      case "5":
        openModal("Задание 5", "Введите число больше 5", true);
        break;
      case "6":
        openModal("Задание 6", "Четные числа от 8 до 20");
        break;
      case "7":
        openModal("Задание 7", "Нечетные числа от 1 до 7 (без 5)");
        break;
    }
  });
});