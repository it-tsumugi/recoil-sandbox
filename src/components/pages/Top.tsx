import { VFC } from "react";
import { Header } from "../organisms/Header";

export const Top: VFC = () => {
  return (
    <>
      <Header />
      <div>このサイトはRecoilとReact Router v6の実験用サイトです</div>
    </>
  );
};
