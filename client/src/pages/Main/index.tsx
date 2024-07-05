import WideButton from "../../components/WideButton";
import theme from "../../styles/theme";
import { HistorySection, MainSection, ValueSection, Wrapper } from "./style";
import MainLogo from "../../assets/images/main_logo.webp";

const MainPage = () => {
  const 스텝_지원_폼_링크 =
    "https://docs.google.com/forms/d/1YCzLX4S9JhsTQI41K_n7AwubNbbooLm0839-3rclJtU/viewform?pli=1&pli=1&edit_requested=true";

  return (
    <>
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
            <p className="h-center">2024. 09. 07(토) 오후 4시 - 7시 30분</p>
            <p className="h-center">부산시민공원 하야리아 잔디광장</p>
          </div>
        </MainSection>

        {/* 역사 섹션 */}
        <HistorySection>
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
        </HistorySection>

        {/* 가치 섹션 */}
        <ValueSection>
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

            <div className="box f-row">
              <div className="label">
                <p>미션</p>
              </div>

              <div className="content f-row" style={{ gap: "1rem" }}>
                <div className="cell f-col">
                  <div className="f-row">
                    <p className="accent">300</p>
                    <p>명의</p>
                  </div>
                  <p>깨어있는 부산 청년들을</p>
                  <p>만듭니다.</p>
                </div>

                <div className="cell f-col">
                  <div className="f-row">
                    <p className="accent">5000</p>
                    <p>명에게</p>
                  </div>
                  <p>우리의 비전을 전파</p>
                  <p>하는 것을</p>
                  <p>목표로 합니다.</p>
                </div>
              </div>
            </div>

            <div className="box f-row">
              <div className="label">
                <p>핵심 가치</p>
              </div>

              <div className="content f-col">
                <div className="f-row" style={{ gap: "1.6rem" }}>
                  <div className="cell f-col">
                    <p className="accent">Don't give up</p>
                    <p>우리는 포기하지 않는</p>
                    <p>청년입니다.</p>
                  </div>

                  <div className="cell f-col">
                    <p className="accent">Just do it</p>
                    <p>우리는 행동하는</p>
                    <p>청년입니다.</p>
                  </div>
                </div>

                <div className="cell f-col" style={{ marginTop: "1.4rem" }}>
                  <p className="accent">No limit</p>
                  <p>우리는 한계를 거부하는</p>
                  <p>청년입니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer f-col">
            <div className="f-col" style={{ gap: "0.6rem" }}>
              <p>TOGETHER</p>
              <p>FESTIVAL</p>
            </div>
          </div>
        </ValueSection>

        {/* 배너 섹션 */}
        <div></div>
      </Wrapper>

      {/* 스텝 지원 버튼 */}
      <div
        className="h-center v-center"
        onClick={() => window.open(스텝_지원_폼_링크, "_blank", "noopener, noreferrer")}
      >
        <WideButton
          text="스텝 신청하러 가기 ✨"
          backgroundColor={theme.color.PURPLE}
          textColor={theme.color.TEXT_WHITE}
        />
      </div>
    </>
  );
};

export default MainPage;
