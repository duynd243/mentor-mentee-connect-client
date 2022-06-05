import request from "./utils";
import { TCourse } from "../types/course";

const getAllCourses = (params?: any) =>
  request.get("/courses", { params }).then((res) => res.data);

//   const getCourses = (params?: any) => request.get('/courses', { params });

const getCourseById = (_id: string, params?: any) =>
  request.get<any>(`/courseDetails/${_id}`, { params }).then((res) => res.data);

const courseApi = {
  // ...generateAPIWithPaging<TCourse>('courses'),
  getAllCourses,
  getCourseById,
};

export default courseApi;
