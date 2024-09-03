import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import { useNavigate } from "react-router-dom";
import { req1stLottery, reqEventCount, reqLottery } from "../../api/user";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import HeaderMenu from "../../components/HeaderMenu";
import Loading from "../../components/Loading";

const UserEventManagePage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchEventCount();
  }, []);

  const fetchEventCount = async () => {
    const res = await reqEventCount();
    setCount(res.data.count);
  };

  const handleLottery = async () => {
    setIsLoading(true);
    const res = await reqLottery();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      navigate(ROUTE_PATH.LOTTERY);
    }
  };

  const handle1stLottery = async () => {
    setIsLoading(true);
    const res = await req1stLottery();
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsLoading(false);
      navigate(ROUTE_PATH.LOTTERY);
    }
  };

  return (
    <>
      {isLoading && <Loading />}

      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper className="f-col h-center">
        <div>
          참여 인원 수: <span className="h">{count}</span>명
        </div>
        <div id="l-btn" className="btn" onClick={() => handleLottery()}>
          🎲 추첨하기
        </div>
        <div id="r-btn" className="btn" onClick={() => handle1stLottery()}>
          🥇 1등 추첨하기
        </div>
      </Wrapper>
    </>
  );
};

export default UserEventManagePage;
