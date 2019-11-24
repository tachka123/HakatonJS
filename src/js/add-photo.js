import Dropzone from 'dropzone';
import 'dropzone/dist/min/dropzone.min.css';

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
    authorization:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiI1NTU2NjIiLCJhZ2UiOjE1LCJpYXQiOjE1NzQ1MTMwMDh9.RDYu0nENanjZk8D-S1Ah9TuTrvKffO7l1h9ZWnRtlpAlGrOaf7gYVpkAI2NG2TFIBO80VtjNVihPxmUR01osOw',
  },
  accept: function(file, done) {
    addPhotoSvg.classList.add('is-hidden');
    done();
  },
});

myDropzone.on('complete', function(file) {
  if (this.files.length === 2) {
    console.log(file);
  }
});