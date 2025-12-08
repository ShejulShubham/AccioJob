import { useState, useEffect, act } from "react";
import RecipeCard from "./RecipeCard";
import moodData from "../../public/data";

export default function RecipesList({ activeMood }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: change API based on mood
    if(!activeMood) return;

    setLoading(true);

    setTimeout(() => {
      changeRecipeBasedOnMood();

      setLoading(false);
    }, 1000);
  }, [activeMood]);

  async function changeRecipeBasedOnMood() {
    const recipes = moodData[activeMood];

    setRecipes(recipes);
  }

  async function fetchData() {
    setLoading(true);

    // Temporary Fake API
    const fakeData = [
      {
        id: 1,
        title: "Mango Smoothie",
        img: "https://source.unsplash.com/400x300/?mango",
      },
      {
        id: 2,
        title: "Pasta Bowl",
        img: "https://source.unsplash.com/400x300/?pasta",
      },
      {
        id: 3,
        title: "Chocolate Cake",
        img: "https://source.unsplash.com/400x300/?cake",
      },
    ];

    // TODO: Replace fakeData with API response
    setTimeout(() => {
      setRecipes(fakeData);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="glass-card">
      <h2>Recommended Recipes</h2>
      <p>Active Mood: {activeMood}</p>

      {loading && <p className="loader">Loading recipes...</p>}

      {!loading && recipes.length === 0 && <p>No recipes found.</p>}

      <div className="recipes-grid">
        {!loading &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
}
