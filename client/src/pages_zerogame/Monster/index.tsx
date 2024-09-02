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
import { API_CODE, MONSTER_FULL_HP, ROUTE_PATH, WAIT_BOOTH_ID } from "../../common/const";
import { useNavigate } from "react-router-dom";
import ZGBackground from "../../assets/images/zg_bg.webp";
import AttackIcon from "../../assets/images/attack_icon.webp";
import HitIcon from "../../assets/icons/hit.png";

const ZGMonsterPage = () => {
  const navigate = useNavigate();

  const [monsterHp, setMonsterHp] = useState<number>(0);
  const [userData, setUserData] = useState<ZGUser>({
    userId: 1,
    point: 0,
    boothLog: "0-0-0-0",
    waitingBoothId: WAIT_BOOTH_ID,
    goodsReceived: false,
    isAttack: false,
  });
  const [isHitVisible, setIsHitVisible] = useState<boolean>(false);

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
    attackMonster();
  };

  const calcMonsterHpRatio = () => {
    return Math.max((monsterHp / MONSTER_FULL_HP) * 100, 1).toFixed(0) + "%";
  };

  const attackMonster = () => {
    setIsHitVisible(true);
    setTimeout(() => {
      setIsHitVisible(false);
      attackApi();
    }, 600);
  };

  const attackApi = async () => {
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

  return (
    <>
      <div>boothLog: {userData.boothLog}</div>
      <div>goodsReceived: {userData.goodsReceived}</div>
      <div>isAttack: {userData.isAttack}</div>
      <div>point: {userData.point}</div>
      <div>userId: {userData.userId}</div>
      <div>waitingBoothId: {userData.waitingBoothId}</div>

      <div>monsterHp: {monsterHp}</div>

      {/* <Wrapper isHitVisible={isHitVisible}>
        <img id="zg-bg" src={ZGBackground} />

        <div id="monster">
          <div id="hit">
            <div id="damage-num">-{userData.point}</div>
            <img src={HitIcon} />
          </div>

          <div id="m-hp-bar" className="f-row">
            <div id="m-hp" style={{ width: calcMonsterHpRatio() }}></div>
          </div>
          <div id="m-hp-num">HP: {monsterHp.toLocaleString("ko-KR")}</div>
          <img src={Monster} />
        </div>

        <div id="a-box" className="f-col" style={{ gap: "1.6rem" }}>
          <div id="a-img-box" className="h-center v-center">
            <div id="img-line">
              <img src={AttackIcon} />
            </div>
          </div>
          <div id="damage">포인트: {userData.point}</div>
          <div id="a-btn" onClick={() => handleAttackButton()}>
            공격하기
          </div>
        </div>
      </Wrapper> */}
    </>
  );
};

export default ZGMonsterPage;
