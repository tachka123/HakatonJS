import { massOfPeople } from '../js/generatePeople';
import { geoStylesArray } from './geoStylesArray';
export default function() {
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
  setTimeout(() => {
    const allPersons = document.querySelectorAll('.matchesPersonOuter');

    allPersons.forEach((el) => {
      el.addEventListener('click', showGeo);
    });
  }, 2000);

  var map = new google.maps.Map(
    document.getElementById('map_canvas'),
    myOptions,
  );
  function showGeo(e) {

    const massOfPeopleIn = document.querySelector('.matchesPeople').children
    const indexOfPerson = Array.from(massOfPeopleIn).indexOf(e.currentTarget)
    console.log(indexOfPerson)
    const myLatlng = new google.maps.LatLng(massOfPeople[indexOfPerson].lat, massOfPeople[indexOfPerson].long);
    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    })
  }

}


