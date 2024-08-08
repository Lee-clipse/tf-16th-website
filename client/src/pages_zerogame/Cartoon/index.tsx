/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Wrapper } from "./style";
import ZGCartoon from "../../assets/images/zg_intro_cartoon.png";
import { useNavigate } from "react-router-dom";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import { reqGameEnter } from "../../api/zerogame";
import { getUserIdByToken } from "../../common/common";

const ZGCartoonPage = () => {
  const navigate = useNavigate();

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
        <img id="bg" src={ZGCartoon} />
        <div id="start-btn" onClick={() => handleStartButton()}>
          출발하기
        </div>
      </Wrapper>
    </>
  );
};

export default ZGCartoonPage;
