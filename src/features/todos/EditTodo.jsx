import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateTodoMutation } from "../api/apiSlice";
import { useGetEachTodoQuery } from "../api/apiSlice";

const EditTodo = () => {
  const { todoId } = useParams();
  const { data: todo } = useGetEachTodoQuery(todoId);
  const [updateTodo, isLoading] = useUpdateTodoMutation();

  const [title, setTitle] = useState(todo.title);

  const canSave = title && isLoading;

  const navigate = useNavigate();

  const handleSubmission = async () => {
    if (canSave) {
      try {
        await updateTodo({ id: todoId, title });
        setTitle("");
        navigate(`/todos`);
      } catch (error) {
        console.error("Failed to save todo: ", error);
      }
    }
  };

  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-slate-500 pl-1 rounded focus:outline-indigo-500/50"
        />
        <button
          onClick={handleSubmission}
          className="bg-slate-600 p-1 rounded ml-1 text-white"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default EditTodo;
