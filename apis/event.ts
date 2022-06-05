import request from "./utils";

const getAllEventApis = (params?: any) =>
  request.get("/events", { params }).then((res) => res.data);

const eventApi = {
  getAllEventApis,
};

export default eventApi;
