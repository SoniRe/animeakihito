import "./content.css";
import Chainsaw from "../../assets/chainsaw-man.jpg";

const Content = () => {
  return (
    <div className="content">
      <div className="background" />

      <img className="home__image" src={Chainsaw} alt="Chainsaw man photo" />
    </div>
  );
};

export default Content;
