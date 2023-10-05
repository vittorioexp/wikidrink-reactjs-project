import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-content">
        <div className="nav-header container">
          <div className="nav-brand">
            <h3>Drink Team</h3>
          </div>
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
            <VscArrowSmallLeft className="nav-icon" />
          </button>
        </div>
        <div className="container">
          <LinkComponent classLink="sidebar-links" />
        </div>
        <SocialComponent classSocial="sidebar-social" />
      </div>
    </aside>
  );
};

export default Sidebar;
