import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import Names from "./Names";
import axios from "axios";

const Phonebook = () => {
  const [newName, setNewName] = useState("");
  const [newNumbers, setNewNumbers] = useState("");
  const [persons, setPersons] = useState([]);

  const onChangeNames = (e) => setNewName(e.target.value);
  const onChangeNumbers = (e) => setNewNumbers(e.target.value);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, [persons]);

  const handleSubmission = (e) => {
    e.preventDefault();
    const newNamesObject = {
      id: nanoid(),
      name: newName,
      numbers: newNumbers,
    };

    axios
      .post("http://localhost:3001/persons", newNamesObject)
      .then((response) => {
        setPersons(persons.concat(response.data));
      });

    setNewName("");
    setNewNumbers("");
  };

  const toggleDelete = (id) => {
    axios.delete(`http://localhost:3001/persons/${id}`).then((response) => {
      setPersons(persons.filter((n) => n.id !== response.data));
    });
  };

  const eachPersons = persons.map((person) => (
    <Names
      key={person.id}
      persons={person}
      toggleDelete={() => toggleDelete(person.id)}
    />
  ));

  return (
    <section className="mt-3">
      <h2 className="identity">Phonebook</h2>
      <form onSubmit={handleSubmission}>
        <label htmlFor="names" className="phoneBookLabel">
          Names:
        </label>{" "}
        <br />
        <input
          type="text"
          name="names"
          value={newName}
          onChange={onChangeNames}
          className="border-2 px-1 rounded border-slate-500  outline-indigo-500/50"
        />
        <br />
        <label htmlFor="numbers" className="phoneBookLabel">
          Number:
        </label>{" "}
        <br />
        <input
          type="tel"
          name="numbers"
          value={newNumbers}
          onChange={onChangeNumbers}
          className="border-2 rounded px-1 border-slate-500  outline-indigo-500/50"
        />
        <button
          type="submit"
          disabled={!(newName && newNumbers)}
          className="bg-slate-600 p-1 ml-1 w-35 rounded text-white"
        >
          Add
        </button>
      </form>
      <h2 className="founders mb-0">Founders</h2>
      <ol>{eachPersons}</ol>
    </section>
  );
};

export default Phonebook;
