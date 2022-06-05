import request from "./utils";

const getAllCategories = (id: string, params?: any) =>
  request.get(`/category/${id}`, { params }).then((res) => res.data);

//   const getCourses = (params?: any) => request.get('/courses', { params });

const categoryApi = {
  // ...generateAPIWithPaging<TCourse>('courses'),
  getAllCategories,
};

export default categoryApi;
