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
import ContentPoster1BG from "../../assets/images/content_poster1_bg.png";
import ContentPoster1 from "../../assets/images/content_poster1.png";
import ContentPoster2 from "../../assets/images/content_poster2.webp";
import ContentPoster3 from "../../assets/images/content_poster3.webp";
import YoutubeThumbnail1 from "../../assets/images/youtube_1.png";
import YoutubeThumbnail2 from "../../assets/images/youtube_2.png";
import YoutubeThumbnail3 from "../../assets/images/youtube_3.png";
import StartLine from "../../assets/images/start_line.png";
import HeaderMenu from "../../components/HeaderMenu";
import VisibilitySensor from "react-visibility-sensor";
import Button from "../../components/Button";
import CountUp from "react-countup";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { alert, deleteToken, guardAlert, isStepByToken, verifyByToken } from "../../common/common";
import { useNavigate } from "react-router-dom";
import {
  ROUTE_PATH,
  청건부산_블로그_링크,
  청건부산_유튜브_링크,
  청건부산_인스타_링크,
} from "../../common/const";
import ScrollTop from "../../components/ScrollTop";
import { GoDotFill } from "react-icons/go";
import { CarouselComponent } from "../../components/Carousel";

const MainPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false);

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
        <div className="h-center v-center" onClick={() => guardAlert()}>
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
        <div className="h-center v-center" onClick={() => guardAlert()}>
          <WideButton
            text="제로게임하러 가기 🎲"
            backgroundColor={theme.color.LIGHT_BLUE}
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

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block right-block ${isVisible ? "visible" : ""}`}>
                <div className="question h-center">"그래서 우리가 뭘 할 수 있지?"</div>
              </div>
            )}
          </VisibilitySensor>
        </Section1>

        {/* 청건부산 가치 섹션 */}
        <Section2>
          <div>
            <div className="sub-title">올해로 벌써 16년째!</div>
            <div className="title f-col">
              <div>부산 청년들이 만드는 축제로</div>
              <div>당신을 초대합니다.</div>
            </div>

            <div className="section f-col">
              <div>
                <GoDotFill className="dot" /> 건강한 가치관을 가진 깨어있는 청년들을 양성합니다.
              </div>
              <div>
                <GoDotFill className="dot" />
                부산이 당면한 문제들을 풀어가기 위해 함께 고민하고 소통하며 포기하지 않고
                도전합니다.
              </div>
              <div>
                <GoDotFill className="dot" />
                부산을 살리고 변화시키는 출발점이 부산 청년이 될 것입니다.
              </div>
            </div>
          </div>

          <div className="button" onClick={() => guardAlert()}>
            <Button
              text="청건부산 자세히 보기"
              backgroundColor={theme.color.MAIN_BLUE}
              textColor={theme.color.TEXT_WHITE}
            ></Button>
          </div>
        </Section2>

        {/* 행사 컨텐츠 개요 */}
        <Section3>
          <div className="sub-title">모두 모여!</div>
          <div className="title f-col">
            <div>이번 축제의 프로그램</div>
          </div>

          <div className="h-center f-col">
            <div className="box-title">토크 콘서트</div>
            {/* <div className="box-sub-title">행복이란 무엇인가?</div> */}
            <div id="box-1" className="box">
              {/* <div className="title">전한길</div> */}
              <img className="poster" src={ContentPoster1} alt="포스터1" />
              <img className="poster-bg" src={ContentPoster1BG} alt="포스터1배경" />
            </div>

            <div className="box-title">문화 공연</div>
            <div id="box-2" className="box">
              {/* <div className="title">문화 공연</div> */}
              <img className="poster" src={ContentPoster2} alt="포스터2" />
            </div>

            <div className="box-title">제로게임</div>
            <div id="box-3" className="box">
              {/* <div className="title">제로게임</div> */}
              <img className="poster" src={ContentPoster3} alt="포스터3" />
            </div>
          </div>
        </Section3>

        {/* 숫자 카운팅 */}
        <Section4>
          <div className="sub-title">역대급 규모!</div>
          <div className="title f-col">
            <div>청년들이 도전하고 준비한</div>
          </div>

          <div className="section4-box">
            <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
              {({ isVisible }: { isVisible: boolean }) => (
                <div className={`block right-block ${isVisible ? "visible" : ""}`}>
                  {isVisible ? (
                    <>
                      <div className="f-row number-title">
                        <CountUp className="number" start={0} end={50} duration={1} />
                        <p>개의 부스</p>
                      </div>
                      <div className="f-row number-title">
                        <CountUp className="number" start={0} end={300} duration={1} />
                        <p>명의 스탭</p>
                      </div>
                      <div className="f-row number-title">
                        <CountUp className="number" start={0} end={5000} duration={1} />
                        <p>명의 참가자</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="f-row number-title">
                        <p>0 개의 부스</p>
                      </div>
                      <div className="f-row number-title">
                        <p>0 명의 스탭</p>
                      </div>
                      <div className="f-row number-title">
                        <p>0 명의 참가자</p>
                      </div>
                    </>
                  )}
                  <p className="invisible">l</p>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </Section4>

        {/* 청년 커뮤니티 개요 */}
        <Section5>
          <div className="sub-title">소개합니다!</div>
          <div className="title f-col">
            <div>청건부산만의 커뮤니티</div>
          </div>

          <div className="box">
            <div className="label">토크콘서트</div>
            <div className="hashtag">#티키타카 #전문가랑소통 #실생활</div>
            <div className="text">
              부산 청년들이 실생활에 당면한 문제에 대한 전문가의 강연을 통해 소통합니다.
            </div>
          </div>

          <div className="box">
            <div className="label">싱스틸러</div>
            <div className="hashtag">#나도밴드 #잼 #합주 #뮤직이스마이라이프</div>
            <div className="text">
              문화예술활동을 경험할 수 있는 장을 마련하여 무대 및 기회를 제공합니다.
            </div>
          </div>

          <div className="box">
            <div className="label">청정수</div>
            <div className="hashtag">#청년들과 #정책 #수다</div>
            <div className="text">
              '나에게 유익한 정책을 넘어 우리 모두에게 유익한 정책'이라는 슬로건을 내걸고 청년들과
              생각들을 나눕니다.
            </div>
          </div>

          <div className="box">
            <div className="label">다문화</div>
            <div className="hashtag">#포트럭 #유학생친구 #부산투어</div>
            <div className="text">
              부산에 거주하는 다국적 청년들과 함께 마음을 이어가는 행사입니다.
            </div>
          </div>

          <div className="button" onClick={() => guardAlert()}>
            <Button
              text="청년 커뮤니티 자세히 보기"
              backgroundColor={theme.color.MAIN_BLUE}
              textColor={theme.color.TEXT_WHITE}
            />
          </div>
        </Section5>

        {/* Youtube 임베드 */}
        <Section6>
          <div className="sub-title">구독 좋아요!</div>
          <div className="title f-col">
            <div>청건부산의 Youtube</div>
          </div>

          <CarouselComponent
            imageObjectList={[
              {
                image: YoutubeThumbnail1,
                link: "https://www.youtube.com/watch?v=zOgL-9ZLsC8&t=80s&ab_channel=%EC%B2%AD%EA%B1%B4%EB%B6%80%EC%82%B0",
              },
              {
                image: YoutubeThumbnail2,
                link: "https://www.youtube.com/watch?v=dtmxg56G-Fg&ab_channel=%EC%B2%AD%EA%B1%B4%EB%B6%80%EC%82%B0",
              },
              {
                image: YoutubeThumbnail3,
                link: "https://www.youtube.com/watch?v=DZrv1m9gsz0&ab_channel=%EC%B2%AD%EA%B1%B4%EB%B6%80%EC%82%B0",
              },
            ]}
          />
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

        {/* 스탭 지원 버튼 */}
        <BottomFloatButton>{setFloatButtonComponent()}</BottomFloatButton>

        {/* 최상단 이동 버튼 */}
        <ScrollTop />
      </Wrapper>
    </>
  );
};

export default MainPage;
