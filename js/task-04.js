const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById('value');

let counterValue = 0;

function updateCounter(value) {
  counterValue += value;
  counterValueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', function() {
  updateCounter(-1);
});

incrementButton.addEventListener('click', function() {
  updateCounter(1);
});