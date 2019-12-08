import React from "react";
import Planets from "../../components/Planets";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import planetsBG from "../../assets/img/bg.jpg";

export default function PlanetsContainer() {
  return (
    <div className="planets-container" style={{ backgroundImage: planetsBG }}>
      <div className="wrap">
        <Header />
        <Planets />
        <Footer showMoreDestination={false} />
      </div>
    </div>
  );
}
