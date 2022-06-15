import request from "./utils";

const authHeader = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    }
}

const getUserInfo = async () => {
    const {data} = await request.get(`/users/me`, authHeader);
    return data;
}

const updateUserInfo = async (payload: any) => {
    return await request.put(`/users`, payload, authHeader);
}

const userApi = {
    getUserInfo,
    updateUserInfo,
}

export default userApi;