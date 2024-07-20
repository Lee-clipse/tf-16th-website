import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./common/const";
import JoinPage from "./pages/Join";
import ActivityPage from "./pages/MainActivity";
import EventPage from "./pages/MainEvent";
import ZerogamePage from "./pages/MainZerogame";

const MainPage = lazy(() => import("./pages/Main/index"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path={ROUTE_PATH.MAIN} element={<MainPage />}></Route>
          <Route path={ROUTE_PATH.JOIN} element={<JoinPage />}></Route>
          <Route path={ROUTE_PATH.MAIN_ACTIVITY} element={<ActivityPage />}></Route>
          <Route path={ROUTE_PATH.MAIN_EVENT} element={<EventPage />}></Route>
          <Route path={ROUTE_PATH.MAIN_ZEROGAME} element={<ZerogamePage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
