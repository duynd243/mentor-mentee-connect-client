import request from "./utils";

const getUserInfo = async () => {
  const { data } = await request.get(`/users/me`);
  return data;
};

const updateUserInfo = async (payload: any) => {
  return await request.put(`/users/me`, payload);
};

const getMentorInfo = async (_id: string) => {
  const { data } = await request.get(`/users/${_id}`);
  return data;
};

const getMentors = async (params?: any) => {
  const { data } = await request.get(`/users/mentors`, { params });
  return data;
};

const userApi = {
  getUserInfo,
  updateUserInfo,
  getMentorInfo,
  getMentors,
};

export default userApi;
