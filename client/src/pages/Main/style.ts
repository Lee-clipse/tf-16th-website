import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  justify-content: center;
`;

export const MainSection = styled.div`
  color: ${theme.color.MAIN_BLUE};
  margin: 7rem 0 12rem 0;
  padding: 0 2rem;

  .header {
    font-family: ${theme.font.FUT[3]};
    font-size: ${theme.font.SIZE.L};
  }

  .logo {
    font-family: ${theme.font.NOTO[4]};
    font-size: ${theme.font.SIZE.M};
    margin-top: 5rem;

    img {
      width: 40%;
    }

    .logo-text {
      font-family: ${theme.font.HAK[5]};
      font-size: ${theme.font.SIZE.XXXL};
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

export const HistorySection = styled.div`
  background-color: ${theme.color.MAIN_BLUE};
  color: ${theme.color.MAIN_BLUE};
  margin: 0 0 4rem 0;
  padding: 6rem 3rem 2rem 3rem;

  .title {
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.XXL};
    color: ${theme.color.TEXT_WHITE};
    gap: 0.8rem;
    letter-spacing: 1.2px;
    margin: 0 0 3rem 0;

    .mini-text {
      font-size: ${theme.font.SIZE.S};
      margin-left: 0.6rem;
    }
  }

  .box {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    font-family: ${theme.font.NOTO[5]};
    font-size: ${theme.font.SIZE.SM};
    border-radius: 0.6rem;
    margin: 2.4rem 0.6rem;

    .header {
      padding: 1.6rem 0;
      gap: 0.6rem;
      font-family: ${theme.font.NOTO[7]};

      .accent {
        font-family: ${theme.font.NOTO[8]};
        font-size: ${theme.font.SIZE.XXL};
      }
    }

    .body {
      border: 0.1px solid ${theme.color.MAIN_BLUE};
      padding: 2.4rem 0;
      gap: 0.8rem;
    }

    .footer {
      padding: 2.4rem 2rem;
      font-family: ${theme.font.NOTO[8]};
      font-size: ${theme.font.SIZE.ML};
      gap: 0.6rem;
    }
  }

  .box-1 {
    background-color: ${theme.color.GREEN_BLUE};
  }

  .box-2 {
    background-color: ${theme.color.LIGHT_BLUE};
  }

  .box-3 {
    background-color: ${theme.color.TEXT_WHITE};
  }

  .footer-text {
    font-family: ${theme.font.NOTO[7]};
    color: ${theme.color.TEXT_WHITE};
    font-size: ${theme.font.SIZE.XL};
    margin: 4rem 1rem;
    align-items: end;
  }
`;

export const ValueSection = styled.div`
  margin: 3rem 0 4rem 0;
  padding: 0 2rem 0 2.4rem;

  .title {
    color: ${theme.color.MAIN_BLUE};
    font-family: ${theme.font.NOTO[7]};
    font-size: ${theme.font.SIZE.XXXL};
    gap: 0.4rem;
    margin-bottom: 3.4rem;

    .logo {
      font-family: ${theme.font.HAK[5]};
      font-size: ${theme.font.SIZE.XXXXXL};
    }
  }

  .slogun {
    gap: 3rem;
    color: ${theme.color.MAIN_BLUE};
    font-family: ${theme.font.NOTO[5]};
    font-size: ${theme.font.SIZE.S};

    .box {
      gap: 1.4rem;

      .label {
        border-top: 2px solid ${theme.color.MAIN_BLUE};
        padding-top: 1rem;
        padding-left: 0.2rem;
        font-family: ${theme.font.NOTO[8]};
        font-size: ${theme.font.SIZE.SM};
        flex: 2;
      }

      .content {
        border-top: 1px solid ${theme.color.MAIN_BLUE};
        padding-top: 1rem;
        padding-left: 0.2rem;
        flex: 8;
        gap: 0.6rem;

        .cell {
          gap: 0.6rem;
        }

        .accent {
          font-family: ${theme.font.OSW[5]};
          font-size: ${theme.font.SIZE.L};
        }
      }
    }
  }

  .footer {
    color: ${theme.color.MAIN_BLUE};
    font-family: ${theme.font.NOTO[8]};
    font-size: ${theme.font.SIZE.L};
    align-items: end;
    margin-top: 3rem;
  }
`;

export const BannerSection = styled.div`
  background-color: ${theme.color.MAIN_BLUE};
  padding: 4rem 0 8rem 0;
  text-align: center;

  .title {
    color: ${theme.color.GRAY_BLUE};
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
