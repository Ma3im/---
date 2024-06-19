let userName = localStorage.getItem('userName');
if (!userName) {
  userName = prompt("Как вас зовут?");
  localStorage.setItem('userName', userName);
}



const exampleCode1 = `
// Пример 1: Взаимодействие с пользователем
const userName = prompt("Как тебя зовут?");
alert("Привет, " + userName + "!");
`;
const exampleCode2 = `
// Пример 2: Работа с массивами
const fruits = ["Яблоко", "Банан", "Груша"];
fruits.push("Вишня");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
`;
const exampleCode3 = `
// Пример 3: Изменение текста
const textElement = document.getElementById('changing-text');
const changeButton = document.getElementById('change-text-button');

let fontSize = 16;
let color = 'black';

changeButton.addEventListener('click', () => {
  fontSize += 2;
  color = ['red', 'green', 'blue'][Math.floor(Math.random() * 3)];
  textElement.style.fontSize = fontSize + 'px';
  textElement.style.color = color;
});
`;
const exampleCode4 = `
// Пример 4: Работа с объектами
const square = document.getElementById('animated-shape');

let shape = 'square';

function animateShape() {
  if (shape === 'square') {
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.borderRadius = '0';
    shape = 'triangle';
  } else if (shape === 'triangle') {
    square.style.width = '0';
    square.style.height = '0';
    square.style.borderTop = '100px solid transparent';
    square.style.borderRight = '100px solid transparent';
    square.style.borderBottom = '100px solid black';
    shape = 'circle';
  } else if (shape === 'circle') {
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.borderRadius = '50%';
    shape = 'square';
  }
}

setInterval(animateShape, 1000);
`;

function showExample(exampleId) {
    const exampleContent = document.getElementById("example-content");
    const exampleButton = document.querySelector(`button[onclick="showExample('${exampleId}')"]`);

    let code = '';

    if (exampleId === "example1") {
        code = exampleCode1;
        exampleContent.innerHTML = `<pre>${code}</pre>`;
    } else if (exampleId === "example2") {
        code = exampleCode2;
        exampleContent.innerHTML = `<pre>${code}</pre>`;
    } else if (exampleId === "example3") {
        code = exampleCode3;
        exampleContent.innerHTML = `
            <pre>${code}</pre>
            <p id="changing-text">Изменяющийся текст</p>
            <button id="change-text-button">Изменить текст</button>
            <script>
              ${code}
            </script>
        `;
    } else if (exampleId === "example4") {
        code = exampleCode4;
        exampleContent.innerHTML = `
            <pre>${code}</pre>
            <div id="animated-shape" style="width: 100px; height: 100px; background-color: black;"></div>
            <script>
              ${code}
            </script>
        `;
    }

    exampleContent.classList.remove("hidden");
    exampleButton.disabled = true; 
}




const quizQuestions = [
    { question: "Какой тип данных используется для хранения текста?", answer: "string", options: ["string", "number", "boolean", "array"] },
    { question: "Как объявляется переменная в JavaScript?", answer: "let", options: ["let", "var", "const", "all of the above"] },
    { question: "Что такое функция в JavaScript?", answer: "блок кода, который выполняет определенную задачу", options: ["блок кода, который выполняет определенную задачу", "переменная для хранения данных", "массив для хранения множества значений", "объект для хранения свойств"] },
    { question: "Как вывести сообщение в консоль?", answer: "console.log()", options: ["console.log()", "alert()", "prompt()", "document.write()"] },
    { question: "Что такое цикл for в JavaScript?", answer: "повторяет блок кода заданное количество раз", options: ["повторяет блок кода заданное количество раз", "управляет условием выполнения кода", "создает функцию", "объявляет переменную"] },
    { question: "Что такое массив в JavaScript?", answer: "структура данных для хранения множества значений", options: ["структура данных для хранения множества значений", "переменная для хранения одного значения", "объект для хранения свойств", "функция для выполнения задачи"] },
    { question: "Как получить доступ к элементу массива?", answer: "используя индекс", options: ["используя индекс", "используя имя", "используя значение", "используя ключ"] },
    { question: "Что такое объект в JavaScript?", answer: "структура данных для хранения пар ключ-значение", options: ["структура данных для хранения пар ключ-значение", "массив для хранения множества значений", "функция для выполнения задачи", "переменная для хранения данных"] },
    { question: "Как получить доступ к свойству объекта?", answer: "используя точку или квадратные скобки", options: ["используя точку или квадратные скобки", "используя индекс", "используя имя", "используя значение"] },
    { question: "Что такое событие в JavaScript?", answer: "действие, которое происходит на веб-странице", options: ["действие, которое происходит на веб-странице", "переменная для хранения данных", "функция для выполнения задачи", "массив для хранения множества значений"] }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById("start-quiz").classList.add("hidden");
    document.getElementById("quiz-content").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    document.getElementById("quiz-content").innerHTML = `
        <h3>${question.question}</h3>
        <ul>
            ${question.options.map(option => `<li><button onclick="checkAnswer('${option}')">${option}</button></li>`).join('')}
        </ul>
    `;
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizQuestions[currentQuestion].answer;
    userAnswers.push(selectedAnswer);

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-content").classList.add("hidden");
    document.getElementById("quiz-results").classList.remove("hidden");
    document.getElementById("quiz-results").innerHTML = `
        <h2>Результаты</h2>
        <p>Ваш результат: ${score} из ${quizQuestions.length}</p>
        ${userAnswers.map((answer, index) => `<p>Вопрос ${index + 1}: ${answer} (${answer === quizQuestions[index].answer ? 'Верно' : 'Неверно'})</p>`).join('')}
    `;
}

