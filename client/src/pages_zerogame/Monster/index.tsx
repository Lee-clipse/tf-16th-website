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
  const [isClicked, setIsClicked] = useState<boolean>(false);
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
      setMonsterHp(Math.max(Number(hp), 0));
    }
  };

  const handleAttackButton = async () => {
    if (isClicked) return; // 중복 클릭 방지

    if (userData.point <= 0) {
      alert("부스를 체험하고 포인트를 더 모을 수 있습니다.", "error");
      return;
    }

    setIsClicked(true);
    setIsHitVisible(true);
    setTimeout(() => {
      setIsHitVisible(false);
      attackApi();
      setIsClicked(false);
    }, 600);
  };

  const calcMonsterHpRatio = () => {
    return Math.max((monsterHp / MONSTER_FULL_HP) * 100, 1).toFixed(0) + "%";
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
      <Wrapper isHitVisible={isHitVisible}>
        <img id="zg-bg" src={ZGBackground} />

        <div id="monster">
          <div id="hit">
            <div id="damage-num">-{userData.point}</div>
            <img src={HitIcon} />
          </div>

          <div id="m-hp-bar" className="f-row">
            <div id="m-hp" style={{ width: calcMonsterHpRatio() }}></div>
          </div>
          <div id="m-hp-num">체력: {monsterHp.toLocaleString("ko-KR")}</div>
          <img src={Monster} />
        </div>

        <div id="a-box" className="f-col v-center" style={{ gap: "1.6rem" }}>
          {monsterHp <= 0 ? (
            <div id="clear-msg">
              기후 괴물을 물리쳤다! <br />
              시민공원에 평화가 찾아왔어요!
            </div>
          ) : (
            <div id="msg">
              18:30까지 모두 힘을 모아 <br />
              기후 괴물을 물리치자!
            </div>
          )}
          <div id="damage">포인트: {userData.point.toLocaleString("ko-KR")}</div>
          <div id="a-btn" onClick={handleAttackButton}>
            공격하기
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ZGMonsterPage;
