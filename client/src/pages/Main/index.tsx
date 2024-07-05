import styled from "styled-components";
import posterImage from "../../assets/images/poster.webp";
import WideButton from "../../components/WideButton";
import theme from "../../styles/theme";
import { PosterImage } from "./style";

const MainPage = () => {
  const 스텝_지원_폼_링크 =
    "https://docs.google.com/forms/d/1YCzLX4S9JhsTQI41K_n7AwubNbbooLm0839-3rclJtU/viewform?pli=1&pli=1&edit_requested=true";

  return (
    <div>
      {/* 포스터 */}
      <div className="h-center">
        <PosterImage src={posterImage} />
      </div>

      <div>
        <MainLogoText>청건부산 로고: 학교 안심 지우개</MainLogoText>
        <HangeulText>모든 한글: Noto Sans KR</HangeulText>
        <EnglishText>Every English: Futura PT</EnglishText>
        <AccentText>0123456789 ACCENT ENGLISH: Oswald</AccentText>
      </div>

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
    </div>
  );
};

const MainLogoText = styled.p`
  font-family: ${theme.font.HAK[5]};
  font-size: ${theme.font.SIZE.L};
  color: ${theme.color.MAIN_BLUE};
`;

const HangeulText = styled.p`
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.M};
  color: ${theme.color.TEXT_BLACK};
`;

const EnglishText = styled.p`
  font-family: ${theme.font.FUT[5]};
  font-size: ${theme.font.SIZE.M};
  color: ${theme.color.TEXT_BLACK};
`;

const AccentText = styled.p`
  font-family: ${theme.font.OSW[5]};
  font-size: ${theme.font.SIZE.M};
  color: ${theme.color.TEXT_BLACK};
`;

export default MainPage;
