/* eslint-disable @typescript-eslint/no-unused-vars */
import { Wrapper } from "./style";
import GoodsMap from "../../assets/images/goods_map.png";
import Goods from "../../assets/images/goods.png";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../common/const";
import ZGBackground from "../../assets/images/zg_bg.webp";

const ZGGoodsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <img id="zg-bg" src={ZGBackground} />

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
