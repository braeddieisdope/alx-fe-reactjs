
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <>
            <h1>Recipe Sharing App</h1>
            <SearchBar />
            <AddRecipeForm />
            <h2>My Recipes</h2>
            <RecipeList />
            <FavoritesList />
            <RecommendationsList />
          </>
        } />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;