export const API_CODE = {
  SUCCESS: 200,
  INVALID: 400,
  NOT_FOUND: 404,
};

export const BOOTH_INDEX_VALUE = {
  ZEROGAME: 0,
  CLIMATE: 1,
  MULTI_CULTURE: 2,
  YOUTH: 3,
};

export const WAIT_BOOTH_ID = 'Z0';
export const GOODS_BOOTH_ID = 'A2';

export const BOOTH_DOMAIN = {
  ZEROGAME: [
    'D1',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'D11',
    'D12',
    'D13',
    'D14',
    'D15',
    'D16',
  ],
  CLIMATE: ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
  MULTI_CULTURE: ['C1-1', 'C1-2', 'C2', 'C3', 'C4'],
  YOUTH: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'],
};

export const LOG_IGNORE_URL_LIST = [
  '/api/user/get',
  '/api/user/login',
  '/api/user/event/join',
  '/api/user/event/count',
  '/api/user/event/result',
  '/api/user/zg-agree',
  '/api/game/enter',
  '/api/game/user/fetch',
  '/api/game/staff/fetch',
  '/api/game/goods/fetch',
  '/api/game/monster/hp',
  '/api/game/staff/booth',
  '/api/game/booth/wait',
  '/api/game/booth/log',
  '/api/game/goods/log',
  '/api/game/staff/list',
  '/api/game/staff/recommand-list',
  '/api/game/staff/goods/log',
  '/api/game/staff/event/ranking',
];

export const LOG_IMPORTANT_URL_LIST = [
  '/api/user/register',
  '/api/user/zg-join',
  '/api/user/event/lottery',
  '/api/user/event/1st-lottery',
  '/api/game/select-booth',
  '/api/game/give-point',
  '/api/game/booth/change',
  '/api/game/booth/out',
  '/api/game/monster/attack',
  '/api/game/fullfill-goods',
  '/api/game/receive-goods',
  '/api/game/staff/receive-goods',
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
