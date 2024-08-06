/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import HeaderMenu from "../../components/HeaderMenu";
import { Input, Radio, Select } from "../../components/Input";
import Button from "../../components/Button";
import theme from "../../styles/theme";
import { AGREE, API_CODE, LOCATION, ROUTE_PATH, SEX } from "../../common/const";
import { useNavigate } from "react-router-dom";
import { InputSection, TermsButton, TermsDropdown } from "./style";
import { UserRegisterInfo } from "../../type/type";
import { reqUserRegister } from "../../api/user";
import { alert } from "../../common/common";
import Loading from "../../components/Loading";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserRegisterInfo>({
    name: "",
    sex: SEX.MALE,
    age: 0,
    phoneNumber: "",
    location: "",
    agree: AGREE.NOT_SELECTED,
    recommandPerson: "",
  });
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const toggleTermsDropdown = () => {
    setIsTermsOpen(!isTermsOpen);
  };

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
      alert("모든 항목을 입력해주세요.", "warning");
      return false;
    }
    return true;
  };

  const doRegister = async () => {
    if (validateRegisterInput()) {
      setIsLoading(true);
      const res = await reqUserRegister(userInfo);
      setIsLoading(false);
      const isRegisterSuccess = Number(res.data.code) === API_CODE.SUCCESS;
      if (isRegisterSuccess) {
        alert("가입에 성공했습니다!", "success");
        navigate(ROUTE_PATH.JOIN);
      } else {
        alert("이미 가입된 회원입니다.", "warning");
      }
    }
  };

  return (
    <>
      {isLoading && <Loading />}

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
            style={{ backgroundColor: "white" }}
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
            style={{ backgroundColor: "white" }}
          >
            {LOCATION.map((location: string) => {
              return <option value={location}>{location}</option>;
            })}
          </Select>
        </div>

        <div className="box">
          <div className="label">추천인</div>
          <div className="desc">청건부산에 초대한 분의 이름을 적어주세요!</div>
          <Input
            placeholder="추천인"
            value={userInfo.recommandPerson}
            onChange={(e) => handleUserInfo("recommandPerson", e.target.value)}
          />
        </div>

        <div className="box">
          <div className="label">개인정보 수집 동의</div>
          <Radio>
            <input
              type="radio"
              id="agreeYes"
              name="agree"
              onChange={() => handleUserInfo("agree", AGREE.AGREE)}
            />
            <label htmlFor="agreeYes">동의</label>
            <input
              type="radio"
              id="agreeNo"
              name="agree"
              onChange={() => handleUserInfo("agree", AGREE.NOT_AGREE)}
            />
            <label htmlFor="agreeNo">비동의</label>
          </Radio>
          <TermsButton onClick={toggleTermsDropdown}>개인정보 수집 약관 자세히 보기</TermsButton>
          <TermsDropdown isTermsOpen={isTermsOpen}>
            <p>*개인정보 수집 및 활용 동의서</p>
            <p>1. 수정 및 활용 개인정보 항목</p>
            <p>
              : 개인정보보호법 시행령 제15조에 의거 이름, 전화번호 등 [청건부산 스텝모집] 참여
              희망자 정보
            </p>

            <p>2. 개인정보의 수집 및 활용 목적</p>
            <p>: 개인정보의 수집은 [청건부산 스텝모집] 구성원 모집 목적을 위하여 수집됩니다.</p>
            <p>3. 개인정보의 보유 및 활동 기간</p>
            <p>: 개인 정보 보유 및 이용기간 : 1년</p>
            <p>4. 개인정보 수집동의 거부의 권리</p>
            <p>:개인정보 수집 동의를 거부할 수 있으며, 동의 거부 시 참여 대상에서 제외됩니다.</p>
            <p>청건부산 모집 (인원)과 관련하여 개인정보 보호법</p>
            <p>
              제15조 및 22조에 따라 본인의 동의가 필요하므로 본인은 상기 내용을 숙지하였으며,
              청건부산 위원회에서 본인의 개인정보를 수집 및 이용하는 것에 동의합니다.
            </p>
            {/* 약관의 나머지 내용을 여기에 추가하세요 */}
          </TermsDropdown>
        </div>

        <div className="box">
          <div onClick={() => doRegister()}>
            <Button
              text="등록하기"
              backgroundColor={theme.color.SKY_BLUE}
              textColor={theme.color.WHITE}
            />
          </div>
        </div>
      </InputSection>
    </>
  );
};

export default RegisterPage;
