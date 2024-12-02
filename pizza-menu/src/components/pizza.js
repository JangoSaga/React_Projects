export default function Pizza({ pizzaObj, onSelect }) {
  function changeStyle(pizza) {
    let style = "";
    if (pizza.soldOut) {
      style = "sold-out ";
    }
    if (pizza.selected) {
      style = "selected ";
    }
    return style;
  }

  return (
    <li className={`pizza ${changeStyle(pizzaObj)}`} onClick={onSelect("")}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )}
      </div>
    </li>
  );
}
