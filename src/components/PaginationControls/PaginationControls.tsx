import React from "react";
import { PaginationControlsProps } from "../../types";
import { container, button, buttonDisabled, pageInfo } from "./PaginationControls.styles";

const PaginationControls: React.FC<PaginationControlsProps> = ({ page, setPage, total, pageSize }) => {
  const pageCount = Math.ceil(total / pageSize); // Calculate total pages

  return (
    <div style={container}>
      <button
        style={page === 1 ? { ...button, ...buttonDisabled } : button}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span style={pageInfo}>
        {page} / {pageCount}
      </span>

      <button
        style={page === pageCount ? { ...button, ...buttonDisabled } : button}
        disabled={page === pageCount}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
