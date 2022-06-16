import request from "./utils";
import axios from 'axios';

const getAllCourses = async (params?: any) => {
    const {data} = await request.get(`/courses`, {params});
    return data;
}
//   const getCourses = (params?: any) => request.get('/courses', { params });

const getCourseById = async (_id: string) => {
    const {data} = await request.get(`/courses/${_id}`);
    return data;
}
const getAll = async (params?: any) => {
    const {data} = await axios.get("https://raw.githubusercontent.com/duynd243/PRM392_Labs/main/courses.json", {params});
    return data;
}
const courseApi = {
    // ...generateAPIWithPaging<TCourse>('courses'),
    getAllCourses,
    getCourseById,
    getAll
};

export default courseApi;
