import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Counter, LeaderTeam } from "../layouts/about";
import BannerTitle from "../layouts/about/banner/BannerTitle";
import {
  TitleHeading,
  IconBox,
  About,
  Overview,
  Faq,
  Partner,
} from "../layouts/home01/index";
import { Header, Footer, BottomBar, TopBar } from "../layouts/general/index";

const AboutUs = () => {
  let state = {
    headers: [
      {
        id: 1,
        logoweb: "assets/img/logo-small.png",
        names: "About Us",
      },
    ],
    banners: [
      {
        id: 1,
        links: "",
        titlelink: "",
        border: "",
        name: "About Us",
        heading: "About Us",
      },
    ],
  };

  return (
    <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
      <div id="wrapper" className="animsition">
        <div id="page" className="clearfix">
          <div id="site-header-wrap">
            <TopBar />
            {state.headers.map((data, idx) => (
              <Header data={data} key={idx} />
            ))}
          </div>
          {state.banners.map((data) => (
            <BannerTitle key={data.id} data={data} />
          ))}
          <div id="main-content" className="site-main clearfix">
            <div id="content-wrap">
              <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                  <div className="page-content">
                    <About />
                    <div className="row-tabs">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div
                              className="themesflat-spacer clearfix"
                              data-desktop={61}
                              data-mobile={60}
                              data-smobile={60}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <Overview />
                          {/* <Faq /> */}
                        </div>
                      </div>
                    </div>
                    <Partner />
                    <LeaderTeam />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          {state.headers.map((data, idx) => (
            <BottomBar data={data} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
