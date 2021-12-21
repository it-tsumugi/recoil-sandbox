import { VFC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { RecoilPage1 } from "../components/pages/RecoilPage1";
import { RecoilPage2 } from "../components/pages/RecoilPage2";

import { pathData } from "../assets/data/pathData";

export const ComponentRouter: VFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={pathData.top} element={<Top />} />
        <Route path={pathData.recoilPage1} element={<RecoilPage1 />} />
        <Route path={pathData.recoilPage2} element={<RecoilPage2 />} />
      </Routes>
    </BrowserRouter>
  );
};
