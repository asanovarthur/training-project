import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: RouteProps[] = [
  { path: routePaths[AppRoutes.MAIN], element: <MainPage /> },
  { path: routePaths[AppRoutes.ABOUT], element: <AboutPage /> },
];
