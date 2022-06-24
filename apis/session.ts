import request from "./utils";

const getSessions = async (params?: any) => {
    const {data} = await request.get(`/sessions`, {params});
    return data;
}
const sessionApi = {
    getSessions
};

export default sessionApi;
