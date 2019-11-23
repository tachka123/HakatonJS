import datepicker from 'js-datepicker';
import axios from 'axios';
import 'js-datepicker/dist/datepicker.min.css';
export default function() {
  // login
  const login = document.querySelector('.input__login');
  const loginError = document.querySelector('.input_login_error');

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
  const name = document.querySelector('.input__name');
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

  Array.from(radioButtonGendre).forEach(radio => {
    radio.addEventListener('change', e => {
      if (!activeRadioButton) {
        activeRadioButton = e.target;
      } else {
        activeRadioButton.parentNode.classList.remove('checked');
      }

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
      // Show which date was selected.
      console.log(instance.dateSelected);
    },
    onShow: instance => {
      console.log('Calendar showing.');
    },
    onHide: instance => {
      console.log('Calendar hidden.');
    },
    onMonthChange: instance => {
      // Show the month of the selected date.
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
  const password = document.querySelector('.input__password');
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

  form.addEventListener('submit', submit);

  function submit() {
    if (login.value.length === 2) {
      console.log('hello');
    } else {
      console.log('lox');
    }
  }
}
