import Dropzone from 'dropzone';
import 'dropzone/dist/min/dropzone.min.css';
export default function(){
  Dropzone.autoDiscover = false;
const dropBoxCover = document.querySelector('#dropzone-cover');
const addPhotoSvg = document.querySelector('#hide');
const myDropzone = new Dropzone(dropBoxCover, {
  url:
    'https://cors-anywhere.herokuapp.com/https://venify.herokuapp.com/user/photos/upload',
  maxFilesize: 10, // MB
  maxFiles: 2,
  paramName: 'file',
  dictDefaultMessage: '',
  headers: {
    authorization: localStorage.getItem("token"),
  },
  accept: function(file, done) {
    addPhotoSvg.classList.add('is-hidden');
    done();
  },
});

myDropzone.on('complete', function(file) {
  if (this.files.length === 2) {
    window.location.replace("/HakatonProduction/slider.html")
  }
});

}
