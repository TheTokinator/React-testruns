import React from "react";

//name, ingredients, instructions, image, cuisine, mealType

const RecipeList = ({recipe}) => {
    return (
        <div className="recipe">
            <div>
                <p>{recipe.cuisine}</p>
                <p>{recipe.mealType}</p>
            </div>

            <div>
                <img
                    src={recipe.image}
                    alt={recipe.name}
                />
            </div>

            <div>
                <span>{recipe.name}</span>
            </div>

            <div>
                <h4>Ingredients</h4>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
            </div>

            <div>
                <h4>Instructions</h4>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
  </div>
        </div>
    )
}

export default RecipeList;