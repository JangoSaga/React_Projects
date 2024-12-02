import PropTypes from "prop-types"; // Import PropTypes
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

// Define propTypes for MenuItem
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired, // 'id' must be a number
    name: PropTypes.string.isRequired, // 'name' must be a string
    unitPrice: PropTypes.number.isRequired, // 'unitPrice' must be a number
    ingredients: PropTypes.arrayOf(
      // 'ingredients' must be an array of strings
      PropTypes.string
    ).isRequired,
    soldOut: PropTypes.bool.isRequired, // 'soldOut' must be a boolean
    imageUrl: PropTypes.string.isRequired, // 'imageUrl' must be a string
  }).isRequired,
};

export default MenuItem;
