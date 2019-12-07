import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import logo from "../../assets/img/logo.jpg";
import "./Header.css";
import { history } from "../../helpers/helperConst";
// import { history } from '../../helpers/helperConst';

function Header() {
  function onClickNavigate() {
    history.push("/home");
  }

  useEffect(() => {
    window.onscroll = myFunction;

    let header = document.getElementById("myHeader");
    let sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    }
    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <header className="page-header" id="myHeader">
      <div className="wrap">
        <div className="details-con left" onClick={onClickNavigate}>
          <img class="logo" src={logo} alt="live-universe" />
          <h3 className="page-title">Live Universe</h3>
        </div>
        <nav className="menu-con right">
          <HeaderMenu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
