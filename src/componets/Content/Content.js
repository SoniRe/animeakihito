import "./content.css";

const Content = () => {
  return (
    <div className="content">
      <h1 className="content__title">Chainsaw Man</h1>
      <p className="content__summary">
        Denji has a simple dream &mdash; to live a happy and peaceful life,
        spending time with a girl
      </p>
      <div className="content__contact">
        <button className="initial">Learn More</button>
        <button className="btn">
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
