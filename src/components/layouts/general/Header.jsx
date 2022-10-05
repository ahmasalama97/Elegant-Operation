import { useContext, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { LanguageContext, LanguageConsumer } from "../../../LanguageContext";

const Header = (props) => {
  const lang = useContext(LanguageContext);

  let state = {
    menus: [
      {
        id: 1,
        name: lang.lang.nav.home,
        links: "/",
      },
      {
        id: 2,
        name: lang.lang.nav.about,
        links: "/about-us",
      },
      {
        id: 3,
        name: lang.lang.nav.hotels,
        links: "/hotels",
      },
      {
        id: 4,
        name: lang.lang.nav.contact,
        links: "/contact-us",
      },
      {
        id: 5,
        name: lang.language !== "english" ? "English" : "العربية",
        links: "/",
      },
    ],
  };
  return (
    <LanguageConsumer>
      {({ language, changeLanguage }) => (
        <header
          id="site-header"
          style={{ direction: language === "english" ? "ltr" : "rtl" }}
        >
          <div id="site-header-inner" className="container">
            <div
              className="mobile-button"
              style={{
                left: language === "arabic" && 20,
                right: language === "arabic" ? "revert" : "",
              }}
            >
              <span />
            </div>
            <div className="wrap-inner clearfix">
              <img
                src="assets/img/logo.png"
                alt="imagealt"
                width={100}
                height={34}
              />

              <nav
                id="main-nav"
                className="main-nav"
                style={{
                  left: language === "arabic" && 0,
                  direction: language === "english" ? "ltr" : "rtl",
                }}
              >
                <ul id="menu-primary-menu" className="menu">
                  {state.menus.map((data) => (
                    <li
                      className={
                        data.name === props.data.names
                          ? "menu-item menu-item-has-children current-menu-item"
                          : "menu-item menu-item-has-children"
                      }
                      onClick={() => {
                        if (data.id === 5) {
                          changeLanguage();
                        }
                      }}
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
      )}
    </LanguageConsumer>
  );
};

export default withRouter(Header);
