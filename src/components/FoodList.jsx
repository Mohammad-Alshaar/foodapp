import PropTypes from "prop-types";
import FoodItem from "./FoodItem";
function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem food={food} key={food.id} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
FoodList.propTypes = {
  foodData: PropTypes.array,
};
export default FoodList;
