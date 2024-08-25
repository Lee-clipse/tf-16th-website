import { keyframes } from "styled-components";

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

  1: { title: "4글자 퀴즈", desc: "부스 설명입니다." },
  2: { title: "너와 나의 연결 고리", desc: "부스 설명입니다." },
  3: { title: "희망의 제기", desc: "부스 설명입니다." },
  4: { title: "뭉치면 살고 흩어지면 죽는다", desc: "부스 설명입니다." },
  5: { title: "에그드롭", desc: "부스 설명입니다." },
  6: { title: "판도라의 상자", desc: "부스 설명입니다." },
  7: { title: "세계의 수도 탐험", desc: "부스 설명입니다." },
  8: { title: "관찰 그리고 관심", desc: "부스 설명입니다." },
  9: { title: "모기 기피제", desc: "부스 설명입니다." },
  10: { title: "Drop the Bottle", desc: "부스 설명입니다." },
  11: { title: "탁구 슛!", desc: "부스 설명입니다." },
  12: { title: "캔쌓기 챌린지", desc: "부스 설명입니다." },
  13: { title: "페이지 탐험대", desc: "부스 설명입니다." },
  14: { title: "Fire in the hole", desc: "부스 설명입니다." },
  15: { title: "지구를 지키는 자전거", desc: "부스 설명입니다." },
  16: { title: "펀 타투", desc: "부스 설명입니다." },

  101: { title: "테라리움", desc: "부스 설명입니다." },
  102: { title: "버리는자와 줍는자", desc: "부스 설명입니다." },
  103: { title: "신선한 물고기를 찾아라!", desc: "부스 설명입니다." },
  104: { title: "기후위기 사진전", desc: "부스 설명입니다." },
  105: { title: "굿피플", desc: "부스 설명입니다." },
  106: { title: "즐기며 배우는「환경놀이터」", desc: "부스 설명입니다." },
  107: { title: "푸른 하늘을 위한 차 「푸릉이 홍보관」", desc: "부스 설명입니다." },
  108: { title: "BUY 친환경차, BYE 미세먼지!", desc: "부스 설명입니다." },
  109: { title: "기후변화 적응 토크박스", desc: "부스 설명입니다." },
  110: { title: "푸른 하늘 보며 놀자!!", desc: "부스 설명입니다." },

  201: { title: "IWC - PNU", desc: "부스 설명입니다." },
  202: { title: "캘리그라피로 그리는 다문화", desc: "부스 설명입니다." },
  203: { title: "컬쳐 필름", desc: "부스 설명입니다." },
  204: { title: "ISF", desc: "부스 설명입니다." },

  301: { title: "청정수-청년유실과 청년커뮤니티", desc: "부스 설명입니다." },
  302: { title: "꼼지락-푸른하늘의 날과 기후", desc: "부스 설명입니다." },
  303: { title: "GRIT-청년 취업창업상담소", desc: "부스 설명입니다." },
  304: { title: "골든타임-CPR 및 응급처치 교육", desc: "부스 설명입니다." },

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

export const LOADING_DESC = [
  "감사부스는 언제든지 이용 가능합니다! 감사를 주제로 한 활동과 작품을 접하며 혐오의 시대에 감사로 살아가는 경험을 제공해드립니다!",
  "청건부산은 부산 청년들이 직접 기획, 운영, 홍보까지 참여해서 기획한 행사입니다!",
  "제로게임 3개, 다문화 부스 1개, 기후위기 부스 1개, 청년 커뮤니티 부스 1개, 총 6개의 부스를 체험하면 소정의 굿즈를 증정합니다!",
  "청건부산은 청년이 건강해야 부산이 산다의 줄임말로, 부산을 사랑하는 청년들의 목소리입니다!",
];

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

export const FADEIN_ANIMATION = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
