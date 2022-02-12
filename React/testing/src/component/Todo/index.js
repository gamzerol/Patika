import { useState } from "react";

const defaultItems = [
  {
    name: "Item A",
  },
  {
    name: "Item B",
  },
  {
    name: "Item c",
  },
];

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);
  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={() => setItems((prev) => [...prev, {name: text}])}>Add</button>

      <br />
      {items.map((item, key) => {
        return (
          <div key={key}>{item.name}</div>
        )
      })}
    </div>
  );
}

export default Todo;
