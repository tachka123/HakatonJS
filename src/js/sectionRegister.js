
//reg
import 'js-datepicker';
import registration from './registration';
import Axios from 'axios';

export default function(){
  const start = document.querySelector('body').classList.contains('Registration')
  console.log(start)
  if(start){
    registration();
  }

}


