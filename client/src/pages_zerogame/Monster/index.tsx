import { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { alert, getUserIdByToken } from "../../common/common";
import { reqAttackMonster, reqMonsterHp, reqUserGameFetch } from "../../api/zerogame";
import Monster from "../../assets/images/monster.png";
import { ZGUser } from "../../type/type";
import { API_CODE, ROUTE_PATH } from "../../common/const";
import { useNavigate } from "react-router-dom";

const ZGMonsterPage = () => {
  const navigate = useNavigate();

  const [monsterHp, setMonsterHp] = useState<number>(0);
  const [userData, setUserData] = useState<ZGUser>({
    userId: 1,
    point: 0,
    boothLog: "0000",
    waitingBoothId: 101,
    goodsReceived: false,
    isAttack: false,
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
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      const hp = res.data.hp;
      setMonsterHp(Number(hp));
    }
  };

  const handleAttackButton = async () => {
    const res = await reqAttackMonster({
      userId: userData.userId.toString(),
      point: userData.point.toString(),
    });
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      alert("몬스터 공격!", "success");
      navigate(ROUTE_PATH.ZG_GOODS);
    }
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
