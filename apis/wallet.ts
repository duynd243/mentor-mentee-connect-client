import request from "./utils";

const getUserBean = async (phoneNumber: string) => {
  const { data } = await request.get(`/wallet/${phoneNumber}`);
  return data;
};

const linkAccountBean = async (datas: any) => {
  const { data } = await request.post(`/wallet`, { datas });
  return data;
};

const walletApi = {
  getUserBean,
  linkAccountBean,
};

export default walletApi;
