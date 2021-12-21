import { atomFamily } from "recoil";

export const booleanState = atomFamily<boolean, string>({
  key: "booleanState",
  default: false,
});
