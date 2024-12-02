import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Tooth Brush", quantity: 2, packed: false },
];
export default function App() {
  const [items, setItems] = useState(initialItems);
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  function handleAddItems(item) {
    setItems((Items) => [...Items, item]);
  }
  function handleDeleteItems(id) {
    console.log(id);
    setItems((Items) => Items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((Items) =>
      Items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        key={items.id}
        onClearItems={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
