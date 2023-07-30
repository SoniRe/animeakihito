import "./header.css";
import Logo from "../../assets/Akihito-logo-transparent.png";
import SVG from "../../assets/sprite.svg";

// icon-magnifying-glass
const Header = () => {
  return (
    <nav className="header">
      <img className="logo" src={Logo} alt="akihito logo" />
      <a className="header__link active" href="#">
        Home
      </a>
      <a className="header__link" href="#">
        Catalog
      </a>
      <a className="header__link" href="#">
        News
      </a>
      <a className="header__link" href="#">
        Collections
      </a>
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
