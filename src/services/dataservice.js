import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:3000';

export default {
    getAllPerson(page, filter=""){
        return Axios.get(`/iro?szemely_like=${filter}&_page=${page}&_limit=5&_expand=orszag`)  
    },
    getAllPersonForRecords() {
        return Axios.get("/iro")
    }
}