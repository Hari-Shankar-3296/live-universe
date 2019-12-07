import React from "react";
import "./Footer.css";
import SiteMap from "./SiteMap";

export default function Footer() {
  return (
    <footer className="page-footer">
      <section className="row-1 sitemap-con">
        <SiteMap />
      </section>
      <section className="row-2 footer-detail-con">
        <div className="credits-con">
          Crafted with <i className="fa fa-heart" /> by{" "}
          <span className="site-pointer">copperCodes.io</span>
        </div>
      </section>
    </footer>
  );
}
