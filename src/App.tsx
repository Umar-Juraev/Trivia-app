import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "components";

const SettingPage = lazy(() => import("./pages/SettingScreen"));
const QuizPage = lazy(() => import("./pages/QuizScreen"));
const FinalPage = lazy(() => import("./pages/FinalScreen"));
const NotFoundPage = lazy(() => import("./pages/NotFoundScreen"));

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/quizes" element={<QuizPage />} />
          <Route path="/end" element={<FinalPage />} />
          <Route path="/" element={<Navigate to="settings" replace />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
