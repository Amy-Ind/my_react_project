import React, { useEffect, useState } from "react";
import "./App.css";
import { Title, Wrapper, MainContent, Sidebar } from "./styled/Style";
import Recipe from "./Recipes";
import ShoppingCart from "./shoppingCart";

const Home = () => {
  const APP_ID = "46b123d6";
  const APP_KEYS = "5e10553295f1a23412a8a7a145c92322";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  useEffect(() => {
    const getRecipes = async () => {
      const resp = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`
      );
      const data = await resp.json();
      setRecipes(data.hits);
      //console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <Title>I&co online Cafe</Title>
      <Wrapper>
        <MainContent>
          <form className="Search-form" onSubmit={getSearch}>
            <input
              className="Search-bar"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button className="Search-button" type="submit">
              search
            </button>
          </form>
        </MainContent>
        <Sidebar>
          <ShoppingCart />
        </Sidebar>
      </Wrapper>

      <div className="Recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
            addCart={recipe.addCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
