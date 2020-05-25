import React, { useEffect, useState } from "react";
import "./App.css";
import { Title, Wrapper, MainContent, Sidebar } from "./styled/Style";
import Recipe from "./Recipes";
import ShoppingCart from "./shoppingCart";
import Axios from "axios";

const Home = () => {
  const APP_ID = "37cb24c5";
  const APP_KEYS = "adf52c962b0d76f71ba60bcaf6c3c8a7";

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
    let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`;
    const getRecipes = async () => {
      //Use fetch
      // const resp = await fetch(url);
      // const data = await resp.json();
      // setRecipes(data.hits);
      // console.log("data.hits", data.hits);
      //Use Axios
      Axios.get(url).then((res) => {
        const aData = res.data;
        console.log("aData----", aData);
        console.log("aData.hits", aData.hits);
        setRecipes(aData.hits);
      });
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
