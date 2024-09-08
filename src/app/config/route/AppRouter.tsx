// react
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
// routes
import { getHomeRoute } from "@/shared/libs/constants/routes";
// pages
import { HomePage } from "@/pages/home";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path={getHomeRoute()} element={<HomePage />} />
    </Routes>
  );
};
