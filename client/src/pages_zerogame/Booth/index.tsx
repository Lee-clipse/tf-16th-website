import { useEffect, useState } from "react";
import { Modal, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { API_CODE, BOOTH_LIST, ROUTE_PATH } from "../../common/const";
import { alert, getUserIdByToken, isStaffByToken } from "../../common/common";
import CloseIcon from "../../assets/icons/close.png";
import { reqBoothLogOfUser, reqSelectBooth } from "../../api/zerogame";
import ZGBackground from "../../assets/images/zg_bg.webp";

const ZGBoothPage = () => {
  const navigate = useNavigate();
  const [viewBoothModal, setViewBoothModal] = useState<boolean>(false);
  const [selectBoothId, setSelectBoothId] = useState<string>("0");
  const [boothLog, setBoothLog] = useState<string[]>([]);

  useEffect(() => {
    fetchBoothLog();
  }, []);

  const fetchBoothLog = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqBoothLogOfUser(userId);

    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setBoothLog(res.data.boothLog);
    }
  };

  const handleSelectBooth = (boothId: string) => {
    setSelectBoothId(boothId);
    setViewBoothModal(true);
  };

  const handleEnterBooth = async () => {
    if (isStaffByToken()) {
      alert("스탭은 부스를 선택할 수 없습니다.", "info");
      setViewBoothModal(false);
      return;
    }
    const userId = getUserIdByToken().toString();
    const res = await reqSelectBooth({ userId, boothId: selectBoothId });

    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      navigate(ROUTE_PATH.ZG_HOME);
      setViewBoothModal(false);
    }
  };

  return (
    <>
      {/* 부스 선택 모달 */}
      {viewBoothModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewBoothModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewBoothModal(false)} />
            </div>
            <div id="m-body">
              <div>boothId: {selectBoothId}</div>
              <div>{BOOTH_LIST[Number(selectBoothId)]}</div>
              <div className="b-btn" onClick={() => handleEnterBooth()}>
                부스 선택
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* TODO: 이미 클리어한 부스에 대해 처리 */}
      <Wrapper>
        <img id="zg-bg" src={ZGBackground} />

        <div id="b-title">부스 목록</div>
        <div id="b-list" className="f-col h-center">
          {Object.entries(BOOTH_LIST).map(([key, value]) => {
            const isClearedBooth = boothLog.includes(key);
            return (
              <div
                className={`b f-row f-spb ${isClearedBooth && "cleard"}`}
                key={key}
                onClick={() => {
                  if (isClearedBooth) {
                    alert("이미 클리어한 부스입니다.", "info");
                  } else {
                    handleSelectBooth(key);
                  }
                }}
              >
                <div>{value}</div>
                <div>{">"}</div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default ZGBoothPage;
