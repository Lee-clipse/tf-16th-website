export type UserRegisterInfo = {
  name: string;
  sex: number;
  age: number;
  phoneNumber: string;
  location: string;
  agree: number;
  recommandPerson: string;
};

export type UserLoginInfo = {
  name: string;
  phoneNumber: string;
};

export type User = {
  id: number;
  name: string;
  sex: number;
  age: number;
  phoneNumber: string;
  location: string;
  agree: boolean;
  createdAt: string;
  recommandPerson: string;
  staff: boolean;
  zgJoin: boolean;
  isIng?: boolean;
};

export type StaffEvent = {
  id: number;
  name: string;
  age: number;
  phoneNumber: string;
  group: string;
  goodsReceived: boolean;
};

export type ZGUser = {
  userId: number;
  point: number;
  boothLog: string;
  waitingBoothId: string;
  goodsReceived: boolean;
  isAttack: boolean;
};

export type GoodsLog = {
  name: string;
  phoneNumber: string;
  clearedAt: string;
};

export type Recommand = {
  name: string;
};

export type StaffGoodsLog = {
  name: string;
  phoneNumber: string;
  receivedAt: string;
  group: string;
};

export type Ranking = {
  name: string;
  phoneNumber: string;
  group: string;
  count: number;
};

export type LotteryUser = {
  id: number;
  name: string;
  phoneNumber: string;
};
