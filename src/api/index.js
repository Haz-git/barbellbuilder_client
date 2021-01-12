import axios from 'axios';

//This will be the connection to our API hosted temporarily on localhost. After preliminary setup, the API will be hosted on Heroku.

export default axios.create({
    baseURL: 'http://localhost:7467/api',
    // baseURL: 'https://gymjot.herokuapp.com/api',
    withCredentials: true,
    headers: {
        Authorization: JSON.parse(localStorage.getItem('jwt')),
    },
});
