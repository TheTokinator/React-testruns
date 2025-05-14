import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import {ReactComponent as SearchIcon} from "./search.svg";
import RecipeList from "./RecipeList";

const API_URL = "https://dummyjson.com/recipes"


const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchRecipes = async (title) => {
       const response = await fetch(`${API_URL}/search?q=${title}`);
            if (!response.ok) {
                 throw new Error("Network response was not ok");
            }
const data = await response.json();
        setRecipes(data.recipes);
    }

    useEffect(() => {
        searchRecipes("pizza");
    }, []);

    return (
        <div className="recipe_app">
            <h1>Recipe List</h1>

            <div className="search">
                <input
                    placeholder="Search for recipes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIcon onClick={() => searchRecipes(searchTerm)}/>
            </div>

            {recipes?.length > 0
                ? (
                    <div className="container">
                        {recipes.map((recipe) => (
                            <RecipeList key={recipe.id} recipe={recipe}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No recipe found</h2>
                    </div>
                )   
            }
        </div>
    );
}

export default App;