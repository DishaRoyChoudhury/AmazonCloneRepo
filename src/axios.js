import axios from "axios";

const instance =  axios.create({
    baseURL: 'https://us-central1-challenge-d8f61.cloudfunctions.net/api'// THE API URL
});

export default instance;

//http://127.0.0.1:5003/challenge-d8f61/us-central1/api