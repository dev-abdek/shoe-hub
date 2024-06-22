import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectListById } from "./newListSlice";

const SinglePost = () => {
  const { listId } = useParams();

  const lists = useSelector((state) => selectListById(state, listId));

  if (!lists) {
    return (
      <section>
        <h2>Page not found</h2>
      </section>
    );
  }

  return (
    <section>
      <p>{lists.content}</p>
      <Link to={`/lists/editList/${lists.id}`} className="addContent-btn">
        Edit List
      </Link>
      <br />
    </section>
  );
};

export default SinglePost;
