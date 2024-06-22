/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const AddItems = ({ newItems, setNewItems, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

const DavePractical = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );

  const [newItems, setNewItems] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItems(newItems);
    setNewItems("");
  };

  return (
    <main>
      <AddItems
        newItems={newItems}
        setNewItems={setNewItems}
        handleSubmit={handleSubmit}
      />
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <br />
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  );
};

export default DavePractical;
