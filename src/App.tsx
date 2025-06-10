// src/App.tsx
import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";

export function App() {
  return (
    <>
      <GlobalStyle />
      <RouteWeb />
    </>
  );
}

export default App;