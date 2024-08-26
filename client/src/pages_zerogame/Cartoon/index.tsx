/* eslint-disable @typescript-eslint/no-unused-vars */
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import { reqGameEnter } from "../../api/zerogame";
import { getUserIdByToken } from "../../common/common";
import IntroCartoon01 from "../../assets/images/intro01.webp";
import IntroCartoon02 from "../../assets/images/intro02.webp";
import IntroCartoon03 from "../../assets/images/intro03.webp";
import IntroCartoon04 from "../../assets/images/intro04.webp";
import IntroCartoon05 from "../../assets/images/intro05.webp";
import IntroCartoon06 from "../../assets/images/intro06.webp";
import IntroCartoon07 from "../../assets/images/intro07.webp";
import IntroCartoon08 from "../../assets/images/intro08.webp";
import IntroCartoon09 from "../../assets/images/intro09.webp";
import IntroCartoon10 from "../../assets/images/intro10.webp";
import IntroCartoon11 from "../../assets/images/intro11.webp";
import IntroCartoon12 from "../../assets/images/intro12.webp";
import { useState } from "react";

const ZGCartoonPage = () => {
  const navigate = useNavigate();
  const [cartoonIndex, setCartoonIndex] = useState<number>(0);

  const cartoonList = [
    IntroCartoon01,
    IntroCartoon02,
    IntroCartoon03,
    IntroCartoon04,
    IntroCartoon05,
    IntroCartoon06,
    IntroCartoon07,
    IntroCartoon08,
    IntroCartoon09,
    IntroCartoon10,
    IntroCartoon11,
    IntroCartoon12,
  ];

  const handleNextButton = () => {
    if (cartoonIndex === cartoonList.length - 1) {
      handleStartButton();
      return;
    }
    setCartoonIndex(cartoonIndex + 1);
  };

  const handleStartButton = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqGameEnter({ userId });
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      navigate(ROUTE_PATH.ZG_HOME);
    }
  };

  return (
    <>
      <Wrapper>
        <img id="bg" src={cartoonList[cartoonIndex]} />
        <div id="next-btn" onClick={() => handleNextButton()}>
          {cartoonIndex === cartoonList.length - 1 ? "출발하기" : "다음"}
        </div>
      </Wrapper>
    </>
  );
};

export default ZGCartoonPage;
