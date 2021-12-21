import { selector, selectorFamily } from "recoil";

import { recoilSelectorKeys } from "../../assets/data/recoilKeys";
import { todoItemType } from "../../assets/type/stateType/todoStateType";
import { todoState } from "./atom";

// すべてのTodoを読み出す
export const todosSelector = selector<todoItemType[]>({
  key: recoilSelectorKeys.TODO_TODOS,
  get: ({ get }) => get(todoState).todos,
});

// IDで指定したTodoを読み出す
export const todoItemSelector = selectorFamily<
  todoItemType | undefined,
  number
>({
  key: recoilSelectorKeys.TODO_TODO_ITEM,
  get:
    (id) =>
    ({ get }) => {
      const todos = get(todoState).todos;
      return todos.find((v) => v.id === id);
    },
});
