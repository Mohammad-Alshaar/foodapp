import { useEffect, useState } from "react";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "5c95645e3f5f4057b577dd869364b08b";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <h1>{food.title}</h1>
      <img src={food.image} alt="" />
      <span>{food.readyInMinutes} Minutes</span>
      <div>
        {isLoading
          ? "Loading..."
          : food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))}
        {}
      </div>
    </div>
  );
}
export default FoodDetails;
