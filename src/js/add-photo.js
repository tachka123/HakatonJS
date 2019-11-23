import Dropzone from 'dropzone';
import 'dropzone/dist/min/dropzone.min.css';

const dropBoxCover = document.querySelector('#addPhoto-cover');
const addPhotoSvg = document.querySelector('#hide');

const myDropzone = new Dropzone(dropBoxCover, {
  url: '/file/post',
  maxFilesize: 10, // MB
  maxFiles: 10,
  dictDefaultMessage: '',
  accept: function(file, done) {
    addPhotoSvg.classList.add('is-hidden');
    if (!file.status === 'error') {
      done();
    } else if (myDropzone.files.length > 10) {
      done('You can not upload any more files.');
    } else {
      done('Problems with downloading, image is not uploaded.');
    }
  },
});
