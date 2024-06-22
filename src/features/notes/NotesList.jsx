import { useSelector } from "react-redux";
import { selectNewNotesByIds } from "./notesSlice";
import NoteExcerpt from "./NoteExcerpt";

const NotesList = () => {
  const allNewNotes = useSelector(selectNewNotesByIds);

  const content = allNewNotes.map((noteId) => (
    <NoteExcerpt key={noteId} noteId={noteId} />
  ));

  return <section>{content}</section>;
};

export default NotesList;
