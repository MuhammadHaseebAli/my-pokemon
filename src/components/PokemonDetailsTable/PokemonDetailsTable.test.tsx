import { render, screen } from "@testing-library/react";
import PokemonDetailsTable from "./PokemonDetailsTable";
import { PokemonDetailsTableProps } from "../../types";
import "@testing-library/jest-dom";

const mockPokemonData: PokemonDetailsTableProps["data"] = {
  name: "Pikachu",
  height: 40,
  weight: 6,
  types: [
    { type: { name: "Electric" } },
    { type: { name: "Fast" } },
  ],
  sprites: {
    front_default: "type 1"
  }
};

describe("PokemonDetailsTable Component", () => {
  test("renders Pokemon details correctly", () => {
    render(<PokemonDetailsTable data={mockPokemonData} />);

    // Check if the correct details are displayed
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
    expect(screen.getByText("Types")).toBeInTheDocument();

    // Check Pokémon values
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("40 cm")).toBeInTheDocument();
    expect(screen.getByText("6 kg")).toBeInTheDocument();

    // Check types (should handle multiple types)
    expect(screen.getByText("Electric")).toBeInTheDocument();
    expect(screen.getByText("Fast")).toBeInTheDocument();
  });

  test("renders multiple types with line breaks", () => {
    render(<PokemonDetailsTable data={mockPokemonData} />);

    // Ensure all types exist
    const typeElements = screen.getAllByText(/Electric|Fast/);
    expect(typeElements.length).toBe(2);
  });
});
