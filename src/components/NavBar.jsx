import { Link, NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="nav-layout">
        <Link to={"/"}>
          <img src="/shoe.png" alt="a black and white shoe" />
        </Link>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/course">Course</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/person">Person</NavLink>
            </li>
            <li>
              <NavLink to="/lists">Lists</NavLink>
            </li>
            <li>
              <NavLink to="/notes">Notes</NavLink>
            </li>
            <li>
              <NavLink to="/todos">Todos</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/practical">Practical</NavLink>
            </li>
            <li>
              <NavLink to="/colors">Colors</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
