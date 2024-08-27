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

export const WAIT_BOOTH_ID = "Z0";
export const GOODS_BOOTH_ID = "A2";

export const BOOTH_LIST: { [key: string]: { title: string; desc: string } } = {
  B1: {
    title: "청정수-청년유실과 청년커뮤니티",
    desc: "청년들의 정책 수다 : 우리 사회가 직면한 문제에 대해 청년들의 목소리를 듣고 함께 해결 방안을 찾아보는 것은 어때요?",
  },
  B2: {
    title: "꼼지락-푸른하늘의 날과 기후",
    desc: "꼼지락 공예 커뮤니티에서 각자의 취향과 관심에 맞는 만들기를 함께 즐기고 소셜미디어에 공유해봐요! ",
  },
  B3: {
    title: "골든타임-CPR 및 응급처치 교육",
    desc: "심폐소생술 등 응급처치술을 배울 수 있어요! 시민 대상으로 응급처치를 교육하는 골든타임 커뮤니티로 오세요",
  },
  B4: {
    title: "GRIT-청년 취업창업상담소",
    desc: "'청년이 살고싶은 부산'에 보탬이 되고자 활동하는 GRIT커뮤니티에서 청년 취업과 창업을 상담해드립니다!",
  },

  C1: {
    title: "IWC",
    desc: "International Welcome Center : 부산대의 유학생들은 어떤 고민을 안고 있을까? 어떻게 하면 친구가 될 수 있을까? 우리 친구들을 알아가 봐요",
  },
  C2: {
    title: "캘리그라피 제작",
    desc: "캘리그라피! 도시소멸과 다문화에 관한 설명을 들으며 글자와 그림으로 만들어봐요~ 퀴즈를 맞히며 상품도 GET GET!",
  },
  C3: {
    title: "다문화 포토존",
    desc: "다른 나라의 옷을 입어보며 다문화를 알아가는 포토부스! 평소와는 다른 본인의 색다른 매력을 발견하게 될걸요?",
  },
  C4: {
    title: "ISF",
    desc: "International Scholar Fellowship : 유학생에게 정착을 도와주고 한국어를 가르쳐주는 ISF를 소개합니다!",
  },
  C5: { title: "아가페 이주민 센터", desc: "-" },

  D1: {
    title: "4글자 퀴즈",
    desc: "신서유기에서 본 그 게임! 4자 단어 중 앞의 2자만 듣고 그 단어가 무언지 맞추어보세요! 과연 당신의 순발력과 어휘력은?",
  },
  D2: {
    title: "너와 나의 연결고리",
    desc: "나의 취향 가득 담은 실팔찌 만들기! 내가 좋아하는 색깔실과 비즈를 선택해 만들 수 있어요! ",
  },
  D3: {
    title: "희망의 제기",
    desc: "남녀노소 누구나 할 수 있는 대한민국 국민이라면 다 아는 그 게임! 제기차기하러 오세요!",
  },
  D4: {
    title: "뭉치면 살고 흩어지면 죽는다",
    desc: "점점 좁아지는 신문지 위에서 서로의 힘으로 버티는 게임! 보기만 해도 아슬아슬~ 재밌을거에요!",
  },
  D5: {
    title: "에그드롭",
    desc: "과연 누가 남을 것인가?! 반대편 바둑알을 맞추어 탈락시키기 위해 손가락 힘을 조절하여 바둑알을 튕겨보세요!",
  },
  D6: {
    title: "판도라의 상자",
    desc: "손에 느껴지는 촉감에 집중해보세요~ 안대를 끼고 상자 안에 손을 넣어 무엇이 들었는지 맞혀보는 게임!",
  },
  D7: {
    title: "세계의 수도 탐험",
    desc: "나라의 국기를 보고 해당 국가의 수도를 맞히는 게임~ 게임도 하고 지식도 쌓고 일석이조!",
  },
  D8: {
    title: "관찰 그리고 관심",
    desc: "어디 어디가 다른지 열심히 눈알을 굴려봐요! 틀린그림찾기 게임하러 오세요~",
  },
  D9: {
    title: "모기 기피제",
    desc: "더운 여름날 기승인 모기를 퇴치해줄 모기기피제 만들기~ 화학재료 없이 아로마 향이 나는 모기기피제를 만들어보아요!",
  },
  D10: {
    title: "Drop the Bottle",
    desc: "물이 조금 들어있는 페트병을 스냅을 이용해 위로 들어올려 물병을 세워보아요! 누가 먼저 물병을 세울지!",
  },
  D11: {
    title: "탁구 슛!",
    desc: "손가락의 힘과 감각을 사용해서 탁구 슛! 원하는 골망에 많은 점수를 넣는 팀이 승리해요!",
  },
  D12: {
    title: "캔쌓기 챌린지",
    desc: "쓰레기가 장난감이 될 수 있다? 2분 안에 캔을 높이 쌓아 많이 쌓을 수록 이기는 게임!",
  },
  D13: {
    title: "페이지 탐험대",
    desc: "사칙연산을 풀고 그 숫자에 맞는 페이지를 찾아보아요! 비닐장갑 때문에 아주 쉽지는 않을걸요!",
  },
  D14: {
    title: "Fire in the hole",
    desc: "모래주머니를 콘홀 안에 넣어 제일 많이 넣으면 승리하는 게임! 누가 재빠르게 많이 넣을까요?",
  },
  D15: {
    title: "지구를 지키는 자전거",
    desc: "내가 전기를 생산할 수 있는 전기자전거! 열심히 발을 굴려 1KW를 만드는 체험하러 오세요!",
  },
  D16: {
    title: "펀 타투",
    desc: "알록달록 다양한 디자인의 그림을 내가 원하는 부위에 착~ 스티커 타투로 내가 좋아하는 디자인을 새겨보아요!",
  },

  F1: {
    title: "테라리움 만들기",
    desc: "이끼가 푸른 하늘을 만들 수 있다는 것을 아시나요? 내 손 안에 쏙 들어오는 이끼 테라리움을 만들러 오세요!",
  },
  F2: {
    title: "버리는자와 줍는자",
    desc: "해양 쓰레기를 버리는 자와 줍는 자의 대결!  게임을 통해 해양쓰레기 처리의 어려움과 해양오염 예방의 중요성을 알아봐요!",
  },
  F3: {
    title: "신선한 물고기를 찾아라!",
    desc: "해양 쓰레기로 오염된 바다에서 신선한 물고기를 찾아라! 해양오염을 막을 수 있는 사람은 당신 뿐! 어서 물고기를 구출하러 와주세요!",
  },
  F4: {
    title: "기후위기 사진전",
    desc: "현재 우리가 살아가고 있는 곳에 당신의 이해와 공감이 필요합니다. 기후위기 전시회를 관람하시고 메시지 스티커와 기후위기 포인트를 받아가세요!",
  },
  F5: {
    title: "굿피플",
    desc: "굿피플에서 기후위기로 인한 식량과 식수문제, 피해받는 아이들에 대한 현황, 해결책 등 현실에 맞닥뜨린 기후문제를 설명해드립니다!",
  },
  F6: {
    title: "즐기며 배우는「환경놀이터」",
    desc: "동심으로 돌아가요! 너프건 사격, 재활용품 농구, 캡슐 뽑기 게임! ",
  },
  F7: {
    title: "푸른 하늘을 위한 CO2 흡입 차량 「푸릉이 홍보관」",
    desc: "C02 흡입차량 푸릉이를 소개합니다! 푸릉이 탑승 체험과 종이모형을 만들러 오세요!",
  },
  F8: {
    title: "BUY 친환경차, BYE 미세먼지!",
    desc: "현대자동차에서 직접 소개해드립니다! 전기 자동차 뜯어보기!",
  },
  F9: {
    title: "기후변화 적응 토크박스",
    desc: "애니메이션으로 알아보는, 기후위기에 대응하는 시민들의 올바른 자세를 알아볼까요?",
  },
  F10: {
    title: "푸른 하늘의 날에 놀자!!",
    desc: "푸른하늘의 날? 부산시 탄소중립과에서 알려주는 푸른 하늘 이야기를 들으러 오세요!",
  },
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
