import request from "./utils";

const getUserInfo = async () => {
  const { data } = await request.get(`/users/me`);
  return data;
};

const prepareOrder = async (payload: any) => {
  return await request.put(`/order/prepare-order`, payload);
};

const createOrder = async (payload: any) => {
  return await request.post(`/order/create-order`, payload);
};

const orderApi = {
  createOrder,
  prepareOrder,
};

export default orderApi;
