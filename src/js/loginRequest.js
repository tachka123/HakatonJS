import { refs } from './login.js';
import axios from 'axios';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
export default function() {
  const btnForm = document.querySelector('.btn_form');

  let isDataLoading = false;
  btnForm.addEventListener('submit', sendRequest);

  async function sendRequest(e) {
    e.preventDefault();
    if (
      refs.inputValid.classList.contains('input_invalid') ||
      refs.passwordValid.classList.contains('input_invalid')
    ) {
      catchError();
      return;
    }
    if (isDataLoading) return;

    isDataLoading = true;
    const data = await axios
      .post('https://venify.herokuapp.com/user/login', {
        password: refs.passwordValid.value,
        login: refs.inputValid.value,
      })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        window.location.replace("/HakatonProduction/add-photo.html")
      })
      .catch(err => {
        catchError();
      })
      .finally(() => {
        isDataLoading = false;
      });
  }
}

function catchError() {
  PNotify.error('No matches found. Please enter a more specific request.');
}
