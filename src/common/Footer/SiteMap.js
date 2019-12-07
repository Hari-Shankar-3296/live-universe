import React from "react";
import { Link } from "react-router-dom";
import { siteMapConst } from "./siteMapConst";
import { keyList } from "../../helpers/easyConst";

export default function SiteMap() {
  return (
    <div className="sitemap">
      {keyList(siteMapConst).map(each => {
        const { title, contents } = siteMapConst[each];
        return (
          <div className="each-sitemap-con">
            <h3 className="sitemap-title">{title}</h3>
            <ul>
              {contents.map(eachContent => {
                const { title, component, target, path, url } = eachContent;
                return (
                  <li>
                    {url ? (
                      <a href={url} target={target}>
                        {component}
                        {title}
                      </a>
                    ) : (
                      <Link to={path} target={target}>
                        {component}
                        {title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
