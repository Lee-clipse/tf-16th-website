/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Wrapper } from "./style";
import GoodsMap from "../../assets/images/goods_map.png";
import Goods from "../../assets/images/goods.png";
import { useNavigate } from "react-router-dom";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import ZGBackground from "../../assets/images/zg_bg.webp";
import { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/close.png";
import MapIcon from "../../assets/icons/location.png";
import { reqUserGameFetch } from "../../api/zerogame";
import { getUserIdByToken } from "../../common/common";

const ZGGoodsPage = () => {
  const navigate = useNavigate();
  const [viewMapModal, setViewMapModal] = useState<boolean>(false);

  useEffect(() => {
    fetchUserGameData();
  }, []);

  const fetchUserGameData = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqUserGameFetch(userId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      if (res.data.user.goodsReceived === true) {
        navigate(ROUTE_PATH.ZG_HOME);
      }
    }
  };

  return (
    <>
      {/* 지도 모달 */}
      {viewMapModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewMapModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewMapModal(false)} />
            </div>
            <div id="m-body">
              <div id="m-b-title">🔍 시민공원 내 굿즈 증정 위치</div>
              <div id="msg">광장 중앙문 [A2] 부스</div>
              <img id="location-map" src={GoodsMap} />
            </div>
          </div>
        </Modal>
      )}

      <Wrapper>
        <img id="zg-bg" src={ZGBackground} />

        {/* <div id="g-map">
          <img src={GoodsMap} />
        </div> */}

        <div id="g-list">
          <img src={Goods} />
        </div>

        <div id="g-text" className="f-col" style={{ gap: ".8rem" }}>
          <div>제로게임 클리어를 축하합니다!</div>
          <div>
            지도에 적힌 부스에서 <span>굿즈</span>를 받아가세요.
          </div>
        </div>

        <div id="g-text" className="f-col" style={{ gap: ".8rem", marginTop: "2rem" }}>
          <div>계속해서 부스를 체험하실 수 있어요!</div>
        </div>

        <div id="btn-row" className="f-col" style={{ gap: "1rem" }}>
          <div id="map-btn" className="v-center h-center" onClick={() => setViewMapModal(true)}>
            굿즈 부스 지도
            <img src={MapIcon} />
          </div>

          <div id="home-btn" onClick={() => navigate(ROUTE_PATH.ZG_HOME)}>
            홈으로 돌아가기
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ZGGoodsPage;
