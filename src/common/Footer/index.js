import React from "react";
import "./Footer.css";
import SiteMap from "./SiteMap";
import MoreDestination from "./MoreDestination";

function Footer({ showMoreDestination }) {
  return (
    <footer className="page-footer">
      {showMoreDestination && (
        <section className="more-destination-con">
          <MoreDestination />
        </section>
      )}
      <section className="row-1 sitemap-con">
        <SiteMap />
      </section>
      <section className="row-2 footer-detail-con">
        <div className="credits-con">
          Crafted with <i className="fa fa-heart" /> by{" "}
          <span className="site-pointer">copperCodes.io</span>
          {/* <span className="site-pointer" title="copperCodes.io">
            copperC😘des.io
          </span> */}
        </div>
      </section>
    </footer>
  );
}

Footer.defaultProps = {
  showMoreDestination: true
};

export default Footer;
