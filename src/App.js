import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  // create an account in https://www.edamam.com/ and put the id and the key so it can work

  const APP_ID = '';
  const APP_KEY = '';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // Web API to fiend the recipes -> return JSON
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect( () => {
    getRecipes();
  }, [query]);

  // It search for the recipes in the API
  const getRecipes = async () => {
     const response = await fetch(exampleReq);
     const data = await response.json();
     console.log(data.hits);
     setRecipes(data.hits);
  };

  // Update the input part
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  // It update the query so we could search for the recipes
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    <div className='App'>
      <form 
        onSubmit={getSearch} 
        className='search-form'>
        <input 
          className='search-bar' 
          type='text' value={search} 
          onChange={updateSearch}/>
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
        <div className='recipes'>
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
 