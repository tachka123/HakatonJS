import '../css/styles-slider.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import galleryItem from '../html/template/galleryItem.hbs';
import galleryItem1 from '../html/template/galleryItem1.hbs';
import { brotliDecompressSync } from 'zlib';
import axios from 'axios';

const swiper = new Swiper('.swiper-container2', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  mousewheel: true,
  keyboard: true,
  speed: 900,
  //   spaceBetween: 100,
  //   delayBetweenSlides: 700,
  //   delay: 20000,
});
const swiper1 = new Swiper('.swiper-container1', {
  mousewheel: true,
  keyboard: true,
  //   speed: 5000,
  //   delay: 2000,
});
const button = document.querySelector('.scroll_btn_next');
button.addEventListener('click', () => {
  swiper1.slideNext();
  swiper.slideNext();
  like.style.opacity = '0';
});
const button1 = document.querySelector('.scroll_btn_like');
const like = document.querySelector('.picturelike');

button1.addEventListener('click', () => {
  like.style.opacity = '1';
});
swiper.controller.control = swiper1;
// swiper1.controller.control = swiper;

const ul = document.querySelector('.swiper-wrapper');
const ul1 = document.querySelector('.swiper-wrapper1');

const getListByName = async () => {
  const { data } = await axios(`https://venify.herokuapp.com/user/list`, {
    headers: {
      authorization:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiJ1c2VyVGVsLnZhbHVlIiwiYWdlIjoidXNlckFnZS52YWx1ZSIsImlhdCI6MTU3NDUyNDMyMH0.CJcAiSm1lbnAwTOipBt-0KJI8ZPREWdRwRotDraRnoVYCPi3DVNhwXhhZDag36iV0cds7K5GnGheoCGf4sPLzQ',
    },
  });
  return await data;
};

const createList = photoList => {
  return photoList.reduce((acc, photo) => {
    return acc + galleryItem(photo);
  }, '');
};
const createList1 = photoList => {
  return photoList.reduce((acc, photo) => {
    return acc + galleryItem1(photo);
  }, '');
};

const renderList = async () => {
  const data = await getListByName();
  ul.innerHTML = createList(data);
  ul1.innerHTML = createList1(data);

  swiper1.update();
  swiper.update();
};

renderList();
