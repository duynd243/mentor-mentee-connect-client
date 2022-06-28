import request from "./utils";

const getSessionsByCourseId = async (courseId?: any, params?: any) => {
    const {data} = await request.get(`/sessions/${courseId}`, {params});
    return data;
}
const sessionApi = {
    getSessionsByCourseId
};

export default sessionApi;
