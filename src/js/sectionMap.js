//map
import '../css/styles.css';
import PerfectScrollbar from 'perfect-scrollbar';
import mapGoogle from '../js/mapGoogle';
import generatePeople from '../js/generatePeople';
import axios from 'axios';
export default function() {
  const start = document.querySelector('body').classList.contains('Body');
  if (!start) return;
  mapGoogle();
  generatePeople();
}
