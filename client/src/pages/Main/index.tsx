/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import theme from "../../styles/theme";
import {
  CountDownSection,
  MainSection,
  Partickle,
  Section0,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Wrapper,
} from "./style";

import ProgramPoster1 from "../../assets/images/program_poster1.png";
import ProgramPoster2 from "../../assets/images/program_poster2.png";
import ProgramPoster3 from "../../assets/images/program_poster3.png";
import YoutubeThumbnail1 from "../../assets/images/youtube_1.png";
import YoutubeThumbnail2 from "../../assets/images/youtube_2.png";
import YoutubeThumbnail3 from "../../assets/images/youtube_3.png";
import IconTalk from "../../assets/icons/talk.png";
import IconDebate from "../../assets/icons/debate.png";
import IconInternational from "../../assets/icons/international.png";
import IconSing from "../../assets/icons/sing.png";
import HeaderMenu from "../../components/HeaderMenu";
import VisibilitySensor from "react-visibility-sensor";
import Button from "../../components/Button";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../common/const";
import CheckIcon from "../../assets/icons/check.png";
import { CarouselComponent } from "../../components/Carousel";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import FloatBottomButton from "../../components/FloatBottomButton";
import Banner from "../../components/Banner";

const MainPage = () => {
  const navigate = useNavigate();

  const patickles = [
    { className: "t-01", color: theme.color.DEEP_BLUE, size: "3rem", duration: 1.5, delay: 0.2 },
    { className: "t-02", color: theme.color.DEEP_BLUE, size: "2rem", duration: 2.2, delay: 0.4 },
    { className: "t-03", color: theme.color.DEEP_BLUE, size: "2rem", duration: 1.4, delay: 0.6 },
    { className: "t-04", color: theme.color.DEEP_BLUE, size: "3rem", duration: 2, delay: 0.1 },
    { className: "t-05", color: theme.color.MINT, size: "2rem", duration: 2.1, delay: 0.3 },
    { className: "t-06", color: theme.color.PURPLE, size: "3rem", duration: 1.2, delay: 0.5 },
    { className: "t-07", color: theme.color.ORANGE, size: "3rem", duration: 2, delay: 0.7 },
    { className: "t-08", color: theme.color.MINT, size: "2rem", duration: 1.2, delay: 0.2 },
    { className: "t-09", color: theme.color.ORANGE, size: "2rem", duration: 2.4, delay: 0.4 },
  ];

  const eventCards = [
    {
      image: ProgramPoster1,
      title: "전한길",
      subtitle: "토크 콘서트",
      text: `"청년, 성공과 행복을 연습하는 시기"`,
    },
    {
      image: ProgramPoster2,
      title: "문화 공연",
      subtitle: "퓨전 국악, 밴드",
      text: "",
    },
    {
      image: ProgramPoster3,
      title: "제로게임",
      subtitle: "기후/대기 체험 부스",
      text: "청년 커뮤니티 체험 부스",
    },
  ];

  const communityCards = [
    {
      icon: IconTalk,
      title: "토크콘서트",
      text: "부산 청년들이 실생활에 당면한 문제에 대한 전문가의 강연을 통해 소통합니다.",
    },
    {
      icon: IconSing,
      title: "싱스틸러",
      text: "문화예술활동을 경험할 수 있는 장을 마련하여 무대 및 기회를 제공합니다.",
    },
    {
      icon: IconDebate,
      title: "청정수",
      text: "'나에게 유익한 정책을 넘어 우리 모두에게 유익한 정책'이라는 슬로건으로 청년들과 생각들을 나눕니다.",
    },
    {
      icon: IconInternational,
      title: "다문화",
      text: "부산에 거주하는 다국적 청년들과 함께 마음을 이어가는 행사입니다.",
    },
  ];

  return (
    <>
      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper className="f-col">
        {/* 메인 섹션 */}
        <MainSection>
          <div id="main-title" className="h-center">
            청건부산
          </div>

          <div id="main-info" className=" f-col">
            <p className="h-center">9월 7일 17시 - 19시 30분</p>
            <p className="h-center">부산시민공원 하야리아 잔디광장</p>
          </div>

          <div>
            {patickles.map((partickle, index) => (
              <Partickle
                key={index}
                className={partickle.className}
                color={partickle.color}
                size={partickle.size}
                duration={Number(partickle.duration)}
                delay={partickle.delay}
              />
            ))}
          </div>
        </MainSection>

        <Section0 className="f-col h-center">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <>
                {/* 카운트다운 */}
                <CountDownSection className={`block ${isVisible ? "count-visible" : ""}`}>
                  <FlipClockCountdown className="flip-clock" to={1725667200000} />
                </CountDownSection>
              </>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 250 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block text-block ${isVisible ? "visible" : ""}`}>
                <div className="sub-title">올해로 벌써 16년째!</div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 400 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`late-block text-block ${isVisible ? "visible" : ""}`}>
                <div className="title f-col">
                  <div>부산 청년들이 만드는 축제로</div>
                  <div>당신을 초대합니다.</div>
                </div>
              </div>
            )}
          </VisibilitySensor>
        </Section0>

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
                <div className="mini-title">학령인구 감소하는 부산,</div>
                <div className="mini-title">다문화 학생은 계속 증가</div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`block left-block ${isVisible ? "visible" : ""}`}>
                <div className="title">기후 위기</div>
                <div className="mini-title">기후변화로 도심 침수·댐 월류 증가…</div>
                <div className="mini-title">부산 마린시티 침수 확대</div>
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
            <div className="sub-title">청건부산!</div>
            <div className="title f-col">
              <div>청년이 건강해야 부산이 산다</div>
            </div>

            <div className="section f-col">
              <div>
                <img src={CheckIcon} /> 건강한 가치관을 가진 깨어있는 청년들을 양성합니다.
              </div>
              <div>
                <img src={CheckIcon} />
                부산이 당면한 문제들을 풀어가기 위해 함께 고민하고 소통하며 포기하지 않고
                도전합니다.
              </div>
              <div>
                <img src={CheckIcon} />
                부산을 살리고 변화시키는 출발점이 부산 청년이 될 것입니다.
              </div>
            </div>
          </div>

          <div className="button" onClick={() => navigate(ROUTE_PATH.INFO)}>
            <Button
              text="청건부산 자세히 보기"
              backgroundColor={theme.color.WHITE}
              textColor={theme.color.BLACK}
              custom={`border: 1px solid ${theme.color.GRAY}`}
            ></Button>
          </div>
        </Section2>

        {/* 행사 컨텐츠 개요 */}
        <Section3>
          <div className="sub-title">모두 모여!</div>
          <div className="title f-col">
            <div>이번 축제의 프로그램</div>
          </div>

          <div className="f-col v-center">
            <div id="card1" className="card">
              <img src={eventCards[0].image} alt={eventCards[0].title} />
              <div className="c-body1">
                <div className="c-title1">{eventCards[0].title}</div>
                <div className="c-subtitle1">{eventCards[0].subtitle}</div>
                <div className="c-text1">{eventCards[0].text}</div>
              </div>
            </div>

            <div id="card2" className="card">
              <img src={eventCards[1].image} alt={eventCards[1].title} />
              <div className="c-body2">
                <div className="c-title2">{eventCards[1].title}</div>
                <div className="c-subtitle2">{eventCards[1].subtitle}</div>
              </div>
            </div>

            <div id="card3" className="card">
              <img src={eventCards[2].image} alt={eventCards[2].title} />
              <div className="c-body3">
                <div className="c-title3">{eventCards[2].title}</div>
                <div className="c-subtitle3">{eventCards[2].subtitle}</div>
                <div className="c-text3">{eventCards[2].text}</div>
              </div>
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

          <div className="f-col v-center">
            {communityCards.map((card) => (
              <div className="c-card">
                <div className="c-c-icon">
                  <img src={card.icon} />
                </div>

                <div className="c-c-title">{card.title}</div>
                <div className="c-c-text">{card.text}</div>
              </div>
            ))}
          </div>

          <div className="button" onClick={() => navigate(ROUTE_PATH.COMMUNITY)}>
            <Button
              text="청년 커뮤니티 자세히 보기"
              backgroundColor={theme.color.WHITE}
              textColor={theme.color.BLACK}
              custom={`border: 1px solid ${theme.color.GRAY}`}
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

        <Banner />

        {/* 최하단 버튼 */}
        <FloatBottomButton />
      </Wrapper>
    </>
  );
};

export default MainPage;
