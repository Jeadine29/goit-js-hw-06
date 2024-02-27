const validationInput = document.getElementById('validation-input');
v
alidationInput.addEventListener('blur', function () {
const enteredValue = validationInput.value.trim();
const desiredLength = parseInt(validationInput.getAttribute('data-length'));
    
    if (enteredValue.length === desiredLength) {
     validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
    } else {
        
     validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});