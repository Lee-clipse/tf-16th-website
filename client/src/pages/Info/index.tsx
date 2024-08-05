import Banner from "../../components/Banner";
import FloatBottomButton from "../../components/FloatBottomButton";
import HeaderMenu from "../../components/HeaderMenu";
import { Section1, Section2, Section3, Wrapper } from "./style";
import InfoBanner from "../../assets/images/info_banner.webp";
import HandShakeIcon from "../../assets/icons/hand-shake.png";
import ForgetIcon from "../../assets/icons/forget.png";
import PeopleIcon from "../../assets/icons/people.png";
import theme from "../../styles/theme";

const InfoPage = () => {
  return (
    <>
      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper>
        {/* 청년이 건강해야 부산이 산다고? */}
        <Section1>
          <div className="title-box h-center">
            <img src={InfoBanner} />
            <div>청년이 건강해야 부산이 산다고?</div>
          </div>
          <div className="content">
            <div className="card" id="card-1">
              <div className="c-title">🧑 청년감소 지역에서 청년으로 산다는 것</div>
              <div className="c-content">
                서울 등 수도권에 일자리와 교육ㆍ문화 혜택이 집중되어 지방 청년들이 고향을 떠나고
                있습니다. 이로 인해 지역경제가 위축되고 일자리 기반이 붕괴됩니다. 또한, 청년들이
                선호하는 문화 인프라가 부족한 실정입니다.
              </div>
            </div>
            <div className="card" id="card-2">
              <div className="c-title">🌊 부산은 노인과 바다?</div>
              <div className="c-content">
                친구들은 부산을 ‘노인과 바다’라 부르며, 시내에는 노인들만 있고 보이는 건 바다
                뿐이라고 합니다. 부산에는 100대 기업이 하나도 없으며 통계에 따르면 부산을 떠난
                청년의 73%가 일자리만 있다면 부산에 살고 싶다고 합니다. 한국일보 오피니언 中
              </div>
            </div>
            <div className="card" id="card-3">
              <div className="c-title">✨ 그래서 우리가 할 수 있는게 뭔데?</div>
              <div className="c-content">
                함께 <p className="highlight">고민</p>하고 <p className="highlight">소통</p>하며{" "}
                <p className="highlight">즐기기</p> 위해 청년들이 모입니다! 다양한 관심사로 모인
                청년 커뮤니티! 부산 시민들에게 메시지를 던지는{" "}
                <p className="highlight">청년 행사</p>를 합니다! 16회 Together Festival 청건부산!
              </div>
            </div>
          </div>
        </Section1>

        {/* 슬로건 */}
        <Section2>
          <div className="title-2">올해의 슬로건</div>
          <div className="content-2">
            <div className="card-2">
              <div className="icon-2 ">
                <img src={ForgetIcon} />
              </div>
              <div className="label-2">잊다</div>
              <div className="text-2">
                사회적 소멸(인구감소)과 물리적 소멸(기후위기)을 잊고 있었습니다.
              </div>
            </div>
            <div className="card-2">
              <div className="icon-2">
                <img src={HandShakeIcon} />
              </div>
              <div className="label-2">잇다</div>
              <div className="text-2">
                다양한 문화(다문화) 사이의 마음을 연결하고, 부산시민에서 세계시민으로서 마음을
                잇겠습니다.
              </div>
            </div>
            <div className="card-2">
              <div className="icon-2 ">
                <img src={PeopleIcon} />
              </div>
              <div className="label-2">있다</div>
              <div className="text-2">청년이 살고싶은 부산을 고민하는 청년들이 여기, 있습니다.</div>
            </div>
          </div>
        </Section2>

        {/* 나, 너, 우리 */}
        <Section3>
          <div className="title-3 f-col">
            <div>Together Festival에서</div>
            <div>청건부산까지</div>
          </div>

          <div className="content-3">
            <div className="card-3">
              <div className="label-3">나</div>
              <div className="badge-3" style={{ backgroundColor: theme.color.TEAL_BLUE }}>
                1 ~ 11회
              </div>
              <div className="text-3">
                N포 세대, 지방 소멸, 청년 유출, 청년 위기 속 아무것도 할 수 없는 상황. 아무것도 하지
                않는 대신 행동하기로 했습니다. 처음이고 비전문가인{" "}
                <p className="highlight">청년들이 직접</p> 기획하고, 홍보하고, 재정을 마련해 공연을
                열었습니다.
              </div>
              <div className="footer-3">'나'의 성장이었습니다.</div>
            </div>
            <div className="card-3">
              <div className="label-3">너</div>
              <div className="badge-3" style={{ backgroundColor: theme.color.SKY_BLUE }}>
                12 ~ 14회
              </div>
              <div className="text-3">
                COVID-19 상황이라는 위기가 있었습니다. 그래도 포기하지 않고 행동하기로 했습니다.
                <p className="highlight">지역사회</p>에 기여하기 위해 희망을 그리고, 지자체에
                기부했습니다.
              </div>
              <div className="footer-3">'너'에게 도움을 주고자 했습니다.</div>
            </div>
            <div className="card-3">
              <div className="label-3">우리</div>
              <div className="badge-3" style={{ backgroundColor: theme.color.DEEP_BLUE }}>
                15 ~ 현재
              </div>
              <div className="text-3">
                이제 '나'의 성장과 '너'를 돕는 것을 넘어, 우리는{" "}
                <p className="highlight">밖으로 나아가</p> 메시지를 전하고자 합니다. 부산을 살리고
                변화시키는 <p className="highlight">출발점</p>이 될 것입니다.
              </div>
              <div className="footer-3">'우리'가 당면한 문제를 해결하려 합니다.</div>
            </div>
          </div>
        </Section3>

        <Banner />

        {/* 최상단 이동 버튼 */}
        <FloatBottomButton />
      </Wrapper>
    </>
  );
};

export default InfoPage;
