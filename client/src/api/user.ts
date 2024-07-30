import axios from "axios";

export const ReqUserLogin = async (name: string, phoneNumber: string) => {
  const res = await axios.get(
    `http://localhost:8080/api/user/login?name=${name}&phoneNumber=${phoneNumber}`
  );
  return res;
};

export const ReqUserRegister = async (body: object) => {
  const res = await axios.post(`http://localhost:8080/api/user/register`, body);
  return res;
};
