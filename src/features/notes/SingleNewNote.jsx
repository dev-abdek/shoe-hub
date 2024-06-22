import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectNewNotesById } from "./notesSlice";

const SingleNewNote = () => {
  const { noteId } = useParams();

  const newNote = useSelector((state) => selectNewNotesById(state, noteId));

  if (!newNote) {
    return (
      <section>
        <h2>Page not found</h2>
      </section>
    );
  }

  return (
    <section>
      <p>
        {newNote.persons} is identified as a {newNote.gender}
      </p>
      <Link to={`/notes/editNewNote/${newNote.id}`} className="addContent-btn">
        Edit List
      </Link>
    </section>
  );
};

export default SingleNewNote;
