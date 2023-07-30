import "./content.css";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <h1 className="content__title">India Buy Ev</h1>
      <p className="content__summary">Don't Just Dream About It,</p>
      <p className="content__summary">Buy It</p>
      <div className="content__contact">
        <Link to="/video" className="btn btn--white">
          <svg
            className="play"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="12"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
            />
          </svg>
          <p className="text">Know More </p>
        </Link>
        <button className="btn btn--black">
          <svg
            className="bookmark"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="12"
            viewBox="0 0 24 24"
          >
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
          </svg>
          <p className="text">To Watch</p>
        </button>
      </div>
    </div>
  );
};

export default Content;
