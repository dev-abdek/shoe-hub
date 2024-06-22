import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import noteService from "../services/note";
import FormNotes from "./FormNotes";

const Form = () => {
  const [notes, setNotes] = useState("");
  const [newNotes, setNewNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const onChangeNotes = (e) => setNotes(e.target.value);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNewNotes(initialNotes);
    });
  }, []);

  const onSaveNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: notes,
      id: nanoid(),
      important: Math.random() < 0.5,
    };

    noteService.create(noteObject).then((returnedNotes) => {
      setNewNotes(newNotes.concat(returnedNotes));
    });

    // setNewNotes(newNotes.concat(noteObject));
    setNotes("");
  };

  const noteToShow = showAll
    ? newNotes
    : newNotes.filter((note) => note.important === true);

  const toggleImportanceOf = (id) => {
    const note = newNotes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNotes) => {
        setNewNotes(newNotes.map((n) => (n.id !== id ? n : returnedNotes)));
      })
      .catch(() => {
        setNewNotes(newNotes.filter((n) => n.id !== id));
      });
  };

  const eachNote = noteToShow.map((note) => (
    <FormNotes
      key={note.id}
      notes={note}
      toggleImportance={() => toggleImportanceOf(note.id)}
    />
  ));

  return (
    <section id="formId">
      <form onSubmit={onSaveNote}>
        <label htmlFor="notes" className="identity">
          Notes:
        </label>{" "}
        <br />
        <input
          type="text"
          name="notes"
          value={notes}
          onChange={onChangeNotes}
          className="border-2 border-slate-500 pl-1 rounded focus:outline-indigo-500/50"
        />
        <button
          type="submit"
          disabled={!notes}
          className="bg-slate-600 p-1 rounded ml-1 text-white"
        >
          Save
        </button>
      </form>
      <button
        onClick={() => setShowAll(!showAll)}
        className="bg-slate-600 p-1 rounded ml-1 mt-3 mb-4 text-white"
      >
        {showAll ? "Important" : "All"}
      </button>
      {eachNote}
    </section>
  );
};

export default Form;
