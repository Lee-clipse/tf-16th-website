import { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { alert, getUserIdByToken } from "../../common/common";
import {
  reqAttackMonster,
  reqFullfillGoods,
  reqMonsterHp,
  reqUserGameFetch,
} from "../../api/zerogame";
import Monster from "../../assets/images/zg_monster.webp";
import { ZGUser } from "../../type/type";
import { API_CODE, MONSTER_FULL_HP, ROUTE_PATH } from "../../common/const";
import { useNavigate } from "react-router-dom";
import ZGBackground from "../../assets/images/zg_bg.webp";

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
    const userId = userData.userId.toString();

    const res = await reqAttackMonster({
      userId,
      point: userData.point.toString(),
    });
    const ok = Number(res.data.code) === API_CODE.SUCCESS;
    if (ok) {
      alert("몬스터 공격!", "success");
      navigate(ROUTE_PATH.ZG_GOODS);
      await reqFullfillGoods({ userId });
    }
  };

  const calcMonsterHpRatio = () => {
    return Math.max((monsterHp / MONSTER_FULL_HP) * 100, 1).toFixed(0) + "%";
  };

  return (
    <>
      <Wrapper>
        <img id="zg-bg" src={ZGBackground} />

        <div id="monster">
          <div id="m-hp-bar" className="f-row">
            <div id="m-hp" style={{ width: calcMonsterHpRatio() }}></div>
          </div>
          <div id="m-hp-num">
            HP: {monsterHp.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </div>
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
