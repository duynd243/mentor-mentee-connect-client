import request from "./utils";

const getAllCourses = async (params?: any) => {
    return await request.get(`/courses`, {params}).then((res) => res.data);
}
//   const getCourses = (params?: any) => request.get('/courses', { params });

const getCourseById = (_id: string, params?: any) =>
    request.get<any>(`/courseDetails/${_id}`, {params}).then((res) => res.data);
const searchCourse = (title:string) => {
    return request.get<any>('/courses', {params: {name: title}}).then((res) => res.data);
}
const courseApi = {
    // ...generateAPIWithPaging<TCourse>('courses'),
    getAllCourses,
    getCourseById,
    searchCourse
};

export default courseApi;
