import React from "react";
import { PokemonData, PokemonDetailsTableProps } from "../../types";
import { tableStyle, firstTdStyle, secondTdStyle, row } from "./PokemonDetails.styles";

const formatPokemonTypes = (types: PokemonData["types"]) =>
  types.map((item, index) => (
    <span key={index}>
      {item.type.name}
      <br />
    </span>
  ));

const renderRow = (label: string, value: React.ReactNode) => (
  <tr style={row}>
    <td style={firstTdStyle}>{label}</td>
    <td style={secondTdStyle}>{value}</td>
  </tr>
);

const PokemonDetailsTable: React.FC<PokemonDetailsTableProps> = ({ data }) => (
  <table style={tableStyle}>
    <tbody>
      {renderRow("Name", data.name)}
      {renderRow("Height", `${data.height} cm`)}
      {renderRow("Weight", `${data.weight} kg`)}
      {renderRow("Types", formatPokemonTypes(data.types))}
    </tbody>
  </table>
);

export default PokemonDetailsTable;
