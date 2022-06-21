import request from "./utils";

const getUserInfo = async () => {
    const {data} = await request.get(`/users/me`);
    return data;
}

const updateUserInfo = async (payload: any) => {
    return await request.put(`/users`, payload);
}

const getMentorInfo = async (_id: string) => {
    const {data} = await request.get(`/users/${_id}`);
    return data;
}

const userApi = {
    getUserInfo,
    updateUserInfo,
    getMentorInfo
}

export default userApi;