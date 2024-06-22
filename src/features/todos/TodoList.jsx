import { useDeleteTodoMutation, useGetTodosQuery } from "../api/apiSlice";
import { Link } from "react-router-dom";

const TodoList = () => {
  const {
    data: todos = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const [deleteTodo] = useDeleteTodoMutation();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = todos.map((todo) => (
      <article key={todo.id}>
        <p>{todo.title}</p>
        <strong>
          <Link to={`/todos/${todo.id}`} className="addContent-btn">
            View Todo
          </Link>
        </strong>
        <button
          className="addContent-btn"
          onClick={() => deleteTodo({ id: todo.id })}
        >
          Delete
        </button>
      </article>
    ));
  } else if (isError) {
    content = <p>{error.toString()}</p>;
  }

  return <section>{content}</section>;
};

export default TodoList;
