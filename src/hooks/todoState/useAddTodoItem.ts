import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { todoItemType } from "../../assets/type/stateType/todoStateType";
import { todoState } from "../../store/todoState/atom";

const createNewId = () => {
  return 1;
};

export const useAddTodoItem = () => {
  const setState = useSetRecoilState(todoState);
  const addTodo = (label: string) =>
    setState((prev) => {
      const newItem: todoItemType = {
        id: createNewId(),
        label,
      };
      return {
        ...prev,
        todos: [...prev.todos, newItem],
      };
    });
  return { addTodo: useCallback(addTodo, [createNewId]) };
};
