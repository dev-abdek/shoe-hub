import { Link, useParams } from "react-router-dom";
import { useGetEachTodoQuery } from "../api/apiSlice";

const SingleTodo = () => {
  const { todoId } = useParams();

  const { data: todo, isLoading, isSuccess } = useGetEachTodoQuery(todoId);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <article className="todo">
        <p>{todo.title}</p>
        <Link to={`/todos/editTodo/${todo.id}`} className="addContent-btn">
          Edit Todo
        </Link>
      </article>
    );
  }
  return <section>{content}</section>;
};

export default SingleTodo;
