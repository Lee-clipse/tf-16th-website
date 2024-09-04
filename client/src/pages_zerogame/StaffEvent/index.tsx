import { useEffect, useState } from "react";
import { Modal, Wrapper } from "./style";
import HeaderMenu from "../../components/HeaderMenu";
import { alert, getUserIdByToken } from "../../common/common";
import { reqUserData } from "../../api/user";
import { API_CODE, ROUTE_PATH, STAFF_GROUP } from "../../common/const";
import {
  reqEventStaffList,
  reqRecommandList,
  reqStaffEventRanking,
  reqStaffGoodsLogList,
  reqStaffReceiveGoods,
} from "../../api/zerogame";
import { Ranking, Recommand, StaffEvent, StaffGoodsLog } from "../../type/type";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/icons/close.png";
import RefreshIcon from "../../assets/icons/refresh.png";
import SearchIcon from "../../assets/icons/loupe.png";
import ZGBackground from "../../assets/images/zg_bg.webp";
import RankingIcon from "../../assets/icons/ranking.png";
import Loading from "../../components/Loading";

const StaffEventPage = () => {
  const navigate = useNavigate();

  const [staffName, setStaffName] = useState<string>("");
  const [staffList, setStaffList] = useState<StaffEvent[]>([]);
  const [searchStaffList, setSearchStaffList] = useState<StaffEvent[]>([]);
  const [selectStaff, setSelectStaff] = useState<StaffEvent>();
  const [viewGoodsModal, setViewGoodsModal] = useState<boolean>(false);
  const [searchStaffName, setSearchStaffName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommandList, setRecommandList] = useState<Recommand[]>([]);
  const [viewGoodsLogModal, setViewGoodsLogModal] = useState<boolean>(false);
  const [goodsLogList, setGoodsLogList] = useState<StaffGoodsLog[]>([]);
  const [ranking, setRanking] = useState<Ranking[]>([]);
  const [viewRankingModal, setViewRankingModal] = useState<boolean>(false);

  useEffect(() => {
    fetchUserData();
    fetchStaffList();
  }, []);

  useEffect(() => {
    if (searchStaffName === "") {
      fetchStaffList();
    }
  }, [searchStaffName]);

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

  const fetchStaffList = async () => {
    const res = await reqEventStaffList();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setSearchStaffList(res.data.staffList);
      setStaffList(res.data.staffList);
    }
  };

  const handleGiveGoodsToStaff = async (staff: StaffEvent) => {
    setIsLoading(true);
    setSelectStaff(staff);
    const staffId = staff.id;
    const res = await reqRecommandList(staffId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      setRecommandList(res.data.recommandList);
      setViewGoodsModal(true);
    }
  };

  const handleRefreshButton = () => {
    fetchStaffList();
  };

  const handleGiveGoods = async () => {
    setIsLoading(true);
    const staffId: number = selectStaff?.id as number;
    const res = await reqStaffReceiveGoods(staffId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      setViewGoodsModal(false);
      alert("굿즈 지급에 성공했습니다!", "success");
      window.location.reload();
    }
  };

  const handleSearchStaffName = (value: string) => {
    setSearchStaffName(value);
  };

  const handleStaffSearch = () => {
    if (searchStaffName === "") return;
    const searchStaffList = staffList.filter((staff: StaffEvent) =>
      staff.name.includes(searchStaffName)
    );
    setSearchStaffList(searchStaffList);
  };

  const handleViewGoodsLogModal = async () => {
    await fetchGoodsLogList();
    setViewGoodsLogModal(true);
  };

  const fetchGoodsLogList = async () => {
    const res = await reqStaffGoodsLogList();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setGoodsLogList(res.data.goodsLogList);
    }
  };

  const handleRanking = async () => {
    setIsLoading(true);
    const res = await reqStaffEventRanking();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      setRanking(res.data.ranking);
      setViewRankingModal(true);
    }
  };

  const getGoodsSetType = (group: string, count: number) => {
    if (group === STAFF_GROUP.장년부) {
      if (count < 10) return "일반";
      if (count < 20) return "D";
      if (count < 30) return "C";
      if (count < 50) return "B";
      return "A";
    }
    if (
      group === STAFF_GROUP.동상교회 ||
      group === STAFF_GROUP.외부인 ||
      group === STAFF_GROUP.청소년
    ) {
      if (count >= 5) return "A";
      if (count >= 3) return "B";
      if (count >= 2) return "C";
      if (count >= 1) return "D";
      return "일반";
    }
    if (group === STAFF_GROUP.청년부) {
      if (count < 128) return "일반";
      if (count >= 1024) return "A";
      if (count >= 512) return "B";
      if (count >= 256) return "C";
      if (count >= 128) return "D";
    }
  };

  return (
    <>
      {isLoading && <Loading />}

      {/* 랭킹 모달 */}
      {viewRankingModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewRankingModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewRankingModal(false)} />
            </div>
            <div id="m-body" className="f-col" style={{ gap: "1rem" }}>
              <div>🥇 추천인 랭킹 </div>
              <div className="r-row f-col">
                {ranking.map((staff: Ranking, index) => {
                  return (
                    <div key={index}>
                      {staff.name} {staff.phoneNumber.slice(-4)} / {staff.group}:{" "}
                      <span className="h">{staff.count}</span>명
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* 굿즈 증정 모달 */}
      {viewGoodsModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewGoodsModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewGoodsModal(false)} />
            </div>
            <div id="m-body" className="f-col" style={{ gap: "1rem" }}>
              <div>
                {selectStaff?.name} {selectStaff?.phoneNumber.slice(-4)} / {selectStaff?.group}
              </div>
              <div className="r-title">
                🎉 추천해주신 분들: <span className="h">{recommandList.length}</span>명
              </div>
              <div className="r-title">
                <span className="h">
                  {getGoodsSetType(selectStaff?.group as string, recommandList.length)}
                </span>{" "}
                굿즈 세트 대상
              </div>
              <div className="f-col r-list">
                {recommandList.map((rec, index) => {
                  return <div key={index}>- {rec?.name}</div>;
                })}
              </div>
              <div className="b-btn" onClick={() => handleGiveGoods()}>
                굿즈 지급
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* 굿즈 증정 내역 모달 */}
      {viewGoodsLogModal && (
        <Modal>
          <div id="back-drop" onClick={() => setViewGoodsLogModal(false)}></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewGoodsLogModal(false)} />
            </div>
            <div id="m-body" className="f-col" style={{ gap: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>📃 굿즈 지급 내역</div>
              {goodsLogList &&
                goodsLogList.map((goodsLog) => {
                  return (
                    <div className="s-p-item f-col f-spb log-row">
                      <div className="s-p-name">
                        {goodsLog.name} {goodsLog.phoneNumber.slice(-4)} / {goodsLog.group}
                      </div>
                      <div className="s-p-date">증정: {goodsLog.receivedAt}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </Modal>
      )}

      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper>
        <img id="zg-bg" src={ZGBackground} />

        <div id="s-name">{staffName} 스탭님 환영합니다!</div>

        {/* 부스 내 대기자 리스트 */}
        <div id="s-people">
          <div id="s-p-header" className="f-row f-spb v-center">
            <div id="s-p-title">스탭 대상 추천인 이벤트</div>
            <div id="s-p-log-btn" onClick={() => handleViewGoodsLogModal()}>
              지급 내역
            </div>
          </div>

          <div id="search-row">
            <div className="s-row f-row">
              <input
                type="text"
                placeholder="이름 검색"
                value={searchStaffName}
                onChange={(e) => handleSearchStaffName(e.target.value)}
              ></input>
              <div className="s-btn v-center h-center" onClick={() => handleStaffSearch()}>
                <img src={SearchIcon} />
              </div>
            </div>
          </div>

          <div id="s-p-list">
            {searchStaffList.map((staff: StaffEvent) => {
              return (
                <div
                  className={`s-p-item f-row f-spb v-center ${staff.goodsReceived && "received"}`}
                >
                  <div className="s-p-name">
                    {staff.name} {staff.phoneNumber.slice(-4)} / {staff.group}
                  </div>
                  <div className="f-row v-center">
                    {!staff.goodsReceived && (
                      <div className="s-p-point-btn" onClick={() => handleGiveGoodsToStaff(staff)}>
                        지급
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="btn-row" className="f-row f-spb">
          <div id="guide-btn" className="v-center h-center" onClick={() => handleRanking()}>
            <img src={RankingIcon} />
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

export default StaffEventPage;
