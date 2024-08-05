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
  pk: number;
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
