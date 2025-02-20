import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://api.jikan.moe/v4/'
})

export default instanse