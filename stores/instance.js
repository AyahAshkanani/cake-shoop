import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.119:8000",
});
//if you're using another device to view this, use your laptops ip address instead of local host
export default instance;