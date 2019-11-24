import inputValid from './login.js';
import loginRequest from './loginRequest.js';
import '../css/login.css';
export default function() {
  const start = document
    .querySelector('form')
    .classList.contains('sectionLogin');
  if (start) {
    inputValid();
    loginRequest();
  }
}
