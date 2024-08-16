export const ROUTE_PATH = {
  TEST: "/test",
  MAIN: "/",
  JOIN: "/join",
  REGISTER: "/register",
  INFO: "/info",
  COMMUNITY: "/community",
  HISTORY: "/history",
  MY_PAGE: "/my-page",
  ZG_LOGO: "/zg-logo",
  ZG_CARTOON: "/zg-cartoon",
  ZG_HOME: "/zg-home",
  ZG_BOOTH: "/zg-booth",
  ZG_MONSTER: "/zg-monster",
  ZG_GOODS: "/zg-goods",
  STAFF: "/staff",
  GOODS_STAFF: "/goods-staff",
};

export const HOST = {
  LOCAL: "http://localhost:8080/api",
  DEPLOY: "https://busan-tf.n-e.kr/api",
};

export const TOKEN = {
  PK_NODE: 0,
  STAFF_NODE: 1,
  EXPIRE_NODE: 2,
};

export const STAFF_SIGN = {
  STAFF: "tf",
  NOT_STAFF: "al",
};

export const API_CODE = {
  SUCCESS: 200,
  INVALID: 400,
  NOT_FOUND: 404,
};

export const SEX = {
  MALE: 1,
  FEMALE: 2,
};

export const AGREE = {
  NOT_SELECTED: 0,
  AGREE: 1,
  NOT_AGREE: 2,
};

export const MONSTER_FULL_HP = 300000;

export const BOOTH_LIST: { [key: number]: { title: string; desc: string } } = {
  0: { title: "대기", desc: "부스 설명입니다." },

  1: { title: "병뚜껑 키링 만들기", desc: "부스 설명입니다." },
  2: { title: "실찌 만들기", desc: "부스 설명입니다." },
  3: { title: "제기차기", desc: "부스 설명입니다." },
  4: { title: "신문지 게임", desc: "부스 설명입니다." },
  5: { title: "알까기 게임", desc: "부스 설명입니다." },
  6: { title: "상자 속 물건 퀴즈", desc: "부스 설명입니다." },
  7: { title: "나라 수도 맞추기", desc: "부스 설명입니다." },
  8: { title: "틀린그림찾기", desc: "부스 설명입니다." },
  9: { title: "모기 기피제", desc: "부스 설명입니다." },
  10: { title: "물병 세우기", desc: "부스 설명입니다." },
  11: { title: "테이블 자유투", desc: "부스 설명입니다." },
  12: { title: "재활용 캔 쌓기", desc: "부스 설명입니다." },
  13: { title: "책 페이지 찾기", desc: "부스 설명입니다." },
  14: { title: "사격", desc: "부스 설명입니다." },
  15: { title: "전기 자전거", desc: "부스 설명입니다." },
  16: { title: "스티커 타투", desc: "부스 설명입니다." },

  101: { title: "테라리움 만들기", desc: "부스 설명입니다." },
  102: { title: "해양 쓰레기 탈출 1", desc: "부스 설명입니다." },
  103: { title: "해양 쓰레기 탈출 2", desc: "부스 설명입니다." },
  104: { title: "메시지 전시부스", desc: "부스 설명입니다." },
  105: { title: "굿피플", desc: "부스 설명입니다." },
  106: { title: "환경공단 홍보 부스", desc: "부스 설명입니다." },
  107: { title: "CO2 흡입 차량 설명", desc: "부스 설명입니다." },
  108: { title: "현대 전기자동차 설명", desc: "부스 설명입니다." },
  109: { title: "인형 뽑기 부스", desc: "부스 설명입니다." },
  110: { title: "탄소중립과 홍보 부스", desc: "부스 설명입니다." },

  201: { title: "IWC", desc: "부스 설명입니다." },
  202: { title: "캘리그라피 제작", desc: "부스 설명입니다." },
  203: { title: "다문화 포토존", desc: "부스 설명입니다." },
  204: { title: "ISF", desc: "부스 설명입니다." },

  301: { title: "청정수", desc: "부스 설명입니다." },
  302: { title: "꼼지락", desc: "부스 설명입니다." },
  303: { title: "골든타임", desc: "부스 설명입니다." },
  304: { title: "GRIT", desc: "부스 설명입니다." },

  999: { title: "굿즈", desc: "부스 설명입니다." },
};

export const ZEROGAME = "ZEROGAME";
export const CLIMATE = "CLIMATE";
export const YOUTH = "YOUTH";
export const MULTI_CULTURE = "MULTI_CULTURE";

export const BOOTH_CLEAR_LOG = "3111";

export const BOOTH_VALUE = {
  ZEROGAME: 1000,
  CLIMATE: 100,
  YOUTH: 10,
  MULTI_CULTURE: 1,
};

export const BOOTH_DOMAIN = {
  ZEROGAME: ["1", "2", "3", "4"],
  CLIMATE: ["101"],
  YOUTH: ["201"],
  MULTI_CULTURE: ["301"],
};

export const 스탭_지원_폼_링크 =
  "https://docs.google.com/forms/d/1YCzLX4S9JhsTQI41K_n7AwubNbbooLm0839-3rclJtU/viewform?pli=1&pli=1&edit_requested=true";
export const 청건부산_인스타_링크 = "https://www.instagram.com/together_festival52/";
export const 청건부산_유튜브_링크 = "https://www.youtube.com/@togefes";
export const 청건부산_블로그_링크 =
  "https://m.blog.naver.com/PostList.naver?blogId=together_festival&permalink=permalink&tab=1";

export const LOCATION = [
  "강서구",
  "금정구",
  "기장군",
  "남구",
  "동구",
  "동래구",
  "부산진구",
  "북구",
  "사상구",
  "사하구",
  "서구",
  "수영구",
  "연제구",
  "영도구",
  "중구",
  "해운대구",
  "기타",
];

export const WEB_WIDTH = "375px";
