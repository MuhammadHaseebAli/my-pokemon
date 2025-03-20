import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import { useGetPokemonListQuery } from "../../services/pokemon";
import { container, heading, loaderOverride } from "../../App.styles";
import { PokemonListResponse } from "../../types";

const PAGE_SIZE: number = 10;

const PokemonList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, error, isLoading } = useGetPokemonListQuery(page) as {
    data?: PokemonListResponse;
    error?: unknown;
    isLoading: boolean;
  };

  if (isLoading) return <div style={container}><ClipLoader
    color={"#ffffff"}
    loading={true}
    cssOverride={loaderOverride}
    size={150}
    aria-label="Loading Spinner"
    data-testid="clip-loader"
  /></div>;

  if (error) return <p>Something went wrong</p>;

  return (
    <div style={container}>
      <h3 style={heading}>Poke React</h3>
      {data?.results.map((pokemon, index) => {
        const id = (page - 1) * PAGE_SIZE + index + 1;
        return <PokemonCard key={id} id={id} name={pokemon.name} />;
      })}
      <PaginationControls page={page} setPage={setPage} total={data?.count || 0} pageSize={PAGE_SIZE} />
    </div>
  );
};

export default PokemonList;
