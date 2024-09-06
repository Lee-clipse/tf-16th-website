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

// 응모하기
export const reqJoinEvent = async (id: string) => {
  const res = await axios.get(`${API_HOST}/user/event/join?id=${id}`);
  return res;
};

// 사회자: 추첨하기
export const reqLottery = async () => {
  const res = await axios.get(`${API_HOST}/user/event/lottery`);
  // { code, user }
  return res;
};

// 사회자: 1등 추첨하기
export const req1stLottery = async () => {
  const res = await axios.get(`${API_HOST}/user/event/1st-lottery`);
  // { code }
  return res;
};

// 사회자: 응모 참여자 수
export const reqEventCount = async () => {
  const res = await axios.get(`${API_HOST}/user/event/count`);
  // { code, count }
  return res;
};

// 응모 결과 보기
export const reqEventResult = async () => {
  const res = await axios.get(`${API_HOST}/user/event/result`);
  // { code, user }
  return res;
};

export const reqZgAgree = async (id: number, agree: number) => {
  const res = await axios.get(`${API_HOST}/user/zg-agree?id=${id}&agree=${agree}`);
  return res;
};

export const reqStaffEventCalc = async () => {
  const res = await axios.get(`${API_HOST}/user/staff-event/calc`);
  return res;
};

export const reqStaffEventResult = async () => {
  const res = await axios.get(`${API_HOST}/user/staff-event/result`);
  // { code, staffEventResult }
  return res;
};

export const reqStaffGoodsReceive = async (id: number) => {
  const res = await axios.get(`${API_HOST}/user/staff-event/receive?id=${id}`);
  return res;
};

export const reqSetLotteryOn = async () => {
  const res = await axios.get(`${API_HOST}/user/lottery/on`);
  return res;
};

export const reqSetLotteryOff = async () => {
  const res = await axios.get(`${API_HOST}/user/lottery/off`);
  return res;
};

export const reqGetLotteryFlag = async () => {
  const res = await axios.get(`${API_HOST}/user/lottery/get`);
  // { code, flag }
  return res;
};

/*
  const [isLoading, setIsLoading] = useState(false);

  setIsLoading(true);
  setIsLoading(false);

  {isLoading && <Loading />}
*/
