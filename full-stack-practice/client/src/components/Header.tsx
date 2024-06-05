import { Link, Outlet } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="navigation-list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Catalog</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
