const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const button = document.getElementById('addButton');

const resultBox = document.getElementById('resultBox');

const sum = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
};

button.addEventListener('click', (event) => {
  event.preventDefault();

  result = sum(input1.value, input2.value);
  resultBox.textContent = result;
});
