export const API_CODE = {
  SUCCESS: 200,
  INVALID: 400,
  NOT_FOUND: 404,
};

export const ZEROGAME = 'ZEROGAME';
export const CLIMATE = 'CLIMATE';
export const YOUTH = 'YOUTH';
export const MULTI_CULTURE = 'MULTI_CULTURE';

export const BOOTH_VALUE = {
  ZEROGAME: 1000,
  CLIMATE: 100,
  MULTI_CULTURE: 10,
  YOUTH: 1,
};

export const BOOTH_DOMAIN = {
  ZEROGAME: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
  ],
  CLIMATE: [
    '101',
    '102',
    '103',
    '104',
    '105',
    '106',
    '107',
    '108',
    '109',
    '110',
  ],
  MULTI_CULTURE: ['201', '202', '203', '204'],
  YOUTH: ['301', '302', '303', '304'],
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
