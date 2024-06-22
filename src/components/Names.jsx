/* eslint-disable react/prop-types */
const Names = ({ persons, toggleDelete }) => {
  return (
    <li>
      {persons.name} {persons.numbers}
      <button
        onClick={toggleDelete}
        className="bg-slate-600 p-1 rounded ml-1 mt-1 text-white"
      >
        Delete
      </button>
    </li>
  );
};

export default Names;
