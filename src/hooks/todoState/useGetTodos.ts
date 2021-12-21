import { useRecoilValue } from "recoil";

import { todosSelector } from "../../store/todoState/selector";

export const useGetTodos = () => {
  const todos = useRecoilValue(todosSelector);
  return { todos };
};
