import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./common/const";
import JoinPage from "./pages/Join";
import TestPage from "./pages/Test";
import RegisterPage from "./pages/Register";
import MyPage from "./pages/MyPage";
import InfoPage from "./pages/Info";
import CommunityPage from "./pages/Community";
import HistoryPage from "./pages/History";
import ScrollTop from "./components/ScrollTop";
import ZGLogoPage from "./pages_zerogame/Logo";
import ZGCartoonPage from "./pages_zerogame/Cartoon";
import ZGHomePage from "./pages_zerogame/Home";
import ZGBoothPage from "./pages_zerogame/Booth";
import ZGMonsterPage from "./pages_zerogame/Monster";
import ZGGoodsPage from "./pages_zerogame/Goods";

const MainPage = lazy(() => import("./pages/Main/index"));

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Suspense fallback={<div></div>}>
        <Routes>
          {/* 테스트 페이지 */}
          <Route path={ROUTE_PATH.TEST} element={<TestPage />}></Route>

          <Route path={ROUTE_PATH.MAIN} element={<MainPage />}></Route>
          <Route path={ROUTE_PATH.JOIN} element={<JoinPage />}></Route>
          <Route path={ROUTE_PATH.REGISTER} element={<RegisterPage />}></Route>
          <Route path={ROUTE_PATH.INFO} element={<InfoPage />}></Route>
          <Route path={ROUTE_PATH.COMMUNITY} element={<CommunityPage />}></Route>
          <Route path={ROUTE_PATH.HISTORY} element={<HistoryPage />}></Route>
          <Route path={ROUTE_PATH.MY_PAGE} element={<MyPage />}></Route>

          {/* 제로게임 페이지 */}
          <Route path={ROUTE_PATH.ZG_LOGO} element={<ZGLogoPage />}></Route>
          <Route path={ROUTE_PATH.ZG_CARTOON} element={<ZGCartoonPage />}></Route>
          <Route path={ROUTE_PATH.ZG_HOME} element={<ZGHomePage />}></Route>
          <Route path={ROUTE_PATH.ZG_BOOTH} element={<ZGBoothPage />}></Route>
          <Route path={ROUTE_PATH.ZG_MONSTER} element={<ZGMonsterPage />}></Route>
          <Route path={ROUTE_PATH.ZG_GOODS} element={<ZGGoodsPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
