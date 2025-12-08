export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      {/* TODO: Add dynamic image */}
      <img src={recipe.img} alt={recipe.title} />

      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>

        {/* TODO: Add description */}
        {/* TODO: Add view more button */}
        <button className="recipe-btn">View More</button>
      </div>
    </div>
  );
}
