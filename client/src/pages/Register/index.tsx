/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import HeaderMenu from "../../components/HeaderMenu";
import { Input, Radio, Select } from "../../components/Input";
import Button from "../../components/Button";
import theme from "../../styles/theme";
import { AGREE, API_CODE, ROUTE_PATH, SEX } from "../../common/const";
import { useNavigate } from "react-router-dom";
import { InputSection } from "./style";
import { UserRegisterInfo } from "../../type/type";
import { reqUserRegister } from "../../api/user";
import { Alert } from "../../common/common";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserRegisterInfo>({
    name: "",
    sex: SEX.MALE,
    age: 0,
    phoneNumber: "",
    location: "",
    agree: AGREE.NOT_SELECTED,
    recommandPerson: "",
  });

  const handleUserInfo = (key: string, value: string | number | boolean) => {
    if (!validateInput(key, value as string)) return;
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  // 정규식으로 입력 검증
  const validateInput = (key: string, value: string) => {
    switch (key) {
      case "name":
        if (/^[^\d!@#\$%\^\&*\)\(+=._-]{0,32}$/.test(value)) return true;
        break;
      case "recommandPerson":
        if (/^[^!@#\$%\^\&*\)\(+=._-]{0,32}$/.test(value)) return true;
        break;
      case "age":
        if (/^\d{0,3}$/.test(value)) return true;
        break;
      case "phoneNumber":
        if (/^\d{0,11}$/.test(value)) return true;
        break;
      default:
        return true;
    }
    return false;
  };

  // 등록 전 값 유무 검증
  const validateRegisterInput = () => {
    if (
      userInfo.name.trim() === "" ||
      userInfo.age === 0 ||
      userInfo.phoneNumber === "" ||
      userInfo.agree === AGREE.NOT_SELECTED
    ) {
      Alert("모든 항목을 입력해주세요.", "warning");
      return false;
    }
    return true;
  };

  const doRegister = async () => {
    if (validateRegisterInput()) {
      const res = await reqUserRegister(userInfo);
      const isRegisterSuccess = Number(res.data.code) === API_CODE.SUCCESS;
      if (isRegisterSuccess) {
        Alert("가입에 성공했습니다!", "success");
        navigate(ROUTE_PATH.MAIN);
      } else {
        Alert("이미 가입된 회원입니다.", "warning");
      }
    }
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
          <div className="label">성별</div>
          <Select
            value={userInfo.sex}
            onChange={(e) => handleUserInfo("sex", parseInt(e.target.value))}
          >
            <option value={SEX.MALE}>남자</option>
            <option value={SEX.FEMALE}>여자</option>
          </Select>
        </div>

        <div className="box">
          <div className="label">나이</div>
          <Input
            placeholder="나이"
            value={userInfo.age === 0 ? "" : userInfo.age}
            onChange={(e) => handleUserInfo("age", e.target.value)}
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
          <div className="label">거주 지역</div>
          <Select
            value={userInfo.location}
            onChange={(e) => handleUserInfo("location", e.target.value)}
          >
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="부산">부산</option>
          </Select>
        </div>

        <div className="box">
          <div className="label">개인정보 수집 동의</div>
          <Radio>
            <input
              type="radio"
              id="agreeYes"
              name="agree"
              onChange={(e) => handleUserInfo("agree", AGREE.AGREE)}
            />
            <label htmlFor="agreeYes">동의</label>
            <input
              type="radio"
              id="agreeNo"
              name="agree"
              onChange={(e) => handleUserInfo("agree", AGREE.NOT_AGREE)}
            />
            <label htmlFor="agreeNo">비동의</label>
          </Radio>
        </div>

        <div className="box">
          <div className="label">추천인</div>
          <Input
            placeholder="추천인"
            value={userInfo.recommandPerson}
            onChange={(e) => handleUserInfo("recommandPerson", e.target.value)}
          />
        </div>

        <div className="box">
          <div onClick={() => doRegister()}>
            <Button
              text="등록하기"
              backgroundColor={theme.color.PURPLE}
              textColor={theme.color.TEXT_WHITE}
            />
          </div>
        </div>
      </InputSection>
    </>
  );
};

export default RegisterPage;
