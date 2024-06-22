import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNotes } from "./notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const NewNotesForm = () => {
  const [persons, setPersons] = useState("");
  const [gender, setGender] = useState("");
  const [addRequest, setAddRequest] = useState("idle");

  const dispatch = useDispatch();

  const canSave = [persons, gender].every(Boolean) && addRequest === "idle";

  const handleClick = async () => {
    if (canSave) {
      try {
        setAddRequest("pending");
        await dispatch(addNewNotes({ id: nanoid(), persons, gender })).unwrap();

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
    <section id="newNoteForm">
      <form>
        <label
          htmlFor="persons"
          className="text-indigo font-bold"
          style={{
            color: "rgb(71 85 105)",
          }}
        >
          Names:
        </label>{" "}
        <input
          type="text"
          value={persons}
          id="persons"
          name="persons"
          onChange={(e) => setPersons(e.target.value)}
          className="border-2 border-slate-500 pl-1 rounded focus:outline-indigo-500/50"
          style={{ width: "12rem", marginBottom: "1rem" }}
        />
        <br />
        <label
          htmlFor="gender"
          className="font-bold"
          style={{
            color: "rgb(71 85 105)",
          }}
        >
          Gender:
        </label>{" "}
        <input
          type="text"
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border-2 border-slate-500 pl-1 rounded focus:outline-indigo-500/50"
        />{" "}
        <br />
        <button
          type="button"
          onClick={handleClick}
          className="addContent-btn"
          style={{ marginTop: "0.8rem" }}
        >
          Add Note
        </button>
      </form>
    </section>
  );
};

export default NewNotesForm;
