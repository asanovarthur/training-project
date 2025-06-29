import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
  const routes = routeConfig.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};
