
const task1Result = document.getElementById('task1-result');
const array1 = [1, 2, 3, 4, 5]; // Способ 1: Литерал массива
const array2 = new Array(1, 2, 3, 4, 5); // Способ 2: Конструктор массива
const array3 = Array.from([1, 2, 3, 4, 5]); // Способ 3: Метод from
task1Result.textContent = `
Массив 1: ${array1}
Массив 2: ${array2}
Массив 3: ${array3}`;


const task2Result = document.getElementById('task2-result');
task2Result.textContent = `5-й элемент: ${array1[4]}`;
array1[4] = 10;
task2Result.textContent += `\nИзмененный 5-й элемент: ${array1[4]}`;


const task3Result = document.getElementById('task3-result');
for (let i = 0; i < array1.length; i++) {
    const li = document.createElement('li');
    li.textContent = array1[i];
    li.addEventListener('mouseover', () => {
        li.textContent = `Элемент: ${array1[i]}, Длина массива: ${array1.length}`;
    });
    li.addEventListener('mouseout', () => {
        li.textContent = array1[i];
    });
    task3Result.appendChild(li);
}


const task4Result = document.getElementById('task4-result');
for (let i = 0; i < array1.length; i++) {
    task4Result.textContent += `Элемент ${i + 1}: ${array1[i]}\n`;
}


const task5Result = document.getElementById('task5-result');
const array4 = [6, 7, 8, 9, 10];
const combinedArray = array1.concat(array4);
task5Result.textContent = `Объединенный массив: ${combinedArray}`;


const task6Result = document.getElementById('task6-result');
const lastElement = combinedArray.pop();
task6Result.textContent = `Удаленный элемент: ${lastElement}`;


const task7Result = document.getElementById('task7-result');
combinedArray.unshift(0);
task7Result.textContent = `Массив с новым элементом: ${combinedArray}`;


const task8Result = document.getElementById('task8-result');
const today = new Date();
task8Result.textContent = `Сегодняшняя дата: ${today}`;


const task9Result = document.getElementById('task9-result');
const formattedDate = today.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
task9Result.textContent = `Сегодняшняя дата: ${formattedDate}`;


const task10Button = document.getElementById('task10-button');
const task10Result = document.getElementById('task10-result');

function calculateProduct() {
    const random1 = Math.floor(Math.random() * 51);
    const random2 = Math.floor(Math.random() * 51);
    const product = random1 * random2;
    task10Result.textContent = `Произведение случайных чисел: ${random1} * ${random2} = ${product}`;
}


task10Button.addEventListener('click', calculateProduct); 