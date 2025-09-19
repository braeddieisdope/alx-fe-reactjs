
import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setSearchTerm: (term) => set(state => {
    const newFilteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
    return {
      searchTerm: term,
      filteredRecipes: newFilteredRecipes
    }
  }),

  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe]
  })),

  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  setRecipes: (recipes) => set(state => ({
    recipes: recipes,
    filteredRecipes: recipes
  })),

  // New actions for favorites and recommendations
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    )
    return { recommendations: recommended }
  })
}))

export { useRecipeStore }