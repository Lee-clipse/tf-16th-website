/* eslint-disable @typescript-eslint/no-unused-vars */
import WideButton from "../../components/WideButton";
import theme from "../../styles/theme";
import {
  BannerSection,
  HistorySection,
  MainSection,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Wrapper,
} from "./style";
import MainLogo from "../../assets/images/main_logo.webp";
import InstaLogo from "../../assets/images/insta_logo.webp";
import YoutubeLogo from "../../assets/images/youtube_logo.webp";
import BlogLogo from "../../assets/images/blog_logo.webp";
import ContentPoster1 from "../../assets/images/content_poster1.jpeg";
import ContentPoster2 from "../../assets/images/content_poster2.jpg";
import ContentPoster3 from "../../assets/images/content_poster3.jpg";
import ClassPoster1 from "../../assets/images/class_poster1.webp";
import ClassPoster2 from "../../assets/images/class_poster2.webp";
import ClassPoster3 from "../../assets/images/class_poster3.webp";
import HeaderMenu from "../../components/HeaderMenu";
import VisibilitySensor from "react-visibility-sensor";
import Button from "../../components/Button";
import CountUp from "react-countup";
import { CarouselComponent } from "../Test";
import YouTube from "react-youtube";

const MainPage = () => {
  const 스탭_지원_폼_링크 =
    "https://docs.google.com/forms/d/1YCzLX4S9JhsTQI41K_n7AwubNbbooLm0839-3rclJtU/viewform?pli=1&pli=1&edit_requested=true";
  const 청건부산_인스타_링크 = "https://www.instagram.com/together_festival52/";
  const 청건부산_유튜브_링크 = "https://www.youtube.com/@cheonggeonbusan";
  const 청건부산_블로그_링크 =
    "https://m.blog.naver.com/PostList.naver?blogId=together_festival&permalink=permalink&tab=1";

  return (
    <>
      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper className="f-col">
        {/* 메인 섹션 */}
        <MainSection>
          <div className="header">
            <p className="h-center">16th</p>
            <p className="h-center">TOGETHER FESTIVAL</p>
          </div>

          <div className="logo">
            <div className="h-center">
              <img src={MainLogo} />
            </div>
            <p className="h-center logo-text">청건부산</p>
            <p className="h-center">청년이 건강해야 부산이 산다.</p>
          </div>

          <div className="info f-col">
            <p className="h-center">2024. 09. 07(토) 오후 5시 - 7시 30분</p>
            <p className="h-center">부산시민공원 하야리아 잔디광장</p>
          </div>
        </MainSection>

        {/* 청건부산 빌드업 */}
        <Section1>
          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block left-block ${isVisible ? "visible" : ""}`}>
                {isVisible ? (
                  <>
                    <div className="title">청년 유출</div>
                    <div className="mini-title">부산 떠나는 청년들 인구소멸 가속화</div>
                  </>
                ) : (
                  <></>
                )}
                <p className="invisible">l</p>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block right-block ${isVisible ? "visible" : ""}`}>
                {isVisible ? (
                  <>
                    <div className="title">다문화 현상</div>
                    <div className="mini-title">부산 떠나는 청년들 인구소멸 가속화</div>
                  </>
                ) : (
                  <></>
                )}
                <p className="invisible">l</p>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block left-block ${isVisible ? "visible" : ""}`}>
                {isVisible ? (
                  <>
                    <div className="title">기후 위기</div>
                    <div className="mini-title">
                      기후변화로 도심 침수·댐 월류 증가…부산 마린시티 침수 확대
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <p className="invisible">l</p>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block right-block ${isVisible ? "visible" : ""}`}>
                {isVisible ? (
                  <>
                    <div className="title">도시 소멸</div>
                    <div className="mini-title">
                      전국 광역시 최초 소멸위험지역 진입 2050년이면 부산 시민 절반이 노인
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <p className="invisible">l</p>
              </div>
            )}
          </VisibilitySensor>

          <div className="question h-center">"그래서 우리가 뭘 할 수 있지?"</div>
        </Section1>

        {/* 역사 섹션 */}
        {/* <HistorySection>
          <p className="title f-col">
            <p>16년 동안 이어져온</p>
            <p>Together Festival의</p>
            <div className="f-row">
              <p>발자취</p> <p className="mini-text">SINCE 2009</p>
            </div>
          </p>

          <div className="box box-1 f-col h-center">
            <div className="header f-col">
              <p>태동기 1 ~ 11회</p>
              <p className="accent">나</p>
            </div>

            <div className="body f-col">
              <p>N포 세대, 지방 소멸,</p>
              <p>청년 유출, 청년 위기</p>
              <p>아무것도 할 수 없는 상황.</p>
              <p>아무것도 하지 않는 대신</p>
              <p>행동하기로 했습니다.</p>
              <p>처음이고 비전문가인 청년들이</p>
              <p>직접 기획하고, 홍보하고,</p>
              <p>재정을 마련해 공연을 열었습니다.</p>
            </div>

            <div className="footer f-col">
              <p>'나'의 성장이었습니다.</p>
            </div>
          </div>

          <div className="box box-2 f-col h-center">
            <div className="header f-col">
              <p>성장기 12 ~ 14회</p>
              <p className="accent">너</p>
            </div>

            <div className="body f-col">
              <p>COVID-19 상황이라는</p>
              <p>위기가 있었습니다.</p>
              <p>그래도 포기하지 않고</p>
              <p>행동하기로 했습니다.</p>
              <p>지역사회에 기여하기 위헤</p>
              <p>희망을 그리고, 지자체에</p>
              <p>기부 했습니다.</p>
            </div>

            <div className="footer f-col">
              <p>'너'에게 도움을 주고자</p>
              <p>했습니다.</p>
            </div>
          </div>

          <div className="box box-3 f-col h-center">
            <div className="header f-col">
              <p>성숙기 15 ~ 현재</p>
              <p className="accent">우리</p>
            </div>

            <div className="body f-col">
              <p>이제 '나'의 성장과</p>
              <p>'너'를 돕는 것을 넘어</p>
              <p>우리는 밖으로 나아가</p>
              <p>메시지를 전하고자 합니다.</p>
              <p>부산을 살리고 변화시키는</p>
              <p>출발점이 될 것입니다.</p>
            </div>

            <div className="footer f-col">
              <p>'우리'가 당면한 문제를</p>
              <p>해결하려 합니다.</p>
            </div>
          </div>

          <div className="footer-text f-col">
            <div className="f-col" style={{ gap: "0.8rem" }}>
              <p>나에서 너</p>
              <p>이제, 우리로</p>
            </div>
          </div>
        </HistorySection> */}

        {/* 청건부산 가치 섹션 */}
        <Section2>
          <div className="title f-col">
            <p className="logo">청건부산,</p>
            <p>청년이 건강해야</p>
            <p>부산이 산다!</p>
          </div>

          <div className="slogun f-col">
            <div className="box f-row">
              <div className="label">
                <p>비전</p>
              </div>

              <div className="content f-col">
                <p>건강한 가치관을 가진 깨어있는 청년들을</p>
                <p>양성합니다.</p>
                <p>부산이 당면한 문제들을 풀어가기 위해 함께</p>
                <p>고민하고 소통하며 포기하지 않고 도전합니다.</p>
                <p>부산을 살리고 변화시키는 출발점이</p>
                <p>부산 청년이 될 것입니다.</p>
              </div>
            </div>
          </div>

          <div className="h-center">
            <div className="button">
              <Button
                text="청건부산 자세히 보기"
                backgroundColor={theme.color.MAIN_BLUE}
                textColor={theme.color.TEXT_WHITE}
              ></Button>
            </div>
          </div>
        </Section2>

        {/* 행사 컨텐츠 개요 */}
        <Section3>
          <div className="h-center f-col">
            <div className="title">전한길 토크콘서트</div>
            <div>
              <img className="poster" src={ContentPoster1} alt="전한길_포스터" />
            </div>
          </div>

          <div className="h-center f-col">
            <div className="title">퓨전 국악 공연</div>
            <div>
              <img className="poster" src={ContentPoster2} alt="퓨전_국악_포스터" />
            </div>
          </div>

          <div className="h-center f-col">
            <div className="title">탄소중립 제로게임</div>
            <div>
              <img className="poster" src={ContentPoster3} alt="탄소중립_포스터" />
            </div>
          </div>
        </Section3>

        {/* 숫자 카운팅 */}
        <Section4>
          <div className="f-row title">
            <CountUp className="number" start={0} end={50} duration={1} />
            <p>개의 제로게임 부스</p>
          </div>

          <div className="f-row title">
            <CountUp className="number" start={0} end={300} duration={1} />
            <p>명의 스탭</p>
          </div>

          <div className="f-row title">
            <CountUp className="number" start={0} end={5000} duration={1} />
            <p>명의 참가자</p>
          </div>
        </Section4>

        {/* 청년 커뮤니티 개요 */}
        <Section5>
          <div>청년 커뮤니티</div>
          <div className="button">
            <Button
              text="청년 커뮤니티 자세히 보기"
              backgroundColor={theme.color.MAIN_BLUE}
              textColor={theme.color.TEXT_WHITE}
            />
          </div>
        </Section5>

        {/* Youtube 임베드 */}
        <Section6>
          <div>청건부산 Youtube</div>
          <div className="carousel">
            <YouTube
              videoId="zOgL-9ZLsC8"
              opts={{
                width: "100%",
                height: "200px",
                playerVars: {
                  autoplay: 0,
                  modestbranding: 1,
                  loop: 0,
                },
              }}
              onReady={(e: { target: { mute: () => void } }) => {
                e.target.mute();
              }}
            />
          </div>
        </Section6>

        {/* 배너 섹션 */}
        <BannerSection>
          <div className="title f-col">
            <p className="logo">청건부산</p>
            <p>청년이 건강해야 부산이 산다.</p>
          </div>

          <div className="icons f-row h-center">
            <img
              id="insta-icon"
              className="icon"
              src={InstaLogo}
              onClick={() => window.open(청건부산_인스타_링크, "_blank", "noopener, noreferrer")}
            />
            <img
              id="youtube-icon"
              className="icon"
              src={YoutubeLogo}
              onClick={() => window.open(청건부산_유튜브_링크, "_blank", "noopener, noreferrer")}
            />
            <img
              id="blog-icon"
              className="icon"
              src={BlogLogo}
              onClick={() => window.open(청건부산_블로그_링크, "_blank", "noopener, noreferrer")}
            />
          </div>
        </BannerSection>
      </Wrapper>

      {/* 스탭 지원 버튼 */}
      <div
        className="h-center v-center"
        onClick={() => window.open(스탭_지원_폼_링크, "_blank", "noopener, noreferrer")}
      >
        <WideButton
          text="스탭 신청하러 가기 ✨"
          backgroundColor={theme.color.PURPLE}
          textColor={theme.color.TEXT_WHITE}
        />
      </div>
    </>
  );
};

export default MainPage;
