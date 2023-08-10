import React from "react";
import Ensayo from "./Ensayo";

const EnsayoPersonalizado = ({ numbersLevel, geometryLevel, algebraLevel, probabilitiesLevel }) => {
    return(
        <div className="difficulty-bars">
      <div className={`difficulty-bar numbers green`}>
        <span>Numeros</span>
      </div>
      <div className={`difficulty-bar geometry yellow`}>
        <span>Probabilidad</span>
      </div>
      <div className={`difficulty-bar algebra red`}>
        <span>Algebra</span>
      </div>
      <div className={`difficulty-bar probabilities red`}>
        <span>Geometría</span>
      </div>
    </div>
     )
}
export default EnsayoPersonalizado;