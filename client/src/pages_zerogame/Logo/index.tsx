/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Wrapper } from "./style";
import ZGBackground from "../../assets/images/zg_bg.png";
import CloseIcon from "../../assets/icons/close.png";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../common/const";
import { useEffect, useState } from "react";
import { reqUserGameFetch } from "../../api/zerogame";
import { getUserIdByToken } from "../../common/common";
import { Radio } from "../../components/Input";

const ZGLogoPage = () => {
  const navigate = useNavigate();
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [viewAgreeModal, setViewAgreeModal] = useState<boolean>(false);
  const [agreeSign, setAgreeSign] = useState<boolean>(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (agreeSign) {
      setViewAgreeModal(false);
    }
  }, [agreeSign]);

  const fetchUserData = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqUserGameFetch(userId);
    const isAlreadyEntered = res.data.user;
    // 이미 제로게임에 입장했던 유저라면 패스
    if (isAlreadyEntered !== undefined) {
      setIsEntered(true);
    }
  };

  return (
    <>
      {viewAgreeModal && (
        <Modal>
          <div id="back-drop"></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewAgreeModal(false)} />
            </div>
            <div id="m-body">
              <div>약관 동의서</div>
              <div>
                <Radio id="radio-row" className="f-row h-center" style={{ gap: "0.4rem" }}>
                  <input
                    type="radio"
                    id="agreeYes"
                    name="agree"
                    onChange={() => setAgreeSign(true)}
                  />
                  <label htmlFor="agreeYes">동의</label>
                  <input
                    type="radio"
                    id="agreeNo"
                    name="agree"
                    onChange={() => setAgreeSign(false)}
                  />
                  <label htmlFor="agreeNo">비동의</label>
                </Radio>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Wrapper>
        {/* 배경 */}
        <img id="bg" src={ZGBackground} />

        {/* 로고 텍스트 */}
        <div id="zg-logo">제로게임</div>

        {/* 버튼 */}
        <div
          id="start-btn"
          onClick={() => {
            if (isEntered) {
              navigate(ROUTE_PATH.ZG_HOME);
            } else {
              if (agreeSign) {
                navigate(ROUTE_PATH.ZG_CARTOON);
              } else {
                setViewAgreeModal(true);
              }
            }
          }}
        >
          시작하기
        </div>
      </Wrapper>
    </>
  );
};

export default ZGLogoPage;
