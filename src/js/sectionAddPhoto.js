//addPhoto
import '../css/add-photo.css';
import addPhoto from './add-photo';
import '../css/add-photo2.css'


export default function(){
  const start = document.querySelector("body").classList.contains('AddPhoto')
  if(start){
    addPhoto()
  }
}
