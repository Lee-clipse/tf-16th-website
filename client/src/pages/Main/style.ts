import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2.4rem;
`;

export const MainSection = styled.div`
  color: ${theme.color.MAIN_BLUE};
  margin: 4rem 0 6rem 0;

  .header {
    font-family: ${theme.font.FUT[3]};
    font-size: ${theme.font.SIZE.ML};
  }

  .logo {
    font-family: ${theme.font.NOTO[4]};
    font-size: ${theme.font.SIZE.M};
    margin-top: 5rem;

    img {
      width: 46%;
    }

    .logo-text {
      font-family: ${theme.font.HAK[5]};
      font-size: ${theme.font.SIZE.XXL};
      margin: 2.4rem 0 0.6rem 0;
    }
  }

  .info {
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.M};
    margin-top: 3.6rem;
    gap: 0.8rem;
  }
`;

export const PosterImage = styled.img`
  margin-top: 4rem;
  width: 90vw;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const MainLogoText = styled.p`
  font-family: ${theme.font.HAK[5]};
  font-size: ${theme.font.SIZE.L};
  color: ${theme.color.MAIN_BLUE};
`;

export const HangeulText = styled.p`
  font-family: ${theme.font.NOTO[5]};
  font-size: ${theme.font.SIZE.M};
  color: ${theme.color.TEXT_BLACK};
`;

export const EnglishText = styled.p`
  font-family: ${theme.font.FUT[5]};
  font-size: ${theme.font.SIZE.M};
  color: ${theme.color.TEXT_BLACK};
`;

export const AccentText = styled.p`
  font-family: ${theme.font.OSW[5]};
  font-size: ${theme.font.SIZE.M};
  color: ${theme.color.TEXT_BLACK};
`;
