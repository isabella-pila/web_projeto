// src/pages/Layout/index.tsx
import { useState } from "react";
import { Header } from "../../components/Header";
import { Emphasis } from "../../components/Emphasis";

export function Layout() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(value: string) {
    setSearchTerm(value);
  }

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Emphasis searchTerm={searchTerm} />
    </>
  );
}