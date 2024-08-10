/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Modal, Wrapper } from "./style";
import Monster from "../../assets/images/monster.png";
import { useNavigate } from "react-router-dom";
import { BOOTH_CLEAR_LOG, BOOTH_LIST, ROUTE_PATH } from "../../common/const";
import { getUserIdByToken } from "../../common/common";
import { reqUserGameFetch } from "../../api/zerogame";
import { ZGUser } from "../../type/type";
import CloseIcon from "../../assets/icons/close.png";
import RefreshIcon from "../../assets/icons/refresh.png";
import HomeIcon from "../../assets/icons/home.png";

const ZGHomePage = () => {
  const navigate = useNavigate();
  const [viewMapModal, setViewMapModal] = useState<boolean>(false);
  const [viewClearButton, setViewClearButton] = useState<boolean>(false);
  const [viewGoodsButton, setViewGoodsButton] = useState<boolean>(false);
  const [userData, setUserData] = useState<ZGUser>({
    userId: 1,
    point: 0,
    boothLog: "0000",
    waitingBoothId: 0,
    goodsReceived: false,
    isAttack: false,
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqUserGameFetch(userId);
    const resUserData = res.data.user;
    if (resUserData) {
      setUserData(resUserData);
      renderClearButton(resUserData);
    }
  };

  const renderClearButton = (zgUser: ZGUser) => {
    setViewClearButton(zgUser.boothLog === BOOTH_CLEAR_LOG);
    setViewGoodsButton(zgUser.isAttack);
  };

  const handleRefreshButton = async () => {
    fetchUserData();
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
            <div id="m-body">시민공원 내 부스 지도</div>
          </div>
        </Modal>
      )}

      <Wrapper className="f-col f-spb">
        <div id="h-header" className="f-row f-spb v-center">
          <div id="point">
            Point: <span id="number">{userData?.point}</span>
          </div>

          <div id="home-btn" onClick={() => navigate(ROUTE_PATH.MAIN)}>
            <img src={HomeIcon} />
          </div>
        </div>

        <div>
          <div id="monster">
            <img src={Monster} />
          </div>

          <div id="clear-booth">부스 현황: {userData?.boothLog}</div>
          <div id="booth-waiting">{BOOTH_LIST[Number(userData?.waitingBoothId)]} 입장 중</div>
          {viewGoodsButton ? (
            <div id="clear-btn" onClick={() => navigate(ROUTE_PATH.ZG_GOODS)}>
              굿즈받기
            </div>
          ) : (
            viewClearButton && (
              <div id="clear-btn" onClick={() => navigate(ROUTE_PATH.ZG_MONSTER)}>
                공격하기
              </div>
            )
          )}
        </div>

        <div id="btn-row" className="f-row f-spb">
          <div id="map-btn" className="v-center h-center" onClick={() => setViewMapModal(true)}>
            지도
          </div>
          <div
            id="booth-list-btn"
            className="v-center h-center"
            onClick={() => navigate(ROUTE_PATH.ZG_BOOTH)}
          >
            부스 목록
          </div>
          <div id="refresh-btn" className="v-center h-center" onClick={() => handleRefreshButton()}>
            <img src={RefreshIcon} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ZGHomePage;
