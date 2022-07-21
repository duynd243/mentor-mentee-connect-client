import request from "./utils";

const getSessionsByCourseId = async (courseId?: any, params?: any) => {
    const {data} = await request.get(`/sessions/${courseId}`, {params});
    return data;
}
const createASession = async (payload: any) => {
    return await request.post(`/sessions`, payload);
}

const sessionApi = {
    getSessionsByCourseId,
    createASession
};

export default sessionApi;
