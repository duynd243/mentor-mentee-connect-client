import axios from "axios";
// ----------------------------------------------------------------------

const request = axios.create({
    baseURL: process.env.baseUrl,
});

request.interceptors.request.use(function (config) {
        let accessToken = localStorage.getItem("accessToken");
        config.headers = {
            'Authorization': 'Bearer ' + accessToken
        }
        return config;
    }
)

request.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            error.response && error.response.data
            // || "Có lỗi xảy ra"
        )
);

export default request;
