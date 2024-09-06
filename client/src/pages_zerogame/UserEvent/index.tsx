import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import { User } from "../../type/type";
import { alert, getUserIdByToken } from "../../common/common";
import { useNavigate } from "react-router-dom";
import { reqGetLotteryFlag, reqJoinEvent, reqUserData } from "../../api/user";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import HeaderMenu from "../../components/HeaderMenu";
import Loading from "../../components/Loading";

const UserEventPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User>();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserData();
    fetchFlag();
  }, []);

  const fetchUserData = async () => {
    const userId = getUserIdByToken().toString();
    if (Number(userId) === 0) {
      alert("로그인 후 이용 가능합니다!", "info");
      navigate(ROUTE_PATH.JOIN);
      return;
    }
    const res = await reqUserData(userId);
    setUserData(res.data.user);
  };

  const fetchFlag = async () => {
    const res = await reqGetLotteryFlag();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      const flag = res.data.flag;
      if (!flag) {
        navigate(ROUTE_PATH.MAIN);
        return;
      }
    }
  };

  const handleButtonClick = async () => {
    if (isClicked) {
      alert("이미 응모하셨습니다!", "info");
      return;
    }
    setIsLoading(true);
    const userId = getUserIdByToken().toString();
    const res = await reqJoinEvent(userId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      alert("응모에 성공했습니다!", "success");
      setIsLoading(false);
      setIsClicked(true);
    }
  };

  return (
    <>
      {isLoading && <Loading />}

      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper className="f-col h-center">
        <div id="w-title">
          {userData?.name}님은 <span className="h">{userData?.id}</span>번입니다!
        </div>
        <div id="t">응모는 1회만 가능합니다.</div>
        <div id="l-btn" className="btn" onClick={() => handleButtonClick()}>
          응모하기
        </div>
        <div id="r-btn" className="btn" onClick={() => navigate(ROUTE_PATH.LOTTERY)}>
          추첨 결과 보기
        </div>
      </Wrapper>
    </>
  );
};

export default UserEventPage;
