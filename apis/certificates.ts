import request from "./utils";

const getAllCertificatesLoginUser = async (params?: any) => {
  const { data } = await request.get(`/certificates`, { params });
  return data;
};

const addCertificates = async (data: any) =>
  request.post(`/certificates`, data);

//   const getCourses = (params?: any) => request.get('/courses', { params });

const certificateApi = {
  // ...generateAPIWithPaging<TCourse>('courses'),
  getAllCertificatesLoginUser,
  addCertificates,
};

export default certificateApi;
