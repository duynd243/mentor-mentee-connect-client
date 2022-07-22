import request from "./utils";

const getSessionsByCourseId = async (courseId?: any, params?: any) => {
    const {data} = await request.get(`/sessions/${courseId}`, {params});
    return data;
}
const createASession = async (payload: any) => {
    return await request.post(`/sessions`, payload);
}

const getLoggedInMentorSessionsByDate = async (params?: any) => {
    const {data} = await request.get(`/sessions/by-date`, {params});
    return data;
}

const getMenteesOfSession = async (_sessionId: any, params: any) => {
    return await request.get(`/sessions/detail/${_sessionId}`, {params});
}

const checkAttendance = async (params: any) => {
    return await request.put(`/sessions/update-attendance`, {params});
}

const sessionApi = {
    getSessionsByCourseId,
    createASession,
    getLoggedInMentorSessionsByDate,
    getMenteesOfSession,
    checkAttendance
};

export default sessionApi;
