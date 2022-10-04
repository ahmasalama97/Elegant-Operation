import React from "react";
import { Link, withRouter } from "react-router-dom";

const BottomBar = (props) => {
  let state = {
    menus: [
      {
        id: 1,
        name: "Home",
        links: "/",
      },
      {
        id: 2,
        name: "About Us",
        links: "/about-us",
      },
      {
        id: 3,
        name: "Services",
        links: "/services",
      },
      {
        id: 4,
        name: "Projects",
        links: "/project",
      },
      {
        id: 5,
        name: "Page",
        links: "/page-testimonial",
      },
      {
        id: 6,
        name: "Blog",
        links: "/blog",
      },
      {
        id: 7,
        name: "Contact",
        links: "/contact-01",
      },
    ],
  };

  return (
    <div id="bottom" className="clearfix has-spacer">
      <div id="bottom-bar-inner" className="container">
        <div className="bottom-bar-inner-wrap">
          <div className="bottom-bar-content">
            <div id="copyright">
              ©{" "}
              <span className="text">
                Copyright Elegant Operation{" "}
                <Link to="#" className="text-accent">
                  @2022
                </Link>{" "}
              </span>
            </div>
          </div>
          {/* /.bottom-bar-content */}
          <div className="bottom-bar-menu">
            <ul className="bottom-nav">
              {state.menus.map((data) => (
                <li
                  className={
                    data.name === props.data.names
                      ? "menu-item current-menu-item"
                      : "menu-item"
                  }
                  key={data.id}
                >
                  <Link
                    to={data.links}
                    onClick={() => {
                      window.location.href = data.links;
                    }}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BottomBar);
