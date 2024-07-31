/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import HeaderMenu from "../../components/HeaderMenu";
import { InputSection } from "./style";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import theme from "../../styles/theme";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import { useNavigate } from "react-router-dom";
import { ReqUserLogin } from "../../api/user";
import { UserLoginInfo } from "../../type/type";
import { Alert, setToken } from "../../common/common";

const JoinPage = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserLoginInfo>({ name: "", phoneNumber: "" });

  const handleUserInfo = (key: string, value: string) => {
    if (!validateInput(key, value as string)) return;
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const doLogin = async () => {
    const res = await ReqUserLogin(userInfo.name, userInfo.phoneNumber);
    const isLoginSuccess = Number(res.data.code) === API_CODE.SUCCESS;
    if (isLoginSuccess) {
      setToken(res.data.token);
      navigate(ROUTE_PATH.MAIN);
    } else {
      Alert("다시 확인해주세요.", "warning");
    }
  };

  // 정규식으로 입력 검증
  const validateInput = (key: string, value: string) => {
    switch (key) {
      case "name":
        if (/^[^\d!@#\$%\^\&*\)\(+=._-]{0,32}$/.test(value)) return true;
        break;
      case "phoneNumber":
        if (/^\d{0,11}$/.test(value)) return true;
        break;
      default:
        return true;
    }
    return false;
  };

  return (
    <>
      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <InputSection>
        <div className="box">
          <div className="label">이름</div>
          <Input
            placeholder="이름"
            value={userInfo.name}
            onChange={(e) => handleUserInfo("name", e.target.value)}
          />
        </div>

        <div className="box">
          <div className="label">전화번호</div>
          <Input
            placeholder="전화번호"
            value={userInfo.phoneNumber}
            onChange={(e) => handleUserInfo("phoneNumber", e.target.value)}
          />
        </div>

        <div className="box">
          <div onClick={() => doLogin()}>
            <Button
              text="로그인"
              backgroundColor={theme.color.MAIN_BLUE}
              textColor={theme.color.TEXT_WHITE}
            />
          </div>
          <div className="br"></div>
          <div
            onClick={() => {
              navigate(ROUTE_PATH.REGISTER);
            }}
          >
            <Button
              text="등록하러 가기"
              backgroundColor={theme.color.PURPLE}
              textColor={theme.color.TEXT_WHITE}
            />
          </div>
        </div>
      </InputSection>
    </>
  );
};

export default JoinPage;
