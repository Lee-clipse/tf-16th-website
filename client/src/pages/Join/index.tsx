import React, { useState } from "react";
import HeaderMenu from "../../components/HeaderMenu";
import { InputSection } from "./style";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import theme from "../../styles/theme";
import { ROUTE_PATH } from "../../common/const";
import { useNavigate } from "react-router-dom";
import { ReqUserLogin } from "../../api/user";

const JoinPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleName = (value: string) => {
    setName(value);
  };

  const handlePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  const doLogin = async () => {
    const res = await ReqUserLogin(name, phoneNumber);
    console.log(res.data);
  };

  return (
    <>
      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <InputSection>
        <div className="box">
          <div className="label">이름</div>
          <Input placeholder="이름" onChange={(e) => handleName(e.target.value)} />
        </div>

        <div className="box">
          <div className="label">전화번호</div>
          <Input placeholder="전화번호" onChange={(e) => handlePhoneNumber(e.target.value)} />
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
