import { useState } from "react";
import { useAddTodoMutation } from "../api/apiSlice";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const [addTodo, isLoading] = useAddTodoMutation();

  const canSave = title && isLoading;

  const handleSubmission = async () => {
    if (canSave) {
      try {
        await addTodo({ title });
        setTitle("");
      } catch (error) {
        console.error("Failed to save todo: ", error);
      }
    }
  };

  return (
    <section id="todoForm">
      <h1 className="text-indigo font-bold">Add your todo:</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-slate-500 pl-1 rounded focus:outline-indigo-500/50"
        />{" "}
        <button
          onClick={handleSubmission}
          className="bg-slate-600 p-1 rounded ml-1 text-white"
        >
          Add
        </button>
      </form>
      <TodoList />
    </section>
  );
};

export default TodoForm;
