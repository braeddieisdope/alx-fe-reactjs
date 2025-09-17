
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDeleteSuccess = () => {
    navigate('/');
  };

  return (
    <div>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onSave={handleSave} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} onDelete={handleDeleteSuccess} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;