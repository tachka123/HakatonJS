'use strict';
import datepicker from 'js-datepicker';
import axios from 'axios';
import 'js-datepicker/dist/datepicker.min.css';
import PNotify from 'pnotify/dist/es/PNotify.js';

import 'pnotify/dist/PNotifyBrightTheme.css';
export default function() {
  // login
  const login = document.querySelector('.input__login-registration');
  const loginError = document.querySelector('.input_login_error');
  let geoArray = [];
  const sexArray = Array.from(
    document.querySelectorAll('.registration__sex__label'),
  );
  login.addEventListener('blur', e => {
    if (login.value.length) {
      return;
    } else {
      login.classList.add('invalid');
      loginError.classList.add('error');
    }
  });

  login.addEventListener('focus', e => {
    if (login.value.length) {
      return;
    } else {
      login.classList.remove('invalid');
      loginError.classList.remove('error');
    }
  });

  //name
  const name = document.querySelector('.input__name-registration');
  const nameError = document.querySelector('.input_name_error');

  name.addEventListener('blur', e => {
    if (name.value.length) {
      return;
    } else {
      name.classList.add('invalid');
      nameError.classList.add('error');
    }
  });

  name.addEventListener('focus', e => {
    if (name.value.length) {
      return;
    } else {
      name.classList.remove('invalid');
      nameError.classList.remove('error');
    }
  });

  //sex
  const radioButtonGendre = document.querySelectorAll('.input_sex');
  let activeRadioButton;
  let sex = '';
  Array.from(radioButtonGendre).forEach(radio => {
    radio.addEventListener('change', e => {
      if (!activeRadioButton) {
        activeRadioButton = e.target;
      } else {
        activeRadioButton.parentNode.classList.remove('checked');
      }
      setTimeout(() => {
        if (sexArray[0].classList.contains('checked')) {
          sex = 'male';
          console.log(sex);
        } else {
          sex = 'female';
          console.log(sex);
        }
      }, 100);

      activeRadioButton = e.target;
      activeRadioButton.parentNode.classList.add('checked');
    });
  });

  //age
  const picker = datepicker('.input__age', {
    formatter: (input, date, instance) => {
      input.value = date.toDateString();
    },
    nSelect: instance => {
      console.log(instance.dateSelected);
    },
    onShow: instance => {
      console.log('Calendar showing.');
    },
    onHide: instance => {
      console.log('Calendar hidden.');
    },
    onMonthChange: instance => {
      console.log(instance.currentMonthName);
    },
    position: 'bl',
    startDay: 1,
    customDays: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
    customMonths: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    alwaysShow: false,
    dateSelected: new Date(),
    maxDate: new Date(2099, 0, 1),
    minDate: new Date(1901, 5, 1),
    startDate: new Date(),
    showAllDates: true,
    noWeekends: false,
  });
  //number
  const phoneNumber = document.querySelector('.input__number');
  const phoneNumberError = document.querySelector('.input_number_error');
  const phoneNumberErrorLength = document.querySelector(
    '.input_number_error_length',
  );

  oninput = function() {
    phoneNumber.value = phoneNumber.value.replace(/\D/g, '');
  };

  phoneNumber.addEventListener('blur', e => {
    if (phoneNumber.value.length === 10) {
      return;
    } else if (phoneNumber.value.length === 0) {
      phoneNumber.classList.add('invalid');
      phoneNumberError.classList.add('error');
    } else if (phoneNumber.value.length < 10 || phoneNumber.value.length > 10) {
      phoneNumber.classList.add('invalid');
      phoneNumberErrorLength.classList.add('error');
    }
  });

  phoneNumber.addEventListener('focus', e => {
    if (phoneNumber.value.length === 10) {
      return;
    } else if (phoneNumber.value.length === 0) {
      phoneNumber.classList.remove('invalid');
      phoneNumberError.classList.remove('error');
    } else if (phoneNumber.value.length < 10 || phoneNumber.value.length > 10) {
      phoneNumber.classList.remove('invalid');
      phoneNumberErrorLength.classList.remove('error');
    }
  });

  // password
  const password = document.querySelector('.input__password-registration');
  const passwordError = document.querySelector('.input_password_error');

  password.addEventListener('blur', e => {
    if (password.value.length >= 8) {
      return;
    } else {
      password.classList.add('invalid');
      passwordError.classList.add('error');
    }
  });

  password.addEventListener('focus', e => {
    if (password.value.length >= 8) {
      return;
    } else {
      password.classList.remove('invalid');
      passwordError.classList.remove('error');
    }
  });
  /// submit
  const btn = document.querySelector('.btn');
  const form = document.querySelector('.registration__form');
  btn.addEventListener('click', handleClick);

  async function handleClick(e) {
    e.preventDefault();
    const loginValid = isValidLoginInput();
    const nameValid = isValidNameInput();
    const phoneNumberValid = isValidPhoneNumberInput();
    const passwordValid = isValidPasswordInput();
    if (loginValid && nameValid && phoneNumberValid && passwordValid) {
      sendRequestAxios();
    } else {
      PNotify.error('Invalid inputs. Try again!');
    }
  }

  function isValidLoginInput() {
    if (login.value.length) {
      login.classList.remove('invalid');
      loginError.classList.remove('error');
      return true;
    } else {
      login.classList.add('invalid');
      loginError.classList.add('error');
      return false;
    }
  }

  function isValidNameInput() {
    if (name.value.length) {
      name.classList.remove('invalid');
      nameError.classList.remove('error');
      return true;
    } else {
      name.classList.add('invalid');
      nameError.classList.add('error');
      return false;
    }
  }

  function isValidPhoneNumberInput() {
    if (phoneNumber.value.length === 10) {
      phoneNumber.classList.remove('invalid');
      phoneNumberError.classList.remove('error');
      phoneNumberErrorLength.classList.remove('error');
      return true;
    } else if (phoneNumber.value.length === 0) {
      phoneNumber.classList.add('invalid');
      phoneNumberError.classList.add('error');
      return false;
    } else if (phoneNumber.value.length < 10 || phoneNumber.value.length > 10) {
      phoneNumber.classList.add('invalid');
      phoneNumberErrorLength.classList.add('error');
      return false;
    }
  }

  function isValidPasswordInput() {
    if (password.value.length >= 8) {
      password.classList.remove('invalid');
      passwordError.classList.remove('error');
      return true;
    } else {
      password.classList.add('invalid');
      passwordError.classList.add('error');
      return false;
    }
  }

  async function sendRequestAxios() {
    await axios
      .post('https://venify.herokuapp.com/user/register', {
        password: password.value,
        login: login.value,
        age: 18,
        phone_number: phoneNumber.value,
        geo_location: geoArray,
        gender: sex,
      })
      .then(result => {
        const { data } = result;
        localStorage.setItem('token', data.token);
        PNotify.success('Registered!');
        setTimeout(() => {
          window.location.replace('/HakatonProduction/add-photo.html');
        }, 1000);
      })
      .catch(error => {
        PNotify.error('This nickname also made! Try another one.');
      });
  }

  function getAge() {
    const age = document.querySelector('.input__age');
    const arr = age.value.split(' ');
    return 2019 - arr[arr.length - 1];
  }
  function getGeo(geo) {
    geoArray = geo;
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      getGeo([position.coords.latitude, position.coords.longitude]);
    });
  }
  getLocation();
}
