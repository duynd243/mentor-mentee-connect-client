import request from "./utils";

const getAllCourses = async (params?: any) => {
  const { data } = await request.get(`/courses`, { params });
  return data;
};
//   const getCourses = (params?: any) => request.get('/courses', { params });

const getCourseById = async (_id: string) => {
  const { data } = await request.get(`/courses/${_id}`);
  return data;
};

const add = (data: any) => request.post("/courses", data);

const createCourse = async (payload: any) => {
    return await request.post(`/courses`, payload);
}

const getUserCreatedCourses = async (params?: any) => {
  const { data } = await request.get(`/users/courses`, { params });
  return data;
};

const courseApi = {
  // ...generateAPIWithPaging<TCourse>('courses'),
  getAllCourses,
  getCourseById,
  createCourse,
  add,
  getUserCreatedCourses,
};

export default courseApi;
