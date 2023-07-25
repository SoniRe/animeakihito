import "./section.css";
import Card from "../Card/Card";
import { useState } from "react";

const Special = (props) => {
  const name = props.name;
  const className = name === "Special For You" ? "first-section" : "";
  const [data, setData] = useState(props.content);
  console.log(data);

  return (
    <div className={`${className} special__section `}>
      <h3 className="special__heading">{name}</h3>

      <div className={props.class}>
        {data.map((obj) => {
          return <Card name={obj.name} img={obj.img} genre={obj.genre} />;
        })}
      </div>
    </div>
  );
};

export default Special;
