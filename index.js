var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.getElementById('addButton');
var resultBox = document.getElementById('resultBox');
var sum = function (num1, num2) {
  return +num1 + +num2;
};
button.addEventListener('click', function (event) {
  event.preventDefault();
  var result = sum(Number(input1.value), Number(input2.value));
  resultBox.textContent = String(result);
});
