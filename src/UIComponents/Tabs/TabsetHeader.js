import React from "react";
import { noop } from "../../helpers/easyConst";

function TabsetHeader({ childTabs, selected, onClick }) {
  return (
    <div className="tabset-header">
      {childTabs.map(each => {
        const { title, id, disabled } = each;
        return (
          <div
            key={id}
            className={`each-tab-head ${selected.includes(id) ? "active" : ""} ${
              disabled ? "disable-app" : ""
            }`}
            onClick={() => onClick(id)}
          >
            {title}
          </div>
        );
      })}
    </div>
  );
}

TabsetHeader.defaultProps = {
  childTabs: [],
  selected: [],
  onClick: noop
};

export default TabsetHeader;
