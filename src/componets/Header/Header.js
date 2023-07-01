import "./header.css";
import Logo from "../../assets/Akihito-logo-transparent.png";
import SVG from "../../assets/sprite.svg";

// icon-magnifying-glass
const Header = () => {
  return (
    <nav className="header">
      <img className="logo" src={Logo} alt="akihito logo" />
      <a className="header__link" href="#">
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
          <svg className="search__icon">
            <use xlinkHref={`${SVG}#icon-magnifying-glass`}></use>
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
