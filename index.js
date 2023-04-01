const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const button = document.getElementById('addButton');

const resultBox = document.getElementById('resultBox');

const sum = (num1, num2) => num1 + num2;

button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(sum(1, 2));
  resultBox.textContent = 'new';
});
