import axios from "axios";
import { HOST } from "../common/const";

const API_HOST = HOST.LOCAL;
// const API_HOST = HOST.DEPLOY;

// body: user_id
export const reqGameEnter = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/enter`, body);
  // { code }
  return res;
};

// body: booth_id, user_id
export const reqSelectBooth = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/select-booth`, body);
  // { code }
  return res;
};

export const reqUserGameFetch = async (userId: string) => {
  const res = await axios.get(`${API_HOST}/game/user/fetch?user_id=${userId}`);
  // { code, user }
  return res;
};

export const reqStaffGameFetch = async (boothId: string) => {
  const res = await axios.get(`${API_HOST}/game/staff/fetch?booth_id=${boothId}`);
  // { code, userList }
  return res;
};

// body: booth_id, user_id, point
export const reqGivePoint = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/give-point`, body);
  // { code }
  return res;
};

// body: booth_id, user_id
export const reqBoothChange = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/booth/change`, body);
  // { code }
  return res;
};

// body: booth_id, user_id, ing
export const reqBoothCheck = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/booth/check`, body);
  // { code }
  return res;
};

// body: booth_id, user_id
export const reqBoothOut = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/booth/out`, body);
  // { code }
  return res;
};

// body: point
export const reqAttackMonster = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/monster/attack`, body);
  // { code }
  return res;
};

export const reqMonsterHp = async () => {
  const res = await axios.get(`${API_HOST}/game/monster/hp`);
  // { code, hp }
  return res;
};

export const reqUserGoodsFetch = async () => {
  const res = await axios.get(`${API_HOST}/game/goods/fetch`);
  // { code }
  return res;
};

export const reqBoothIdOfStaff = async (staffId: string) => {
  const res = await axios.get(`${API_HOST}/game/staff/booth?staff_id=${staffId}`);
  // { code, staff_id }
  return res;
};

export const reqBoothLogOfUser = async (userId: string) => {
  const res = await axios.get(`${API_HOST}/game/booth/log?user_id=${userId}`);
  // { code, boothLog }
  return res;
};

export const reqBoothWaitList = async () => {
  const res = await axios.get(`${API_HOST}/game/booth/wait`);
  // { code, boothWaitList }
  return res;
};

// body: user_id
export const reqFullfillGoods = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/fullfill-goods`, body);
  // { code }
  return res;
};

// body: user_id
export const reqReceiveGoods = async (body: object) => {
  const res = await axios.post(`${API_HOST}/game/receive-goods`, body);
  // { code }
  return res;
};

export const reqGoodsLogList = async () => {
  const res = await axios.get(`${API_HOST}/game/goods/log`);
  // { code, goodsLogList }
  return res;
};

export const reqEventStaffList = async () => {
  const res = await axios.get(`${API_HOST}/game/staff/list`);
  // { code, staffList }
  return res;
};

export const reqStaffReceiveGoods = async (staffId: number) => {
  const res = await axios.get(`${API_HOST}/game/staff/receive-goods?staff_id=${staffId}`);
  // { code }
  return res;
};

export const reqRecommandList = async (staffId: number) => {
  const res = await axios.get(`${API_HOST}/game/staff/recommand-list?staff_id=${staffId}`);
  // { code, recommantList }
  return res;
};
