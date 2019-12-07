import React from "react";

function TabsPane({ children, active, unMountIfNotActive }) {
  let remount = unMountIfNotActive && !active;
  return remount ? null : (
    <div className="tab-panel" style={{ display: `${active ? "block" : "none"}` }}>
      {children}
    </div>
  );
}

export default TabsPane;
