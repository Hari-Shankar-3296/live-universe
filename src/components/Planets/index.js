import React from "react";
import Tilt from "react-tilt";
import { planetsConst } from "../../common/Footer/MoreDestination";
import "./Planets.css";

export default function Planets() {
  return (
    <div className="planets-wrap">
      {planetsConst.map(eachPlanet => {
        const { id, title, img } = eachPlanet;
        return (
          <div className="each-planet" key={id}>
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ display: "inline-block" }}
              key={id}
            >
              <img
                src={require(`../../assets/img/more_destination/${id}.png`)}
                alt={title}
                className="each-des-img"
              />
              <div className="each-planet-footer">
                <h2 className="planet-title">{title}</h2>
              </div>
            </Tilt>
          </div>
        );
      })}
      {/* <div style={{ clear: "both" }}></div> */}
    </div>
  );
}
