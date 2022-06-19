import request from "./utils";

const getUserInfo = async () => {
    const {data} = await request.get(`/users/me`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    });
    return data;
}

const updateUserInfo = async (payload: any) => {
    return await request.put(`/users`, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    });
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