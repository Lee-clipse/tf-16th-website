import HeaderMenu from "../../components/HeaderMenu";
import { Wrapper } from "./style";
import History1 from "../../assets/images/history_01.webp";
import History2 from "../../assets/images/history_02.webp";
import History3 from "../../assets/images/history_03.webp";
import History4 from "../../assets/images/history_04.webp";
import History5 from "../../assets/images/history_05.webp";
import History6 from "../../assets/images/history_06.webp";
import History7 from "../../assets/images/history_07.webp";
import History8 from "../../assets/images/history_08.webp";
import VisibilitySensor from "react-visibility-sensor";
import FloatBottomButton from "../../components/FloatBottomButton";
import Banner from "../../components/Banner";

const HistoryPage = () => {
  const comments = [
    {
      name: "한**",
      date: "5회 TF",
      text: "여기서 끝나는 것이 아니라 6회 7회....  TF가 기대가 됩니다.",
    },
    { name: "김**", date: "6회 TF", text: "TF는 감동입니다." },
    { name: "정**", date: "7회 TF", text: "TF는 나의 한계를 볼 수 있는 기회이며 도전입니다." },
    {
      name: "황**",
      date: "10회 TF",
      text: "한 번 더 해보고 싶습니다. 다음엔 좀 더 잘! 불가능으로 보인 TF의 꿈을 이루는 도구가 우리라는 사실이 참 기쁩니다.",
    },
    {
      name: "이**",
      date: "15회 TF",
      text: "TF를 통해서 내 삶의 과정에 무엇 하나 무의미한 일이 없음을 느꼈습니다.",
    },
    {
      name: "김**",
      date: "15회 TF",
      text: "TF 끝에 발견했던 것은 공동체가 없었다면 결코 할 수 없었던, 나와 함께 해 준 공동체에 대한 감사함이었습니다.",
    },
  ];

  return (
    <>
      {/* 헤더 메뉴 */}
      <HeaderMenu />

      <Wrapper>
        <div id="photo-section">
          <div className="title">TF, 16년간의 여정</div>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`fade-box ${isVisible ? "visible" : ""}`}>
                {/* 09년도 */}
                <div className="box left-box">
                  <div className="name">1회 2009 9.19</div>
                  <div className="comment">Together Festival 금정문화회관</div>
                  <img src={History1} />
                </div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`fade-box ${isVisible ? "visible" : ""}`}>
                {/* 11년도 */}
                <div className="box right-box">
                  <div className="name">3회 2011 9.24</div>
                  <div className="comment">On 나 벡스코</div>
                  <img src={History2} />
                </div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`fade-box ${isVisible ? "visible" : ""}`}>
                {/* 15년도 */}
                <div className="box left-box">
                  <div className="name">7회 2015 9.12</div>
                  <div className="comment">회복 KBS홀</div>
                  <img src={History3} />
                </div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`fade-box ${isVisible ? "visible" : ""}`}>
                {/* 19년도 */}
                <div className="box right-box">
                  <div className="name">11회 2019 9.7</div>
                  <div className="comment">광야제 십대의벗 수련관</div>
                  <img src={History4} />
                </div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`fade-box ${isVisible ? "visible" : ""}`}>
                {/* 20년도 */}
                <div className="box left-box">
                  <div className="name">12회 2020 7~9월</div>
                  <div className="comment">사하구 낙후지역 벽화작업</div>
                  <img src={History5} />
                </div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`fade-box ${isVisible ? "visible" : ""}`}>
                {/* 21년도 */}
                <div className="box right-box">
                  <div className="name">13회 2021 7~9월</div>
                  <div className="comment">금정구 낙후지역 벽화작업 </div>
                  <img src={History6} />
                </div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`fade-box ${isVisible ? "visible" : ""}`}>
                {/* 23년도 */}
                <div className="box left-box">
                  <div className="name">15회 2023 9.23</div>
                  <div className="comment">청건부산 송상현 선큰광장 </div>
                  <img src={History7} />
                </div>
              </div>
            )}
          </VisibilitySensor>

          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`fade-box ${isVisible ? "visible" : ""}`}>
                {/* 24년도 */}
                <div className="box center-box">
                  <div className="name">16회 2024 9.7</div>
                  <div className="comment">청건부산 Coming Soon </div>
                  <img src={History8} />
                </div>
              </div>
            )}
          </VisibilitySensor>
        </div>

        <div id="comment-section" className="f-col v-center">
          <div className="title">TF, 청년들의 한 마디</div>
          {comments.map((comment) => (
            <div className="c-box">
              <div className="c-header f-row">
                <div className="c-name">{comment.name}</div>
                <div className="c-date">{comment.date}</div>
              </div>
              <div className="c-text">{comment.text} </div>
            </div>
          ))}
        </div>

        <Banner />

        {/* 최상단 이동 버튼 */}
        <FloatBottomButton />
      </Wrapper>
    </>
  );
};

export default HistoryPage;
