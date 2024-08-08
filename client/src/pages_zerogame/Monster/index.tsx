import { useEffect, useState } from "react";
import { Modal, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { API_CODE, BOOTH_LIST, ROUTE_PATH } from "../../common/const";
import { getUserIdByToken } from "../../common/common";
import CloseIcon from "../../assets/icons/close.png";
import { reqMonsterHp, reqSelectBooth, reqUserGameFetch } from "../../api/zerogame";
import Monster from "../../assets/images/monster.png";
import { ZGUser } from "../../type/type";

const ZGMonsterPage = () => {
  const navigate = useNavigate();
  const [monsterHp, setMonsterHp] = useState<number>(0);
  const [userData, setUserData] = useState<ZGUser>({
    userId: 1,
    point: 0,
    boothLog: "0000",
    waitingBoothId: 101,
    goodsReceived: false,
  });

  useEffect(() => {
    fetchUserData();
    fetchMonsterHp();
  }, []);

  const fetchUserData = async () => {
    const userId = getUserIdByToken().toString();
    const res = await reqUserGameFetch(userId);
    const resUserData = res.data.user;
    if (resUserData) {
      setUserData(res.data.user);
    }
  };

  const fetchMonsterHp = async () => {
    const res = await reqMonsterHp();
    const hp = res.data.hp;
    setMonsterHp(Number(hp));
  };

  const handleAttackButton = async () => {
    console.log(userData.point);
  };

  return (
    <>
      <Wrapper>
        <div id="monster">
          <div id="m-hp">HP: {monsterHp}</div>
          <img src={Monster} />
        </div>

        <div id="attack-btn" onClick={() => handleAttackButton()}>
          공격하기
        </div>
      </Wrapper>
    </>
  );
};

export default ZGMonsterPage;
