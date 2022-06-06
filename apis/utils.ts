import axios from "axios";

// ----------------------------------------------------------------------

const request = axios.create({
  baseURL: process.env.sampleUrl,
});

request.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      error.response && error.response.data
      // || "Có lỗi xảy ra"
    )
);

export default request;
