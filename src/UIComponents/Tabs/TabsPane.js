import React from "react";

function TabsPane({ children, active, unMountIfNotActive }) {
  let shouldUnmount = unMountIfNotActive && !active;
  return shouldUnmount ? null : (
    <div className="tab-panel" style={{ display: `${active ? "block" : "none"}` }}>
      {children}
    </div>
  );
}

export default TabsPane;
