/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Modal, Wrapper } from "./style";
import HeaderMenu from "../../components/HeaderMenu";
import { alert, getUserIdByToken } from "../../common/common";
import {
  reqStaffEventCalc,
  reqStaffEventResult,
  reqStaffGoodsReceive,
  reqUserData,
} from "../../api/user";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/icons/close.png";
import ZGBackground from "../../assets/images/zg_bg.webp";
import Loading from "../../components/Loading";

const StaffEventPage = () => {
  const navigate = useNavigate();

  const [staffName, setStaffName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [viewGoodsRankModal, setViewGoodsRankingModal] = useState<boolean>(false);
  const [staffEventList, setStaffEventList] = useState([[], [], [], []]);
  const [goodsRank, setGoodsRank] = useState<string>("-");

  useEffect(() => {
    fetchUserData();
    fetchStaffEventList();
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

  const fetchStaffEventList = async () => {
    const res = await reqStaffEventResult();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setStaffEventList(res.data.staffEventResult);
    }
  };

  const handleViewGoodsRankModal = (rank: string) => {
    setGoodsRank(rank);
    setViewGoodsRankingModal(true);
  };

  const rankToIndex = (rank: string) => {
    if (rank === "A") return 0;
    if (rank === "B") return 1;
    if (rank === "C") return 2;
    return 3;
  };

  const calcStaffEvent = async () => {
    setIsLoading(true);
    const res = await reqStaffEventCalc();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      alert("연산에 성공했습니다!", "success");
      window.location.reload();
    }
  };

  const handleGoodsReceive = async (id: number) => {
    setIsLoading(true);
    const res = await reqStaffGoodsReceive(id);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      window.location.reload();
    }
  };

  return (
    <>
      {isLoading && <Loading />}

      {/* 등급 모달 */}
      {viewGoodsRankModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewGoodsRankingModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewGoodsRankingModal(false)} />
            </div>
            <div id="m-body" className="f-col" style={{ gap: "1rem" }}>
              <div>
                {goodsRank} 굿즈 대상자 명단: {staffEventList[rankToIndex(goodsRank)].length}명
              </div>
              <div>
                {staffEventList[rankToIndex(goodsRank)].map((staff: any) => {
                  return (
                    <div className={`r-row f-col ${staff.goodsReceived && "r-row-x"}`}>
                      <div>
                        {staff.name} / {staff.group} / {staff.count}명
                      </div>
                      <div>{staff.phoneNumber}</div>
                      <div className="g-btn" onClick={() => handleGoodsReceive(Number(staff.id))}>
                        지급 체크
                      </div>
                    </div>
                  );
                })}
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

        <div id="g-r-row" className="f-col f-spb">
          <div className="g-box f-row v-center" onClick={() => handleViewGoodsRankModal("A")}>
            <div className="g">A </div>
            <div className="gn"> 굿즈 세트:</div>
            <div className="g">
              {staffEventList[0].filter((staff: any) => staff.goodsReceived === false).length} /{" "}
              {staffEventList[0].length}명
            </div>
          </div>

          <div className="g-box f-row v-center" onClick={() => handleViewGoodsRankModal("B")}>
            <div className="g">B </div>
            <div className="gn"> 굿즈 세트:</div>
            <div className="g">
              {staffEventList[1].filter((staff: any) => staff.goodsReceived === false).length} /{" "}
              {staffEventList[1].length}명
            </div>
          </div>

          <div className="g-box f-row v-center" onClick={() => handleViewGoodsRankModal("C")}>
            <div className="g">C </div>
            <div className="gn"> 굿즈 세트:</div>
            <div className="g">
              {staffEventList[2].filter((staff: any) => staff.goodsReceived === false).length} /{" "}
              {staffEventList[2].length}명
            </div>
          </div>

          <div className="g-box f-row v-center" onClick={() => handleViewGoodsRankModal("D")}>
            <div className="g">D </div>
            <div className="gn"> 굿즈 세트:</div>
            <div className="g">
              {staffEventList[3].filter((staff: any) => staff.goodsReceived === false).length} /{" "}
              {staffEventList[3].length}명
            </div>
          </div>
        </div>

        <div id="btn-row">
          <span>
            아래 버튼은 18:15 이후 딱 한 번만 클릭 해주세요 연산 비용이 비싸기 때문입니다.
          </span>
          <div id="c-btn" className="btn" onClick={() => calcStaffEvent()}>
            결과 연산
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StaffEventPage;
