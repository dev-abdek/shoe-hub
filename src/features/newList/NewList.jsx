import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList, selectAllNewList } from "./newListSlice";
import { Link } from "react-router-dom";

const NewList = () => {
  const [content, setContent] = useState("");

  const renderedLists = useSelector(selectAllNewList);

  const individualList = renderedLists.map((list) => (
    <article key={list.id}>
      <p>{list.content}</p>
      <Link to={`/lists/${list.id}`} className="addContent-btn">
        View List
      </Link>
    </article>
  ));

  const dispatch = useDispatch();

  const handleNewListChange = (e) => {
    setContent(e.target.value);
  };

  const handleNewListSubmission = (e) => {
    e.preventDefault();
    if (content) {
      dispatch(createList(content));
      setContent("");
    }
    localStorage.setItem("newList", JSON.stringify(renderedLists));
  };

  return (
    <section className="mt-5 mb-7">
      <form onSubmit={handleNewListSubmission}>
        <label
          htmlFor="newList"
          className=" text-indigo font-mono font-bold"
          style={{
            fontSize: "1.5rem",
            textTransform: "uppercase",
            color: "rgb(71 85 105)",
          }}
        >
          New Content:
        </label>{" "}
        <br />
        <input
          type="text"
          name="newList"
          value={content}
          onChange={handleNewListChange}
          className="border-2 px-1 rounded border-slate-500  outline-indigo-500/50"
        />{" "}
        <button type="submit" className="addContent-btn">
          Add Content
        </button>
      </form>
      {individualList}
    </section>
  );
};

export default NewList;
