import "./header.css";
import Logo from "../../assets/Akihito-logo-transparent.png";
import SVG from "../../assets/sprite.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

// icon-magnifying-glass
const Header = () => {
  const [currNav, setCurrNav] = useState("home");

  return (
    <nav className="header">
      <img className="logo" src={Logo} alt="akihito logo" />
      <Link
        onClick={() => {
          setCurrNav("home");
        }}
        exact
        to="/"
        className={`header__link ${currNav == "home" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        onClick={() => {
          setCurrNav("catalog");
        }}
        to="/catalog"
        className={`header__link ${currNav == "catalog" ? "active" : ""}`}
      >
        Catalog
      </Link>
      <Link
        onClick={() => {
          setCurrNav("news");
        }}
        to="/news"
        className={`header__link ${currNav == "news" ? "active" : ""}`}
      >
        News
      </Link>
      <Link
        onClick={() => {
          setCurrNav("collections");
        }}
        to="/collections"
        className={`header__link ${currNav == "collections" ? "active" : ""}`}
      >
        Collections
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="search"
      >
        <button className="search__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="search__icon"
          >
            <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
          </svg>
        </button>
        <input type="text" className="search__input" placeholder="Search" />
      </form>
      <button className="login">Login</button>
      <button className="initial">Get Started</button>
    </nav>
  );
};
export default Header;
