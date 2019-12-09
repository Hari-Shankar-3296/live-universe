import React from "react";
import "./Home.css";
import MagicText from "../../common/MagicText";

function Home(props) {
  return (
    <main className="home-wrap" style={{ height: "150vh" }}>
      <div className="home-text-wrapper">
        <MagicText text={"Home Page Under Construction"} suffix={<i className="fa fa-warning" />} />
      </div>
    </main>
  );
}

export default Home;
