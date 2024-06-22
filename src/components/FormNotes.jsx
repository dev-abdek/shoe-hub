/* eslint-disable react/prop-types */
const FormNotes = ({ notes, toggleImportance }) => {
  const label = notes.important ? "make not important" : "make important";
  return (
    <>
      <ol>
        <li>
          {notes.content}
          <button
            onClick={toggleImportance}
            className="bg-slate-600 p-1 rounded ml-1 mt-1 text-white"
          >
            {label}
          </button>
        </li>
      </ol>
    </>
  );
};

export default FormNotes;
