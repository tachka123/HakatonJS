import { massOfPeople } from '../js/generatePeople';
import { geoStylesArray } from './geoStylesArray';
export default function() {
  let massOfmarkers = []
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
      el.addEventListener('click', showMarker);
    });
  }, 1000);

  var map = new google.maps.Map(
    document.getElementById('map_canvas'),
    myOptions,
  );
  function showGeo(e) {
    massOfPeople.forEach((elem) => {
      massOfmarkers = [...massOfmarkers,[elem.lat,elem.long]]
      const myLatlng = new google.maps.LatLng(elem.lat, elem.long);
      const marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: `Name:${elem.name}, Age:${elem.age}`
      })
      marker.setMap(map)

    })
  }
  showGeo()
  function showMarker(e){
    const matchesPeople = Array.from(document.querySelector('.matchesPeople').children)
    const indexMarker = matchesPeople.indexOf(e.currentTarget)
    const markerlatAndLong = massOfmarkers[indexMarker];
    const latLng = new google.maps.LatLng(markerlatAndLong[0], markerlatAndLong[1]); //Makes a latlng
      map.panTo(latLng); //Make map global
  }

}


