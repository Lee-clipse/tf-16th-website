import styled from "styled-components";
import { 청건부산_인스타_링크, 청건부산_유튜브_링크, 청건부산_블로그_링크 } from "../common/const";
import theme from "../styles/theme";
import InstaLogo from "../assets/images/insta_logo.webp";
import YoutubeLogo from "../assets/images/youtube_logo.webp";
import BlogLogo from "../assets/images/blog_logo.webp";

const Banner = () => {
  return (
    <>
      {/* 배너 섹션 */}
      <BannerSection>
        <div className="b-title f-col">
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
    </>
  );
};

const BannerSection = styled.div`
  background-color: ${theme.color.DEEP_BLUE};
  padding: 4rem 0 10rem 0;
  text-align: center;

  .b-title {
    color: ${theme.color.WHITE};
    font-family: ${theme.font.NOTO[3]};
    font-size: ${theme.font.SIZE.S};
    gap: 0.4rem;

    .logo {
      font-family: ${theme.font.HAK[5]};
      font-size: ${theme.font.SIZE.XL};
    }
  }

  .icons {
    margin-top: 1.8rem;
    gap: 1.4rem;

    .icon {
      width: 10%;
      heigth: 10%;
      cursor: pointer;
    }
  }
`;

export default Banner;
