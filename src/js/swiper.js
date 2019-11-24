import '../css/styles-slider.css';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import galleryItem from '../html/template/galleryItem.hbs';
import galleryItem1 from '../html/template/galleryItem1.hbs';
import { brotliDecompressSync } from 'zlib';
import axios from 'axios';
import personSwiper from '../html/template/sliderPerson.hbs'

export default function() {
  const start = document.querySelector('#swiper');
  let counter = 0;
	if (start) {
		const swiper = new Swiper('.swiper-container2', {
			keyboard: true,
			speed: 900,
      allowSlidePrev: false,
      allowTouchMove: false
		});
		const swiper1 = new Swiper('.swiper-container1', {
			keyboard: true,
      allowSlidePrev: false,
      speed: 900,
      allowTouchMove: false
		});
		const button = document.querySelector('.scroll_btn_next');
		button.addEventListener('click', () => {
			swiper1.slideNext();
			swiper.slideNext();
      like.style.opacity = '0';
      renderPerson()
		});
		const button1 = document.querySelector('.scroll_btn_like');
		const like = document.querySelector('.picturelike');

		button1.addEventListener('click', () => {
      like.style.opacity = '1';
      setTimeout(() => {
        swiper1.slideNext();
        swiper.slideNext();
        like.style.opacity = '0';
      }, 1500);
      renderPerson()
		});

		const ul = document.querySelector('.swiper-wrapper');
    const ul1 = document.querySelector('.swiper-wrapper1');
    const person = document.querySelector('.person')
    const age = document.querySelector('.personAge')
    // const agePerson = document.querySelector('.')
		const getListByName = async () => {
			const { data } = await axios(`https://venify.herokuapp.com/user/list`, {
				headers: {
					authorization:
          localStorage.getItem("token"),
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

    const renderPerson = async () => {
			const data = await getListByName();
      person.textContent = `Name: ${data[counter].full_name}`;
      age.textContent =`Age: ${data[counter].age}`
      counter += 1;
      // person.textContent = `${data.full_name}, ${data.age}`
    };

		const renderList = async () => {
			const data = await getListByName();
			ul.innerHTML = createList(data);
			ul1.innerHTML = createList1(data);

			swiper1.update();
			swiper.update();
		};

    renderList();
    renderPerson()

    const exit = document.querySelector('#exit')
    exit.addEventListener('click',() => {
      window.location.replace("HakatonProduction/login.html")
      localStorage.removeItem("token")
    })

    const toMap = document.querySelector('#toMap')
    toMap.addEventListener('click', () => {
      window.location.replace("/HakatonProduction/map.html")
    })
	}
}
