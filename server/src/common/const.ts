export const API_CODE = {
  SUCCESS: 200,
  INVALID: 400,
  NOT_FOUND: 404,
};

export const BOOTH_LIST: { [key: number]: string } = {
  0: '대기',
  1: '1번 부스',
  2: '2번 부스',
  3: '3번 부스',
  4: '4번 부스',
  5: '5번 부스',
  101: '101번 부스',
  201: '201번 부스',
  301: '301번 부스',
  777: '굿즈 수령 부스',
};

export const ZEROGAME = 'ZEROGAME';
export const CLIMATE = 'CLIMATE';
export const YOUTH = 'YOUTH';
export const MULTI_CULTURE = 'MULTI_CULTURE';

export const BOOTH_VALUE = {
  ZEROGAME: 1000,
  CLIMATE: 100,
  YOUTH: 10,
  MULTI_CULTURE: 1,
};

export const BOOTH_DOMAIN = {
  ZEROGAME: ['1', '2', '3', '4'],
  CLIMATE: ['101'],
  YOUTH: ['201'],
  MULTI_CULTURE: ['301'],
};
