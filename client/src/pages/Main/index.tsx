/* eslint-disable @typescript-eslint/no-unused-vars */
import WideButton from "../../components/WideButton";
import theme from "../../styles/theme";
import {
  BannerSection,
  BottomFloatButton,
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
import ContentPoster1 from "../../assets/images/content_poster1.png";
import ContentPoster2 from "../../assets/images/content_poster2.webp";
import ContentPoster3 from "../../assets/images/content_poster3.webp";
import StartLine from "../../assets/images/start_line.png";
import HeaderMenu from "../../components/HeaderMenu";
import VisibilitySensor from "react-visibility-sensor";
import Button from "../../components/Button";
import CountUp from "react-countup";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { Alert, isStepByToken, verifyByToken } from "../../common/common";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../common/const";

const MainPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const 스탭_지원_폼_링크 =
    "https://docs.google.com/forms/d/1YCzLX4S9JhsTQI41K_n7AwubNbbooLm0839-3rclJtU/viewform?pli=1&pli=1&edit_requested=true";
  const 청건부산_인스타_링크 = "https://www.instagram.com/together_festival52/";
  const 청건부산_유튜브_링크 = "https://www.youtube.com/@cheonggeonbusan";
  const 청건부산_블로그_링크 =
    "https://m.blog.naver.com/PostList.naver?blogId=together_festival&permalink=permalink&tab=1";

  useEffect(() => {
    const isTokenAlive = verifyByToken();
    setIsLogin(isTokenAlive);
  }, []);

  const setFloatButtonComponent = () => {
    const isStep = isStepByToken();

    // 미로그인이라면 ->  참가 버튼
    if (!isLogin) {
      return (
        <div className="h-center v-center" onClick={() => navigate(ROUTE_PATH.JOIN)}>
          <WideButton
            text="청건부산 참가하기 ✨"
            backgroundColor={theme.color.PURPLE}
            textColor={theme.color.TEXT_WHITE}
          />
        </div>
      );
    }
    // 스탭이라면 -> 관리 버튼
    if (isStep) {
      return (
        <div
          className="h-center v-center"
          onClick={() => Alert("추후 업데이트를 기다려주세요.", "warning")}
        >
          <WideButton
            text="관리 페이지로 가기 🔧"
            backgroundColor={theme.color.PURPLE}
            textColor={theme.color.TEXT_WHITE}
          />
        </div>
      );
    }
    // 스탭은 아니지만 로그인 유저라면 -> 제로게임 버튼
    else {
      return (
        <div
          className="h-center v-center"
          onClick={() => Alert("추후 업데이트를 기다려주세요.", "warning")}
        >
          <WideButton
            text="제로게임하러 가기 🎲"
            backgroundColor={theme.color.MAIN_ORAGNE}
            textColor={theme.color.TEXT_WHITE}
          />
        </div>
      );
    }
  };

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
                <div className="title">청년 유출</div>
                <div className="mini-title">부산 떠나는 청년들 인구소멸 가속화</div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block right-block ${isVisible ? "visible" : ""}`}>
                <div className="title">다문화 현상</div>
                <div className="mini-title">학령인구 감소하는 부산, 다문화 학생은 계속 증가</div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block left-block ${isVisible ? "visible" : ""}`}>
                <div className="title">기후 위기</div>
                <div className="mini-title">
                  기후변화로 도심 침수·댐 월류 증가… 부산 마린시티 침수 확대
                </div>
                <p className="invisible">l</p>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block right-block ${isVisible ? "visible" : ""}`}>
                <div className="title">도시 소멸</div>
                <div className="mini-title">전국 광역시 최초 소멸위험지역 진입</div>
                <div className="mini-title">2050년이면 부산 시민 절반이 노인</div>
              </div>
            )}
          </VisibilitySensor>

          <div className="question h-center">"그래서 우리가 뭘 할 수 있지?"</div>
        </Section1>

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
            <div id="box-1" className="box">
              <div className="title">전한길</div>
              <div className="sub-title">토크콘서트</div>
              <img className="poster" src={ContentPoster1} alt="포스터1" />
            </div>

            <div id="box-2" className="box">
              <div className="title">문화 공연</div>
              <img className="poster" src={ContentPoster2} alt="포스터2" />
            </div>

            <div id="box-3" className="box">
              <div className="title">제로게임</div>
              <img className="poster" src={ContentPoster3} alt="포스터3" />
            </div>
          </div>
        </Section3>

        {/* 숫자 카운팅 */}
        <Section4>
          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block right-block ${isVisible ? "visible" : ""}`}>
                {isVisible ? (
                  <>
                    <div className="f-row title">
                      <CountUp className="number" start={0} end={50} duration={1} />
                      <p>개의 부스</p>
                    </div>
                    <div className="f-row title">
                      <CountUp className="number" start={0} end={300} duration={1} />
                      <p>명의 스탭</p>
                    </div>
                    <div className="f-row title">
                      <CountUp className="number" start={0} end={5000} duration={1} />
                      <p>명의 참가자</p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <p className="invisible">l</p>
              </div>
            )}
          </VisibilitySensor>
        </Section4>

        {/* 청년 커뮤니티 개요 */}
        <Section5>
          <div className="title">청년 커뮤니티</div>
          <div className="box">
            <div className="label">토크콘서트</div>
            <div className="text">
              부산 청년들이 실생활에 당면한 문제에 대한 전문가의 강연을 통해 소통합니다.
            </div>
          </div>

          <div className="box">
            <div className="label">싱스틸러</div>
            <div className="text">
              문화예술활동을 경험할 수 있는 장을 마련하여 무대 및 기회를 제공합니다.
            </div>
          </div>

          <div className="box">
            <div className="label">청정수</div>
            <div className="text">
              청년들의 정책 수다! 우리 모두에게 유익한 정책에 대한 생각들을 나눕니다.
            </div>
          </div>

          <div className="box">
            <div className="label">다문화</div>
            <div className="text">
              부산에 거주하는 다국적 청년들과 함께 마음을 이어가는 행사입니다.
            </div>
          </div>

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
      <BottomFloatButton>{setFloatButtonComponent()}</BottomFloatButton>
    </>
  );
};

export default MainPage;
