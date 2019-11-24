import { massOfPeople,peopleMass } from '../js/generatePeople';
import { geoStylesArray } from './geoStylesArray';
import axios from 'axios';
export default function() {
  let massOfmarkers = [];
  let peopleMass = [];
  var myOptions = {
    center: { lat: 50.466511, lng: 30.627141 },
    zoom: 12,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles: geoStylesArray,
  };
  const getListByName = async () => {
    const { data } = await axios(`https://venify.herokuapp.com/user/list`, {
      headers: {
        authorization:
        localStorage.getItem("token"),
      },
    });
    return await data;
  };
  setTimeout(() => {
    const allPersons = document.querySelectorAll('.matchesPersonOuter');
    allPersons.forEach(el => {
      el.addEventListener('click', showMarker);
    });
  }, 1000);

  var map = new google.maps.Map(
    document.getElementById('map_canvas'),
    myOptions,
  );
  async function showGeo(e) {
    const result = await getListByName()
    result.forEach(elem => {
      massOfmarkers = [...massOfmarkers, [elem.geo_location[0], elem.geo_location[1]]];
      const myLatlng = new google.maps.LatLng(elem.geo_location[0], elem.geo_location[1]);
      const marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: `Name:${elem.full_name}, Age:${elem.age}`,
      });
      marker.setMap(map);
    });
  }
  showGeo();
  function showMarker(e) {
    const matchesPeople = Array.from(
      document.querySelector('.matchesPeople').children,
    );
    const indexMarker = matchesPeople.indexOf(e.currentTarget);
    const markerlatAndLong = massOfmarkers[indexMarker];
    const latLng = new google.maps.LatLng(
      markerlatAndLong[0],
      markerlatAndLong[1],
    ); //Makes a latlng
    map.panTo(latLng); //Make map global
  }
  const toLikes = document.querySelector('#toLikes');

  const exit = document.querySelector('#EXIT');
  exit.addEventListener('click', () => {
    window.location.replace('/HakatonProduction/login.html');
    localStorage.removeItem('token');
  });
  toLikes.addEventListener('click', () => {
    window.location.replace('/HakatonProduction/slider.html');
  });
  if(document.querySelector('.personAge')){
    document.querySelector('.personAge').textContent = ''
  }

}
