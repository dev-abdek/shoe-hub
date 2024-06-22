import { useState } from "react";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One bag of cocoa",
    },
    {
      id: 2,
      checked: false,
      item: "Three tubers of yam",
    },
    {
      id: 3,
      checked: false,
      item: "Eleven bags of rice",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  return (
    <main className="groceries-content">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
