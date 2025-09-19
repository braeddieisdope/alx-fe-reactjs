
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <div>
      <h2>Recipe Recommendations</h2>
      <button onClick={generateRecommendations}>Generate Recommendations</button>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>Click "Generate Recommendations" to see suggestions.</p>
      )}
    </div>
  );
};

export default RecommendationsList;