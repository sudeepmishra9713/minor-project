import axios from "axios";

const BASE_URL = "http://localhost:5014/api/v1";

const axiosInsctance = axios.create();
axiosInsctance.defaults.withCredentials = true;

export default axiosInsctance;
