import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5c95645e3f5f4057b577dd869364b08b";

function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
Search.propTypes = {
  setFoodData: PropTypes.func,
};
export default Search;
