import posterImage from "../../assets/images/poster.png";
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

export default MainPage;
