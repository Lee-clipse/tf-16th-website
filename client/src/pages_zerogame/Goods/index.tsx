/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { getUserIdByToken } from "../../common/common";
import { reqMonsterHp, reqUserGameFetch } from "../../api/zerogame";
import GoodsMap from "../../assets/images/goods_map.png";
import Goods from "../../assets/images/goods.png";
import { ZGUser } from "../../type/type";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../common/const";

const ZGGoodsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <div id="g-map">
          <img src={GoodsMap} />
        </div>
        <div id="g-list">
          <img src={Goods} />
        </div>
        <div id="g-text">굿즈 수령 축하합니다!</div>

        <div id="home-btn" onClick={() => navigate(ROUTE_PATH.ZG_HOME)}>
          홈으로 돌아가기
        </div>
      </Wrapper>
    </>
  );
};

export default ZGGoodsPage;
