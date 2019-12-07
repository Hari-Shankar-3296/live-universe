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
  return (
    <div class="sitemap-con">
      <h2>Live Universe</h2>
      <div class="rc-footer-item">
        <Link to>Ant Design Pro</Link>
      </div>
      <div class="rc-footer-item">
        <a href="https://mobile.ant.design" target="_blank">
          Ant Design Mobile
        </a>
      </div>
      <div class="rc-footer-item">
        <a href="https://ng.ant.design" target="_blank">
          NG-ZORRO
        </a>
        <span class="rc-footer-item-separator">-</span>
        <span class="rc-footer-item-description">Ant Design of Angular</span>
      </div>
      <div class="rc-footer-item">
        <a href="https://ng.mobile.ant.design" target="_blank">
          NG-ZORRO-MOBILE
        </a>
      </div>
      <div class="rc-footer-item">
        <a href="https://vue.ant.design" target="_blank">
          Ant Design Vue
        </a>
      </div>
      <div class="rc-footer-item">
        <a href="https://landing.ant.design" target="_blank">
          Ant Design Landing
        </a>
        <span class="rc-footer-item-separator">-</span>
        <span class="rc-footer-item-description">Landing Templates</span>
      </div>
      <div class="rc-footer-item">
        <a href="https://scaffold.ant.design" target="_blank">
          Scaffolds
        </a>
        <span class="rc-footer-item-separator">-</span>
        <span class="rc-footer-item-description">Scaffold Market</span>
      </div>
      <div class="rc-footer-item">
        <a href="https://umijs.org" target="_blank">
          Umi
        </a>
        <span class="rc-footer-item-separator">-</span>
        <span class="rc-footer-item-description">React Application Framework</span>
      </div>
      <div class="rc-footer-item">
        <a href="https://dvajs.com" target="_blank">
          Dva
        </a>
        <span class="rc-footer-item-separator">-</span>
        <span class="rc-footer-item-description">Data Flow Framework</span>
      </div>
      <div class="rc-footer-item">
        <a href="https://remaxjs.org/" target="_blank">
          Remax
        </a>
        <span class="rc-footer-item-separator">-</span>
        <span class="rc-footer-item-description">Mini Program Framework</span>
      </div>
      <div class="rc-footer-item">
        <a href="https://motion.ant.design" target="_blank">
          Ant Motion
        </a>
        <span class="rc-footer-item-separator">-</span>
        <span class="rc-footer-item-description">Motion Solution</span>
      </div>
      <div class="rc-footer-item">
        <a href="/docs/spec/download">Design Resources</a>
      </div>
      <div class="rc-footer-item">
        <a href="https://ant-design.gitee.io/">China Mirror 🇨🇳</a>
      </div>
    </div>
  );
}
