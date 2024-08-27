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
