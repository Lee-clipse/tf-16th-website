import { useEffect, useState } from "react";
import HeaderMenu from "../../components/HeaderMenu";
import { User } from "../../type/type";
import { deleteToken, getUserPkByToken } from "../../common/common";
import { reqUserData } from "../../api/user";
import { Wrapper } from "./style";
import { ROUTE_PATH, SEX, 스탭_지원_폼_링크 } from "../../common/const";
import theme from "../../styles/theme";
import Button from "../../components/Button";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const userPk = getUserPkByToken().toString();
    if (Number(userPk) === 0) {
      navigate(ROUTE_PATH.MAIN);
    }
    const res = await reqUserData(userPk);
    setUserData(res.data.user);
  };

  return (
    <>
      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper>
        <div id="title-box">
          <div className="f-row">
            환영합니다! <div className="highlight">{userData?.name}</div>님
          </div>
          <div className="f-row mini-title">
            당신은{" "}
            <CountUp
              className="number highlight"
              start={1}
              end={userData?.pk as number}
              duration={3}
            />
            번째 가입자입니다.
          </div>
        </div>

        <div id="content-box">
          <div id="content-title">내 정보</div>
          <div className="box">
            <label>이름: </label>
            <div className="content">{userData?.name}</div>
          </div>
          <div className="box">
            <label>성별: </label>
            <div className="content">{userData?.sex === SEX.MALE ? "남자" : "여자"}</div>
          </div>
          <div className="box">
            <label>나이: </label>
            <div className="content">{userData?.age}</div>
          </div>
          <div className="box">
            <label>거주지: </label>
            <div className="content">{userData?.location}</div>
          </div>
          <div className="box">
            <label>전화번호: </label>
            <div className="content">{userData?.phoneNumber}</div>
          </div>
          <div className="box">
            <label>추천인: </label>
            <div className="content">{userData?.recommandPerson}</div>
          </div>

          <div id="button-box" className="h-center v-center f-col">
            <div onClick={() => window.open(스탭_지원_폼_링크, "_blank", "noopener, noreferrer")}>
              <Button
                text="스탭으로 지원하기 ✨"
                backgroundColor={theme.color.PURPLE}
                textColor={theme.color.WHITE}
              />
            </div>

            <div
              id="logout-button"
              onClick={() => {
                deleteToken();
                navigate(ROUTE_PATH.MAIN);
              }}
            >
              로그아웃
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default MyPage;
