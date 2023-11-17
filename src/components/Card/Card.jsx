import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
        <h3 className="cardName">{pokemon.name}</h3>
        <div className="cardTypes">
          <div>タイプ</div>
          {pokemon.types.map((type) => {
            return (
              <div>
                <span className="typeName">{type.type.name}</span>
              </div>
            );
          })}
          <div className="cardInfo">
            <div className="cardData">
              <p>重さ：{pokemon.weight}</p>
            </div>
            <div className="cardData">
              <p>高さ：{pokemon.height}</p>
            </div>
            <div className="cardData">
              <p>アビリティ：{pokemon.abilities[0].ability.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;