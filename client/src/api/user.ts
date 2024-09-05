import axios from "axios";
import { HOST } from "../common/const";

const API_HOST = HOST.LOCAL;
// const API_HOST = HOST.DEPLOY;

export const reqUserLogin = async (name: string, phoneNumber: string) => {
  const res = await axios.get(`${API_HOST}/user/login?name=${name}&phoneNumber=${phoneNumber}`);
  return res;
};

export const reqUserRegister = async (body: object) => {
  const res = await axios.post(`${API_HOST}/user/register`, body);
  return res;
};

export const reqUserData = async (id: string) => {
  const res = await axios.get(`${API_HOST}/user/get?id=${id}`);
  return res;
};

export const reqJoinZerogame = async (id: string) => {
  const res = await axios.get(`${API_HOST}/user/zg-join?id=${id}`);
  return res;
};

export const reqJoinEvent = async (id: string) => {
  const res = await axios.get(`${API_HOST}/user/event/join?id=${id}`);
  return res;
};

export const reqLottery = async () => {
  const res = await axios.get(`${API_HOST}/user/event/lottery`);
  // { code, user }
  return res;
};

export const req1stLottery = async () => {
  const res = await axios.get(`${API_HOST}/user/event/1st-lottery`);
  // { code }
  return res;
};

export const reqEventCount = async () => {
  const res = await axios.get(`${API_HOST}/user/event/count`);
  // { code, count }
  return res;
};

export const reqEventResult = async () => {
  const res = await axios.get(`${API_HOST}/user/event/result`);
  // { code, user }
  return res;
};

export const reqZgAgree = async (id: number, agree: number) => {
  const res = await axios.get(`${API_HOST}/user/zg-agree?id=${id}&agree=${agree}`);
  return res;
};

/*
  const [isLoading, setIsLoading] = useState(false);

  setIsLoading(true);
  setIsLoading(false);

  {isLoading && <Loading />}
*/
