import React, { useEffect, useState } from "react";
import { Modal, Wrapper } from "./style";
import HeaderMenu from "../../components/HeaderMenu";
import { alert, getUserIdByToken } from "../../common/common";
import { reqUserData } from "../../api/user";
import { API_CODE, BOOTH_LIST, ROUTE_PATH } from "../../common/const";
import {
  reqBoothIdOfStaff,
  reqBoothOut,
  reqGivePoint,
  reqStaffGameFetch,
  reqUserGameFetch,
} from "../../api/zerogame";
import { User, ZGUser } from "../../type/type";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/icons/close.png";
import RefreshIcon from "../../assets/icons/refresh.png";
import Location from "../../assets/images/location.png";
import LocationIcon from "../../assets/icons/location.png";
import ZGBackground from "../../assets/images/zg_bg.webp";

const StaffPage = () => {
  const navigate = useNavigate();

  const [boothId, setBoothId] = useState<string>("");
  const [staffName, setStaffName] = useState<string>("");
  const [userList, setUserList] = useState<User[]>([]);
  const [selectUser, setSelectUser] = useState<User>();
  const [selectUserGameData, setSelectUserGameData] = useState<ZGUser>();
  const [viewMapModal, setViewMapModal] = useState<boolean>(false);
  const [viewPointModal, setViewPointModal] = useState<boolean>(false);
  const [viewOutModal, setViewOutModal] = useState<boolean>(false);
  const [inputPoint, setInputPoint] = useState<string>("");

  useEffect(() => {
    fetchUserData();
    fetchStaffData();
  }, []);

  const fetchUserData = async () => {
    const staffId = getUserIdByToken().toString();
    const res = await reqUserData(staffId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    const isStaff = res.data.user.staff;
    if (ok && isStaff) {
      setStaffName(res.data.user.name);
    } else {
      navigate(ROUTE_PATH.MAIN);
      alert("해당 페이지에 권한이 없습니다.", "warning");
    }
  };

  const fetchStaffData = async () => {
    const staffId = getUserIdByToken().toString();
    const res = await reqBoothIdOfStaff(staffId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      const thisBoothId = res.data.boothId;
      setBoothId(thisBoothId);
      fetchUserList(thisBoothId);
    }
  };

  const fetchUserList = async (thisBoothId: string) => {
    const res = await reqStaffGameFetch(thisBoothId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setUserList(res.data.userList);
    }
  };

  const fetchUserGameData = async (userId: string) => {
    const res = await reqUserGameFetch(userId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setSelectUserGameData(res.data.user);
    }
  };

  const handleSelectUser = (user: User) => {
    setSelectUser(user);
    fetchUserGameData(user.id.toString());
    setViewPointModal(true);
  };

  const handleRefreshButton = () => {
    fetchUserList(boothId);
  };

  const handleInputPoint = (point: string) => {
    setInputPoint(point);
  };

  const handleAddPoint = async () => {
    const res = await reqGivePoint({
      userId: selectUser?.id.toString(),
      boothId,
      point: inputPoint,
    });
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setViewPointModal(false);
      alert("포인트 지급에 성공했습니다!", "success");
      window.location.reload();
    }
  };

  const handleSelectOutUser = (user: User) => {
    setSelectUser(user);
    fetchUserGameData(user.id.toString());
    setViewOutModal(true);
  };

  const handleOutButton = async () => {
    const res = await reqBoothOut({
      userId: selectUser?.id.toString(),
      boothId,
    });
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      alert("이탈 처리 되었습니다.", "success");
      setViewOutModal(false);
      window.location.reload();
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
              <div id="m-b-title">시민공원 내 부스 지도</div>
              <img id="location-map" src={Location} />
            </div>
          </div>
        </Modal>
      )}

      {/* 포인트 모달 */}
      {viewPointModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewPointModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewPointModal(false)} />
            </div>
            <div id="m-body" className="f-col" style={{ gap: "1rem" }}>
              <div>
                {selectUser?.name} {selectUser?.phoneNumber.slice(-4)}
              </div>
              <div>현재 포인트: {selectUserGameData?.point}</div>
              <input
                type="text"
                placeholder="포인트 입력"
                onChange={(e) => handleInputPoint(e.target.value)}
              />
              <div className="b-btn" onClick={() => handleAddPoint()}>
                포인트 지급
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* 이탈 모달 */}
      {viewOutModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewOutModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewOutModal(false)} />
            </div>
            <div id="m-body" className="f-col" style={{ gap: "1rem" }}>
              <div>
                {selectUser?.name} {selectUser?.phoneNumber.slice(-4)}
              </div>
              <div>현재 포인트: {selectUserGameData?.point}</div>
              <div className="b-btn" onClick={() => handleOutButton()}>
                이탈 처리
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper>
        <img id="zg-bg" src={ZGBackground} />

        <div id="s-name">{staffName} 스탭님 환영합니다!</div>
        <div id="s-booth-name">{BOOTH_LIST[Number(boothId)]} 담당</div>

        {/* 부스 내 대기자 리스트 */}
        <div id="s-people">
          <div id="s-p-title">부스 접수 인원</div>
          <div id="s-p-list">
            {userList.map((user: User) => {
              return (
                <div className="s-p-item f-row f-spb v-center">
                  <div className="s-p-name">
                    {user.name} {user.phoneNumber.slice(-4)}
                  </div>
                  <div className="f-row v-center">
                    <div className="s-p-point-btn" onClick={() => handleSelectUser(user)}>
                      포인트
                    </div>
                    <div className="s-p-out-btn" onClick={() => handleSelectOutUser(user)}>
                      이탈
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="btn-row" className="f-row f-spb">
          <div id="map-btn" className="v-center h-center" onClick={() => setViewMapModal(true)}>
            <img src={LocationIcon} />
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

export default StaffPage;
