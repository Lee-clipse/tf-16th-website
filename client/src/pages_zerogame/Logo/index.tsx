/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Wrapper } from "./style";
import ZGLogo from "../../assets/images/zg_logo.webp";
import CloseIcon from "../../assets/icons/close.png";
import { useNavigate } from "react-router-dom";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import { useEffect, useState } from "react";
import { reqUserGameFetch } from "../../api/zerogame";
import { alert, getUserIdByToken } from "../../common/common";
import { Radio } from "../../components/Input";
import { reqJoinZerogame, reqUserData } from "../../api/user";
import { motion, Variants } from "framer-motion";
import Loading from "../../components/Loading";
import Agree from "../../assets/images/agree.png";

const ZGLogoPage = () => {
  const navigate = useNavigate();
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [isCodeValid, setIsCodeValid] = useState<boolean>(false);
  const [viewAgreeModal, setViewAgreeModal] = useState<boolean>(false);
  const [viewCodeModal, setViewCodeModal] = useState<boolean>(false);
  const [agreeSign, setAgreeSign] = useState<boolean>(false);
  const [zeroCode, setZeroCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserData();
    fetchUserGameData();
  }, []);

  useEffect(() => {
    if (agreeSign) {
      setViewAgreeModal(false);
    }
  }, [agreeSign]);

  const fetchUserData = async () => {
    const userId = getUserIdByToken().toString();
    if (Number(userId) === 0) {
      navigate(ROUTE_PATH.MAIN);
    }
    const res = await reqUserData(userId);
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsCodeValid(res.data.user.zgJoin);
    }
  };

  const fetchUserGameData = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqUserGameFetch(userId);
    // 이미 제로게임에 입장했던 유저라면 패스
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      setIsEntered(true);
    }
  };

  const handleZeroCodeInput = (value: string) => {
    setZeroCode(value);
  };

  const handleClickCodeButton = async () => {
    // TODO: 제로게임 접수 부스 입장 코드 (변경 필요)
    if (zeroCode === "3456") {
      setViewCodeModal(false);
      setIsCodeValid(true);
      setViewAgreeModal(true);

      const userId = getUserIdByToken().toString();
      setIsLoading(true);
      await reqJoinZerogame(userId);
      setIsLoading(false);
    } else {
      alert("코드를 다시 확인해주세요.", "info");
    }
  };

  const StartButton = () => {
    return (
      <div
        id="start-btn"
        onClick={() => {
          if (isEntered) {
            navigate(ROUTE_PATH.ZG_HOME);
          } else {
            if (isCodeValid) {
              if (agreeSign) {
                navigate(ROUTE_PATH.ZG_CARTOON);
              } else {
                setViewAgreeModal(true);
              }
            } else {
              setViewCodeModal(true);
            }
          }
        }}
      >
        시작하기
      </div>
    );
  };

  const variants: Variants = {
    hidden: {
      opacity: 0.6,
    },
    visible: () => ({
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <>
      {isLoading && <Loading />}

      {viewAgreeModal && (
        <Modal>
          <div id="back-drop"></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewAgreeModal(false)} />
            </div>
            <div id="m-body">
              <div>개인정보 제공 및 이용 동의서</div>
              <img id="agree" src={Agree} />
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

      {viewCodeModal && (
        <Modal>
          <div id="back-drop"></div>
          <div id="m-wrapper">
            <div id="m-header">
              <img src={CloseIcon} onClick={() => setViewCodeModal(false)} />
            </div>
            <div id="codem-body">
              <div className="m-b-title">제로게임 접수 안내</div>
              <div className="m-b-body f-col" style={{ gap: "1rem" }}>
                <div>
                  <p>👽 제로게임이란?</p>
                  <div>
                    2023년 해치웠던 탄소 괴물이 다시 돌아왔다! 시민공원의 36개{" "}
                    <span className="h">체험 부스</span>에서 각 테마별 부스 총{" "}
                    <span className="h">6개</span>를 체험하여 <span className="h">보석</span>을
                    모으자! 체험 활동으로 얻은 <span className="h">포인트</span>로 우리 함께{" "}
                    <span className="h">탄소괴물을 퇴치</span>하여 ’탄소제로‘ 지구를 만들자!
                  </div>
                </div>
                <div className="bh">
                  입장 코드는 행사 내 모든 부스 스탭을 통해 받을 수 있습니다!
                </div>
                <input
                  type="text"
                  placeholder="코드 입력"
                  value={zeroCode}
                  onChange={(e) => handleZeroCodeInput(e.target.value)}
                ></input>
                <div className="m-b-button" onClick={() => handleClickCodeButton()}>
                  {" "}
                  확인{" "}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Wrapper>
        {/* 배경 */}
        <img id="bg" src={ZGLogo} />

        {/* 버튼 */}

        <motion.li key={"start-btn"} initial="hidden" animate="visible" variants={variants}>
          <StartButton />
        </motion.li>
      </Wrapper>
    </>
  );
};

export default ZGLogoPage;
