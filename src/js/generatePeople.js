import template from '../templates/person.hbs'
export {massOfPeople}
export default function() {
  insertPeople()
}
const massOfPeople = [
  {
    name: 'Sasha',
    age: 20,
    cell: 39939393,
    img:
      'https://www.meme-arsenal.com/memes/3ff4e626a86f24f2a2f7a53aa5197a3d.jpg',
      lat: 49,
    long:23
  },
  {
    lat: 29,
    long:13,
    name: 'Grig',
    age: 99,
    cell: 321,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrRckZGsWKzJwu-jQGpWULjXI1wjL3V3YjzEnNUSNZJrlPN5jw',
  },
  {
    lat: 119,
    long:243,
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  },{
    name: 'gora',
    age: 29,
    cell: 32129080,
    img:
      'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
  }
];
const matchesPeople = document.querySelector('.matchesPeople');

function generatePeople(){
  return massOfPeople.reduce((acc,element) => {
    return acc += template(element)}, '');
}

function insertPeople(){
  matchesPeople.innerHTML = generatePeople()
}


