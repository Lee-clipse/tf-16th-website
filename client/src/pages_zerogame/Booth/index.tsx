/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { LoadingPage, Modal, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { API_CODE, BOOTH_LIST, LOADING_DESC, ROUTE_PATH } from "../../common/const";
import { alert, getUserIdByToken, isStaffByToken } from "../../common/common";
import CloseIcon from "../../assets/icons/close.png";
import { reqBoothLogOfUser, reqBoothWaitList, reqSelectBooth } from "../../api/zerogame";
import ZGBackground from "../../assets/images/zg_bg.webp";
import styled from "styled-components";
import BlueStone from "../../assets/images/blue_stone.webp";
import GreenStone from "../../assets/images/green_stone.webp";
import RedStone from "../../assets/images/red_stone.webp";
import YellowStone from "../../assets/images/yellow_stone.webp";
import GoIcon from "../../assets/icons/go-right-arrow.png";
import RunIcon from "../../assets/icons/race.png";

const ZGBoothPage = () => {
  const navigate = useNavigate();
  const [viewBoothModal, setViewBoothModal] = useState<boolean>(false);
  const [selectBoothId, setSelectBoothId] = useState<string>("0");
  const [boothLog, setBoothLog] = useState<string[]>([]);
  const [boothWaitList, setBoothWaitList] = useState<{ [key: number]: number }>({});
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  useEffect(() => {
    fetchBoothLog();
    fetchBoothWaitList();
  }, []);

  const fetchBoothLog = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqBoothLogOfUser(userId);

    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setBoothLog(res.data.boothLog);
    }
  };

  const fetchBoothWaitList = async () => {
    const res = await reqBoothWaitList();

    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setBoothWaitList(res.data.boothWaitList);
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
      showLoadingPage();
    }
  };

  const showLoadingPage = () => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);

      navigate(ROUTE_PATH.ZG_HOME);
      setViewBoothModal(false);
    }, 2000);
  };

  const [openDropdown, setOpenDropdown] = useState<string>("");
  const handleDropdownClick = (category: string) => {
    setOpenDropdown(openDropdown === category ? "" : category);
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
            <div id="m-body" className="f-col">
              <div className="m-title">{BOOTH_LIST[Number(selectBoothId)].title} 부스</div>
              <div className="m-desc">{BOOTH_LIST[Number(selectBoothId)].desc}</div>
              <div className="b-btn" onClick={() => handleEnterBooth()}>
                부스 선택
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* 로딩 페이지 */}
      {loadingPage && (
        <LoadingPage>
          <div id="background" className="f-col v-center h-center" style={{ gap: "2rem" }}>
            <img src={RunIcon} />
            <div className="l-desc-box f-col" style={{ gap: "2rem" }}>
              <div>그거 아시나요?</div>
              <div className="l-desc">{LOADING_DESC[Math.floor(Math.random() * 4)]}</div>
            </div>
          </div>
        </LoadingPage>
      )}

      {/* TODO: 이미 클리어한 부스에 대해 처리 */}
      <Wrapper>
        <img id="zg-bg" src={ZGBackground} />

        <div id="b-title">부스 목록</div>
        <div id="b-list" className="f-col">
          <div className="dr">
            <div
              className="dr-row f-row f-spb v-center"
              onClick={() => handleDropdownClick("제로게임")}
            >
              <div className="dr-label f-row v-center">
                <img className="dr-icon" src={BlueStone} />
                <div className="dr-title">제로게임</div>
              </div>
              <div className="dr-btn">열기</div>
            </div>

            <DropdownContent isOpen={openDropdown === "제로게임"}>
              {Object.entries(BOOTH_LIST)
                .filter(([key]) => Number(key) >= 1 && Number(key) <= 100)
                .map(([key, value]) => {
                  const isClearedBooth = boothLog.includes(key);
                  return (
                    <div
                      className={`dr-item f-row f-spb v-center ${isClearedBooth && "cleard"}`}
                      key={key}
                      onClick={() => {
                        if (isClearedBooth) {
                          alert("이미 클리어한 부스입니다.", "info");
                        } else {
                          handleSelectBooth(key);
                        }
                      }}
                    >
                      <div className="f-col" style={{ gap: ".8rem" }}>
                        <div>{value.title} 부스</div>
                        <div className="wait">{boothWaitList[Number(key)] || 0}명 대기</div>
                      </div>

                      <img src={GoIcon} />
                    </div>
                  );
                })}
            </DropdownContent>
          </div>

          <div className="dr">
            <div
              className="dr-row f-row f-spb v-center"
              onClick={() => handleDropdownClick("기후위기")}
            >
              <div className="dr-label f-row v-center">
                <img className="dr-icon" src={RedStone} />
                <div className="dr-title">기후위기</div>
              </div>
              <div className="dr-btn">열기</div>
            </div>

            <DropdownContent isOpen={openDropdown === "기후위기"}>
              {Object.entries(BOOTH_LIST)
                .filter(([key]) => Number(key) >= 101 && Number(key) <= 200)
                .map(([key, value]) => {
                  const isClearedBooth = boothLog.includes(key);
                  return (
                    <div
                      className={`dr-item f-row f-spb v-center ${isClearedBooth && "cleard"}`}
                      key={key}
                      onClick={() => {
                        if (isClearedBooth) {
                          alert("이미 클리어한 부스입니다.", "info");
                        } else {
                          handleSelectBooth(key);
                        }
                      }}
                    >
                      <div className="f-col" style={{ gap: ".8rem" }}>
                        <div>{value.title} 부스</div>
                        <div className="wait">{boothWaitList[Number(key)] || 0}명 대기</div>
                      </div>

                      <img src={GoIcon} />
                    </div>
                  );
                })}
            </DropdownContent>
          </div>

          <div className="dr">
            <div
              className="dr-row f-row f-spb v-center"
              onClick={() => handleDropdownClick("다문화")}
            >
              <div className="dr-label f-row v-center">
                <img className="dr-icon" src={YellowStone} />
                <div className="dr-title">다문화</div>
              </div>
              <div className="dr-btn">열기</div>
            </div>

            <DropdownContent isOpen={openDropdown === "다문화"}>
              {Object.entries(BOOTH_LIST)
                .filter(([key]) => Number(key) >= 201 && Number(key) <= 300)
                .map(([key, value]) => {
                  const isClearedBooth = boothLog.includes(key);
                  return (
                    <div
                      className={`dr-item f-row f-spb v-center ${isClearedBooth && "cleard"}`}
                      key={key}
                      onClick={() => {
                        if (isClearedBooth) {
                          alert("이미 클리어한 부스입니다.", "info");
                        } else {
                          handleSelectBooth(key);
                        }
                      }}
                    >
                      <div className="f-col" style={{ gap: ".8rem" }}>
                        <div>{value.title} 부스</div>
                        <div className="wait">{boothWaitList[Number(key)] || 0}명 대기</div>
                      </div>

                      <img src={GoIcon} />
                    </div>
                  );
                })}
            </DropdownContent>
          </div>

          <div className="dr">
            <div
              className="dr-row f-row f-spb v-center"
              onClick={() => handleDropdownClick("청년 커뮤니티")}
            >
              <div className="dr-label f-row v-center">
                <img className="dr-icon" src={GreenStone} />
                <div className="dr-title">청년 커뮤니티</div>
              </div>
              <div className="dr-btn">열기</div>
            </div>

            <DropdownContent isOpen={openDropdown === "청년 커뮤니티"}>
              {Object.entries(BOOTH_LIST)
                .filter(([key]) => Number(key) >= 301 && Number(key) <= 400)
                .map(([key, value]) => {
                  const isClearedBooth = boothLog.includes(key);
                  return (
                    <div
                      className={`dr-item f-row f-spb v-center ${isClearedBooth && "cleard"}`}
                      key={key}
                      onClick={() => {
                        if (isClearedBooth) {
                          alert("이미 클리어한 부스입니다.", "info");
                        } else {
                          handleSelectBooth(key);
                        }
                      }}
                    >
                      <div className="f-col" style={{ gap: ".8rem" }}>
                        <div>{value.title} 부스</div>
                        <div className="wait">{boothWaitList[Number(key)] || 0}명 대기</div>
                      </div>

                      <img src={GoIcon} />
                    </div>
                  );
                })}
            </DropdownContent>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const DropdownContent = styled.ul<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "100%" : "0")};
  overflow: hidden;
  // transition: max-height 0.3s ease-in-out;
  list-style: none;
`;

export default ZGBoothPage;
