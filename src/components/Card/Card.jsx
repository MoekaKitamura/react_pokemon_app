import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        {pokemon.types.map((type) => {
          return <span className="typeName">{type.type.name}</span>;
        })}
        <div className="cardInfo">
          <div className="cardData">
            <p>重さ：{pokemon.weight}g</p>
          </div>
          <div className="cardData">
            <p>高さ：{pokemon.height}cm</p>
          </div>
          <div className="cardData">
            <p>アビリティ：{pokemon.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
