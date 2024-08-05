import Banner from "../../components/Banner";
import FloatBottomButton from "../../components/FloatBottomButton";
import HeaderMenu from "../../components/HeaderMenu";
import { Wrapper } from "./style";
import ClassPoster1 from "../../assets/images/class_poster1.webp";
import ClassPoster2 from "../../assets/images/class_poster2.webp";
import ClassPoster3 from "../../assets/images/class_poster3.webp";
import ClassPoster4 from "../../assets/images/class_poster4.webp";
import ClassPoster5 from "../../assets/images/class_poster5.webp";
import ClassPhoto_1_1 from "../../assets/images/class-1-1.webp";
import ClassPhoto_1_2 from "../../assets/images/class-1-2.webp";
import ClassPhoto_2_1 from "../../assets/images/class-2-1.webp";
import ClassPhoto_2_2 from "../../assets/images/class-2-2.webp";
import ClassPhoto_3_1 from "../../assets/images/class-3-1.webp";
import ClassPhoto_3_2 from "../../assets/images/class-3-2.webp";
import ClassPhoto_3_3 from "../../assets/images/class-3-3.webp";
import ClassPhoto_4_1 from "../../assets/images/class-4-1.webp";
import ClassPhoto_4_2 from "../../assets/images/class-4-2.webp";

const CommunityPage = () => {
  const posterList = [
    ClassPoster1,
    ClassPoster2,
    ClassPoster3,
    ClassPoster4,
    ClassPoster5,
    ClassPoster1,
    ClassPoster2,
    ClassPoster3,
    ClassPoster4,
    ClassPoster5,
  ];

  const classIntroduce = [
    {
      title: "토크 콘서트",
      text: "부산의 청년들이 실생활에 당면한 결혼, 출산, 고용불안, 주거 등에 대한 전문가의 강연을 통해 정보를 습득하고 서로 소통합니다.",
      tag: "#소통해요 #강연 #공감 #우리들의_고민",
      imageList: [ClassPhoto_1_1, ClassPhoto_1_2],
    },
    {
      title: "싱스틸러",
      text: "부산의 청년들이 문화예술활동을 경험할 수 있는 장을 마련하여 참여자에게 무대 및 기회를 제공합니다. 참여자 개인의 역량강화에 도움을 주고 더불어 진로 탐색의 기회를 제공합니다.",
      tag: "#밴드 #이게_락이지 #공연 #파리피플",
      imageList: [ClassPhoto_3_1, ClassPhoto_3_2, ClassPhoto_3_3],
    },
    {
      title: "청정수",
      text: "'나에게 유익한 정책을 넘어 우리 모두에게 유익한 정책'이라는 슬로건을 내걸고 여러 청년들과 생각을 나누고자 합니다.",
      tag: "#세상을 #살리는 #청년들의 #정책수다",
      imageList: [ClassPhoto_2_1, ClassPhoto_2_2],
    },
    {
      title: "유학생 프로그램",
      text: "부산에 살고 있는 다국적 청년들과 함께합니다. 다양한 문화 사이의 마음을 연결하고 부산시민에서 세계시민으로 마음을 이어가려합니다.",
      tag: "#부산투어 #외국인_친구 #럭키비키",
      imageList: [ClassPhoto_4_1, ClassPhoto_4_2],
    },
  ];

  return (
    <>
      <HeaderMenu />

      <Wrapper className="f-col">
        <div>
          <div className="sub-title">소개합니다!</div>
          <div className="title f-col">
            <div>청건부산만의 커뮤니티</div>
          </div>

          <div id="title-comment">
            부산 청년들의 관심 주제를 반영한 다양한 프로그램을 열어, 부산 청년들이 당면한 문제들을
            고민하고, 소통하고, 홍보하며 해결해 나갑니다.
          </div>

          <div id="poster-list-wrapper">
            <div id="poster-list" className="f-row">
              {posterList.map((poster, index) => (
                <img src={poster} alt={`poster-${index}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="gap">
          <div className="sub-title">기다려지는 토요일!</div>
          <div className="title f-col">
            <div>우리들의 발자취</div>
          </div>
          <div id="class-list">
            {classIntroduce.map((classInfo) => (
              <div>
                <div className="c-title">{classInfo.title}</div>
                <div className="c-tag">{classInfo.tag}</div>
                <div className="c-text">{classInfo.text}</div>
                <div className="c-photo f-col">
                  {classInfo.imageList.map((classImage) => (
                    <img src={classImage} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Banner />

        {/* 최상단 이동 버튼 */}
        <FloatBottomButton />
      </Wrapper>
    </>
  );
};

export default CommunityPage;
