
import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { useGetPokemonListQuery } from "../../services/pokemon";
import "@testing-library/jest-dom";

// Mock useNavigate to prevent navigation errors
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../services/pokemon", () => ({
  useGetPokemonListQuery: jest.fn(),
}));

const mockPokemonList = {
  results: [{ name: "pikachu" }, { name: "bulbasaur" }],
};

describe("PokemonList Page", () => {
  test("renders loading state", () => {
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({ isLoading: true });
    render(
        <PokemonList />
    );

    expect(screen.getByTestId("clip-loader")).toBeTruthy();
  });

  test("renders non-loading state", () => {
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({ isLoading: false });
  
    render(
      <PokemonList />
    );
  
    expect(screen.queryByTestId("clip-loader")).not.toBeInTheDocument();
  });

  test("renders Pokemon list", () => {
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({ data: mockPokemonList, isLoading: false });

    render(
      <PokemonList />
    );

    expect(screen.getByText(/pikachu/i)).toBeTruthy();
    expect(screen.getByText(/bulbasaur/i)).toBeTruthy();
  });
  
  test("renders error state", () => {
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({ error: true, isLoading: false });

    render(
      <PokemonList />
    );

    expect(screen.getByText(/Something went wrong/i)).toBeTruthy();
  });
});
