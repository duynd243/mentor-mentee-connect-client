import request from "./utils";

const getAllTeams = (params?: any) =>
  request.get("/teams", { params }).then((res) => res.data);

//   const getCourses = (params?: any) => request.get('/courses', { params });

const teamApi = {
  // ...generateAPIWithPaging<TCourse>('courses'),
  getAllTeams,
};

export default teamApi;
