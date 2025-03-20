import { render, screen } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";
import { useGetPokemonDetailsQuery } from "../../services/pokemon";
import { useParams } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock useParams to return a test Pokémon ID
jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

// Mock API service
jest.mock("../../services/pokemon", () => ({
  useGetPokemonDetailsQuery: jest.fn(),
}));

const mockPokemonDetails = {
  name: "pikachu",
  sprites: { front_default: "https://example.com/pikachu.png" },
  abilities: [],
  types: [],
  stats: [],
};

describe("PokemonDetails Page", () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: "25" }); // Mocking the Pokémon ID
  });

  test("renders loading state", () => {
    (useGetPokemonDetailsQuery as jest.Mock).mockReturnValue({ isLoading: true });

    render(<PokemonDetails />);

    expect(screen.getByTestId("clip-loader")).toBeTruthy();
  });

  test("renders non-loading state", () => {
    (useGetPokemonDetailsQuery as jest.Mock).mockReturnValue({ data: mockPokemonDetails, isLoading: false });

    render(<PokemonDetails />);

    expect(screen.queryByTestId("clip-loader")).not.toBeInTheDocument();
  });

  test("renders error state", () => {
    (useGetPokemonDetailsQuery as jest.Mock).mockReturnValue({ error: true, isLoading: false });

    render(<PokemonDetails />);

    expect(screen.getByText('Something went wrong')).toBeTruthy();
  });

  test("renders Pokémon details", () => {
    (useGetPokemonDetailsQuery as jest.Mock).mockReturnValue({ data: mockPokemonDetails, isLoading: false });

    render(<PokemonDetails />);

    expect(screen.queryAllByText('pikachu')).toBeTruthy();
  });
});
