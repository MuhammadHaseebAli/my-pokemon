import { CSSProperties } from "react";

export const container: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  width: "200px",
  margin: "20px auto",
};

export const button: CSSProperties = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
  fontSize: "14px",
  transition: "background 0.3s ease",
  minWidth: "60px",
  textAlign: "center",
};

export const buttonDisabled: CSSProperties = {
  backgroundColor: "#ccc",
  cursor: "not-allowed",
  opacity: 0.6,
};

export const pageInfo: CSSProperties = {
  fontSize: "14px",
  fontWeight: "bold",
};
