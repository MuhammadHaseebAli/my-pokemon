import React from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonImageUrl } from "../../utils";
import { row } from "./PokemonCard.styles";

interface PokemonCardProps {
  id: number;
  name: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name }) => {
  const navigate = useNavigate();

  return (
    <div key={id} style={row} onClick={() => navigate(`/pokemon/${id}`)}>
      <img src={getPokemonImageUrl(id)} alt={name} height="50" width="50" />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
