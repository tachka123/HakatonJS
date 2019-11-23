import '../css/styles.css'
import PerfectScrollbar from 'perfect-scrollbar';
import mapGoogle from '../js/mapGoogle'
import generatePeople from '../js/generatePeople'
import axios from 'axios';
mapGoogle()
generatePeople()

axios.post("https://venify.herokuapp.com/user/register",{
	"password": "goit",
	"login": "Lode_stone111fffdsaafs",
	"age": 15,
	"phone_number": "555662",
	"geo_location": [55.5555, 65.55555],
	"gender": "mail"
}
).then(result => console.log(result))
