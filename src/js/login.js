'use strict';
export { refs };
export default function() {
  refs.inputValid.addEventListener('input', validateInputLogin);
  // TODO add blur listeners for user first input

  refs.passwordValid.addEventListener('input', validateInputPassword);

  function validateInputLogin() {
    if (refs.inputValid.value.length >= 5) {
      refs.inputValid.classList.remove('input_invalid');
    } else {
      refs.inputValid.classList.add('input_invalid');
    }
  }

  function validateInputPassword() {
    if (refs.passwordValid.value.length <= 8) {
      refs.passwordValid.classList.add('input_invalid');
    } else {
      refs.passwordValid.classList.remove('input_invalid');
    }
  }
}
const refs = {
  inputValid: document.querySelector('.input[name="login"]'),
  passwordValid: document.querySelector('.input[name="Password"]'),
};
