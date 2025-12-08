import Axios from "axios";


export const axiosConfing = Axios.create({
    baseURL: "http://localhost:3001"
});