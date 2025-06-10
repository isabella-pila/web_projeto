// src/pages/SavedRecipes.tsx

import { HighLight } from "../../components/HighLight";
import { savedRecipesMock } from "../../mocks/savedRecipesMock";
import { useState } from "react";

export function SavedRecipes() {
  const [recipes, setRecipes] = useState(savedRecipesMock.filter(recipe => recipe.saved));

  const handleUnsaveRecipe = (id: string) => {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
  };

  return (
    <div>
      <h1>Receitas Salvas 🐾</h1>
      
      {recipes.length === 0 ? (
        <p className="empty-message">Você ainda não salvou nenhuma receita</p>
      ) : (
        <div>
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <HighLight
                href={`/recipe/${recipe.id}`}
                title={recipe.title}
                src={recipe.image}
              />
              
              <button
                onClick={() => handleUnsaveRecipe(recipe.id)}
                className="unsave-button"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}