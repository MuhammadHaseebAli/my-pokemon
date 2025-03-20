import { render, screen, fireEvent } from "@testing-library/react";
import PaginationControls from "./PaginationControls";
import "@testing-library/jest-dom";

describe("PaginationControls Component", () => {
  let setPageMock: jest.Mock;

  beforeEach(() => {
    setPageMock = jest.fn();
  });

  test("renders correctly with given props", () => {
    render(<PaginationControls page={2} setPage={setPageMock} total={50} pageSize={10} />);

    expect(screen.getByText("2 / 5")).toBeInTheDocument();
    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  test("disables Prev button on the first page", () => {
    render(<PaginationControls page={1} setPage={setPageMock} total={50} pageSize={10} />);

    expect(screen.getByText("Prev")).toBeDisabled();
    expect(screen.getByText("Next")).not.toBeDisabled();
  });

  test("disables Next button on the last page", () => {
    render(<PaginationControls page={5} setPage={setPageMock} total={50} pageSize={10} />);

    expect(screen.getByText("Next")).toBeDisabled();
    expect(screen.getByText("Prev")).not.toBeDisabled();
  });

  test("calls setPage with (page - 1) when clicking Prev", () => {
    render(<PaginationControls page={3} setPage={setPageMock} total={50} pageSize={10} />);

    fireEvent.click(screen.getByText("Prev"));

    expect(setPageMock).toHaveBeenCalledWith(2);
  });

  test("calls setPage with (page + 1) when clicking Next", () => {
    render(<PaginationControls page={3} setPage={setPageMock} total={50} pageSize={10} />);

    fireEvent.click(screen.getByText("Next"));

    expect(setPageMock).toHaveBeenCalledWith(4);
  });
});
