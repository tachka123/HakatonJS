import template from '../templates/person.hbs';
import axios from 'axios';
export {peopleMass}
export default function() {
  insertPeople();
}
let peopleMass = [];

const matchesPeople = document.querySelector('.matchesPeople');

const getListByName = async () => {
  const { data } = await axios(`https://venify.herokuapp.com/user/list`, {
    headers: {
      authorization:
      localStorage.getItem("token"),
    },
  });
  return await data;
};
async function getArray(){
  const data = await getListByName()
}
getArray()
async function generatePeople() {
  const data = await getListByName()
  peopleMass = data;
  return await data.reduce((acc, element) => {
    return  (acc += template(element));
  }, '');
}

async function insertPeople() {
  matchesPeople.innerHTML = await generatePeople();
}
