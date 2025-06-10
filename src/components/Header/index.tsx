import { SHeader } from "./styles";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/userAuth";

interface HeaderProps {
  onSearchChange: (value: string) => void;
}

export function Header({ onSearchChange }: HeaderProps) {
  const { currentUser, logout } = useAuth();

  return (
    <SHeader>
      <div>
        <img src="/src/assets/logo.png" alt="Pet Fit Logo" />
        <h1>Pet Fit</h1>
      </div>

      <input type="checkbox" id="menu" />
      <nav>
        <label htmlFor="menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <FcSearch />
            <input
              type="text"
              name="search"
              placeholder="Busca"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </form>

          {currentUser ? (
            <>
              <Link to="/receitas-salvas">Receitas Salvas</Link>
              {currentUser.role === "admin" && <Link to="/admin/posts">Postagens</Link>}
              <button type="button" onClick={logout}>Sair</button>
            </>
          ) : (
            <>
  
            <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>
    </SHeader>
  );
}
