// const {default: axios} = require("axios");
import axios from "axios";
export const BASE_URL = "http://localhost:9090";
const clientServer = axios.create({
    baseURL: BASE_URL,
});

export default clientServer;

