import React from "react";
import Planets from "../../components/Planets";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

export default function PlanetsContainer() {
  return (
    <div className="planets-container">
      <div className="wrap">
        <Header />
        <Planets />
        <Footer showMoreDestination={false} />
      </div>
    </div>
  );
}
