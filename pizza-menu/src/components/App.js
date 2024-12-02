import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";
const pizzaData = [
  {
    name: "Foccacia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    selected: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    selected: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    selected: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    selected: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
    selected: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    selected: false,
  },
];

export default function App() {
  const [pizzas, setPizza] = useState(pizzaData);
  function toggleSelectPizza(name) {
    setPizza((pizzas) =>
      pizzas.map((pizza) =>
        pizza.name === name ? { ...pizza, selected: !pizza.selected } : pizza
      )
    );
  }
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzas} onSelect={toggleSelectPizza} />
      <Footer />
    </div>
  );
}
