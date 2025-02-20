import axios from "axios";

const instanse = axios.create({ baseURL: "http://localhost:4000" });

export default instanse;