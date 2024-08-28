import PropTypes from "prop-types";
import "./fooditem.css";
function FoodItem({ food, setFoodId }) {
  return (
    <div>
      <figure
        onClick={() => {
          console.log(food.id);
          setFoodId(food.id);
        }}
      >
        <img src={food.image} alt="Mountains" />
        <figcaption>{food.title}</figcaption>
      </figure>
    </div>
  );
}
FoodItem.propTypes = {
  food: PropTypes.object,
};
export default FoodItem;
