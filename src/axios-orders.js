import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-a055d.firebaseio.com/'
});

export default instance;