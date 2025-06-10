import { useContext } from "react";
import { AuthContext } from "../contexts/AutoContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado com AuthProvider");
  }
  return context;
}
