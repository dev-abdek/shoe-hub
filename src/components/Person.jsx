import { useEffect, useReducer, useState } from "react";

const newCounterReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAMES": {
      return state.concat(action.payload);
    }

    case "REMOVE_NAMES": {
      return state.filter((n) => n.id !== action.payload.id);
    }
    case "EDIT_NAMES": {
      const { id, names } = action.payload;
      const existingNames = state.find((name) => name.id === id);
      if (existingNames) existingNames.names = names;
      return state;
    }
    default:
      return state;
  }
};

const Person = () => {
  const [names, setNames] = useState("");
  const [newCounter, newCounterDispatch] = useReducer(
    newCounterReducer,
    JSON.parse(localStorage.getItem("persons")) || []
  );

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(newCounter));
  }, [newCounter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (names) {
      newCounterDispatch({
        type: "ADD_NAMES",
        payload: {
          id: newCounter.length ? newCounter[newCounter.length - 1].id + 1 : 1,
          names,
        },
      });
      setNames("");
    }
  };

  return (
    <section id="personForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="names" className="text-indigo font-mono font-bold">
          Enter your names:
        </label>{" "}
        <br />
        <input
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          className="border-2 px-1 rounded border-slate-500  outline-indigo-500/50"
        />
        <button type="submit" className="addContent-btn">
          Add
        </button>
      </form>
      <ul>
        {newCounter.map((counter) => (
          <div key={counter.id}>
            <li>{counter.names}</li>
            <button
              onClick={() =>
                newCounterDispatch({
                  type: "REMOVE_NAMES",
                  payload: { id: counter.id },
                })
              }
              className="addContent-btn"
            >
              Remove
            </button>
            <button
              onClick={() =>
                newCounterDispatch({
                  type: "EDIT_NAMES",
                  payload: { id: counter.id, names },
                })
              }
              className="addContent-btn"
            >
              Edit
            </button>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Person;
