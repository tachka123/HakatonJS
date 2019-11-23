import '../css/styles.css';
import '../css/login.css';
import inputValid from './login.js';
import loginRequest from './loginRequest.js';

inputValid();
loginRequest();

// Axios.post('https://venify.herokuapp.com/user/login', {
//   password: 'goit',
//   login: 'Lode_stone',
// })
//   .then(result => console.log(result))
//   .catch();
