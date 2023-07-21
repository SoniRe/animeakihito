import "./section.css";
import Card from "../Card/Card";
import { useState } from "react";

const Special = (props) => {
  const name = props.name;
  const [data, setData] = useState(props.content);
  console.log(data);

  return (
    <div className="special__section">
      <h3 className="special__heading">{name}</h3>

      <div className="special__card">
        {data.map((obj) => {
          return <Card name={obj.name} img={obj.img} genre={obj.genre} />;
        })}
      </div>
    </div>
  );
};

export default Special;