const themeToggle = document.getElementById("theme-checkbox");

const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.checked = true;
}

themeToggle.onchange = () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    isDarkTheme = true;
    document.body.classList.add("dark-theme");
}


function showEasterEgg() {
    const overlay = document.createElement("div");
    overlay.id = "easter-egg-overlay";
    overlay.innerHTML = `
        <div id="easter-egg-content">
            <h1>Сюрприз!</h1>
            <p>Сегодня ${new Date().toLocaleDateString()}!</p>
            <p>Привет, ${userName}!</p>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function createExampleButtons() {
    const exampleContainer = document.getElementById("example-container");
    const exampleButtons = [
      { id: "example1", text: "Пример 1" },
      { id: "example2", text: "Пример 2" },
      { id: "example3", text: "Пример 3" },
      { id: "example4", text: "Пример 4" }
    ];
  
   
    shuffleArray(exampleButtons);
  
    exampleButtons.forEach(exampleButton => {
      const button = document.createElement("button");
      button.textContent = exampleButton.text;
      button.onclick = () => showExample(exampleButton.id);
      exampleContainer.appendChild(button);
    });
  }
  
  
  createExampleButtons();
  
  function showExample(exampleId) {
      const exampleContent = document.getElementById("example-content");
     
      const exampleButtons = document.querySelectorAll('.example-container button');
      exampleButtons.forEach(button => button.disabled = false);
  
      let code = '';
  
      if (exampleId === "example1") {
          code = exampleCode1;
          exampleContent.innerHTML = `<pre>${code}</pre>`;
      } else if (exampleId === "example2") {
          code = exampleCode2;
          exampleContent.innerHTML = `<pre>${code}</pre>`;
      } else if (exampleId === "example3") {
          code = exampleCode3;
          exampleContent.innerHTML = `
              <pre>${code}</pre>
              <p id="changing-text">Изменяющийся текст</p>
              <button id="change-text-button">Изменить текст</button>
              <script>
                ${code}
              </script>
          `;
      } else if (exampleId === "example4") {
          code = exampleCode4;
          exampleContent.innerHTML = `
              <pre>${code}</pre>
              <div id="animated-shape" style="width: 100px; height: 100px; background-color: black;"></div>
              <script>
                ${code}
              </script>
          `;
      }
  
      exampleContent.classList.remove("hidden");
      
      const currentButton = document.querySelector(`button[onclick="showExample('${exampleId}')"]`);
      currentButton.disabled = true;
  }


  function createAssignmentButtons() {
    const assignmentButtonsDiv = document.getElementById("assignment-buttons");
    const assignmentButtons = [
        { text: "Знак зодиака", func: zodiacAssignment },
        { text: "Число больше 5", func: numberAssignment },
        { text: "Четные числа", func: evenNumbersAssignment },
        { text: "Нечетные числа", func: oddNumbersAssignment },
    ];

    assignmentButtons.forEach(button => {
        const btn = document.createElement("button");
        btn.textContent = button.text;
        btn.onclick = button.func;
        assignmentButtonsDiv.appendChild(btn);
    });
}


window.addEventListener("load", () => {
    createAssignmentButtons();
});


function zodiacAssignment() {
    const zodiacSign = prompt("Введите свой знак зодиака:");
    if (zodiacSign) {
        alert(`Привет, ${zodiacSign}!`);
    }
}

function numberAssignment() {
    let number = parseInt(prompt("Введите число больше 5:"));
    while (isNaN(number) || number <= 5) {
        if (number === null) { 
            return;
        }
        number = parseInt(prompt("Некорректный ввод. Введите число больше 5:"));
    }
    alert("Поздравляю, вы ввели число больше 5!");
}

function evenNumbersAssignment() {
    let output = "Четные числа от 8 до 20: ";
    for (let i = 8; i <= 20; i += 2) {
        output += i + " ";
    }
    alert(output);
}

function oddNumbersAssignment() {
    let output = "Нечетные числа от 1 до 7 (без 5): ";
    for (let i = 1; i <= 7; i++) {
        if (i === 5) {
            continue; 
        }
        if (i % 2 !== 0) {
            output += i + " ";
        }
    }
    alert(output);
}
