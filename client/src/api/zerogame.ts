import axios from "axios";
import { HOST } from "../common/const";

const API_HOST = HOST.LOCAL;

// body: user_id
export const reqGameEnter = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/enter`, body);
  return res;
};

// body: booth_id, user_id
export const reqSelectBooth = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/select-booth`, body);
  return res;
};

export const reqUserGameFetch = async (userId: string) => {
  const res = await axios.get(`${API_HOST}/game/user/fetch?user_id=${userId}`);
  return res;
};

export const reqStaffGameFetch = async (boothId: string) => {
  const res = await axios.get(`${API_HOST}/game/staff/fetch?booth_id=${boothId}`);
  return res;
};

// body: booth_id, user_id
export const reqGivePoint = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/give-point`, body);
  return res;
};

// body: booth_id, user_id
export const reqBoothChange = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/booth/change`, body);
  return res;
};

// body: booth_id, user_id
export const reqBoothOut = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/booth/out`, body);
  return res;
};

// body: point
export const reqAttackMonster = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/monster/attack`, body);
  return res;
};

export const reqUserGoodsFetch = async () => {
  const res = await axios.get(`${API_HOST}/game/goods/fetch`);
  return res;
};

// body: user_id
export const reqReceiveGoods = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/receive-goods`, body);
  return res;
};
