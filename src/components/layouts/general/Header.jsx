import React from "react";
import { Link, withRouter } from "react-router-dom";
import menus from "../menu";

const Header = (props) => {
  return (
    <header id="site-header">
      <div id="site-header-inner" className="container">
        <div className="wrap-inner clearfix">
          <div className="mobile-button">
            <span />
          </div>
          <nav id="main-nav" className="main-nav">
            <ul id="menu-primary-menu" className="menu">
              {menus.map((data) => (
                <li
                  className={
                    data.name === props.data.names
                      ? "menu-item menu-item-has-children current-menu-item"
                      : "menu-item menu-item-has-children"
                  }
                  key={data.id}
                >
                  <Link
                    to={data?.links}
                    onClick={() => {
                      window.location.href = data.links;
                    }}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
