import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Main Header";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [wildPokemon, setWildPokemon] = useState([]);

  //couldn't map over characters so I did a math.random to generate that "map"
  const pokemonID = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1));
  };

  let pokeID = pokemonID();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokeID)
      .then((response) => {
        console.log(response.data);
        setWildPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Character
        PokemonType={wildPokemon.types}
        PokemonImage={wildPokemon.sprites}
        Name={wildPokemon.name}
        Height={wildPokemon.height}
        Weight={wildPokemon.weight}
      />
    </div>
  );
};

export default App;
