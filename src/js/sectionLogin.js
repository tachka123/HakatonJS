import inputValid from './login.js';
import loginRequest from './loginRequest.js';
import '../css/login.css';
export default function() {
  const start = document
    .querySelector('body')
    .classList.contains('Loginsection')
  if (start) {
    inputValid();
    loginRequest();
  }
}
