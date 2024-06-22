import NewNotesForm from "./NewNotesForm";
import NotesList from "./NotesList";

NewNotesForm;

const NewNotesLayout = () => {
  return (
    <section>
      <NewNotesForm />
      <NotesList />
    </section>
  );
};

export default NewNotesLayout;
