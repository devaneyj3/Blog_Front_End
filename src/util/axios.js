import axios from "axios";

export const axiosInstance = () => {
    return axios.create({
        baseUrl: "http://localhost:3000/api/",
    });
};
