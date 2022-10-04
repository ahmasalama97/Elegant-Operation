import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="clearfix">
      <div id="footer-widgets" className="container">
        <div
          className="themesflat-row gutter-30"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col span_1_of_3">
            <div className="widget widget_text">
              <div className="textwidget">
                <p>
                  <img
                    src="assets/img/logo-white@2x.png"
                    alt="imagealt"
                    width={170}
                    height={34}
                  />
                </p>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={80}
                  data-mobile={60}
                  data-smobile={60}
                />
                <ul>
                  <li>
                    <div className="inner">
                      <span className="fa fa-map-marker" />
                      <span className="text">
                        Floor 4, Office 113
                        <br />
                        <span className="sl">Mecca Aziza Alsafah Tower</span>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <span className="fa fa-phone" />
                      <span className="text">CALL US : 0126530666</span>
                    </div>
                  </li>
                  <li className="margin-top-7">
                    <div className="inner">
                      <span className=" font-size-14 fa fa-envelope" />
                      <span className="text">gm@eo-sa.com</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.widget_text */}
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={0}
              data-smobile={35}
            />
          </div>

          {/* /.col */}
          <div className="col span_1_of_3">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={0}
              data-smobile={0}
            />
            <div className="widget widget_lastest">
              <h2 className="widget-title">
                <span>OUR CITIES</span>
              </h2>
              <ul className="lastest-posts data-effect clearfix">
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="text">
                    <h3>
                      <Link to="page-blog-single.html">Riyadh</Link>
                    </h3>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="text">
                    <h3>
                      <Link to="page-blog-single.html">Jeddah</Link>
                    </h3>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="text">
                    <h3>
                      <Link to="page-blog-single.html">Dammam</Link>
                    </h3>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="elm-link">
                    <Link to="page-blog-single.html" className="icon-2" />
                  </div>
                  <div className="text">
                    <h3>
                      <Link to="page-blog-single.html">
                        Al Madinah Al Munawwarah
                      </Link>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            {/* /.widget_lastest */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
