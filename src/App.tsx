import { FC, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Spinner } from "components";
import { useAppSelector } from "store/hooks";

const SettingPage = lazy(() => import("./pages/SettingScreen"));
const QuizPage = lazy(() => import("./pages/QuizScreen"));
const FinalPage = lazy(() => import("./pages/FinalScreen"));
const NotFoundPage = lazy(() => import("./pages/NotFoundScreen"));

type ComponentsType = {
  [key: string]: React.ReactNode;
};

const App: FC = () => {
  const { path } = useAppSelector((state) => state.changeRoute);

  const Components: ComponentsType = {
    settings: <SettingPage />,
    quizes: <QuizPage />,
    end: <FinalPage />,
  };


  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={`${path}`} element={Components[path.slice(1)]} />
          <Route path="/" element={<Navigate to={`${path}`} replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
