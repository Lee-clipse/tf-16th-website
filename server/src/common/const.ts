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

export const LOG_IGNORE_URL_LIST = [
  '/api/user/get',
  '/api/user/login',
  '/api/game/enter',
  '/api/game/user/fetch',
  '/api/game/staff/fetch',
  '/api/game/goods/fetch',
  '/api/game/monster/hp',
  '/api/game/staff/booth',
  '/api/game/booth/wait',
  '/api/game/booth/log',
  '/api/game/goods/log',
];

export const LOG_IMPORTANT_URL_LIST = [
  '/api/user/register',
  '/api/user/zg-join',
  '/api/game/select-booth',
  '/api/game/give-point',
  '/api/game/booth/change',
  '/api/game/booth/out',
  '/api/game/monster/attack',
  '/api/game/fullfill-goods',
  '/api/game/receive-goods',
];

export const API_WHERE = {
  '/api/user/register': '회원가입',
  '/api/user/zg-join': '제로게임 접수',
  '/api/game/select-booth': '부스 선택',
  '/api/game/give-point': '포인트 획득',
  '/api/game/booth/change': '부스 변경',
  '/api/game/booth/out': '부스 이탈',
  '/api/game/monster/attack': '공격',
  '/api/game/fullfill-goods': '제로게임 종료',
  '/api/game/receive-goods': '굿즈 획득',
};
