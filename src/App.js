import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";
function App() {
  const APP_ID = "11815e87";
  const APP_KEY = "7fb6054ea2a5f0aa83944510bd5fd3b4";
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const handelChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    console.log(query);
  }

  const fetchQuery = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  useEffect(() =>{
    fetchQuery();
  },[query]);

  

  return (
    <div className="App">
      <div className="header">
        <h2>Search Recipes</h2>
        <form onSubmit={handelSubmit}>
          <input className="input" onChange={handelChange} type = "text" value = {search} autoFocus/>
          <button className="btn" type="submit">Search</button>
        </form>
      </div>
      
      <div className="container">
        {recipes.map(recipe => (
          <Recipe className="item"
            key = {recipe.recipe.label}
            title = {recipe.recipe.label}
            callories = {recipe.recipe.calories}
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ) )}
      </div>
      
    </div>
  );
}

export default App;
