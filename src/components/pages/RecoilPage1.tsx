import { useState, VFC } from "react";
import { useAddTodoItem } from "../../hooks/todoState/useAddTodoItem";
import { useGetTodos } from "../../hooks/todoState/useGetTodos";
import { Header } from "../organisms/Header";

export const RecoilPage1: VFC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useAddTodoItem();
  const { todos } = useGetTodos();

  return (
    <>
      <Header />
      <h1>未完了のタスク</h1>
      {todos.map((todo) => {
        return <div>{"id: " + todo.id + "label: " + todo.label}</div>;
      })}
      <div>タスクの追加</div>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTodo(text)}>追加</button>
    </>
  );
};
