import WideButton from "../../components/WideButton";
import theme from "../../styles/theme";
import { MainSection, Wrapper } from "./style";
import MainLogo from "../../assets/images/main_logo.webp";

const MainPage = () => {
  const 스텝_지원_폼_링크 =
    "https://docs.google.com/forms/d/1YCzLX4S9JhsTQI41K_n7AwubNbbooLm0839-3rclJtU/viewform?pli=1&pli=1&edit_requested=true";

  return (
    <>
      <Wrapper>
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

        {/* 축적 섹션 */}
        <div></div>

        {/* 가치 섹션 */}
        <div></div>

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
