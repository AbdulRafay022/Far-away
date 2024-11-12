import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
  const [items, setItems] = useState([]);

  function handelClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );

    if (confirmed) setItems([]);
  }

  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handelDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelToggelItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handelDeleteItems}
        onToggleItems={handelToggelItems}
        onClear={handelClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
