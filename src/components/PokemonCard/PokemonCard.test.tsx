import { render, screen, fireEvent } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import "@testing-library/jest-dom";

// Mock navigate function
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock("../../utils", () => ({
  getPokemonImageUrl: jest.fn((id) => `https://mockurl.com/${id}.png`),
}));

describe("PokemonCard Component", () => {
  const mockProps = { id: 25, name: "Pikachu" };

  test("renders Pokemon name and image", () => {
    render(
        <PokemonCard {...mockProps} />
    );

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toHaveAttribute(
      "src",
      "https://mockurl.com/25.png"
    );
  });

  test("navigates to the correct Pokemon details page on click", () => {
    render(
        <PokemonCard {...mockProps} />
    );

    fireEvent.click(screen.getByText("Pikachu"));
    expect(mockNavigate).toHaveBeenCalledWith("/pokemon/25");
  });
});
