import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectListById, updateList } from "./newListSlice";

const EditNewList = () => {
  const { listId } = useParams();
  const lists = useSelector((state) => selectListById(state, listId));

  const [content, setContent] = useState(lists.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewListChange = (e) => {
    setContent(e.target.value);
  };

  const handleNewListSubmission = () => {
    if (content) {
      dispatch(
        updateList({
          id: listId,
          content,
        })
      );
      navigate(`/lists`);
    }
  };

  return (
    <section>
      <h2>Edit Posts</h2>
      <form>
        <label htmlFor="newList">New Content:</label>
        <input
          type="text"
          name="newList"
          value={content}
          onChange={handleNewListChange}
          className="border-2 px-1 rounded border-slate-500  outline-indigo-500/50"
        />
        <button
          type="button"
          onClick={handleNewListSubmission}
          className="addContent-btn"
        >
          Save Content
        </button>
      </form>
    </section>
  );
};

export default EditNewList;
