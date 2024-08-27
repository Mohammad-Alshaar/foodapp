import PropTypes from "prop-types";
function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <h1 key={food.id}>{food.title}</h1>
      ))}
    </div>
  );
}
FoodList.propTypes = {
  foodData: PropTypes.array,
};
export default FoodList;
