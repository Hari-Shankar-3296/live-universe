import React from "react";
import Home from "../../components/Home";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

export default function HomeContainer() {
  return (
    <div className="home-con">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
