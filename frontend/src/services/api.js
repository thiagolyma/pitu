import Axios from 'axios';

const baseAPI = (baseURL) => {
    const api = Axios.create({
        baseURL,
    });
    return api;
}

export default baseAPI;
