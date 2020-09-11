// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
  const StyledDetails = styled.div`
    color: teal;
    font-size: 30px;
    border: 10px solid purple;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 50px;
    padding-bottom: 1%;
    width: 60%;
    margin-left: 21%;
    background-color: violet;

    .poke-name {
      font-size: 80px;
    }
    .poke-name:first-letter {
      text-transform: uppercase;
    }
    h3 {
      font-size: 50px;
    }

    img {
      border-radius: 50px;
      border: 8px solid teal;
      background-color: orange;
      position: relative;
    }

    .poke-info {
      color: purple;
    }
  `;
  const CoolButton = styled.button`
    font-size: 60px;
    margin-top: 2%;
    color: purple;
    background-color: yellow;
    border-radius: 20px;
    border: 5px solid gold;
    margin-bottom: 4%;
    margin-right: 2%;

    transition: 0.5s all ease-out;

    &:hover {
      background-color: palevioletred;
      color: white;
    }
  `;

  //   function refreshPokemon() {
  //     const min = Math.ceil(1);
  //     const max = Math.floor(151);
  //     let pokeID = Math.floor(Math.random() * (max - min + 1));

  //     axios
  //       .get("https://pokeapi.co/api/v2/pokemon/" + pokeID)
  //       .then((response) => {})
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     return axios;
  //   }

  function refreshPokemon() {
    window.location.reload();
  }

  let imgsrc = "";
  let type = "";

  //had to do try/catch because I couldn't figure out how to get front_default without it breaking.

  try {
    imgsrc = props.PokemonImage.other["official-artwork"].front_default;
  } catch (e) {
    // console.log(e); //exception
  }

  try {
    type = props.PokemonType["0"].type.name;
  } catch (e) {
    // console.log(e); //exception
  }

  //   console.log(imgsrc);
  //   console.log(type);

  return (
    <StyledDetails className="pokemon-container">
      <CoolButton onClick={refreshPokemon}> Click to reload! </CoolButton>
      <div className="poke-card">
        <h3 className="poke-name">{props.Name}</h3>
        <img src={imgsrc} alt="lmfao" />
      </div>
      <div className="poke-info">
        <h3>Type: {type}</h3>
        <h3>Height: {props.Height}</h3>
        <h3>Weight: {props.Weight}</h3>
      </div>
    </StyledDetails>
  );
};

export default Character;
