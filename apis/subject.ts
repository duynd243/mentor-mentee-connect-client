import request from "./utils";

const getAllSubjects = async (params?: any) => {
    const {data} = await request.get("/subjects", {params});
    return data;
}


const subjectApi = {
    getAllSubjects,
}

export default subjectApi;