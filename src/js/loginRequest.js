import { refs } from './login.js';
import axios from 'axios';
export default function() {
  const btnForm = document.querySelector('.btn_form');
  //   console.log(btnForm);
  let isDataLoading = false;
  btnForm.addEventListener('submit', sendRequest);

  function sendRequest(e) {
    e.preventDefault();

    if (isDataLoading) return;

    isDataLoading = true;
    axios
      .post('https://venify.herokuapp.com/user/login', {
        password: refs.passwordValid.value,
        login: refs.inputValid.value,
      })
      .then(res => localStorage.setItem('token', res.data.token))
      .catch(err => console.log(err))
      .finally(() => {
        isDataLoading = false;
      });
  }
}
