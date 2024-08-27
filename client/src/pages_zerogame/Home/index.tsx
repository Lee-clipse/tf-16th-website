/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Modal, Wrapper } from "./style";
import Monster from "../../assets/images/zg_monster.webp";
import ZGBackground from "../../assets/images/zg_bg.webp";
import BlueStone from "../../assets/images/blue_stone.webp";
import GreenStone from "../../assets/images/green_stone.webp";
import RedStone from "../../assets/images/red_stone.webp";
import YellowStone from "../../assets/images/yellow_stone.webp";
import { useNavigate } from "react-router-dom";
import { BOOTH_LIST, ROUTE_PATH } from "../../common/const";
import { getUserIdByToken } from "../../common/common";
import { reqUserGameFetch } from "../../api/zerogame";
import { ZGUser } from "../../type/type";
import RefreshIcon from "../../assets/icons/refresh.png";
import HomeIcon from "../../assets/icons/home.png";
import GuideIcon from "../../assets/icons/questions.png";
import CloseIcon from "../../assets/icons/close.png";

const ZGHomePage = () => {
  const navigate = useNavigate();
  const [viewAttackButton, setViewAttackButton] = useState<boolean>(false);
  const [viewGoodsButton, setViewGoodsButton] = useState<boolean>(false);
  const [viewGuideModal, setViewGuideModal] = useState<boolean>(false);
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
    setViewGoodsButton(zgUser.goodsReceived);
    setViewAttackButton(zgUser.isAttack);
  };

  const handleRefreshButton = async () => {
    fetchUserData();
  };

  const isClearable = (boothLog: string) => {
    const c1 = Number(boothLog[0]) >= 3;
    const c2 = Number(boothLog[1]) >= 1;
    const c3 = Number(boothLog[2]) >= 1;
    const c4 = Number(boothLog[3]) >= 1;
    return c1 && c2 && c3 && c4;
  };

  return (
    <>
      {/* 가이드 모달 */}
      {viewGuideModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewGuideModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewGuideModal(false)} />
            </div>
            <div id="m-body">
              <div id="m-b-title">제로게임 가이드</div>
            </div>
          </div>
        </Modal>
      )}

      <Wrapper className="f-col f-spb">
        <img id="zg-bg" src={ZGBackground} />

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
            {isClearable(userData.boothLog) && (viewGoodsButton || !viewAttackButton) && (
              <div id="attack-btn" onClick={() => navigate(ROUTE_PATH.ZG_MONSTER)}>
                공격하기!
              </div>
            )}
            {isClearable(userData.boothLog) && !viewGoodsButton && viewAttackButton && (
              <div id="goods-btn" onClick={() => navigate(ROUTE_PATH.ZG_GOODS)}>
                굿즈 받기!
              </div>
            )}
          </div>

          <div id="booth-map-box" className="f-row">
            <div className="b-m-box">
              <div className="b-m-title">제로게임</div>
              <img
                className="stone"
                src={BlueStone}
                style={{ opacity: `${Number(userData.boothLog[0]) >= 3 ? "1" : "0.3"}` }}
              />
              <div className="b-m-score">{userData.boothLog[0]}/3</div>
            </div>
            <div className="b-m-box">
              <div className="b-m-title">기후위기</div>
              <img
                className="stone"
                src={GreenStone}
                style={{ opacity: `${Number(userData.boothLog[1]) >= 1 ? "1" : "0.3"}` }}
              />
              <div className="b-m-score">{userData.boothLog[1]}/1</div>
            </div>
            <div className="b-m-box">
              <div className="b-m-title">다문화</div>
              <img
                className="stone"
                src={YellowStone}
                style={{ opacity: `${Number(userData.boothLog[2]) >= 1 ? "1" : "0.3"}` }}
              />
              <div className="b-m-score">{userData.boothLog[2]}/1</div>
            </div>
            <div className="b-m-box">
              <div className="b-m-title">청년</div>
              <img
                className="stone"
                src={RedStone}
                style={{ opacity: `${Number(userData.boothLog[3]) >= 1 ? "1" : "0.3"}` }}
              />
              <div className="b-m-score">{userData.boothLog[3]}/1</div>
            </div>
          </div>

          <div id="booth-waiting">
            {userData.waitingBoothId === 0 ? (
              <div className="next-alert">다음 부스를 선택해주세요!</div>
            ) : (
              <div className="next-alert">
                [{BOOTH_LIST[userData.waitingBoothId].title}] 부스로 이동해주세요!
              </div>
            )}
          </div>
        </div>

        <div id="btn-row" className="f-row f-spb">
          <div id="guide-btn" className="v-center h-center" onClick={() => setViewGuideModal(true)}>
            <img src={GuideIcon} />
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
