/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { deleteNewNotes, selectNewNotesById } from "./notesSlice";
import { useDispatch, useSelector } from "react-redux";

const NoteExcerpt = ({ noteId }) => {
  const newNote = useSelector((state) => selectNewNotesById(state, noteId));
  const dispatch = useDispatch();

  return (
    <article className="my-2">
      <p>
        {newNote.persons} is identified as a {newNote.gender}
      </p>
      <Link to={`/notes/${newNote.id}`} className="addContent-btn">
        View List
      </Link>
      <button
        onClick={() => dispatch(deleteNewNotes({ id: newNote.id }))}
        className="addContent-btn"
      >
        Delete
      </button>
    </article>
  );
};

export default NoteExcerpt;
