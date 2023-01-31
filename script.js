const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const resultDisplay = document.getElementById('result');
const widthErrorDisplay = document.getElementById('width-error');
const heightErrorDisplay = document.getElementById('height-error');
const resetBtn = document.getElementById('reset-btn');
const copyBtn = document.getElementById('copy-btn');
const copyMessage = document.getElementById('copy-message');

function calculate() {
  const width = widthInput.value;
  const height = heightInput.value;

  let hasError = false;

  // Validate the width input
  if (width === '') {
    widthErrorDisplay.innerHTML = 'Please enter a value for width.';
    hasError = true;
  } else if (isNaN(width)) {
    widthErrorDisplay.innerHTML = 'Width must be a number.';
    hasError = true;
  } else {
    widthErrorDisplay.innerHTML = '';
  }

  // Validate the height input
  if (height === '') {
    heightErrorDisplay.innerHTML = 'Please enter a value for height.';
    hasError = true;
  } else if (isNaN(height)) {
    heightErrorDisplay.innerHTML = 'Height must be a number.';
    hasError = true;
  } else {
    heightErrorDisplay.innerHTML = '';
  }

  // If both inputs are valid, calculate the angle and display the result
  if (!hasError) {
    const angleInRadians = Math.atan2(width, height);
    const angleInDegrees = angleInRadians * (180 / Math.PI);
    resultDisplay.value = angleInDegrees.toFixed(4);
  } else {
    resultDisplay.value = '';
  }
}

function reset() {
  widthInput.value = '';
  heightInput.value = '';
  resultDisplay.value = '';
  widthErrorDisplay.innerHTML = '';
  heightErrorDisplay.innerHTML = '';
}

function copyResult() {
  resultDisplay.select();
  document.execCommand('copy');
  copyMessage.style.display = 'block';
  setTimeout(() => {
    copyMessage.style.display = 'none';
  }, 1000);
}

widthInput.addEventListener('input', calculate);
heightInput.addEventListener('input', calculate);
resetBtn.addEventListener('click', reset);
copyBtn.addEventListener('click', copyResult);
