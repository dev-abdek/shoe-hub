import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectNewNotesById, updateNewNotes } from "./notesSlice";

const EditNewNotes = () => {
  const { noteId } = useParams();
  const newNote = useSelector((state) => selectNewNotesById(state, noteId));
  const [persons, setPersons] = useState(newNote.persons);
  const [gender, setGender] = useState(newNote.gender);
  const [addRequest, setAddRequest] = useState("idle");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const canSave = [persons, gender].every(Boolean) && addRequest === "idle";

  if (!newNote) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  const handleClick = async () => {
    if (canSave) {
      try {
        setAddRequest("pending");
        await dispatch(
          updateNewNotes({
            id: newNote.id,
            persons,
            gender,
          })
        ).unwrap();
        navigate(`/notes`);

        setPersons("");
        setGender("");
      } catch (error) {
        console.error("Failed to save the note", error);
      } finally {
        setAddRequest("idle");
      }
    }
  };

  return (
    <section>
      <Link to={"/"} className="sub-nav">
        Home
      </Link>
      <form>
        <label htmlFor="persons">Names:</label>{" "}
        <input
          type="text"
          value={persons}
          id="persons"
          name="persons"
          onChange={(e) => setPersons(e.target.value)}
          className="border-2 px-1 rounded border-slate-500  outline-indigo-500/50"
        />
        <br />
        <label htmlFor="gender">Gender:</label>{" "}
        <input
          type="text"
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border-2 px-1 rounded border-slate-500  outline-indigo-500/50"
        />{" "}
        <br />
        <button type="button" onClick={handleClick} className="addContent-btn">
          Add Note
        </button>{" "}
      </form>
    </section>
  );
};

export default EditNewNotes;
