import { useRecoilValue } from "recoil";

import { todoItemSelector } from "../../store/todoState/selector";

export const useGetTodoItem = (id: number) => {
  return useRecoilValue(todoItemSelector(id));
};
