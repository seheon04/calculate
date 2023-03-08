function validateInput(input, errorElement) {
  let errorMessage = '';
  if (input === '') {
    errorMessage = 'Value is required';
  } else if (isNaN(input)) {
    errorMessage = 'Value must be a number';
  }
  errorElement.innerHTML = errorMessage; // errorElement이 null일 수 있으므로 if문으로 체크해줍니다.
}

function swapValues() {
  const heightInput = document.getElementById('height');
  const widthInput = document.getElementById('width');

  let temp = heightInput.value;
  heightInput.value = widthInput.value;
  widthInput.value = temp;
}

function calculateAngle() {
  const heightInput = document.getElementById('height');
  const widthInput = document.getElementById('width');
  const angleInput = document.getElementById('angle');

  const height = parseInt(heightInput.value);
  const width = parseInt(widthInput.value);

  if (isNaN(height) || isNaN(width)) {
    angleInput.value = 'Invalid input';
    return;
  }

  const angle = Math.atan(height / width) * (180 / Math.PI);
  angleInput.value = `${angle.toFixed(4)}°`;
}

function resetValues() {
  const heightInput = document.getElementById('height');
  const widthInput = document.getElementById('width');
  const angleInput = document.getElementById('angle');
  heightInput.value = '';
  widthInput.value = '';
  angleInput.value = '';
}

function copyAngle() {
  const angleInput = document.getElementById('angle');
  angleInput.select();
  document.execCommand('copy');
}

// 실시간으로 오류메세지 출력
document.addEventListener('DOMContentLoaded', () => {
  const heightInput = document.getElementById('height');
  const heightErrorElement = document.getElementById('height-error');
  heightInput.addEventListener('input', () => {
    validateInput(heightInput.value, heightErrorElement);
  });

  const widthInput = document.getElementById('width');
  const widthErrorElement = document.getElementById('width-error');
  widthInput.addEventListener('input', () => {
    validateInput(widthInput.value, widthErrorElement);
  });
});

// 엔터키로도 계산 가능
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // 엔터키의 기본 동작인 줄바꿈을 막습니다.
    calculateAngle();
  }
});
