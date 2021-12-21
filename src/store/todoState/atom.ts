import { atom } from "recoil";

import { recoilAtomKeys } from "../../assets/data/recoilKeys";
import { todoStateType } from "../../assets/type/stateType/todoStateType";

export const todoState = atom<todoStateType>({
  key: recoilAtomKeys.TODO_STATE,
  default: {
    todos: [],
  },
});
