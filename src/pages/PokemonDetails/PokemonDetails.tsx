import { useParams } from "react-router-dom";
import PokemonDetailsTable from "../../components/PokemonDetailsTable/PokemonDetailsTable";
import { useGetPokemonDetailsQuery } from "../../services/pokemon";
import { imageContainer } from "./PokemonDetails.styles";
import { container, heading, loaderOverride } from "../../App.styles";
import { ClipLoader } from "react-spinners";


const PokemonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetPokemonDetailsQuery(id ?? "");

  if (isLoading) return <div style={container}><ClipLoader
  color={"#ffffff"}
  loading={true}
  cssOverride={loaderOverride}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/></div>;

  if (error) return <p>Error fetching Pokémon</p>;

  return (
    <div style={container}>
      <h3 style={heading}>{data.name}</h3>
      <div style={imageContainer}>
        <img src={data.sprites.front_default} alt={data.name} />
      </div>
      <PokemonDetailsTable data={data} />
    </div>
  );
};

export default PokemonDetails;
